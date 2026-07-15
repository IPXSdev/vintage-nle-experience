import { ExperienceImage } from '@/components/ExperienceImage'
import { experienceDoctrine, leadExperiences } from '@/lib/experience-program'

export default function FullExperience() {
  return (
    <main>
      <section className="section experience-hero">
        <div className="shell">
          <div className="eyebrow">/full experience · recording-led program</div>
          <h2>The concepts are the headlines.</h2>
          <p className="sectionintro">
            These are the specific rooms, rituals and activations named in the discovery
            recordings. Every one remains visible as a lead experience, with a second layer
            translating the raw idea into a spatial, technical and hospitality brief.
          </p>
          <div className="callout">
            <strong>Source-of-truth rule:</strong> elevation adds depth, coherence and
            operational intelligence. It does not replace a named room with a generic theme.
          </div>

          <div className="experience-index" aria-label="Lead experience index">
            {leadExperiences.map((experience) => (
              <a href={`#${experience.id}`} key={experience.id}>
                <span>{experience.number}</span>{experience.title}
              </a>
            ))}
          </div>

          <div className="experience-stack">
            {leadExperiences.map((experience) => (
              <article className="experience-chapter" id={experience.id} key={experience.id}>
                <div className="experience-chapter-meta">
                  <div className="num">{experience.number} · {experience.category}</div>
                  <span className="pill active">Lead experience</span>
                </div>
                <ExperienceImage id={experience.assetId} sizes="(max-width:800px) 100vw, 46vw" />
                <div className="experience-chapter-body">
                  <div>
                    <h3>{experience.title}</h3>
                    <div className="concept-block recorded-block">
                      <div className="concept-label">From the recording</div>
                      <p>{experience.recordedConcept}</p>
                    </div>
                  </div>
                  <div>
                    <div className="concept-block elevated-block">
                      <div className="concept-label">Elevated translation</div>
                      <p>{experience.elevatedTranslation}</p>
                    </div>
                    <div className="system-list">
                      {experience.signatures.map((signature) => <span key={signature}>{signature}</span>)}
                    </div>
                    <div className="bar"><span style={{ width: `${experience.status}%` }} /></div>
                    <p className="muted">Definition + engineering readiness · {experience.status}%</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section doctrine-section">
        <div className="shell">
          <div className="eyebrow">The connective experience system</div>
          <h2>What makes fourteen chapters feel like one world.</h2>
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
