// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
x00: 0
x01: 1
x02: 0
x03: 1
x04: 0
x05: 1
y00: 0
y01: 0
y02: 1
y03: 1
y04: 0
y05: 1

x00 AND y00 -> z05
x01 AND y01 -> z02
x02 AND y02 -> z01
x03 AND y03 -> z03
x04 AND y04 -> z04
x05 AND y05 -> z00`

/** @typedef {ReturnType<typeof parseInput>} InputType */

const line1Parser = t.tpl`${"wire|str"}: ${"val|int"}`

const line2Parser = t.tpl`${"left|str"} ${"op|str"} ${"right|str"} -> ${"out|str"}`.map((x) => ({
	...x,
	op: t.enum("AND", "OR", "XOR").parse(x.op),
}))

export const parseInput = t.tuple([t.arr(line1Parser), t.arr(line2Parser)]).parse

/**
 * @param {InputType[1][number]} gate
 * @param {Map<string, () => number>} map
 */
function calc(gate, map) {
	switch (gate.op) {
		case "AND":
			return map.get(gate.left)() & map.get(gate.right)()
		case "OR":
			return map.get(gate.left)() | map.get(gate.right)()
		case "XOR":
			return map.get(gate.left)() ^ map.get(gate.right)()
	}
}

/**
 * @param {InputType} input
 */
export function part1([wires, gates]) {
	const gatesGetters = gates.values().toMap(
		(x) => x.out,
		(x, map) => () => calc(x, map),
	)

	wires.forEach((wire) => {
		gatesGetters.set(wire.wire, () => wire.val)
	})

	return gatesGetters
		.entries()
		.filter(([key]) => key.startsWith("z"))
		.sum(([key, val]) => val() * 2 ** +key.slice(1))
}

/**
 * @param {InputType} input
 */
export function part2([wires, gates]) {
	const wiresMap = wires.values().toMap(
		(x) => x.wire,
		(x) => x.val,
	)

	const gatesGetters = gates.values().toMap(
		(x) => x.out,
		(x, map) => () => calc(x, map),
	)

	wires.forEach((wire) => {
		gatesGetters.set(wire.wire, () => wiresMap.get(wire.wire))
	})

	const xBits = wires
		.map((x) => x.wire)
		.filter((key) => key.startsWith("x"))
		.sort()
	const yBits = xBits.map((x) => x.replace("x", "y"))
	const zBits = xBits.map((x) => x.replace("x", "z"))

	const getXNum = () =>
		xBits
			.values()
			.map((key) => gatesGetters.get(key)())
			.map((x, i) => x * 2 ** i)
			.sum()
	const getYNum = () =>
		yBits
			.values()
			.map((key) => gatesGetters.get(key)())
			.map((x, i) => x * 2 ** i)
			.sum()
	const getZNum = () =>
		zBits
			.values()
			.map((key) => gatesGetters.get(key)())
			.map((x, i) => x * 2 ** i)
			.sum()
	const getTNum = () => getXNum() + getYNum()

	// const xNum = getXNum()
	// const yNum = getYNum()
	const zNum = getZNum()
	const tNum = getTNum()

	// console.log("x:", xNum.toString(2).padStart(46, "0"))
	// console.log("y:", yNum.toString(2).padStart(46, "0"))
	// console.log("z:", zNum.toString(2).padStart(46, "0"))
	// console.log("t:", tNum.toString(2).padStart(46, "0"))

	const zNumBits = zNum.toString(2).split("").reverse()
	const tNumBits = tNum.toString(2).split("").reverse()

	for (let i = 0; i < zNumBits.length; i++) {
		if (zNumBits[i] !== tNumBits[i]) {
			console.log(zBits[i], "is incorrect")
			break
		}
	}

	// z05 -> tst
	// z11 -> sps
	// z23 -> frt
	// cgh -> pmd

	return ["z05", "z11", "z23", "cgh", "tst", "sps", "frt", "pmd"].sort().join()
}
