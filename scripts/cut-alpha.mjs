// Luminance-keyed background removal.
//
// The generated hero art (VINTAGE wordmark, disco ball) ships on a solid black
// background with NO real alpha. This script derives a genuine, silhouette-aware
// alpha channel from pixel luminance: near-black background pixels become fully
// transparent, bright subject pixels stay fully opaque, and a feathered ramp in
// between keeps crystal/facet edges clean instead of a hard rectangular cut.
//
// It also lifts residual black out of the surviving pixels (screen-style
// unpremultiply) so semi-transparent edges don't carry a grey halo.
//
// Idempotent: always reads from scripts/raw/*.png and writes the canonical asset.

import sharp from "sharp"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rawDir = join(__dirname, "raw")
const outDir = join(__dirname, "..", "public", "experience", "system")

/**
 * @param {object} o
 * @param {string} o.input   raw source filename
 * @param {string} o.output  canonical output filename
 * @param {number} o.lo      luma at/below which alpha = 0 (0-255)
 * @param {number} o.hi      luma at/above which alpha = 255 (0-255)
 * @param {number} o.lift    how strongly to unpremultiply black from edges (0-1)
 */
async function cut({ input, output, lo, hi, lift }) {
  const src = sharp(join(rawDir, input)).ensureAlpha()
  const { data, info } = await src.raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels } = info
  const out = Buffer.alloc(width * height * 4)

  for (let i = 0, o = 0; i < data.length; i += channels, o += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    // Rec. 709 luma drives the key.
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b

    let a
    if (luma <= lo) a = 0
    else if (luma >= hi) a = 255
    else a = Math.round(((luma - lo) / (hi - lo)) * 255)

    // Unpremultiply: as alpha drops, gently push RGB back up so feathered
    // edges keep their color instead of muddying toward black.
    const boost = lift * (1 - a / 255)
    out[o] = Math.min(255, Math.round(r + (255 - r) * boost * (r / 255)))
    out[o + 1] = Math.min(255, Math.round(g + (255 - g) * boost * (g / 255)))
    out[o + 2] = Math.min(255, Math.round(b + (255 - b) * boost * (b / 255)))
    out[o + 3] = a
  }

  // Trim the now-transparent border so the asset tightly hugs its silhouette,
  // then report final dimensions so the CSS container can match the aspect.
  const trimmed = await sharp(out, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 8 })
    .png({ compressionLevel: 9 })
    .toBuffer({ resolveWithObject: true })

  await sharp(trimmed.data).toFile(join(outDir, output))

  console.log(
    `[cut-alpha] ${output} ${trimmed.info.width}x${trimmed.info.height} ` +
      `(aspect ${(trimmed.info.width / trimmed.info.height).toFixed(3)})`,
  )
}

await cut({
  input: "vintage-wordmark-raw.png",
  output: "vintage-wordmark.png",
  lo: 14,
  hi: 66,
  lift: 0.35,
})

await cut({
  input: "disco-ball-raw.png",
  output: "disco-ball.png",
  lo: 10,
  hi: 40,
  lift: 0.25,
})

console.log("[cut-alpha] done")
