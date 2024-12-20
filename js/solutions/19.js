// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.tuple([t.set(t.str()), t.arr(t.str())]).parse

/**
 * @param {string} pattern
 * @param {Set<string>} towelSet
 * @param {number} patternMaxLen
 *
 */
function calc(pattern, towelSet, patternMaxLen) {
	const dp = Array(pattern.length + 1).fill(0)

	dp[0] = 1

	for (let i = 1; i <= pattern.length; i++)
		for (let j = Math.max(0, i - patternMaxLen); j < i; j++)
			if (towelSet.has(pattern.slice(j, i))) dp[i] += dp[j]

	return dp[pattern.length]
}

/**
 * @param {InputType} input
 */
export function part1([patterns, designs]) {
	const patternMaxLen = patterns
		.values()
		.map((pattern) => pattern.length)
		.max()

	return designs.values().count((pattern) => calc(pattern, patterns, patternMaxLen))
}

/**
 * @param {InputType} input
 */
export function part2([patterns, designs]) {
	const patternMaxLen = patterns
		.values()
		.map((pattern) => pattern.length)
		.max()

	return designs.values().sum((pattern) => calc(pattern, patterns, patternMaxLen))
}
