import { experienceDoctrine, leadExperiences } from '@/lib/experience-program'

const rows = [
  ['Recorded lead experience registry', 'Creative Director', 'Integrated', 'Confirm the 14-chapter priority order'],
  ['Prince Room · Purple Rain window', 'Experience / Media', 'Active', 'Develop false-window media and environmental cue brief'],
  ['Michael Jackson Room · reactive floor', 'Lighting / Interactive', 'Active', 'Define tile response, control scenes and performance mode'],
  ['Video Game Room · console wall', 'Technology / Curatorial', 'Active', 'Inventory hardware, connections and playable rotation plan'],
  ['1990s R&B living museum', 'Art / Music', 'Active', 'Build acquisition, loan and listening-library brief'],
  ['1960s–1980s era rooms', 'Interiors / Culture', 'Discovery', 'Separate period objects, sound and service language by decade'],
  ['Grand Ballroom + dance floor', 'Spatial / Production', 'Active', 'Confirm capacity, changeover and show infrastructure'],
  ['Drive-in movie nights', 'Media / Operations', 'Technical review', 'Test projection surface and in-car audio options'],
  ['Rooftop concerts + private events', 'Hospitality / Production', 'Discovery', 'Confirm noise, egress, capacity and event modes'],
  ['Smoking lounge + humidor', 'Hospitality / MEP', 'Discovery', 'Validate code, ventilation and optional retail layer'],
  ['The Bodega + menu theater', 'Brand / Culinary', 'Concept', 'Develop retail edit and legally safe service prototypes'],
  ['Property plans + code constraints', 'Client / Architect', 'Blocked', 'Receive verified plans and site data'],
  ['Commercial scope + invoice', 'PM / Finance', 'Ready', 'Issue revised $18,500 Phase 01 authorization'],
]

export default function Dashboard() {
  return (
    <main>
      <section className="section">
        <div className="shell">
          <div className="eyebrow">/production dashboard · internal</div>
          <h2>Experience command center.</h2>
          <p className="sectionintro">The recorded concepts lead production. The connective doctrine protects quality and consistency across the house.</p>
          <div className="grid">
            <article className="card span4">
              <div className="num">PHASE HEALTH</div><div className="metric">ON TRACK</div>
              <p>The full concept registry is captured. Verified property information is now the primary spatial dependency.</p>
            </article>
            <article className="card span4">
              <div className="num">EXPERIENCE ARCHITECTURE</div><div className="metric">{leadExperiences.length} + {experienceDoctrine.length}</div>
              <p>{leadExperiences.length} lead experiences supported by {experienceDoctrine.length} connective principles.</p>
            </article>
            <article className="card span4">
              <div className="num">NEXT COMMERCIAL ACTION</div><div className="metric">$11,100</div>
              <p>Issue Phase 01 scope and collect the 60% start deposit.</p>
            </article>
          </div>
          <table className="table">
            <thead><tr><th>Lead workstream</th><th>Owner</th><th>Status</th><th>Next action</th></tr></thead>
            <tbody>{rows.map((row) => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td>{row[1]}</td><td><span className="pill">{row[2]}</span></td><td>{row[3]}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
