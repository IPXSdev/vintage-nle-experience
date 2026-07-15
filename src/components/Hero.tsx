"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { DiscoBall } from "./DiscoBall"
import { VintageTitle } from "./VintageTitle"

/**
 * Full-screen cinematic hero.
 *
 * Layers (back to front): atmospheric background + haze, sweeping light flares,
 * the slow disco ball, the sculptural VINTAGE wordmark, supporting line and CTAs.
 *
 * Cursor parallax is progressive enhancement. A `pointermove` listener records a
 * normalized target; a continuous rAF loop eases the live value toward it and
 * writes CSS custom properties:
 *   --px/--py   ball-speed parallax   (lerp ~0.22)
 *   --pxf/--pyf caustic-speed parallax (lerp ~0.30, reacts a touch faster)
 * The disco ball's slow axial spin is pure CSS and stays independent of this.
 * Tracking is skipped on coarse/narrow pointers and under reduced-motion.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    // Mobile: no cursor tracking, disco keeps its autonomous motion.
    if (window.matchMedia("(max-width: 800px), (pointer: coarse)").matches) return

    // Normalized target from pointer, and eased live values.
    const target = { x: 0, y: 0 }
    const ball = { x: 0, y: 0 }
    const fast = { x: 0, y: 0 }
    const BALL_LERP = 0.22
    const FAST_LERP = 0.3

    let raf = 0
    let idle = 0

    const tick = () => {
      ball.x += (target.x - ball.x) * BALL_LERP
      ball.y += (target.y - ball.y) * BALL_LERP
      fast.x += (target.x - fast.x) * FAST_LERP
      fast.y += (target.y - fast.y) * FAST_LERP

      el.style.setProperty("--px", ball.x.toFixed(4))
      el.style.setProperty("--py", ball.y.toFixed(4))
      el.style.setProperty("--pxf", fast.x.toFixed(4))
      el.style.setProperty("--pyf", fast.y.toFixed(4))

      // Keep animating until settled, then park the loop to save battery.
      const settled =
        Math.abs(target.x - ball.x) < 0.0005 &&
        Math.abs(target.y - ball.y) < 0.0005
      if (settled && ++idle > 4) {
        raf = 0
        return
      }
      if (!settled) idle = 0
      raf = requestAnimationFrame(tick)
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      target.x = (e.clientX - rect.left) / rect.width - 0.5
      target.y = (e.clientY - rect.top) / rect.height - 0.5
      kick()
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="cine-hero" ref={ref}>
      <div className="cine-bg" aria-hidden="true" />
      <div className="cine-haze" aria-hidden="true" />
      <div className="cine-flare cine-flare-a" aria-hidden="true" />
      <div className="cine-flare cine-flare-b" aria-hidden="true" />

      <div className="cine-inner">
        <div className="cine-disco-wrap" aria-hidden="true">
          <DiscoBall />
        </div>
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
