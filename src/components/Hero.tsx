"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { DiscoBall } from "./DiscoBall"
import { VintageTitle } from "./VintageTitle"

/**
 * Full-screen cinematic hero.
 *
 * Layers (back to front): atmospheric background + haze, slow disco ball,
 * sweeping reflected light flares, the sculptural VINTAGE wordmark, supporting
 * line and calls to action.
 *
 * Cursor parallax is progressive enhancement: a pointer listener writes
 * normalized `--px` / `--py` custom properties on the section, which CSS uses to
 * drift the layers. Everything works with no JS, and all motion is disabled
 * under `prefers-reduced-motion`.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty("--px", px.toFixed(3))
        el.style.setProperty("--py", py.toFixed(3))
      })
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="cine-hero" ref={ref}>
      <div className="cine-bg" aria-hidden="true" />
      <div className="cine-haze" aria-hidden="true" />
      <div className="cine-flare cine-flare-a" aria-hidden="true" />
      <div className="cine-flare cine-flare-b" aria-hidden="true" />

      <div className="cine-disco-wrap" aria-hidden="true">
        <DiscoBall />
      </div>

      <div className="cine-inner">
        <p className="cine-eyebrow">An immersive house of culture</p>
        <VintageTitle />
        <p className="cine-tagline text-balance">
          A House of Culture, Sound, Art and Transformation
        </p>
        <div className="cine-actions">
          <Link className="cine-btn cine-btn-primary" href="/experience">
            Enter the Experience
          </Link>
          <Link className="cine-btn" href="/scope">
            View the Scope
          </Link>
        </div>
      </div>

      <div className="cine-scroll" aria-hidden="true">
        <span>Descend</span>
      </div>
    </section>
  )
}
