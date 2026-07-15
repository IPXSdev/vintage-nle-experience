import type { Metadata } from "next"
import { ScopeAccordion } from "@/components/ScopeAccordion"
import { scopePhases } from "@/lib/scope-phases"

export const metadata: Metadata = {
  title: "Scope of Work — VINTAGE",
  description:
    "The phased creative and experience engagement for the VINTAGE residence — an editorial map of every phase, deliverable and approval gate that protects the vision from foundation to opening.",
}

export default function ScopePage() {
  return (
    <main className="scope-page">
      <section className="scope-hero below-nav">
        <div className="scope-hero-bg" aria-hidden />
        <div className="shell scope-hero-in">
          <p className="sec-eyebrow">Scope of work · client facing</p>
          <h1 className="scope-hero-h text-balance">
            A phased engagement built to protect the vision at every gate.
          </h1>
          <p className="scope-hero-p text-pretty">
            The work moves in deliberate phases — each with its own purpose, deliverables and approval
            gate — so the creative foundation, the rooms, the engineering and the global rollout are
            confirmed in the right order. Expand any phase to read its full remit.
          </p>
          <div className="scope-meta">
            <span>
              <strong>{scopePhases.length}</strong> phases
            </span>
            <span>Foundation → Opening</span>
            <span>Gated approvals</span>
          </div>
        </div>
      </section>

      <section className="scope-wrap">
        <div className="shell">
          <ScopeAccordion />

          <aside className="scope-exclusions">
            <p className="scope-kicker">Not included in the creative &amp; experience scope</p>
            <p className="scope-para">
              Architecture, engineering stamps, permitting, construction and general contracting,
              food and beverage operations, licensing, and any third-party fabrication or
              procurement costs are engaged and contracted separately. This scope governs the
              creative direction, experience design and production oversight of the residence.
            </p>
          </aside>
        </div>
      </section>
    </main>
  )
}
