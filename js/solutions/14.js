// @ts-check

import { Array2d, Lib, V } from "../modules/index.js"
import { iterate } from "../modules/itertools.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`

const width = 101
const height = 103

/** @typedef {ReturnType<typeof parseInput>} InputType */

const lineParser = t.tpl`p=${"pos|vec"} v=${"vel|vec"}`
export const parseInput = t.arr(lineParser).parse

/**
 * @param {V.Vec2} pos
 * @param {V.Vec2} vel
 * @param {number} t
 */
export function calc(pos, vel, t) {
	const target = V.add(pos, V.scale(vel, t))
	return V.vec(Lib.mod(target[0], width), Lib.mod(target[1], height))
}

/**
 * @param {V.Vec2[]} positions
 */
function print(positions) {
	const arr = Array.from({ length: height }, () => Array(width).fill("."))
	for (const pos of positions) Array2d.set(arr, pos, "#")
	return arr.map((line) => line.join("")).join("\n")
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	const width = 101
	const height = 103

	const cx = (width - 1) / 2
	const cy = (height - 1) / 2

	return input
		.values()
		.map((r) => calc(r.pos, r.vel, 100))
		.filter((p) => V.x(p) !== cx && V.y(p) !== cy)
		.groupBy((pos) => {
			if (V.x(pos) < cx && V.y(pos) < cy) return 1
			if (V.x(pos) > cx && V.y(pos) < cy) return 2
			if (V.x(pos) < cx && V.y(pos) > cy) return 3
			return 4
		})
		.values()
		.map((x) => x.length)
		.multiply()
}

/**
 * @param {InputType} robots
 * @param {string} pattern
 */
export function robotsMatchesPattern(robots, pattern) {
	return print(robots.map((r) => r.pos)).includes(pattern)
}

/**
 * @param {InputType} r
 */
export function next(r) {
	return r.map(({ pos, vel }) => ({ pos: calc(pos, vel, 1), vel }))
}

export const pattern = "#".repeat(10)

/**
 * @param {InputType} input
 */
export function part2(input) {
	return iterate(input, next)
		.map((r) => r.map(({ pos }) => pos))
		.map((r) => print(r))
		.takeUntil((str) => str.includes(pattern))
		.count()
}
