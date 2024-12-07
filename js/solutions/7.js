// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.tuple([t.int(), t.arr(t.int())], ": ")).parse

/**
 * @param {InputType} input
 * @param {Array<(a: number, b: number) => number>} operators
 */
function solve(input, operators) {
	/**
	 * @param {number} testVal
	 * @param {number[]} args
	 * @returns {boolean}
	 */
	function recur(testVal, args, acc = args[0], op = 1) {
		return op === args.length
			? acc === testVal
			: operators.some((operator) => recur(testVal, args, operator(acc, args[op]), op + 1))
	}

	return input
		.values()
		.filter(([testVal, args]) => recur(testVal, args))
		.map(([testVal]) => testVal)
		.sum()
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return solve(input, [(a, b) => a + b, (a, b) => a * b])
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return solve(input, [(a, b) => a + b, (a, b) => a * b, (a, b) => +`${a}${b}`])
}
