import Image from "next/image"

/**
 * The sculptural "VINTAGE" wordmark.
 *
 * Rendered as a pre-generated crystal / leopard-glass PNG with an alpha
 * background. Motion (float, light-sweep, cursor parallax, glow pulse) is layered
 * on top in CSS via `.vintage-title` and driven by the hero's `--px`/`--py`
 * pointer custom properties. All motion is disabled under
 * `prefers-reduced-motion`, and the static wordmark keeps a gentle glow.
 *
 * A fixed-aspect box prevents layout shift while the PNG loads.
 */
export function VintageTitle() {
  return (
    <div className="vintage-title" role="img" aria-label="VINTAGE">
      <div className="vintage-title-inner">
        <Image
          src="/experience/system/vintage-wordmark.png"
          alt=""
          fill
          priority
          sizes="(max-width: 800px) 92vw, 1100px"
          style={{ objectFit: "contain" }}
        />
        {/* Moving specular light-sweep, masked to the wordmark box. */}
        <span className="vintage-sweep" aria-hidden="true" />
      </div>
    </div>
  )
}
