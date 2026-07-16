import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"
import { extname } from "node:path"

const binaryExtensions = new Set([
  ".avif",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".mov",
  ".mp3",
  ".mp4",
  ".pdf",
  ".png",
  ".webm",
  ".webp",
  ".woff",
  ".woff2",
])

const forbiddenPatterns = [
  { label: "em dash character", value: String.fromCodePoint(0x2014) },
  { label: "named em dash entity", value: "&" + "mdash;" },
  { label: "decimal em dash entity", value: "&#" + "8212;" },
  { label: "hex em dash entity", value: "&#x" + "2014;" },
  { label: "escaped em dash character", value: "\\u" + "2014" },
]

const files = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean)
  .filter((file) => !binaryExtensions.has(extname(file).toLowerCase()))

const violations = []

for (const file of files) {
  const content = readFileSync(file, "utf8")

  for (const pattern of forbiddenPatterns) {
    if (content.includes(pattern.value)) {
      violations.push(`${file}: ${pattern.label}`)
    }
  }
}

if (violations.length > 0) {
  console.error("Punctuation check failed:")
  for (const violation of violations) console.error(`- ${violation}`)
  process.exit(1)
}

console.log(`Punctuation check passed across ${files.length} tracked text files.`)
