// @ts-check

import { isInRange } from "../modules/lib.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.arr(t.int())).parse

/**
 * @param {number[]} nums
 */
function isSafe(nums, isAsc = nums[0] < nums[1]) {
	return nums
		.values()
		.zip(nums.slice(1))
		.every(([a, b]) => (isAsc ? a <= b : a >= b) && isInRange(Math.abs(a - b), 1, 3))
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return input.values().count(isSafe)
}

/**
 * @param {number[]} nums
 * @param {number} excludeIdx
 * @returns {boolean}
 */
function isSafe2000(nums, excludeIdx = -1) {
	if (excludeIdx >= nums.length) return false
	return isSafe(nums.filter((_, i) => i !== excludeIdx)) || isSafe2000(nums, excludeIdx + 1)
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return input.values().count(isSafe2000)
}
