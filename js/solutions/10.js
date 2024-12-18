// @ts-check

import { dfs } from "../modules/graph.js"
import { Array2d as A, V } from "../modules/index.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.arr(t.int(), "")).parse

/**
 * @param {number[][]} input
 */
function next(input) {
	return (/** @type {V.Vec2} */ v) =>
		V.DIRS_4.map((x) => V.add(x, v)).filter((n) => A.get(input, n) - A.get(input, v) === 1)
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return A.traverse(input)
		.filter((x) => x.value === 0)
		.flatMap((s) => dfs(next(input), [s.pos], V.toString))
		.count((x) => A.get(input, x.value) === 9)
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return A.traverse(input)
		.filter((x) => x.value === 0)
		.flatMap((s) => dfs(next(input), [s.pos]))
		.count((x) => A.get(input, x.value) === 9)
}
