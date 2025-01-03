import { indexed } from "./iterator-extensions.js"

declare global {
	interface IteratorObject<T> {
		first(): T | undefined
		firstOrDefault(defaultValue: T): T
		last(): T | undefined
		groupsOf(size: number): IteratorObject<T[]>
		groupBy<K>(keySelector: (x: T) => K): Map<K, T[]>
		count(predicate?: (x: T) => boolean): number
		zip<U>(other: Iterable<U>): IteratorObject<[T, U]>
		indexed(): IteratorObject<[number, T]>
		windowed(size: number): IteratorObject<T[]>
		partition(predicate: (x: T) => boolean): [trues: T[], falses: T[]]
		findIndex(predicate: (x: T) => boolean): number
		indexOf(value: T): number
		skipLast(count?: number): IteratorObject<T>
		takeEvery(n: number, skipInitial?: number): IteratorObject<T>
		takeWhile(predicate: (x: T) => boolean): IteratorObject<T>
		takeUntil(predicate: (x: T) => boolean): IteratorObject<T>
		distinct<J>(mapFn?: (x: T) => J): IteratorObject<T>
		maxBy(mapFn: (x: T) => string | number): T
		minBy(mapFn: (x: T) => string | number): T
		toMap<K, V>(keySelector: (x: T) => K, valueSelector: (x: T, map: Map<K, V>) => V): Map<K, V>
		combinations(size: number): IteratorObject<T[]>
		countFrequencies(): Map<T, number>
		tap(fn: (x: T) => void): IteratorObject<T>
		chain<U>(fn: (x: Iterable<T>) => IteratorObject<U>): IteratorObject<U>
		skip(count: number): IteratorObject<T>
		toSet(): Set<T>

		// number methods
		sum(): T extends number ? number : never
		sum(mapFn: (x: T) => number): number
		product(): T extends number ? number : never
		product(mapFn: (x: T) => number): T extends number ? number : never
		min(): T extends number ? number : never
		max(): T extends number ? number : never
		lcm(): T extends number ? number : never
	}
}

export {}
