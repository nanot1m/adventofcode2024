// @ts-check

import { bfs } from "../modules/graph.js"
import { V } from "../modules/index.js"
import { binSearch } from "../modules/lib.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.vec()).parse

const start = V.vec(0, 0)
const end = V.vec(70, 70)

/**
 * @param {V.Vec2[]} input
 */
function calc(input) {
	const corrupted = new Set(input.map(V.toString))

	const next = (/** @type {V.Vec2} */ pos) =>
		V.around(pos, V.DIRS_4).filter((p) => V.inRange(p, start, end) && !corrupted.has(V.toString(p)))

	return bfs(next, [start], V.toString).find((v) => V.eq(v.value, end))?.distance
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return calc(input.slice(0, 1024))
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const idx = binSearch(0, input.length - 1, (i) => (calc(input.slice(0, i)) ? -1 : 1))
	return V.toString(input[idx - 1])
}
