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

/**
 * @param {InputType} input
 */
export function part2(input) {
	return input
		.values()
		.flatMap((num) =>
			iterate(num, nextSecretNumber)
				.map((x) => x % 10)
				.take(2000)
				.windowed(5)
				.map(([a, b, c, d, e]) => [b - a, c - b, d - c, e - d, e])
				.map(([a, b, c, d, e]) => [a + b * 100 + c * 10 ** 4 + d * 10 ** 6, e])
				.distinct(([key]) => key),
		)
		.toMap(
			([key]) => key,
			([key, value], map) => (map.get(key) ?? 0) + value,
		)
		.values()
		.max()
}
