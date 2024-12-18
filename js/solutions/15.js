// @ts-check

import { dijkstra } from "../modules/graph.js"
import { Array2d, V } from "../modules/index.js"
import { tuple } from "../modules/lib.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.tuple([
	Array2d,
	t
		.str()
		.map((l) => l.replaceAll("\n", ""))
		.map((l) => l.split("").map(V.asArrow)),
]).parse

const isBox = (/** @type {string} */ c) => c === "O" || c === "[" || c === "]"

const getBoxPositions = (/** @type {string[][]} */ map, /** @type {V.Vec2} */ pos) =>
	Array2d.get(map, pos) === "["
		? [pos, V.add(pos, V.DIR_TO_VEC.R)] // []
		: Array2d.get(map, pos) === "]"
		? [V.add(pos, V.DIR_TO_VEC.L), pos] // []
		: [pos] // O

const canMove = (
	/** @type {string[][]} */ map,
	/** @type {V.Vec2} */ pos,
	/** @type {V.Vec2} */ dir,
) => Array2d.get(map, V.add(pos, dir)) !== "#"

/**
 * @param {string[][]} map
 * @param {V.Vec2} pos
 * @param {V.Arrow} arrow
 */
function makeMove(map, pos, arrow) {
	const dir = V.fromArrow(arrow)
	const targetPos = V.add(pos, dir)

	if (Array2d.get(map, targetPos) === "#") {
		return pos
	}

	if (Array2d.get(map, targetPos) === ".") {
		return targetPos
	}

	// targetPos is a box
	const allBoxes = dijkstra(
		(pos) =>
			[V.add(pos, dir)]
				.filter((x) => isBox(Array2d.get(map, x)))
				.flatMap((x) => getBoxPositions(map, x))
				.map((x) => ({ value: x, distance: V.mLen(pos, x) })),
		getBoxPositions(map, targetPos).map((x) => ({ value: x, distance: V.mLen(targetPos, x) })),
		V.toString,
	)
		.map((x) => x.value)
		.toArray()
		.reverse()

	if (allBoxes.some((box) => !canMove(map, box, dir))) return pos

	for (const box of allBoxes) {
		Array2d.set(map, V.add(box, dir), Array2d.get(map, box))
		Array2d.set(map, box, ".")
	}

	return targetPos
}

/**
 *
 * @param {string[][]} map
 * @param {V.Arrow[]} arrows
 */
export function* moves(map, arrows) {
	const start = Array2d.traverse(map).find((p) => p.value === "@").pos
	Array2d.set(map, start, ".")

	let cur = start
	yield tuple(cur, map, "start")

	for (const arrow of arrows) {
		cur = makeMove(map, cur, arrow)
		yield tuple(cur, map, arrow)
	}
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	const [map, arrows] = input

	const lst = moves(map, arrows).last()

	return Array2d.traverse(lst[1])
		.filter((p) => p.value === "O")
		.map((p) => V.y(p.pos) * 100 + V.x(p.pos))
		.sum()
}

/**
 * @param {string[][]} map
 */
export function widenMap(map) {
	return map.map((row) =>
		row.flatMap((cell) => {
			return cell === "#" ? ["#", "#"] : cell === "O" ? ["[", "]"] : [cell, "."]
		}),
	)
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const [map, arrows] = input
	const wideMap = widenMap(map)

	const lst = moves(wideMap, arrows).last()

	return Array2d.traverse(lst[1])
		.filter((p) => p.value === "[")
		.map((p) => V.y(p.pos) * 100 + V.x(p.pos))
		.sum()
}
