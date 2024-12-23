// @ts-check

import { t } from "../modules/parser.js"

export const useExample = false

export const exampleInput = `\
kh-tc
qp-kh
de-cg
ka-co
yn-aq
qp-ub
cg-tb
vc-aq
tb-ka
wh-tc
yn-cg
kh-ub
ta-co
de-co
tc-td
tb-wq
wh-td
ta-ka
td-qp
aq-cg
wq-ub
ub-vc
de-ta
wq-aq
wq-vc
wh-yn
ka-de
kh-ta
co-tc
wh-qp
tb-vc
td-yn`

/** @typedef {ReturnType<typeof parseInput>} InputType */

export const parseInput = t.arr(t.tuple([t.str(), t.str()], "-")).parse

/**
 * @param {InputType} input
 */
export function part1(input) {
	/** @type {Map<string, Set<string>>} */
	const network = new Map()
	for (let [a, b] of input) {
		if (!network.has(a)) network.set(a, new Set())
		if (!network.has(b)) network.set(b, new Set())
		network.get(a).add(b)
		network.get(b).add(a)
	}

	const sets = new Set()

	const keys = network.keys().toArray().sort()

	for (let i = 0; i < keys.length - 2; i++)
		for (let j = i + 1; j < keys.length - 1; j++)
			for (let k = j + 1; k < keys.length; k++) {
				const [a, b, c] = [keys[i], keys[j], keys[k]]
				if (
					[a, b, c].some((x) => x.startsWith("t")) &&
					network.get(a).has(b) &&
					network.get(b).has(c) &&
					network.get(c).has(a)
				) {
					sets.add(`${a},${b},${c}`)
				}
			}

	return sets.size
}

/**
 * @param {InputType} input
 */
export function part2(input) {
	/** @type {Map<string, Set<string>>} */
	const network = new Map()
	for (let [a, b] of input) {
		if (!network.has(a)) network.set(a, new Set())
		if (!network.has(b)) network.set(b, new Set())
		network.get(a).add(b)
		network.get(b).add(a)
	}

	/**
	 * @param {Set<string>} clique
	 * @param {Set<string>} candidates
	 * @param {Set<string>} excluded
	 *
	 * @returns {Set<string>}
	 */
	function bronKerbosh(clique, candidates, excluded) {
		if (candidates.size === 0 && excluded.size === 0) {
			return clique
		}

		let maxClique = new Set()
		let pivot = candidates.union(excluded).values().next().value
		let pivotNeighbors = network.get(pivot)

		for (let vertex of candidates.difference(pivotNeighbors)) {
			const newClique = new Set(clique)
			newClique.add(vertex)
			const newCandidates = candidates.intersection(network.get(vertex))
			const newExcluded = excluded.intersection(network.get(vertex))
			const result = bronKerbosh(newClique, newCandidates, newExcluded)
			if (result.size > maxClique.size) maxClique = result
			candidates.delete(vertex)
			excluded.add(vertex)
		}

		return maxClique
	}

	return bronKerbosh(new Set(), network.keys().toSet(), new Set())
		.values()
		.toArray()
		.sort()
		.join(",")
}
