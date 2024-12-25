// @ts-check

import { Array2d as A } from "../modules/index.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
#####
.####
.####
.####
.#.#.
.#...
.....

#####
##.##
.#.##
...##
...#.
...#.
.....

.....
#....
#....
#...#
#.#.#
#.###
#####

.....
.....
#.#..
###..
###.#
###.#
#####

.....
.....
.....
#....
#.#..
#.#.#
#####`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(A).parse

/**
 * @param {InputType} input
 */
export function part1(input) {
	const [locks, pins] = input
		.values()
		.partition((x) => x[0].every((x) => x === "#"))
		.map((g) => g.map((x) => A.transpose(x).map((x) => x.values().count((x) => x === "#"))))

	return locks
		.values()
		.map((l) => pins.values().count((r) => l.every((x, i) => x + r[i] <= 7)))
		.sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return 0
}
