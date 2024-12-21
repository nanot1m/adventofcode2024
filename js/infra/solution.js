// @ts-check
import { performance } from "perf_hooks"
import { parse } from "path"
import { HttpError, submitAndLog } from "./input.js"
import { colorText } from "../modules/lib.js"

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

const tree = `\
     
  ${colorText("*", "fgGreen", "bright")}  
 ${colorText("***", "fgGreen", "bright")} 
${colorText("*****", "fgGreen", "bright")}
  ${colorText("|", "fgRed", "bright")}  
  ${colorText("✦", "fgYellow", "bright")}  
  ${colorText("*", "fgGreen", "bright")}  
 ${colorText("***", "fgGreen", "bright")} 
${colorText("*****", "fgGreen", "bright")}
  ${colorText("|", "fgRed", "bright")}  `

const drawText = (/** @type {string} */ text, align = "left", treeIdx = -1) => {
	const textWidthExcludeColor = text.replace(/\x1b\[\d+m/g, "").length
	const padStart = align === "center" ? Math.floor((WIDTH - 4 - textWidthExcludeColor) / 2) : 2
	let padEnd = WIDTH - 4 - textWidthExcludeColor - padStart

	if (treeIdx >= 0) {
		const treeLine = tree.split("\n")[treeIdx] ?? ""
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
 * @param {Record<number, boolean>} [config.submit]
 * @param {(day: number, level: number, result: string) => void} [config.submitFn]
 * @param {number | string} [config.day]
 */
export async function solution({
	input,
	solve,
	submit = { 1: false, 2: false },
	submitFn = submitAndLog,
	day = currentDay,
}) {
	await Promise.resolve()
		.then(() => {
			drawLine(1)
			drawText(colorText(`🎄 Advent of Code 2024. Day ${day} 🎄`, "fgGreen", "bright"), "center")
			drawLine()
			return input(Number(day))
		})
		.then(solve)
		.then(async (solutions) => {
			/** @type {Array<any>} */
			const results = []
			let treeIdx = 0
			await solutions.reduce((acc, solution, idx) => {
				let now = 0
				return acc
					.then(() => {
						now = performance.now()
					})
					.then(solution)
					.then((result) => {
						results.push(result)
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
							colorText(`  Time: ${(performance.now() - now).toFixed(0)}ms`, "fgGreen", "dim"),
							"left",
							treeIdx++,
						)
						drawLine(idx === solutions.length - 1 ? 2 : 0)
					})
			}, Promise.resolve())
			return results
		})
		.then((results) => {
			return results
				.map((result, idx) => [result, idx + 1])
				.filter(([, level]) => submit[level])
				.reduce(async (acc, [result, level], idx) => {
					await acc
					if (idx > 0) {
						await new Promise((resolve) => setTimeout(resolve, 5000))
					}
					return submitFn(Number(day), level, result)
				}, Promise.resolve())
		})
		.catch((e) => {
			if (e instanceof HttpError && e.statusCode === 404) {
				console.error(`Day ${day} is not available yet`)
				return
			}
			console.error(e)
		})
}
