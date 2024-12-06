// @ts-check

import { Array2d as A, V } from "../modules/index.js"
import { iterate } from "../modules/itertools.js"
import { tuple } from "../modules/lib.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.arr(t.str(), "")).parse

const step =
	(/** @type {string[][]} */ map, obst = V.vec(-1, -1)) =>
	(/** @type {[V.Vec2, number]} */ [pos, dir], idx = 0, next = V.add(pos, V.DIRS_4[dir])) =>
		A.get(map, next) === "#" || V.eq(next, obst) ? tuple(pos, (dir + 1) % 4) : tuple(next, dir)

/**
 * @param {InputType} input
 */
export function part1(input) {
	const guardPos = A.traverse(input).find((x) => x.value === "^").pos

	return iterate([guardPos, 0], step(input))
		.takeWhile(([pos, _]) => A.contains(input, pos))
		.distinct(([pos]) => `${pos[0]},${pos[1]}`)
		.count()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const guardPos = A.traverse(input).find((x) => x.value === "^").pos

	/**
	 * @param {[pos: V.Vec2, dirIdx: number]} guard
	 * @param {V.Vec2} extraObstacle
	 */
	function canLoop(guard, extraObstacle) {
		const visited = new Set()

		for (const x of iterate(guard, step(input, extraObstacle))) {
			const key = `${x[0][0]},${x[0][1]} ${x[1]}`
			if (visited.has(key)) return true
			if (!A.contains(input, x[0])) return false
			visited.add(key)
		}
	}

	return iterate(tuple(guardPos, 0), step(input))
		.takeWhile(([pos, _]) => A.contains(input, pos))
		.distinct(([pos]) => `${pos[0]},${pos[1]}`)
		.windowed(2)
		.count(([cur, next]) => canLoop(cur, next[0]))
}
