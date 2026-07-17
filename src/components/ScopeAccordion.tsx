"use client"

import { useEffect, useRef, useState } from "react"
import { scopePhases, type ScopePhase } from "@/lib/scope-phases"

function DetailList({ label, items }: { label: string; items: string[] }) {
  if (!items?.length) return null
  return (
    <div className="scope-detail">
      <h4>{label}</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function PhaseDetails({ phase }: { phase: ScopePhase }) {
  return (
    <div className="scope-modal-content">
      <div className="scope-modal-heading">
        <p className="scope-modal-number">Phase {phase.number}</p>
        <h2 className="scope-modal-title text-balance" tabIndex={-1}>
          {phase.title}
        </h2>
        <p className="scope-modal-summary text-pretty">{phase.summary}</p>
      </div>

      <div className="scope-lead">
        <div>
          <p className="scope-kicker">Purpose</p>
          <p className="scope-para">{phase.purpose}</p>
        </div>
        <div>
          <p className="scope-kicker">Strategic objective</p>
          <p className="scope-para">{phase.strategicObjective}</p>
        </div>
      </div>

      <div className="scope-grid">
        <DetailList label="Design responsibilities" items={phase.designResponsibilities} />
        <DetailList label="Experience responsibilities" items={phase.experienceResponsibilities} />
        <DetailList label="Deliverables" items={phase.deliverables} />
        <DetailList label="Client decisions" items={phase.clientDecisions} />
        <DetailList label="Specialists" items={phase.specialists} />
        <DetailList label="Dependencies" items={phase.dependencies} />
      </div>

      <div className="scope-gate">
        <div>
          <p className="scope-kicker">Approval gate</p>
          <p className="scope-para">{phase.approvalGate}</p>
        </div>
        <div>
          <p className="scope-kicker">Leads to</p>
          <p className="scope-para">{phase.nextPhase}</p>
        </div>
      </div>

      {phase.note && <p className="scope-note">{phase.note}</p>}
    </div>
  )
}

export function ScopeAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const activePhase = activeIndex === null ? null : scopePhases[activeIndex]

  const setHash = (phase: ScopePhase | null) => {
    const base = `${window.location.pathname}${window.location.search}`
    window.history.replaceState(null, "", phase ? `${base}#${phase.id}` : base)
  }

  const openPhase = (index: number, trigger?: HTMLButtonElement) => {
    if (trigger) triggerRef.current = trigger
    setActiveIndex(index)
    setHash(scopePhases[index])
  }

  const closeModal = () => {
    dialogRef.current?.close()
    setActiveIndex(null)
    setHash(null)
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }

  const showRelativePhase = (offset: number) => {
    if (activeIndex === null) return
    const nextIndex = activeIndex + offset
    if (nextIndex < 0 || nextIndex >= scopePhases.length) return
    openPhase(nextIndex)
  }

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "")
      const index = scopePhases.findIndex((phase) => phase.id === hash)
      if (index >= 0) setActiveIndex(index)
    }

    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || activeIndex === null) return

    if (!dialog.open) dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    window.requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, behavior: "instant" })
      dialog.querySelector<HTMLElement>(".scope-modal-title")?.focus({ preventScroll: true })
    })

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [activeIndex])

  return (
    <>
      <div className="scope-accordion" aria-label="Scope phases">
        {scopePhases.map((phase, index) => (
          <article className="scope-panel" id={phase.id} key={phase.id}>
            <h3 className="scope-panel-head">
              <button
                type="button"
                className="scope-panel-btn"
                aria-haspopup="dialog"
                onClick={(event) => openPhase(index, event.currentTarget)}
              >
                <span className="scope-num">{phase.number}</span>
                <span className="scope-head-text">
                  <span className="scope-title">{phase.title}</span>
                  <span className="scope-summary">{phase.summary}</span>
                </span>
                <span className="scope-tap">
                  Tap in <span aria-hidden>↗</span>
                </span>
              </button>
            </h3>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="scope-dialog"
        aria-label={activePhase ? `${activePhase.title} details` : "Scope phase details"}
        onCancel={(event) => {
          event.preventDefault()
          closeModal()
        }}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal()
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") showRelativePhase(-1)
          if (event.key === "ArrowRight") showRelativePhase(1)
        }}
      >
        {activePhase && activeIndex !== null && (
          <div className="scope-modal">
            <header className="scope-modal-bar">
              <p>
                Scope of work <span>{String(activeIndex + 1).padStart(2, "0")} / {scopePhases.length}</span>
              </p>
              <button type="button" className="scope-modal-close" onClick={closeModal} aria-label="Close phase details">
                <span aria-hidden>×</span>
              </button>
            </header>

            <div className="scope-modal-scroll" ref={scrollRef}>
              <PhaseDetails phase={activePhase} />
            </div>

            <footer className="scope-modal-nav">
              <button type="button" onClick={() => showRelativePhase(-1)} disabled={activeIndex === 0}>
                <span aria-hidden>←</span>
                <span>
                  <small>Previous</small>
                  <strong>{activeIndex > 0 ? scopePhases[activeIndex - 1].title : "First phase"}</strong>
                </span>
              </button>
              <button
                type="button"
                className="scope-modal-next"
                onClick={() => showRelativePhase(1)}
                disabled={activeIndex === scopePhases.length - 1}
              >
                <span>
                  <small>Next</small>
                  <strong>
                    {activeIndex < scopePhases.length - 1 ? scopePhases[activeIndex + 1].title : "Final phase"}
                  </strong>
                </span>
                <span aria-hidden>→</span>
              </button>
            </footer>
          </div>
        )}
      </dialog>
    </>
  )
}
