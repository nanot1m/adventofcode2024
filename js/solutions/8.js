// @ts-check

import { Array2d as A, V } from "../modules/index.js"
import { range } from "../modules/itertools.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.arr(t.str(), "")).parse

/**
 * @param {InputType} input
 * @param {(a: V.Vec2, b: V.Vec2, d: V.Vec2) => Iterable<V.Vec2>} getAntiNodes
 */
function solve(input, getAntiNodes) {
	return A.traverse(input)
		.filter((x) => x.value !== ".")
		.groupBy((x) => x.value)
		.values()
		.flatMap((group) => group.values().combinations(2))
		.flatMap(([a, b]) => getAntiNodes(a.pos, b.pos, V.sub(b.pos, a.pos)))
		.distinct(([x, y]) => `${x},${y}`)
		.count((p) => A.contains(input, p))
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return solve(input, (a, b, d) => [V.sub(a, d), V.add(b, d)])
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return solve(input, (a, b, d) => range(-50, 50).map((i) => V.add(a, V.scale(d, i))))
}
