// @ts-check

import { mod } from "../modules/lib.js"
import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
Register A: 2024
Register B: 0
Register C: 0

Program: 0,3,5,4,3,0`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.tpl`\
Register A: ${"a|int"}
Register B: ${"b|int"}
Register C: ${"c|int"}

Program: ${"program|int[]"}`.parse

/**
 * @typedef {Object} Computer
 * @property {number} ip
 * @property {number} a
 * @property {number} b
 * @property {number} c
 * @property {number[]} output
 */

/**
 * @type {Record<number, (p: Computer) => number>}
 */
export const operands = {
	0: () => 0,
	1: () => 1,
	2: () => 2,
	3: () => 3,
	4: (p) => p.a,
	5: (p) => p.b,
	6: (p) => p.c,
}

/**
 * @type {Record<number, (computer: Computer, literal: number) => void>}
 */
export const operations = {
	0: (computer, literal) => {
		const operand = operands[literal](computer)
		computer.a = Math.floor(computer.a / 2 ** operand)
		computer.ip += 2
	},
	1: (computer, literal) => {
		computer.b = computer.b ^ literal
		computer.ip += 2
	},
	2: (computer, literal) => {
		const operand = operands[literal](computer)
		computer.b = mod(operand, 8)
		computer.ip += 2
	},
	3: (computer, literal) => {
		computer.ip = computer.a !== 0 ? literal : computer.ip + 2
	},
	4: (computer, literal) => {
		computer.b = computer.b ^ computer.c
		computer.ip += 2
	},
	5: (computer, literal) => {
		const operand = operands[literal](computer)
		computer.output.push(mod(operand, 8))
		computer.ip += 2
	},
	6: (computer, literal) => {
		const operand = operands[literal](computer)
		computer.b = Math.floor(computer.a / 2 ** operand)
		computer.ip += 2
	},
	7: (computer, literal) => {
		const operand = operands[literal](computer)
		computer.c = Math.floor(computer.a / 2 ** operand)
		computer.ip += 2
	},
}

/**
 * @param {number[]} program
 * @param {Computer} computer
 */
export function executeInstruction(program, computer) {
	const operator = program[computer.ip]
	const literal = program[computer.ip + 1]

	operations[operator](computer, literal)
}

/**
 * @param {InputType} input
 */
export function part1({ a, b, c, program }) {
	/** @type {Computer} */
	const computer = { ip: 0, a, b, c, output: [] }

	while (computer.ip < program.length) {
		executeInstruction(program, computer)
	}

	return computer.output.join(",")
}

/**
 * This solution specific to the input
 * @param {InputType} input
 */
export function part2({ b, c, program }) {
	let a = 0

	for (let i = 1; i <= program.length; i++) {
		const tail = program.slice(-i).join(",")

		while (true) {
			/** @type {Computer} */
			const computer = { ip: 0, a, b, c, output: [] }

			while (computer.ip < program.length) {
				executeInstruction(program, computer)
			}

			if (computer.output.join(",") === tail) {
				if (computer.output.length === program.length) {
					return a
				}
				break
			}

			a++
		}

		a *= 8
	}
}
