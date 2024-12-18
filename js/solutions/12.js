// @ts-check

import { dfs } from "../modules/graph.js"
import { Array2d as A, V } from "../modules/index.js"
import { identity, tuple } from "../modules/lib.js"

V.enableCachedVec()

export const useExample = false

export const exampleInput = `\
AAAAAA
AAABBA
AAABBA
ABBAAA
ABBAAA
AAAAAA`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = A.parse

/**
 * @param {string[][]} input
 */
function next(input) {
	return (/** @type {V.Vec2} */ pos) =>
		V.around(pos, V.DIRS_4).filter((p) => A.get(input, p) === A.get(input, pos))
}

/**
 * @param {string[][]} input
 */
function toSegments(input) {
	const visited = new Set()

	return A.traverse(input)
		.filter((p) => !visited.has(p.pos))
		.map((p) =>
			dfs(next(input), [p.pos], identity)
				.map((x) => (visited.add(x.value), x.value))
				.toSet(),
		)
}

function perimiter(/** @type {Set<V.Vec2>} */ segment) {
	return segment
		.values()
		.flatMap((p) => V.around(p, V.DIRS_4))
		.count((p) => !segment.has(p))
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return toSegments(input)
		.map((segment) => segment.size * perimiter(segment))
		.sum()
}

/**
 * @param {Set<V.Vec2>} segment
 */
function corners(segment) {
	return segment
		.values()
		.flatMap((p) => V.DIRS_4_DIAG.map((d) => tuple(p, d)))
		.count(([p, d]) => {
			const cp = V.add(p, d) // сorner point
			const cx = V.add(p, V.vec(V.x(d), 0)) // projection of d on x axis
			const cy = V.add(p, V.vec(0, V.y(d))) // projection of d on y axis

			// ╭─────────────────────────────╮
			// │ Check outer corner          │
			// ├─────────────────────────────┤
			// │ ◤ . . . . . . . . . . . . ◥ │
			// │ . X X X X X X X X X X X X . │
			// │ . X X . . . . . . . . . X . │
			// │ . X X . . . . . ◥ . . . X . │
			// │ . X X X X X X X . . . . X . │
			// │ ◣ . . . . . X X . . . . X . │
			// │ . . . . . . X X X X X X X . │
			// │ . . . . . ◣ . . . . . . . ◢ │
			// └─────────────────────────────┘
			if (!segment.has(cx) && !segment.has(cy)) {
				return true
			}

			// ╭─────────────────────────────╮
			// │ Check inner corner          │
			// ├─────────────────────────────┤
			// │ . . . . . . . . . . . . . . │
			// │ . X X X X X X X X X X X X . │
			// │ . X X ◤ . . . . . . . ◥ X . │
			// │ . X X ◣ . . . . . . . . X . │
			// │ . X X X X X X X . . . . X . │
			// │ . . . . . ◥ X X ◣ . . ◢ X . │
			// │ . . . . . . X X X X X X X . │
			// │ . . . . . . . . . . . . . . │
			// └─────────────────────────────┘
			if (segment.has(cx) && segment.has(cy) && !segment.has(cp)) {
				return true
			}

			return false
		})
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	return toSegments(input)
		.map((segment) => segment.size * corners(segment))
		.sum()
}
