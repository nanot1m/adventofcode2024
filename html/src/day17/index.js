// @ts-check
import "../../../js/modules/iterator-extensions.js"
import { parseInput, executeInstruction } from "../../../js/solutions/17.js"
import { Array2d, V } from "../../../js/modules/index.js"
import { scaleCanvasToPixelRatio } from "../common.js"

const canvas = document.getElementById("canvas")
if (!(canvas instanceof HTMLCanvasElement)) throw new Error("no canvas")

const ctx = canvas.getContext("2d")
if (!ctx) throw new Error("no ctx")

const INIT_WIDTH = 32
const INIT_HEIGHT = 24
const INIT_SCALE = 14

scaleCanvasToPixelRatio(ctx, INIT_WIDTH * INIT_SCALE, INIT_HEIGHT * INIT_SCALE)

const colors = {
	green: "#91cfa1",
	red: "#ea859a",
	yellow: "#fef59d",
	blue: "blue",
	black: "black",
	white: "white",
}

let raf = 0
let unsubscribe = () => {}

const popupNode = document.createElement("div")
popupNode.style.position = "fixed"
popupNode.style.zIndex = "1000"
popupNode.style.pointerEvents = "none"
popupNode.style.padding = "5px"
popupNode.style.border = "1px solid black"
popupNode.style.borderRadius = "5px"
popupNode.style.backgroundColor = "white"
popupNode.style.color = "black"
popupNode.style.display = "none"
popupNode.style.fontFamily = "monospace"
popupNode.style.fontSize = "12px"

document.body.appendChild(popupNode)

const literalToString = {
	0: "0",
	1: "1",
	2: "2",
	3: "3",
	4: "A",
	5: "B",
	6: "C",
}

const operationToString = (op, literal, computer) => {
	if (op === 0) {
		return `A = A / 2^${literalToString[literal]}`
	}
	if (op === 1) {
		return `B = B ^ ${literal}`
	}
	if (op === 2) {
		return `B = ${literalToString[literal]} % 8`
	}
	if (op === 3) {
		return `IP = A ? ${literal} : IP + 2`
	}
	if (op === 4) {
		return `B = B ^ C`
	}
	if (op === 5) {
		return `Out > ${literalToString[literal]} % 8`
	}
	if (op === 6) {
		return `B = A / 2^${literalToString[literal]}`
	}
	if (op === 7) {
		return `C = A / 2^${literalToString[literal]}`
	}
}

let isSimulating = false

const simulateBtn = document.getElementById("simulate")
if (!(simulateBtn instanceof HTMLButtonElement)) throw new Error("no simulate button")

function toggleSimulate() {
	isSimulating = !isSimulating
	if (!(simulateBtn instanceof HTMLButtonElement)) throw new Error("no simulate button")
	simulateBtn.textContent = isSimulating ? "Pause" : "Simulate"
}

function stopSimulation() {
	isSimulating = false
	if (!(simulateBtn instanceof HTMLButtonElement)) throw new Error("no simulate button")
	simulateBtn.textContent = "Done"
	simulateBtn.disabled = true
}

simulateBtn.addEventListener("click", toggleSimulate)

const output = document.getElementById("output-input")
if (!(output instanceof HTMLTextAreaElement)) throw new Error("no output")

const appendOutput = (text) => {
	output.textContent += text + "\n"

	output.scrollTop = output.scrollHeight
}

const clearOutput = () => {
	output.textContent = ""
}

/**
 * @param {string} input
 * @param {CanvasRenderingContext2D} ctx
 * @param {boolean} part2
 */
