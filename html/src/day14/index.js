// @ts-check
import "../../../js/modules/iterator-extensions.js"
import { parseInput, calc, robotsMatchesPattern, pattern } from "../../../js/solutions/14.js"
import { V } from "../../../js/modules/index.js"
import { scaleCanvasToPixelRatio } from "../common.js"

const canvas = document.getElementById("canvas")
if (!(canvas instanceof HTMLCanvasElement)) throw new Error("no canvas")

const ctx = canvas.getContext("2d")
if (!ctx) throw new Error("no ctx")

const width = 101
const height = 103

const scale = 3 // Math.min(10, Math.max(2, 200 / width))

const cols = 1

scaleCanvasToPixelRatio(ctx, cols * width * scale, height * scale)

let raf = 0
let unsubscribe = () => {}
/**
 * @param {string} input
 * @param {CanvasRenderingContext2D} ctx
 */
function draw(input, ctx) {
	cancelAnimationFrame(raf)
	unsubscribe()
	const robots = parseInput(input)

	scaleCanvasToPixelRatio(ctx, width * scale, height * scale)

	ctx.canvas.scrollIntoView({ behavior: "smooth" })

	const drawRobots = (/** @type {{ pos: V.Vec2; vel: V.Vec2; }[]} */ robots) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		ctx.fillStyle = "white"
		ctx.fillRect(0, 0, width * scale, height * scale)

		for (const robot of robots) {
			ctx.fillStyle = "#becfaa"
			ctx.beginPath()
			ctx.arc(robot.pos[0] * scale, robot.pos[1] * scale, scale / 2, 0, Math.PI * 2)
			ctx.closePath()
			ctx.fill()
		}
	}

	const timeInput = document.getElementById("time")
	const timeOutput = document.getElementById("time-output")

	if (!(timeInput instanceof HTMLInputElement)) throw new Error("no input")
	if (!(timeOutput instanceof HTMLSpanElement)) throw new Error("no output")

	let time = 0

	const refreshRobotDisplay = function () {
		const t = parseInt(this.value)
		if (isNaN(t)) return
		time = t

		const newRobots = robots.map((robot) => ({
			pos: calc(robot.pos, robot.vel, t),
			vel: robot.vel,
		}))

		drawRobots(newRobots)

		const timeStr = t.toString()
		timeOutput.textContent = timeStr
	}

	timeInput.disabled = false

	timeInput.addEventListener("input", refreshRobotDisplay)
	unsubscribe = () => timeInput.removeEventListener("input", refreshRobotDisplay)

	raf = requestAnimationFrame(function render() {
		let newRobots = robots
		for (let i = 0; i < 10; i++) {
			time++
			newRobots = robots.map((robot) => ({
				pos: calc(robot.pos, robot.vel, time),
				vel: robot.vel,
			}))
			const timeStr = time.toString()
			timeOutput.textContent = timeStr
			timeInput.value = timeStr
			if (robotsMatchesPattern(newRobots, pattern)) {
				drawRobots(newRobots)
				return
			}
		}
		drawRobots(newRobots)

		raf = requestAnimationFrame(render)
	})
}

const inputForm = document.getElementById("input-form")
if (!(inputForm instanceof HTMLFormElement)) throw new Error("no form")

inputForm.addEventListener("submit", function (e) {
	e.preventDefault()
	const formData = new FormData(this)
	const input = formData.get("input")?.toString() ?? ""
	draw(input.trim(), ctx)
})
