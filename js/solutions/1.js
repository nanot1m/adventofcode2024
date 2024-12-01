// @ts-check

import { transpose } from "../modules/array2d.js"
import { compareAsc } from "../modules/lib.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.arr(t.int())).map(transpose).parse

/**
 * @param {InputType} input
 */
export function part1(input) {
	const [leftArr, rightArr] = input.map((arr) => arr.sort(compareAsc))
	return leftArr
		.values()
		.zip(rightArr)
		.map(([a, b]) => Math.abs(a - b))
		.sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const [leftArr, rightArr] = input
	return leftArr
		.values()
		.map((n) => rightArr.values().count((m) => m === n) * n)
		.sum()
}
