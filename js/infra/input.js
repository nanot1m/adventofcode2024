// @ts-check
import "./env.js"
import { get, request } from "node:https"
import { join } from "node:path"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { config } from "./config.js"

const SESSION = process.env.SESSION

/**
 *
 * @param {string|number} dayN
 * @param {boolean} trim
 * @returns
 */
export function readFromFileSystem(dayN, trim = true) {
	const name = join(config.inputDir, `day${dayN}.input.txt`)
	let input = readFileSync(name, "utf8")
	if (trim) input = input.trim()
	return input
}

/**
 * @template T
 */
export class HttpError extends Error {
	/**
	 * @param {number} statusCode
	 * @param {string} statusMessage
	 * @param {T} body
	 */
	constructor(statusCode, statusMessage, body) {
		super(`${statusCode} ${statusMessage}`)
		this.statusCode = statusCode
		this.statusMessage = statusMessage
		this.body = body
	}
}

/**
 *
 * @param {string|number} dayN
 * @param {boolean} trim
 * @returns
 */
export function fetchFromAoC(dayN, trim = true) {
	if (SESSION == null) {
		console.error(
			[
				'Environment variable "SESSION" is not provided.',
				"Please login at https://adventofcode.com/2024/auth/login",
				'and set value from cookie "session" as an env variable "SESSION"',
			].join(" "),
		)
		process.exit(1)
	}

	return new Promise((resolve, reject) => {
		let text = ""
		const req = get(
			`https://adventofcode.com/2024/day/${dayN}/input`,
			{ headers: { cookie: `session=${SESSION}` } },
			(res) => {
				res.on("data", (chunk) => {
					text += chunk
				})
				res.on("end", () => {
					if (res.statusCode && res.statusCode > 399) {
						reject(new HttpError(res.statusCode, res.statusMessage ?? "", text))
						return
					}
					resolve(trim ? text.trim() : text)
				})
				res.on("error", reject)
			},
		)
		req.on("error", reject)
		req.end()
	})
}

/**
 *
 * @param {string|number} dayN
 * @param {boolean} trim
 * @returns
 */
export async function cachedFetchFromAoC(dayN, trim = false) {
	const name = join(config.inputDir, `day${dayN}.input.txt`)
	if (existsSync(name)) {
		return readFromFileSystem(dayN, trim)
	}

	try {
		const input = await fetchFromAoC(dayN, trim)
		mkdirSync(config.inputDir, { recursive: true })
		writeFileSync(name, input)
		return input
	} catch (e) {
		throw e
	}
}
