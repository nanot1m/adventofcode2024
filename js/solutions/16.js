// @ts-check

import { dijkstra } from "../modules/graph.js"
import { Array2d, Lib, V } from "../modules/index.js"

export const useExample = false

export const exampleInput = `\
#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = Array2d.parse

/**
 * @param {string[][]} input
 * @param {V.Vec2} start
 * @param {V.Vec2} end
 */
function findOptimalRoute(input, start, end) {
	/** @param {{ pos: V.Vec2; dir: number; }} x */
	const next = (x) =>
		[
			{ value: { pos: V.add(x.pos, V.DIRS_4[x.dir]), dir: x.dir }, distance: 1 },
			{ value: { pos: x.pos, dir: Lib.mod(x.dir + 1, 4) }, distance: 1000 },
			{ value: { pos: x.pos, dir: Lib.mod(x.dir - 1, 4) }, distance: 1000 },
		].filter(({ value }) => Array2d.get(input, value.pos) !== "#")

	/** @param {{ pos: V.Vec2; dir: number; }} x */
	const toHash = (x) => `${x.pos[0]},${x.pos[1]},${x.dir}`

	const init = [{ value: { pos: start, dir: 1 }, distance: 0 }]

	return dijkstra(next, init, toHash).find((v) => V.eq(v.value.pos, end))
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	const start = Array2d.traverse(input).find((v) => v.value === "S").pos
	const end = Array2d.traverse(input).find((v) => v.value === "E").pos

	return findOptimalRoute(input, start, end).distance
}

/**
 * @typedef {import("../modules/graph.js").PathItem<T>} PathItem
 * @template T
 */

/**
 * @param {PathItem<{pos: V.Vec2, dir: number}>} item
 * @param {Set<PathItem<{pos: V.Vec2, dir: number}>>} result
 */
const getPredecessorsSet = (item, result = new Set()) => {
	result.add(item)
	for (const v of item.predecessors) {
		getPredecessorsSet(v, result)
	}
	return result
}

/**
 * @param {InputType} input
 */
export function findPathWithPredecessors(input) {
	const start = Array2d.traverse(input).find((v) => v.value === "S").pos
	const end = Array2d.traverse(input).find((v) => v.value === "E").pos
	const result = findOptimalRoute(input, start, end)
	const visited = getPredecessorsSet(result)
	return { visited, start, end }
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const { visited } = findPathWithPredecessors(input)

	return visited
		.values()
		.distinct((x) => V.toString(x.value.pos))
		.count()
}
