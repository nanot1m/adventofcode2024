// @ts-check
import { performance } from "perf_hooks"
import { parse } from "path"
import { HttpError } from "./input.js"
import { colorText, getOrUpdate } from "../modules/lib.js"

const currentDay = parse(process.argv[1]).name

const WIDTH = 41

const drawLine = (/** @type {0 | 1 | 2} */ type) => {
	let [l, r] = type === 1 ? ["╭", "╮"] : type === 2 ? ["╰", "╯"] : ["├", "┤"]
	console.log(
		colorText(
			`${l}${Array(WIDTH - 2)
				.fill("─")
				.join("")}${r}`,
			"fgGreen",
			"dim",
		),
	)
}

let t = 0
const tree = () => `\
     
  ${colorText("*", "fgGreen", "bright")}  
 ${colorText("***", "fgGreen", "bright")} 
${colorText("*****", "fgGreen", "bright")}
  ${colorText("|", "fgRed", "bright")}  
  ${t % 2 ? colorText("✦", "fgYellow", "bright") : " "}  
  ${colorText("*", "fgGreen", "bright")}  
 ${colorText("***", "fgGreen", "bright")} 
${colorText("*****", "fgGreen", "bright")}
  ${colorText("|", "fgRed", "bright")}  `

const drawText = (/** @type {string} */ text, align = "left", treeIdx = -1) => {
	const textWidthExcludeColor = text.replace(/\x1b\[\d+m/g, "").length
	const padStart = align === "center" ? Math.floor((WIDTH - 4 - textWidthExcludeColor) / 2) : 2
	let padEnd = WIDTH - 4 - textWidthExcludeColor - padStart

	if (treeIdx >= 0) {
		const treeLine = tree().split("\n")[treeIdx] ?? ""
		const treeWidth = treeLine.replace(/\x1b\[\d+m/g, "").length
		padEnd -= treeWidth
		text = `${text}${" ".repeat(padEnd)}${treeLine}`
		padEnd = 0
	}

	const b = colorText("│", "fgGreen", "dim")
	const formattedTextLine = `${b} ${" ".repeat(padStart)}${text}${" ".repeat(padEnd)} ${b}`

	const snowflakes = [" ❅·", "· ❆", "·  ", " · ", "  .", ".  ", "   ", "   ", " ˙ ", "  ˙"]

	console.log(
		formattedTextLine.replaceAll("   ", () =>
			colorText(snowflakes[Math.floor(Math.random() * snowflakes.length)], "dim"),
		),
	)
}

/**
 * @param {Object} config
 * @param {(day: number) => string | Promise<string>} config.input
 * @param {(input: string) => Array<() => any>} config.solve
 * @param {number | string} [config.day]
 */
export async function solution({ input, solve, day = currentDay }) {
	await Promise.resolve()
		.then(() => {
			return input(Number(day))
		})
		.then(solve)
		.then(async (solutions) => {
			const cache = new Map()

			const cachedSolutions = solutions.map((solution, idx) => {
				const cacheKey = `${day}_${idx}`
				return async () => {
					if (cache.has(cacheKey)) return cache.get(cacheKey)
					const result = await solution()
					cache.set(cacheKey, result)
					return result
				}
			})

			const timeCache = new Map()

			async function draw() {
				console.clear()
				t++
				drawLine(1)
				drawText(colorText(`🎄 Advent of Code 2024. Day ${day} 🎄`, "fgGreen", "bright"), "center")
				drawLine()
				let treeIdx = 0
				await cachedSolutions.reduce((acc, solution, idx) => {
					let now = 0
					return acc
						.then(() => {
							now = performance.now()
						})
						.then(solution)
						.then((result) => {
							const time = getOrUpdate(timeCache, idx, () => performance.now() - now)
							drawText(
								colorText(`Part ${idx + 1} ${"⭐️".repeat(idx + 1)}`, "fgYellow", "bright"),
								"left",
								treeIdx++,
							)
							drawText("", "left", treeIdx++)
							drawText("", "left", treeIdx++)
							const lines = (result ?? "").toString().split("\n")
							if (lines.length > 1) {
								drawText("Result:", "left", treeIdx++)
								lines.forEach((/** @type {string} */ line) => drawText(line, "left", treeIdx++))
							} else {
								drawText(
									`${colorText("Result:")} ${colorText(result, "bright")} ${colorText(".", "dim")}`,
									"left",
									treeIdx++,
								)
							}
							drawText(
								colorText(`  Time: ${time.toFixed(0)}ms`, "fgGreen", "dim"),
								"left",
								treeIdx++,
							)
							drawLine(idx === solutions.length - 1 ? 2 : 0)
						})
				}, Promise.resolve())
			}

			while (true) {
				await draw()
				await new Promise((resolve) => setTimeout(resolve, 1000))
			}
		})
		.catch((e) => {
			if (e instanceof HttpError && e.statusCode === 404) {
				console.error(`Day ${day} is not available yet`)
				return
			}
			console.error(e)
		})
}
