import Image from "next/image"
import {
  getAsset,
  isAssetReady,
  type ExperienceAssetId,
  type FocalPoint,
} from "@/lib/experience-assets"

/** Map a manifest focal point to a CSS object-position value. */
function focalToObjectPosition(focal: FocalPoint): string {
  switch (focal) {
    case "top":
      return "center top"
    case "bottom":
      return "center bottom"
    case "left":
      return "left center"
    case "right":
      return "right center"
    case "top-left":
      return "left top"
    case "top-right":
      return "right top"
    case "bottom-left":
      return "left bottom"
    case "bottom-right":
      return "right bottom"
    default:
      return "center center"
  }
}

interface ExperienceImageProps {
  /** Which manifest slot to render. */
  id: ExperienceAssetId
  /** Extra class hook for the wrapper (styling stays in globals.css). */
  className?: string
  /** Prioritize loading (use for above-the-fold hero slots only). */
  priority?: boolean
  /** Sizes hint for responsive loading. */
  sizes?: string
}

/**
 * Renders an approved manifest image, or nothing at all.
 *
 * Until an asset has a real `src` AND approvalStatus "approved", this returns
 * null so production stays exactly as it is today. When an image is dropped in
 * via the manifest, it appears in its designated slot with correct alt text,
 * focal cropping and lazy loading — no layout edits required.
 */
export function ExperienceImage({
  id,
  className,
  priority = false,
  sizes = "(max-width: 800px) 100vw, 50vw",
}: ExperienceImageProps) {
  if (!isAssetReady(id)) return null

  const asset = getAsset(id)
  const objectPosition = focalToObjectPosition(asset.focalPoint)

  return (
    <figure className={className ? `xp-image ${className}` : "xp-image"}>
      <Image
        src={asset.src || "/placeholder.svg"}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition }}
      />
    </figure>
  )
}
