"use client"

import { useEffect, useState } from "react"
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

function Panel({
  phase,
  open,
  onToggle,
}: {
  phase: ScopePhase
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className={`scope-panel${open ? " is-open" : ""}`} id={phase.id}>
      <h3 className="scope-panel-head">
        <button
          type="button"
          className="scope-panel-btn"
          aria-expanded={open}
          aria-controls={`${phase.id}-body`}
          onClick={onToggle}
        >
          <span className="scope-num">{phase.number}</span>
          <span className="scope-head-text">
            <span className="scope-title">{phase.title}</span>
            <span className="scope-summary">{phase.summary}</span>
          </span>
          <span className="scope-chevron" aria-hidden>
            +
          </span>
        </button>
      </h3>

      <div className="scope-body" id={`${phase.id}-body`} role="region" aria-label={phase.title} hidden={!open}>
        <div className="scope-body-in">
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
      </div>
    </div>
  )
}

export function ScopeAccordion() {
  const [openId, setOpenId] = useState<string>(scopePhases[0]?.id ?? "")

  // Open a phase from the URL hash (deep link) on mount + hash change.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash && scopePhases.some((p) => p.id === hash)) {
        setOpenId(hash)
        // Defer scroll until the panel has expanded.
        window.setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 80)
      }
    }
    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  const toggle = (id: string) => {
    setOpenId((cur) => {
      const next = cur === id ? "" : id
      if (next && typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${next}`)
      }
      return next
    })
  }

  return (
    <div className="scope-accordion">
      {scopePhases.map((phase) => (
        <Panel key={phase.id} phase={phase} open={openId === phase.id} onToggle={() => toggle(phase.id)} />
      ))}
    </div>
  )
}
