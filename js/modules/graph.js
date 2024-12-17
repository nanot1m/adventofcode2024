// @ts-check

import { PriorityQueue } from "./priority-queue.js"

/**
 * @template T
 *
 * @typedef {Object} PathItem
 * @property {number} distance
 * @property {T} value
 * @property {PathItem<T>} [parent]
 * @property {PathItem<T>[]} [predecessors]
 */

/**
 * @template T
 *
 * @param {(value: T, step: PathItem<T>) => Iterable<T>} getNext
 * @param {T} start
 * @param {(value: T) => unknown} [valToHash]
 *
 * @returns {IteratorObject<PathItem<T>>}
 */
export function* dfs(getNext, start, valToHash) {
	const visited = new Set()
	const queue = /** @type {PathItem<T>[]} */ ([{ distance: 0, value: start, parent: null }])
	if (valToHash) {
		visited.add(valToHash(start))
	}

	while (queue.length) {
		const current = queue.pop()
		yield current

		for (const next of getNext(current.value, current)) {
			if (valToHash) {
				const hash = valToHash(next)
				if (!visited.has(hash)) {
					visited.add(hash)
					queue.push({ distance: current.distance + 1, value: next, parent: current })
				}
			} else {
				queue.push({ distance: current.distance + 1, value: next, parent: current })
			}
		}
	}
}

/**
 * @template T
 *
 * @param {(value: T, step: PathItem<T>) => Iterable<T>} getNext
 * @param {T[]} starts
 * @param {(value: T) => unknown} [valToHash]
 *
 * @returns {IteratorObject<PathItem<T>>}
 */
export function* bfs(getNext, starts, valToHash) {
	const visited = new Set()

	/** @type {PathItem<T>[]} */
	const queue = []

	for (const start of starts) {
		queue.push({ distance: 0, value: start, parent: null })
		if (valToHash) {
			visited.add(valToHash(start))
		}
	}

	while (queue.length) {
		const current = queue.shift()
		yield current

		for (const next of getNext(current.value, current)) {
			if (valToHash) {
				const hash = valToHash(next)
				if (!visited.has(hash)) {
					visited.add(hash)
					queue.push({ distance: current.distance + 1, value: next, parent: current })
				}
			} else {
				queue.push({ distance: current.distance + 1, value: next, parent: current })
			}
		}
	}
}

/**
 * @template T
 *
 * @param {(value: T, step: PathItem<T>) => Iterable<{value: T, distance: number}>} getNext
 * @param {{value: T, distance: number}[]} starts
 * @param {(value: T) => unknown} [valToHash]
 */
export function* dijkstra(getNext, starts, valToHash) {
	/** @type {Map<unknown, PathItem<T>>} */
	const visited = new Map()

	/** @type {PriorityQueue<PathItem<T>>} */
	const queue = new PriorityQueue((a, b) => a.distance - b.distance)

	for (const { value, distance } of starts) {
		/** @type {PathItem<T>} */
		const item = { distance, value, parent: null, predecessors: [] }
		queue.push(item)
		if (valToHash) {
			visited.set(valToHash(value), item)
		}
	}

	while (queue.length) {
		const current = queue.pop()
		yield current

		for (const { value, distance: d } of getNext(current.value, current)) {
			const distance = current.distance + d
			if (valToHash) {
				const hash = valToHash(value)
				if (visited.has(hash)) {
					const item = visited.get(hash)
					if (distance < item.distance) {
						item.distance = distance
						item.parent = current
						queue.push(item)
						item.predecessors = [current]
					} else if (distance === item.distance) {
						item.predecessors.push(current)
					}
				} else {
					/** @type {PathItem<T>} */
					const item = {
						distance: distance,
						value: value,
						parent: current,
						predecessors: [current],
					}
					visited.set(hash, item)
					queue.push(item)
				}
			} else {
				queue.push({
					distance: distance,
					value: value,
					parent: current,
					predecessors: [current],
				})
			}
		}
	}
}