function draw(input, ctx, part2) {
	cancelAnimationFrame(raf)
	unsubscribe()

	let { a, b, c, program } = parseInput(input)
	/** @type {import("../../../js/solutions/17.js").Computer} */
	const computer = {
		a,
		b,
		c,
		ip: 0,
		output: [],
	}

	const scale = 14

	let width = 32
	let height = Math.max(24, program.length + 8)

	scaleCanvasToPixelRatio(ctx, width * scale, height * scale)

	ctx.canvas.scrollIntoView({ behavior: "smooth" })

	const drawText = (x, y, text, color) => {
		ctx.font = `${scale}px monospace`
		ctx.textAlign = "center"
		ctx.textBaseline = "middle"
		ctx.fillStyle = color
		ctx.fillText(text, x * scale + scale / 2, y * scale + scale / 2 + scale / 10)
	}

	let hoveredX = -1
	let hoveredY = -1

	const drawPopup = (x, y, text) => {
		popupNode.textContent = text
		popupNode.style.left = `${x}px`
		popupNode.style.top = `${y - 30}px`
		popupNode.style.display = "block"
	}

	const hidePopup = () => {
		popupNode.style.display = "none"
	}

	function renderText(x, y, text, color = colors.black) {
		text.split("").forEach((ch, i) => drawText(x + i, y, ch, color))
	}

	function renderComputerState(x, y, color = colors.black) {
		renderText(x, y, `A : ${computer.a}`, color)
		renderText(x, y + 1, `B : ${computer.b}`, color)
		renderText(x, y + 2, `C : ${computer.c}`, color)
		renderText(x, y + 3, `IP: ${computer.ip}`, color)
		renderText(x, y + 4, `Out: ${computer.output.join(",")}`, color)
	}

	const cx = 2

	function renderProgram(x, y, color = colors.black) {
		for (let i = 0; i < program.length; i++) {
			const op = program[i]
			renderText(
				x,
				y + i,
				`${op}`,
				i === computer.ip ? colors.green : i === computer.ip + 1 ? colors.red : color,
			)
		}
	}

	function renderIP(x, y, color = colors.black) {
		renderText(x - 1, y + computer.ip, "▸", color)
	}

	function renderOperations(x, y, color = colors.blue) {
		for (let i = 0; i < program.length; i += 2) {
			const op = program[i]
			const literal = program[i + 1]
			renderText(x + 2, y + i, operationToString(op, literal, computer), color)
		}
	}

	function render() {
		ctx.fillStyle = colors.white
		ctx.fillRect(0, 0, width * scale, height * scale)

		// draw grid
		ctx.strokeStyle = "lightgray"
		ctx.lineWidth = 1
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				ctx.strokeRect(x * scale, y * scale, scale, scale)
			}
		}

		renderComputerState(1, 1)
		renderProgram(cx, 7)
		renderIP(cx, 7)
		renderOperations(cx, 7)
	}

	render()

	function handleMouseOver(e) {
		const x = Math.floor(e.offsetX / scale)
		const y = Math.floor(e.offsetY / scale)
		hoveredX = x
		hoveredY = y
	}

	if (canvas) {
		canvas.addEventListener("mousemove", handleMouseOver)
		unsubscribe = () => canvas.removeEventListener("mousemove", handleMouseOver)
	}

	let i = 0
	function step() {
		if (computer.ip >= program.length) {
			stopSimulation()
			return
		}
		executeInstruction(program, computer)

		appendOutput("--------------------")
		appendOutput(`Step ${i++}`)
		appendOutput(`A: ${computer.a}`)
		appendOutput(`B: ${computer.b}`)
		appendOutput(`C: ${computer.c}`)
		appendOutput(`IP: ${computer.ip}`)
		appendOutput(`Output: ${computer.output.join(",")}`)
		appendOutput("--------------------")
		appendOutput("")
	}

	let lastDt = 0
	raf = requestAnimationFrame(function loop(dt) {
		if (!isSimulating) {
			lastDt = dt
			raf = requestAnimationFrame(loop)
			return
		}

		if (dt - lastDt > 1000) {
			lastDt = dt
			step()
			render()
		}

		raf = requestAnimationFrame(loop)
	})
}

const inputForm = document.getElementById("input-form")
if (!(inputForm instanceof HTMLFormElement)) throw new Error("no form")

let lastInput = ""

inputForm.addEventListener("submit", function (e) {
	e.preventDefault()
	const formData = new FormData(this)
	const input = formData.get("input")?.toString() ?? ""

	lastInput = input

	draw(input.trim(), ctx, formData.get("part2")?.toString() === "on")

	if (!(simulateBtn instanceof HTMLButtonElement)) throw new Error("no simulate button")
	simulateBtn.disabled = false

	clearOutput()
})

// @ts-ignore
inputForm.querySelector("#input").textContent = `\
Register A: 21539243
Register B: 0
Register C: 0

Program: 2,4,1,3,7,5,1,5,0,3,4,1,5,5,3,0`
