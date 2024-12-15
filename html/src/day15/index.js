// @ts-check
import "../../../js/modules/iterator-extensions.js"
import { parseInput, moves, widenMap } from "../../../js/solutions/15.js"
import { V } from "../../../js/modules/index.js"
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
	text: '#fee15b'
}

let raf = 0
let unsubscribe = () => {}
/**
 * @param {string} input
 * @param {CanvasRenderingContext2D} ctx
 * @param {boolean} part2
 */
function draw(input, ctx, part2) {
	cancelAnimationFrame(raf)
	unsubscribe()
	let [map, arrows] = parseInput(input)

	let width = window.innerWidth / 2 - 32
	let height = width

	if (part2) {
		map = widenMap(map)
		width *= 2
	}

	const mapWidth = map[0].length
	const scale = width / mapWidth

	scaleCanvasToPixelRatio(ctx, width, height)

	ctx.canvas.scrollIntoView({ behavior: "smooth" })

	const drawMap = (/** @type {string[][]} */ map, /** @type {V.Vec2} */ robot) => {
		ctx.clearRect(0, 0, width, height)
		ctx.font = `${scale}px monospace`
		map.forEach((row, y) => {
			row.forEach((cell, x) => {
				ctx.fillStyle = 'white'
				ctx.fillRect(x * scale, y * scale, scale, scale)
				
				const padding = scale * 0.05
				
				// draw floor tile
				ctx.fillStyle = colors.yellow
				ctx.fillRect(
					x * scale + padding,
					y * scale + padding,
					scale - padding * 2,
					scale - padding * 2,
				)

				ctx.font = `${scale}px monospace`
				ctx.textAlign = "center"
				ctx.textBaseline = "top"

				if (V.eq(V.vec(x, y), robot)) {
					// draw robot emoji
					ctx.fillStyle = colors.text
					ctx.fillText("🤖", x * scale + scale / 2, y * scale)
				}

				if (cell === "#") {
					// draw wall
					ctx.fillStyle = colors.red
					ctx.fillRect(
						x * scale + padding,
						y * scale + padding,
						scale - padding * 2,
						scale - padding * 2,
					)
					ctx.fillStyle = colors.text
					ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2)
				}

				if (cell === "O") {
					// draw box on the floor
					ctx.fillStyle = colors.green
					ctx.fillRect(
						x * scale + padding,
						y * scale + padding,
						scale - padding * 2,
						scale - padding * 2,
					)
					ctx.fillStyle = colors.text
					ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2)
				}

				if (cell === "[") {
					// draw box on the floor
					ctx.fillStyle = colors.green
					ctx.fillRect(
						x * scale + padding,
						y * scale + padding,
						scale - padding,
						scale - padding * 2,
					)
					ctx.fillStyle = colors.text
					ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2)
				}

				if (cell === "]") {
					// draw box on the floor
					ctx.fillStyle = colors.green
					ctx.fillRect(x * scale, y * scale + padding, scale - padding, scale - padding * 2)
					ctx.fillStyle = colors.text
					ctx.fillText(cell, x * scale + scale / 2, y * scale + padding * 2)
				}
			})
		})
	}

	const iter = moves(map, arrows)

	let lastDt = 0
	raf = requestAnimationFrame(function render(dt) {
		if (dt - lastDt > 30) {
			lastDt = dt
			const { value, done } = iter.next()
			if (done) {
				unsubscribe()
				return
			}
			const [robot, map] = value
			drawMap(map, robot)
		}

		raf = requestAnimationFrame(render)
	})
}

const inputForm = document.getElementById("input-form")
if (!(inputForm instanceof HTMLFormElement)) throw new Error("no form")

inputForm.addEventListener("submit", function (e) {
	e.preventDefault()
	const formData = new FormData(this)
	const input = formData.get("input")?.toString() ?? ""

	draw(input.trim(), ctx, formData.get("part2")?.toString() === "on")
})

// @ts-ignore
inputForm.querySelector("#input").textContent = `\
##########
#..O..O.O#
#......O.#
#.OO..O.O#
#..O@..O.#
#O#..O...#
#O..O..O.#
#.OO.O.OO#
#....O...#
##########

<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^`
