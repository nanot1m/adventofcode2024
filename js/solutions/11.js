// @ts-check

import { Lib } from "../modules/index.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
125 17`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.int()).parse

/**
 * @param {number} stone
 */
function applyRule(stone) {
	if (stone === 0) return [1]
	const str = String(stone)
	if (str.length % 2 === 0) {
		const half = str.length / 2
		return [Number(str.slice(0, half)), Number(str.slice(half))]
	}
	return [stone * 2024]
}

const cache = new Map()
/**
 * @param {number} stone
 * @param {number} n
 * @returns {number}
 */
function countNBlinks(stone, n, key = `${stone},${n}`) {
	if (n === 0) return 1
	return Lib.getOrUpdate(cache, key, () =>
		applyRule(stone)
			.map((nStone) => countNBlinks(nStone, n - 1))
			.reduce(Lib.add),
	)
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return input.map((stone) => countNBlinks(stone, 25)).reduce(Lib.add)
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return input.map((stone) => countNBlinks(stone, 75)).reduce(Lib.add)
}
