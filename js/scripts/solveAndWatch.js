import { spawn } from "child_process"
import { existsSync, readFileSync, watch } from "fs"
import { resolve } from "path"
import { createHash } from "crypto"

const solutionId = process.argv[2]
if (!solutionId) {
	console.error("Error: Please provide a solution ID. Example: npm run solve:watch 22")
	process.exit(1)
}

const fileToWatch = resolve(`./solutions/${solutionId}.js`)
if (!existsSync(fileToWatch)) {
	console.error(`Error: File ${fileToWatch} does not exist.`)
	process.exit(1)
}

console.log(`Watching ${fileToWatch} for content changes...`)

let lastHash = null

// Function to calculate the hash of the file content
const calculateHash = (filePath) => {
	const content = readFileSync(filePath, "utf8")
	return createHash("sha256").update(content).digest("hex")
}

// Function to run the solve command
const runSolve = () => {
	console.clear()
	console.log(`Executing solve command for solution ${solutionId}...`)
	const command = `node scripts/solve.js ${solutionId}`
	const [cmd, ...args] = command.split(" ")

	spawn(cmd, args, { stdio: "inherit", shell: true })
}

// Execute immediately and initialize lastHash
const initialRun = () => {
	lastHash = calculateHash(fileToWatch)
	runSolve()
}
initialRun()

// Watch the file for changes
watch(fileToWatch, (eventType) => {
	if (eventType === "change") {
		const newHash = calculateHash(fileToWatch)
		if (newHash !== lastHash) {
			console.log(`File content of ${fileToWatch} has changed.`)
			lastHash = newHash
			runSolve()
		}
	}
})
