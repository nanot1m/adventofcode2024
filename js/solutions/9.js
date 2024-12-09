// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
2333133121414131402`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.int(), "").parse

/**
 * @param {number[]} input
 */
function createSimpleMemArray(input) {
	return input
		.values()
		.groupsOf(2)
		.flatMap(([size, space], id) => [...Array(size).fill(id), ...Array(space ?? 0).fill(-1)])
		.toArray()
}

/**
 * @param {number[]} mem
 */
function compactSimpleMem(mem) {
	let left = 0
	let right = mem.length - 1
	while (left <= right) {
		if (mem[left] === -1) {
			mem[left] = mem[right]
			mem[right] = -1
			while (mem[right] === -1) right--
		}
		left++
	}
	return mem
}

/**
 * @param {number[]} mem
 */
function calcSimpleMemChecksum(mem) {
	return mem
		.values()
		.map((x, idx) => Math.max(x, 0) * idx)
		.sum()
}

/**
 * @param {InputType} input
 */
export function part1(input) {
	let $
	$ = createSimpleMemArray(input)
	$ = compactSimpleMem($)
	$ = calcSimpleMemChecksum($)
	return $
}

/**
 * @typedef {{ space: number; files: { id: number; size: number }[] }[]} MemType
 */

/**
 * @param {number[]} input
 * @returns {MemType}
 */
function createMemArray(input) {
	return input
		.values()
		.groupsOf(2)
		.flatMap(([size, space], id) => [
			{ space: 0, files: [{ id, size }] },
			{ space: space ?? 0, files: [] },
		])
		.toArray()
}

/**
 * @param {MemType} mem
 */
function compactMem(mem) {
	let right = mem.length
	while (right-- > 0) {
		let fileIdx = mem[right].files.length
		while (fileIdx-- > 0) {
			const file = mem[right].files[fileIdx]
			for (let left = 0; left < right; left++) {
				if (mem[left].space >= file.size) {
					mem[left].space -= file.size
					mem[left].files.push(file)
					mem[right].space += file.size
					mem[right].files.splice(fileIdx, 1)
					break
				}
			}
		}
	}
	return mem
}

/**
 * @param {MemType} mem
 */
function calcMemChecksum(mem) {
	return mem
		.values()
		.flatMap((x) => [
			...x.files.flatMap((x) => Array(x.size).fill(x.id)),
			...Array(x.space).fill(0),
		])
		.map((x, idx) => x * idx)
		.sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	let $
	$ = createMemArray(input)
	$ = compactMem($)
	$ = calcMemChecksum($)
	return $
}
