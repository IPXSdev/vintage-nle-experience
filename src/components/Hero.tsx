"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { VintageTitle } from "./VintageTitle"

/**
 * Landing hero: the VINTAGE cinematic experience film as a muted, looping
 * atmospheric background. The same master asset is presented full-screen with
 * sound on the /experience page; this placement references it silently.
 *
 * Behavior (per brief): autoplay, muted, loop, playsInline, preload="metadata",
 * object-cover, poster shown instantly, no native controls, never fullscreen,
 * and no sound control. Under prefers-reduced-motion the poster still is shown
 * instead of the video. The poster guarantees the hero is never blank even if a
 * browser blocks autoplay or the film has not been uploaded yet.
 */
// Single source of truth: the film is hosted in a public Vercel Blob store and
// its URL is provided via this env var. If it is temporarily missing we retain
// the Lounge poster and never render a broken/erroring video element.
const VIDEO_SRC = process.env.NEXT_PUBLIC_VINTAGE_FILM_URL
const POSTER_SRC = "/media/vintage-cinematic-poster.webp"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener("change", apply)
    return () => mq.removeEventListener("change", apply)
  }, [])

  // Force muted + attempt inline autoplay across browsers (React can omit the
  // muted attribute on first paint, which some engines require for autoplay).
  useEffect(() => {
    const v = videoRef.current
    if (!v || reducedMotion || !VIDEO_SRC) return
    v.muted = true
    v.defaultMuted = true
    const p = v.play()
    if (p && typeof p.catch === "function") p.catch(() => {})
  }, [reducedMotion])

  return (
    <header className="cine-hero">
      <div className="cine-media" aria-hidden="true">
        {reducedMotion || !VIDEO_SRC ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="cine-video" src={POSTER_SRC || "/placeholder.svg"} alt="" />
        ) : (
          <video
            ref={videoRef}
            className="cine-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={POSTER_SRC}
            tabIndex={-1}
            controls={false}
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}
        <div className="cine-scrim" />
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
    </header>
  )
}
