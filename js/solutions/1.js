// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.int()).parse

/**
 * @param {InputType} input
 */
export function part1(input) {
	return input.values().sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return input.values().sum()
}
