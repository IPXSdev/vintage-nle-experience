"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { experienceRooms } from "@/lib/experience-rooms"

const STATUS_LABEL: Record<string, string> = {
  concept: "Concept",
  approved: "Approved",
  "in-development": "In development",
  complete: "Complete",
}

export function ExperienceWalkthrough() {
  const [active, setActive] = useState(0)
  const [entered, setEntered] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const railRefs = useRef<Array<HTMLButtonElement | null>>([])
  const total = experienceRooms.length
  const room = experienceRooms[active]

  const go = useCallback(
    (next: number) => {
      const clamped = (next + total) % total
      setActive(clamped)
      setEntered(false)
    },
    [total],
  )

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 40)
    return () => window.clearTimeout(t)
  }, [active])

  // Keep the active rail item in view
  useEffect(() => {
    railRefs.current[active]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" })
  }, [active])

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault()
        go(active + 1)
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        go(active - 1)
      }
    },
    [active, go],
  )

  return (
    <div className="xp" onKeyDown={onKey} tabIndex={-1} aria-roledescription="Guided walkthrough">
      {/* Chapter rail */}
      <nav className="xp-rail" aria-label="Experience chapters">
        <ol>
          {experienceRooms.map((r, i) => (
            <li key={r.id}>
              <button
                ref={(el) => {
                  railRefs.current[i] = el
                }}
                type="button"
                className={`xp-rail-btn${i === active ? " is-active" : ""}`}
                aria-current={i === active ? "step" : undefined}
                onClick={() => go(i)}
              >
                <span className="xp-rail-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="xp-rail-title">{r.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      {/* Stage */}
      <div className={`xp-stage${entered ? " is-in" : ""}`} ref={stageRef}>
        <div className="xp-media">
          {room.heroImage ? (
            <Image
              src={room.heroImage || "/placeholder.svg"}
              alt={`${room.title} — atmospheric concept`}
              fill
              priority={active === 0}
              sizes="(max-width:900px) 100vw, 62vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="xp-media-empty">Imagery in production</div>
          )}
          <div className="xp-media-veil" />
          <span className="xp-chapter-tag">{room.chapter}</span>
          <span className={`xp-status xp-status-${room.status}`}>{STATUS_LABEL[room.status]}</span>
        </div>

        <article className="xp-copy">
          <p className="xp-eyebrow">{room.chapter} — Emotional objective</p>
          <h2 className="xp-title text-balance">{room.title}</h2>
          <p className="xp-objective text-pretty">{room.emotionalObjective}</p>
          <p className="xp-desc text-pretty">{room.description}</p>

          <dl className="xp-sensory">
            {room.lightingProfile && (
              <div>
                <dt>Light</dt>
                <dd>{room.lightingProfile}</dd>
              </div>
            )}
            {room.soundProfile && (
              <div>
                <dt>Sound</dt>
                <dd>{room.soundProfile}</dd>
              </div>
            )}
            {room.scentProfile && (
              <div>
                <dt>Scent</dt>
                <dd>{room.scentProfile}</dd>
              </div>
            )}
            {room.guestRitual && (
              <div>
                <dt>Ritual</dt>
                <dd>{room.guestRitual}</dd>
              </div>
            )}
          </dl>

          {room.hiddenDiscovery && (
            <p className="xp-reveal">
              <span>Hidden</span> {room.hiddenDiscovery}
            </p>
          )}
        </article>
      </div>

      {/* Controls */}
      <div className="xp-controls">
        <button type="button" className="xp-nav-btn" onClick={() => go(active - 1)} aria-label="Previous chapter">
          <span aria-hidden>&larr;</span> Prev
        </button>
        <div className="xp-progress" aria-hidden>
          <span className="xp-progress-bar" style={{ width: `${((active + 1) / total) * 100}%` }} />
        </div>
        <span className="xp-count" aria-live="polite">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button type="button" className="xp-nav-btn" onClick={() => go(active + 1)} aria-label="Next chapter">
          Next <span aria-hidden>&rarr;</span>
        </button>
      </div>
    </div>
  )
}
