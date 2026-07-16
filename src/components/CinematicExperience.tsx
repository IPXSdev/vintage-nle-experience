"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

/**
 * The Experience page IS the film. One master asset (shared with the muted
 * landing hero) presented full-screen with sound.
 *
 * Flow:
 *  - Entry overlay (browsers block sound-on autoplay) -> "Enter With Sound".
 *  - On enter: restart from 0, unmute, cinematic volume, request fullscreen
 *    (fallback = 100svh edge-to-edge), remove overlay, page stays black.
 *  - Minimal custom controls fade in on move/tap, fade out when idle.
 *  - On end: hold on final frame + "Watch Again" / "Return to Vintage".
 *
 * Uses `contain` (letterbox) so the original cinematic aspect ratio is honored.
 */
// Single source of truth: the finished film lives in a public Vercel Blob store,
// its URL supplied via this env var. If missing, we keep the Lounge poster and
// never surface a broken video element or error.
const VIDEO_SRC = process.env.NEXT_PUBLIC_VINTAGE_FILM_URL
const POSTER_SRC = "/media/vintage-cinematic-poster.webp"
const CINEMATIC_VOLUME = 0.85
const IDLE_MS = 2600

function formatTime(s: number) {
  if (!Number.isFinite(s) || s < 0) s = 0
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, "0")}`
}

export function CinematicExperience() {
  const router = useRouter()
  const rootRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const idleTimer = useRef<number | null>(null)

  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  // Track fullscreen changes (incl. Escape exiting normally).
  useEffect(() => {
    const onFs = () => setFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", onFs)
    return () => document.removeEventListener("fullscreenchange", onFs)
  }, [])

  const requestFs = useCallback(async () => {
    const el = rootRef.current
    if (!el) return
    try {
      if (!document.fullscreenElement && el.requestFullscreen) {
        await el.requestFullscreen()
      }
    } catch {
      /* Fullscreen unsupported (e.g. iOS Safari). The 100svh fallback covers it. */
    }
  }, [])

  const scheduleIdle = useCallback(() => {
    if (idleTimer.current) window.clearTimeout(idleTimer.current)
    setControlsVisible(true)
    idleTimer.current = window.setTimeout(() => {
      // Only auto-hide while actively playing.
      if (videoRef.current && !videoRef.current.paused) setControlsVisible(false)
    }, IDLE_MS)
  }, [])

  const enter = useCallback(async () => {
    const v = videoRef.current
    if (!v) return
    setStarted(true)
    setEnded(false)
    v.currentTime = 0
    v.muted = false
    setMuted(false)
    v.volume = CINEMATIC_VOLUME
    await requestFs()
    try {
      await v.play()
      setPlaying(true)
    } catch {
      // Autoplay-with-sound still blocked: leave paused with controls up so the
      // prominent play control is the obvious next tap. Never leaves blank.
      setPlaying(false)
      setControlsVisible(true)
    }
    scheduleIdle()
  }, [requestFs, scheduleIdle])

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      )
    } else {
      v.pause()
      setPlaying(false)
      setControlsVisible(true)
    }
    scheduleIdle()
  }, [scheduleIdle])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    if (!v.muted && v.volume === 0) v.volume = CINEMATIC_VOLUME
    setMuted(v.muted)
    scheduleIdle()
  }, [scheduleIdle])

  const toggleFs = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch(() => {})
    } else {
      await requestFs()
    }
    scheduleIdle()
  }, [requestFs, scheduleIdle])

  const seek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current
    if (!v || !Number.isFinite(v.duration)) return
    v.currentTime = (Number(e.target.value) / 1000) * v.duration
  }, [])

  const watchAgain = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    setEnded(false)
    v.currentTime = 0
    v.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    )
    scheduleIdle()
  }, [scheduleIdle])

  const returnToVintage = useCallback(async () => {
    if (document.fullscreenElement) await document.exitFullscreen().catch(() => {})
    router.push("/")
  }, [router])

  // Keyboard controls (only once the film has started).
  useEffect(() => {
    if (!started) return
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case " ":
        case "k":
          e.preventDefault()
          togglePlay()
          break
        case "m":
          toggleMute()
          break
        case "f":
          toggleFs()
          break
        default:
          break
      }
      scheduleIdle()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [started, togglePlay, toggleMute, toggleFs, scheduleIdle])

  useEffect(() => {
    return () => {
      if (idleTimer.current) window.clearTimeout(idleTimer.current)
    }
  }, [])

  const progress = duration > 0 ? (current / duration) * 1000 : 0

  return (
    <div
      ref={rootRef}
      className={`cx${started ? " is-started" : ""}${controlsVisible ? " show-controls" : ""}`}
      onMouseMove={started ? scheduleIdle : undefined}
      onTouchStart={started ? scheduleIdle : undefined}
    >
      <video
        ref={videoRef}
        className="cx-video"
        playsInline
        preload="metadata"
        poster={POSTER_SRC}
        controls={false}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onContextMenu={(e) => e.preventDefault()}
        onClick={started ? togglePlay : undefined}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => {
          setEnded(true)
          setPlaying(false)
          setControlsVisible(true)
        }}
      >
        {VIDEO_SRC ? <source src={VIDEO_SRC} type="video/mp4" /> : null}
      </video>

      {/* Entry overlay */}
      {!started && (
        <div className="cx-entry">
          <div className="cx-entry-in">
            <p className="cx-entry-brand">VINTAGE</p>
            <p className="cx-entry-sub">A Cinematic Experience</p>
            <button type="button" className="cx-enter-btn" onClick={enter}>
              Enter With Sound
            </button>
            <button type="button" className="cx-entry-back" onClick={returnToVintage}>
              Return to Vintage
            </button>
          </div>
        </div>
      )}

      {/* Minimal custom controls */}
      {started && !ended && (
        <div className="cx-controls" role="group" aria-label="Playback controls">
          <button
            type="button"
            className="cx-ctrl"
            onClick={togglePlay}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="cx-ctrl"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
                <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
                <path
                  d="M16 8.5a4.5 4.5 0 010 7M18.5 6a8 8 0 010 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            )}
          </button>

          <span className="cx-time">{formatTime(current)}</span>
          <input
            className="cx-scrub"
            type="range"
            min={0}
            max={1000}
            step={1}
            value={progress}
            onChange={seek}
            aria-label="Seek through the film"
          />
          <span className="cx-time">{formatTime(duration)}</span>

          <button
            type="button"
            className="cx-ctrl"
            onClick={toggleFs}
            aria-label={fullscreen ? "Exit full screen" : "Enter full screen"}
          >
            {fullscreen ? (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M9 4v3a2 2 0 01-2 2H4M15 4v3a2 2 0 002 2h3M9 20v-3a2 2 0 00-2-2H4M15 20v-3a2 2 0 012-2h3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M4 9V6a2 2 0 012-2h3M20 9V6a2 2 0 00-2-2h-3M4 15v3a2 2 0 002 2h3M20 15v3a2 2 0 01-2 2h-3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="cx-ctrl cx-ctrl-close"
            onClick={returnToVintage}
            aria-label="Close and return to Vintage"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" fill="none" />
            </svg>
          </button>
        </div>
      )}

      {/* End state */}
      {ended && (
        <div className="cx-end">
          <div className="cx-end-in">
            <p className="cx-entry-brand">VINTAGE</p>
            <div className="cx-end-actions">
              <button type="button" className="cx-enter-btn" onClick={watchAgain}>
                Watch Again
              </button>
              <button type="button" className="cx-entry-back cx-end-back" onClick={returnToVintage}>
                Return to Vintage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
