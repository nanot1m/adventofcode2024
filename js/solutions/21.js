// @ts-check

import { bfs } from "../modules/graph.js"
import { Array2d as A, Lib, V } from "../modules/index.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
029A
980A
179A
456A
379A`

const numericKeypad = [
	["7", "8", "9"],
	["4", "5", "6"],
	["1", "2", "3"],
	["#", "0", "A"],
]

const arrowKeypad = [
	["#", "^", "A"],
	["<", "v", ">"],
]

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.str()).parse

/**
 *
 * @param {import("../modules/graph.js").PathItem<T>} v
 * @returns {import("../modules/graph.js").PathItem<T>[][]}
 *
 * @template T
 */
function getAllPaths(v) {
	/** @type {import("../modules/graph.js").PathItem<T>[][]} */
	const allPaths = []

	function backtrack(
		/** @type {import("../modules/graph.js").PathItem<T>} */ v,
		/** @type {import("../modules/graph.js").PathItem<T>[]} */ curPath,
	) {
		if (v.predecessors.length === 0) {
			allPaths.push([v, ...curPath])
		} else {
			for (const pred of v.predecessors) {
				backtrack(pred, [v, ...curPath])
			}
		}
	}

	backtrack(v, [])

	return allPaths
}

const createPathArrows = (/** @type {import("../modules/graph.js").PathItem<any>} */ v) =>
	getAllPaths(v)
		.values()
		.map((path) =>
			path
				.values()
				.windowed(2)
				.map(([a, b]) => vecToArrow(V.sub(b.value, a.value)))
				.toArray(),
		)
		.distinct((x) => x.join(""))
		.toArray()

/**
 * @param {string[][]} keypad
 */
function getKeypadPathMap(keypad) {
	const next = (/** @type {V.Vec2} */ pos) =>
		V.around(pos, V.DIRS_4).filter((p) => A.contains(keypad, p) && A.get(keypad, p) !== "#")

	return A.traverse(keypad)
		.filter((v) => v.value !== "#")
		.map((v) => {
			const pathMap = bfs(next, [v.pos], V.toString)
				.toArray()
				.values()
				.toMap(
					(v) => A.get(keypad, v.value),
					(v) => createPathArrows(v).map((x) => x.concat("A").join("")),
				)
			return Lib.tuple(v.value, pathMap)
		})
		.toMap(
			([key]) => key,
			([, pathMap]) => pathMap,
		)
}

/** @type {Record<number, Record<number, string>>} */
const vecToArrowMap = {
	0: { "-1": "^", 1: "v" },
	1: { 0: ">" },
	"-1": { 0: "<" },
}

const vecToArrow = (/** @type {V.Vec2} */ vec) => vecToArrowMap[vec[0]][vec[1]]

const nKeyPaths = getKeypadPathMap(numericKeypad)
const aKeyPaths = getKeypadPathMap(arrowKeypad)

/**
 *
 * @param {string} path
 * @param {Map<string, Map<string, string[]>>} keyPad
 * @returns {string[]}
 */
function getAllPossiblePaths(path, keyPad) {
	/**
	 * @type {string[]}
	 */
	const allPaths = []

	/**
	 * @param {string} curPos
	 * @param {number} idx
	 * @param {string} curPath
	 */
	function backtrack(curPos, idx, curPath) {
		if (idx === path.length) {
			allPaths.push(curPath)
		} else {
			const char = path[idx]
			const nextPaths = keyPad.get(curPos).get(char)

			for (const nextPath of nextPaths) {
				backtrack(char, idx + 1, curPath.concat(nextPath))
			}
		}
	}

	backtrack("A", 0, "")

	return allPaths
}

/**
 * @param {string} path
 * @param {number} maxInceptionLevel
 */
function findMinLen(path, maxInceptionLevel) {
	const cache = new Map()

	/**
	 * @param {string} path
	 * @param {number} depth
	 * @returns {number}
	 */
	function calculateMinPathLength(path, depth) {
		if (depth === 0) {
			return path.length
		}

		const cacheKey = `${path},${depth}`
		if (cache.has(cacheKey)) {
			return cache.get(cacheKey)
		}

		// Split the path into segments from A to A
		// and solve each segment separately
		const splitPathSegments = path
			.slice(0, -1)
			.split("A")
			.map((x) => x.concat("A"))

		if (splitPathSegments.length === 1) {
			const result = getAllPossiblePaths(splitPathSegments[0], aKeyPaths)
				.values()
				.map((x) => calculateMinPathLength(x, depth - 1))
				.min()
			cache.set(cacheKey, result)
			return result
		}

		const result = splitPathSegments.map((x) => calculateMinPathLength(x, depth)).reduce(Lib.add, 0)
		cache.set(cacheKey, result)
		return result
	}

	return calculateMinPathLength(path, maxInceptionLevel)
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	const maxInceptionLevel = 2

	return input
		.values()
		.map((x) => {
			const r = getAllPossiblePaths(x, nKeyPaths)
				.values()
				.map((x) => findMinLen(x, maxInceptionLevel))
				.min()

			return r * parseInt(x, 10)
		})
		.sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const maxInceptionLevel = 25

	return input
		.values()
		.map((x) => {
			const r = getAllPossiblePaths(x, nKeyPaths)
				.values()
				.map((x) => findMinLen(x, maxInceptionLevel))
				.min()

			return r * parseInt(x, 10)
		})
		.sum()
}
