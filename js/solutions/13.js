// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`

const blockParser = t.tpl`\
Button A: X+${"ax|int"}, Y+${"ay|int"}
Button B: X+${"bx|int"}, Y+${"by|int"}
Prize: X=${"px|int"}, Y=${"py|int"}\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(blockParser).parse

/**
 * @param {InputType[number]} block
 * @returns {number}
 */
function calc({ ax, ay, bx, by, px, py }) {
	/*
	a * ax + b * bx = px
	a * ay + b * by = py
	*/

	const det = ax * by - ay * bx
	const detX = px * by - py * bx
	const detY = ax * py - ay * px

	const a = detX / det
	const b = detY / det

	if (a % 1 !== 0 || b % 1 !== 0) {
		return Infinity
	}

	return Math.abs(a) * 3 + Math.abs(b)
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	return input.values().map(calc).filter(Number.isFinite).sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const toAdd = 10_000_000_000_000

	return input
		.values()
		.map((x) => ({ ...x, px: x.px + toAdd, py: x.py + toAdd }))
		.map(calc)
		.filter(Number.isFinite)
		.sum()
}
