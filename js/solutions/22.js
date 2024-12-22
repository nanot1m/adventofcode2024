// @ts-check

import { iterate } from "../modules/itertools.js"
import { mod, tuple } from "../modules/lib.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
1
10
100
2024`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.int()).parse

/**
 * @param {number} snum
 */
function nextSecretNumber(snum) {
	snum = mod(snum ^ (snum << 0x6), 16777216)
	snum = mod(snum ^ (snum >> 0x5), 16777216)
	return mod(snum ^ (snum << 0xb), 16777216)
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return input.values().sum((num) => iterate(num, nextSecretNumber).skip(1).take(2000).last())
}

const secretToBananas = (/** @type {number} */ secret) =>
	iterate(secret, nextSecretNumber)
		.map((x) => x % 10)
		.take(2000)
		.toArray()

const bananasToMap = (/** @type {number[]} */ vals) =>
	vals
		.values()
		.windowed(2)
		.map(([a, b]) => b - a)
		.windowed(4)
		.map((w, i) => tuple(w.join(), vals[i + 4]))
		.toMap(
			([changes]) => changes,
			([changes, val], map) => map.get(changes) ?? val,
		)

/**
 * @param {InputType} input
 */
export function part2(input) {
	const changeSeqMaps = input.map(secretToBananas).map(bananasToMap)

	return changeSeqMaps[0]
		.keys()
		.map((key) => changeSeqMaps.values().sum((m) => m.get(key) ?? 0))
		.max()
}
