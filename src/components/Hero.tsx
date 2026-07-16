"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { DiscoBall } from "./DiscoBall"
import { VintageTitle } from "./VintageTitle"

/**
 * Full-screen cinematic hero.
 *
 * Layers (back to front): atmospheric background + haze, sweeping light flares,
 * the disco ball, the sculptural VINTAGE wordmark, supporting line and CTAs.
 *
 * DISCO BALL FOLLOW
 * On capable (fine-pointer) devices the disco ball is lifted out of the layout
 * and driven in absolute hero-local pixels so it genuinely follows the cursor
 * across the whole hero, clamped to safe margins. A single rAF loop eases the
 * live position toward the pointer target (lerp ~0.22). Rotation lives on an
 * inner element (`.disco-spin`) so spin and follow never share a transform.
 * The same loop keeps the older normalized parallax vars (--px/--py ball-ish,
 * --pxf/--pyf faster) alive for the background and light flares.
 *
 * On touch / coarse pointers and under reduced-motion the JS bails out and the
 * ball keeps its fixed, art-directed CSS position with its slow spin + shimmer.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const ballRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const ballEl = ballRef.current
    if (!el || !ballEl) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    // Touch / coarse pointers keep the fixed art-directed composition.
    // `pointer: coarse` is the reliable touch signal (a mouse reports `fine`).
    if (window.matchMedia("(pointer: coarse), (max-width: 800px)").matches) return

    // Lift the ball out of flow so it can roam the full hero in absolute px.
    ballEl.style.position = "absolute"
    ballEl.style.left = "0"
    ballEl.style.top = "0"
    ballEl.style.margin = "0"
    ballEl.style.willChange = "transform"

    // Offset so the ball trails slightly beside/above the cursor, not under it.
    const OFFSET_X = 20
    const OFFSET_Y = -30
    const MARGIN = 24
    const TOP_MARGIN = 72
    const LERP = 0.22
    const FAST_LERP = 0.3

    let heroW = 0
    let heroH = 0
    let ballW = 0
    let ballH = 0

    // Absolute ball position (px) and normalized parallax for bg/flares.
    const cur = { x: 0, y: 0 }
    const tgt = { x: 0, y: 0 }
    const nCur = { x: 0, y: 0 }
    const nTgt = { x: 0, y: 0 }
    const fCur = { x: 0, y: 0 }

    let engaged = false
    let raf = 0

    const measure = () => {
      const r = el.getBoundingClientRect()
      heroW = r.width
      heroH = r.height
      ballW = ballEl.offsetWidth
      ballH = ballEl.offsetHeight
    }

    // Resting spot before the pointer engages: centered, above the wordmark.
    const home = () => ({
      x: heroW / 2 - ballW / 2,
      y: Math.max(TOP_MARGIN, heroH * 0.15),
    })

    const clamp = (x: number, y: number) => ({
      x: Math.max(MARGIN, Math.min(x, heroW - ballW - MARGIN)),
      y: Math.max(TOP_MARGIN, Math.min(y, heroH - ballH - MARGIN)),
    })

    const tick = () => {
      cur.x += (tgt.x - cur.x) * LERP
      cur.y += (tgt.y - cur.y) * LERP
      ballEl.style.transform = `translate3d(${cur.x.toFixed(2)}px, ${cur.y.toFixed(2)}px, 0)`

      nCur.x += (nTgt.x - nCur.x) * LERP
      nCur.y += (nTgt.y - nCur.y) * LERP
      fCur.x += (nTgt.x - fCur.x) * FAST_LERP
      fCur.y += (nTgt.y - fCur.y) * FAST_LERP
      el.style.setProperty("--px", nCur.x.toFixed(4))
      el.style.setProperty("--py", nCur.y.toFixed(4))
      el.style.setProperty("--pxf", fCur.x.toFixed(4))
      el.style.setProperty("--pyf", fCur.y.toFixed(4))

      const settled =
        Math.abs(tgt.x - cur.x) < 0.05 &&
        Math.abs(tgt.y - cur.y) < 0.05 &&
        Math.abs(nTgt.x - nCur.x) < 0.0004 &&
        Math.abs(nTgt.y - nCur.y) < 0.0004
      if (settled) {
        raf = 0
        return
      }
      raf = requestAnimationFrame(tick)
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const px = e.clientX - r.left
      const py = e.clientY - r.top
      // Only follow while the pointer is actually over the hero.
      if (px < 0 || py < 0 || px > r.width || py > r.height) return
      engaged = true
      const c = clamp(px - ballW / 2 + OFFSET_X, py - ballH / 2 + OFFSET_Y)
      tgt.x = c.x
      tgt.y = c.y
      nTgt.x = px / r.width - 0.5
      nTgt.y = py / r.height - 0.5
      kick()
    }

    // Leaving the hero gently returns the ball home (no snap — the lerp handles it).
    const onLeave = () => {
      engaged = false
      const h = home()
      tgt.x = h.x
      tgt.y = h.y
      nTgt.x = 0
      nTgt.y = 0
      kick()
    }

    const onResize = () => {
      measure()
      if (!engaged) {
        const h = home()
        tgt.x = cur.x = h.x
        tgt.y = cur.y = h.y
        ballEl.style.transform = `translate3d(${h.x.toFixed(2)}px, ${h.y.toFixed(2)}px, 0)`
      }
    }

    measure()
    const h = home()
    cur.x = tgt.x = h.x
    cur.y = tgt.y = h.y
    ballEl.style.transform = `translate3d(${h.x.toFixed(2)}px, ${h.y.toFixed(2)}px, 0)`

    window.addEventListener("pointermove", onMove, { passive: true })
    el.addEventListener("pointerleave", onLeave)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      window.removeEventListener("resize", onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="cine-hero" ref={ref}>
      <div className="cine-bg" aria-hidden="true" />
      <div className="cine-haze" aria-hidden="true" />
      <div className="cine-flare cine-flare-a" aria-hidden="true" />
      <div className="cine-flare cine-flare-b" aria-hidden="true" />

      <div className="cine-disco-wrap" ref={ballRef} aria-hidden="true">
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
