// @ts-check

import { bfs, iteratePathBackwards } from "../modules/graph.js"
import { Array2d as A, V } from "../modules/index.js"

export const useExample = false

export const exampleInput = `\
###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = A.parse

/**
 * @param {string[][]} input
 */
function tracePath(input) {
	const start = A.traverse(input).find((v) => v.value === "S").pos
	const end = A.traverse(input).find((v) => v.value === "E").pos

	const next = (/** @type {V.Vec2} */ pos) =>
		V.around(pos, V.DIRS_4).filter((p) => A.get(input, p) !== "#")

	const endPathItem = bfs(next, [start], V.toString).find((v) => V.eq(v.value, end))

	return iteratePathBackwards(endPathItem)
		.map((v) => v.value)
		.toArray()
}

/**
 * @param {V.Vec2[]} path
 * @param {number} maxCheatLen
 * @param {number} minCheatedLen
 */
function countCheats(path, maxCheatLen, minCheatedLen) {
	let count = 0

	for (let left = 0; left < path.length - 1; left++) {
		for (let right = left + 1; right < path.length; right++) {
			const cheatLen = V.mLen(path[left], path[right])
			if (cheatLen <= maxCheatLen && right - left - cheatLen >= minCheatedLen) {
				count++
			}
		}
	}

	return count
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return countCheats(tracePath(input), 2, 100)
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return countCheats(tracePath(input), 20, 100)
}
