import type { Metadata } from "next"
import Image from "next/image"
import { ScopeAccordion } from "@/components/ScopeAccordion"
import { scopePhases } from "@/lib/scope-phases"

export const metadata: Metadata = {
  title: "Scope of Work | VINTAGE",
  description:
    "The phased creative and experience engagement for Vintage House, from defining a 5,000-square-foot commercial site brief through opening.",
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
            The work moves in deliberate phases, from defining the commercial location criteria and
            testing candidate sites through rooms, engineering and opening. Each phase has its own purpose,
            deliverables and approval gate. Tap into any phase to read its full remit and move through the
            engagement in sequence.
          </p>
          <div className="scope-meta">
            <span>
              <strong>{scopePhases.length}</strong> phases
            </span>
            <span>Site Brief to Opening</span>
            <span>Gated approvals</span>
          </div>
        </div>

        <figure className="scope-still">
          <Image
            src="/images/vintage-bodega.webp"
            alt="The Bodega at VINTAGE, a warm, golden corner shop with an ornate gilded wood counter, a clerk in shirt and tie, red-shaded lamps and shelves of bottles and collectibles under lamplight."
            fill
            priority
            sizes="(max-width: 900px) 100vw, 1200px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <figcaption className="scope-still-cap">
            The finished world. Every phase exists to deliver rooms like this, resolved to the last detail.
          </figcaption>
        </figure>
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
              creative direction, experience design and production oversight of the Vintage House venue.
            </p>
          </aside>
        </div>
      </section>
    </main>
  )
}
