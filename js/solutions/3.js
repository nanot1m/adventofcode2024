// @ts-check
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.str().parse

/**
 * @param {InputType} input
 */
export function part1(input) {
	return input
		.matchAll(/mul\((\d+)\,(\d+)\)/g)
		.map(([, l, r]) => +l * +r)
		.sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	let on = 1
	let rs = 0
	let re = /(mul)\((\d+)\,(\d+)\)|(don't)\(\)|(do)\(\)/g
	for (let [, mu, lo, ro, de, ac] of input.matchAll(re))
		if (mu) rs += on * +lo * +ro
		else if (de) on = 0
		else if (ac) on = 1
	return rs
}
