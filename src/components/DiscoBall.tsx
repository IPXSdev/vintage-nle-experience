import Image from "next/image"

/**
 * Slowly rotating disco ball for the hero.
 *
 * A pre-rendered transparent PNG on a slow CSS spin, with a soft glow halo
 * behind it. Reflected light flares are handled separately by the Hero so they
 * can sweep across the whole screen. Rotation is disabled under
 * `prefers-reduced-motion`.
 */
export function DiscoBall() {
  return (
    <div className="disco" aria-hidden="true">
      <div className="disco-glow" />
      <div className="disco-spin">
        <Image
          src="/experience/system/disco-ball.png"
          alt=""
          fill
          sizes="(max-width: 800px) 220px, 340px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  )
}
