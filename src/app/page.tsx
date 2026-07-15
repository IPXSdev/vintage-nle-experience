import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ExperienceImage } from '@/components/ExperienceImage'
import { experienceDoctrine, featuredExperiences, leadExperiences } from '@/lib/experience-program'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <ExperienceImage id="home-hero" className="hero-image" priority sizes="100vw" />
        <div className="shell">
          <div className="eyebrow">VINTAGE × NLE · A house of eras, icons and rituals</div>
          <h1>EVERY ROOM IS A HEADLINER.</h1>
          <p>
            Prince in the purple rain. Michael Jackson beneath a reactive floor. A wall of
            playable consoles. Four decades of rooms. One living cultural destination.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/full-experience">
              Explore all {leadExperiences.length} lead experiences <ArrowUpRight size={16} />
            </Link>
            <Link className="btn" href="/scope">Review Phase 01 scope</Link>
          </div>
          <div className="experience-marquee" aria-label="Lead experience preview">
            {leadExperiences.slice(0, 9).map((experience) => (
              <span key={experience.id}>{experience.title}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section foundation-section">
        <div className="shell">
          <div className="split-heading">
            <div>
              <div className="eyebrow">The recordings are the foundation</div>
              <h2>The concepts lead. The system elevates.</h2>
            </div>
            <p className="sectionintro">
              The specific rooms and activations are not examples or mood-board references.
              They are the project’s lead experiences. Each one is preserved, then expanded
              into a complete spatial, technical and hospitality world.
            </p>
          </div>
          <div className="grid lead-preview-grid">
            {featuredExperiences.map((experience, index) => (
              <article className={`card lead-preview ${index < 2 ? 'span6' : 'span3'}`} key={experience.id}>
                <div className="card-topline">
                  <div className="num">{experience.number} · LEAD EXPERIENCE</div>
                  <span className="pill active">Recorded</span>
                </div>
                <h3>{experience.title}</h3>
                <p>{experience.recordedConcept}</p>
                <Link className="text-link" href={`/full-experience#${experience.id}`}>
                  See the elevated translation <ArrowUpRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section doctrine-section">
        <div className="shell">
          <div className="eyebrow">The elevation layer</div>
          <h2>One house. A system of unforgettable worlds.</h2>
          <p className="sectionintro">
            These principles connect the named experiences into one authored destination
            without flattening their individual identities.
          </p>
          <div className="doctrine-grid">
            {experienceDoctrine.map((principle, index) => (
              <article className="doctrine-item" key={principle.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{principle.title}</h3><p>{principle.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
