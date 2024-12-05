// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47\
`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.tuple([t.str(), t.arr(t.arr(t.int(), ","))]).parse

/**
 * @param {InputType} input
 */
export function part1(input) {
	const [orderingRules, updates] = input

	return updates
		.values()
		.filter((update) =>
			update
				.values()
				.windowed(2)
				.every(([a, b]) => orderingRules.includes(`${a}|${b}`)),
		)
		.map((update) => update[Math.floor(update.length / 2)])
		.sum()
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	const [orderingRules, updates] = input

	return updates
		.values()
		.filter((update) =>
			update
				.values()
				.windowed(2)
				.some(([a, b]) => !orderingRules.includes(`${a}|${b}`)),
		)
		.map((update) => update.sort((a, b) => (orderingRules.includes(`${a}|${b}`) ? -1 : 1)))
		.map((update) => update[Math.floor(update.length / 2)])
		.sum()
}
