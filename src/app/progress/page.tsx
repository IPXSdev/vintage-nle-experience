import { leadExperiences } from '@/lib/experience-program'

const items = [
  ['Recording synthesis', 'Complete', 100, 'Both discovery recordings translated into one source-of-truth brief.'],
  [`${leadExperiences.length} lead experience registry`, 'Integrated', 100, 'Every named room, activation and hospitality ritual is now represented.'],
  ['Prince + Michael Jackson icon rooms', 'In development', 63, 'Atmospheric window and responsive floor translated into spatial and technical systems.'],
  ['Playable console wall + game room', 'In development', 59, 'Hardware archive, screen plan, playable infrastructure and social game layer defined.'],
  ['1960s–1990s era-room collection', 'In development', 46, 'Four distinct decades organized around sound, objects, service and emotional tone.'],
  ['1990s R&B living museum', 'In development', 57, 'Playable record library, memorabilia rotation and sit-on-the-art hero moment established.'],
  ['Ballroom + dance floor', 'In development', 51, 'Central room transformation, show capability and chandelier moment under definition.'],
  ['Drive-in + rooftop live program', 'Technical discovery', 35, 'Exterior projection, in-car audio, rooftop capacity and programming dependencies mapped.'],
  ['Smoking lounge, Bodega + menu theater', 'Concept development', 40, 'Members ritual, cultural retail and provocative service language carried forward.'],
  ['Phase 01 scope + pricing', 'Ready', 100, 'Commercial structure preserved and aligned to the recording-led work plan.'],
]

export default function Progress() {
  return (
    <main>
      <section className="section">
        <div className="shell">
          <div className="eyebrow">/progress · client view</div>
          <h2>The concepts are now the work plan.</h2>
          <p className="sectionintro">
            Progress follows the actual rooms and activations from the recordings. The broader
            experience system supports them; it no longer stands in for them.
          </p>
          <div className="grid">
            {items.map((item, index) => (
              <article className="card span6" key={item[0]}>
                <div className="card-topline">
                  <div className="num">WORKSTREAM {String(index + 1).padStart(2, '0')}</div>
                  <span className="pill active">{item[1]}</span>
                </div>
                <h3>{item[0]}</h3>
                <p>{item[3]}</p>
                <div className="bar"><span style={{ width: `${item[2]}%` }} /></div>
                <p className="muted">{item[2]}% definition complete</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
