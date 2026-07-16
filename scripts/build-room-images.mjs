import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import { join } from "node:path"

const ROOT = process.cwd()
const RAW = join(ROOT, "public/images/raw")
const IMG_OUT = join(ROOT, "public/images")
const MEDIA_OUT = join(ROOT, "public/media")

// Approved room images -> optimized web assets. No filters / color changes,
// only format + sizing. Cap the long edge at 2200px to keep files lean while
// preserving detail on large displays.
const IMAGES = [
  { in: "vintage-lounge.png", out: "vintage-lounge.webp" },
  { in: "vintage-90s-room.png", out: "vintage-90s-room.webp" },
  { in: "vintage-game-room.png", out: "vintage-game-room.webp" },
  { in: "vintage-bodega.png", out: "vintage-bodega.webp" },
]

const MAX_EDGE = 2200

async function convert(src, dest, dir) {
  const img = sharp(join(RAW, src)).rotate()
  const meta = await img.metadata()
  const resize =
    meta.width && meta.width > MAX_EDGE ? { width: MAX_EDGE, withoutEnlargement: true } : undefined
  const pipeline = resize ? img.resize(resize) : img
  const info = await pipeline.webp({ quality: 82, effort: 5 }).toFile(join(dir, dest))
  console.log(`[rooms] ${dest} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)}kb`)
}

async function main() {
  await mkdir(IMG_OUT, { recursive: true })
  await mkdir(MEDIA_OUT, { recursive: true })

  for (const { in: src, out } of IMAGES) {
    await convert(src, out, IMG_OUT)
  }

  // Interim cinematic poster (used before video playback + under reduced-motion).
  // Uses the approved Lounge image until the real film's poster frame is supplied.
  await convert("vintage-lounge.png", "vintage-cinematic-poster.webp", MEDIA_OUT)
  console.log("[rooms] done")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
