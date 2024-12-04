// @ts-check

import { V, Array2d as A } from "../modules/index.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.arr(t.str(), "")).parse

/**
 * @param {InputType} input
 */
export function part1(input) {
	const isXmasPos = (/** @type {V.Vec2} */ pos, /** @type {V.Vec2} */ dir) =>
		[..."XMAS"].every((ch, i) => A.get(input, V.add(V.scale(dir, i), pos)) === ch)

	return A.traverse(input)
		.flatMap((v) => V.DIRS_8.map((dir) => +isXmasPos(v.pos, dir)))
		.sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const isMasPos = (/** @type {V.Vec2} */ pos, /** @type {V.Vec2} */ dir) =>
		[..."MAS"].every((ch, i) => A.get(input, V.add(V.scale(dir, i - 1), pos)) === ch)

	return A.traverse(input)
		.map((v) => V.DIRS_4_DIAG.map((dir) => isMasPos(v.pos, dir)).filter(Boolean))
		.count((xs) => xs.length >= 2)
}
