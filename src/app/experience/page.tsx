import type { Metadata } from "next"
import { ExperienceWalkthrough } from "@/components/ExperienceWalkthrough"

export const metadata: Metadata = {
  title: "The Experience — VINTAGE",
  description:
    "A cinematic, chapter-by-chapter walkthrough of the VINTAGE residence — from the unmarked arrival to the lingering departure. Built to grow into a fully interactive spatial tour.",
}

export default function ExperiencePage() {
  return (
    <main className="xp-page">
      <section className="xp-hero below-nav">
        <div className="xp-hero-bg" aria-hidden />
        <div className="shell xp-hero-in">
          <p className="sec-eyebrow">The walkthrough</p>
          <h1 className="xp-hero-h text-balance">Move through the house, chapter by chapter.</h1>
          <p className="xp-hero-p text-pretty">
            Every room is its own world. What follows is the full emotional journey of the residence —
            an experiential blueprint engineered to evolve into a fully interactive, three-dimensional
            tour. Use the chapters, arrows or your keyboard to explore.
          </p>
        </div>
      </section>

      <section className="xp-wrap">
        <div className="shell">
          <ExperienceWalkthrough />
        </div>
      </section>
    </main>
  )
}
