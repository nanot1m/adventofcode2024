// @ts-check
import "../../../js/modules/iterator-extensions.js"
import { parseInput, findPathWithPredecessors } from "../../../js/solutions/16.js"
import { Array2d, V } from "../../../js/modules/index.js"
import { scaleCanvasToPixelRatio } from "../common.js"

const canvas = document.getElementById("canvas")
if (!(canvas instanceof HTMLCanvasElement)) throw new Error("no canvas")

const ctx = canvas.getContext("2d")
if (!ctx) throw new Error("no ctx")

const INIT_WIDTH = 300
const INIT_HEIGHT = 300
const INIT_SCALE = 1

scaleCanvasToPixelRatio(ctx, INIT_WIDTH * INIT_SCALE, INIT_HEIGHT * INIT_SCALE)

const colors = {
	green: "#91cfa1",
	red: "#ea859a",
	yellow: "#fef59d",
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

/**
 * @param {string} input
 * @param {CanvasRenderingContext2D} ctx
 * @param {boolean} part2
 */
function draw(input, ctx, part2, cWidth = INIT_WIDTH) {
	cancelAnimationFrame(raf)
	unsubscribe()
	let map = parseInput(input)

	let width = map[0].length
	let height = map.length

	const scale = Math.max(cWidth / width, 10)

	scaleCanvasToPixelRatio(ctx, width * scale, height * scale)

	ctx.canvas.scrollIntoView({ behavior: "smooth" })

	const drawText = (x, y, text, color = colors.white) => {
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

	const { visited, end, start } = findPathWithPredecessors(map)

	const sortedPath = Array.from(visited).sort((a, b) => a.distance - b.distance)

	const drawMap = () => {
		unsubscribe()

		const mapData = Array2d.map(map, (x, pos) => {
			if (x === "#") return { type: "wall", distance: 0, dir: 0 }
			if (V.eq(pos, start)) return { type: "start", distance: 0, dir: 1 }
			if (V.eq(pos, end)) return { type: "end", distance: 0, dir: 0 }
			return { type: "empty", distance: 0, dir: 0 }
		})
		for (const x of sortedPath) {
			if (V.eq(x.value.pos, start)) continue
			if (V.eq(x.value.pos, end)) {
				Array2d.set(mapData, x.value.pos, { type: "end", distance: x.distance, dir: x.value.dir })
				continue
			}
			Array2d.set(mapData, x.value.pos, { type: "visited", distance: x.distance, dir: x.value.dir })
		}

		function render() {
			ctx.fillStyle = colors.black
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			for (const p of Array2d.traverse(mapData)) {
				const { type } = p.value
				const [x, y] = p.pos
				let isHovered = x === hoveredX && y === hoveredY
				let textColor = isHovered ? colors.black : colors.white
				if (x === hoveredX && y === hoveredY) {
					ctx.fillStyle = colors.yellow
					ctx.fillRect(x * scale, y * scale, scale, scale)
				}
				switch (type) {
					case "wall":
						drawText(x, y, "#", isHovered ? textColor : colors.green)
						break
					case "start":
						drawText(x, y, "S", textColor)
						break
					case "end":
						drawText(x, y, "E", textColor)
						break
					case "empty":
						drawText(x, y, ".", textColor)
						break
					case "visited":
						const ch = ["^", ">", "v", "<"][p.value.dir]
						drawText(x, y, ch, isHovered ? textColor : colors.red)
						break
				}
			}
		}

		render()

		function handleMouseOver(e) {
			const x = Math.floor(e.offsetX / scale)
			const y = Math.floor(e.offsetY / scale)
			hoveredX = x
			hoveredY = y
			const pos = V.vec(x, y)
			const data = Array2d.get(mapData, pos)
			if (data && ["visited", "start", "end"].includes(data.type)) {
				render()
				drawPopup(e.clientX, e.clientY, `${data.type} ${data.distance}`)
			} else {
				render()
				hidePopup()
			}
		}

		if (canvas) {
			canvas.addEventListener("mousemove", handleMouseOver)
			unsubscribe = () => canvas.removeEventListener("mousemove", handleMouseOver)
		}
	}

	drawMap()
}

const inputForm = document.getElementById("input-form")
if (!(inputForm instanceof HTMLFormElement)) throw new Error("no form")

let lastInput = ""

inputForm.addEventListener("submit", function (e) {
	e.preventDefault()
	const formData = new FormData(this)
	const input = formData.get("input")?.toString() ?? ""

	lastInput = input

	draw(
		input.trim(),
		ctx,
		formData.get("part2")?.toString() === "on",
		parseInt(ctx.canvas.style.width, 10),
	)
})

const resizeHandle = document.getElementById("resize-handle")
if (!(resizeHandle instanceof HTMLDivElement)) throw new Error("no resize handle")

resizeHandle.addEventListener("mousedown", function (e) {
	e.preventDefault()
	const startX = e.clientX
	const startWidth = parseInt(ctx.canvas.style.width, 10)

	const onMouseMove = (e) => {
		const dx = e.clientX - startX
		const newWidth = Math.max(100, startWidth + dx)
		draw(lastInput, ctx, false, newWidth)
	}

	const onMouseUp = () => {
		document.removeEventListener("mousemove", onMouseMove)
		document.removeEventListener("mouseup", onMouseUp)
	}

	document.addEventListener("mousemove", onMouseMove)
	document.addEventListener("mouseup", onMouseUp)
})

// @ts-ignore
inputForm.querySelector("#input").textContent = `\
###########
##...######
##.#.######
##.#.....E#
##.#####.##
#S...###.##
####.###.##
####.###.##
####.###.##
####.###.##
####.....##
###########`
