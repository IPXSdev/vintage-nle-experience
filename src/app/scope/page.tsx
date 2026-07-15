import { ExperienceImage } from '@/components/ExperienceImage'
import { leadExperiences } from '@/lib/experience-program'

const phases = [
  ['01', 'Experience Foundation + Digital MVP', '$18,500', `Recording synthesis, ${leadExperiences.length}-chapter lead experience registry, elevated translations, master doctrine, landing site, virtual-tour framework, client scope, progress portal, production dashboard and executive deck foundation.`],
  ['02', 'Story, Guest Journey + Spatial Programming', '$25,000–$40,000', 'Room hierarchy across the 1960s, 1970s, 1980s, 1990s R&B and icon rooms; ballroom, rooftop and exterior journeys; hidden discovery, circulation, capacity, adjacencies and international adaptation rules.'],
  ['03', 'Priority Experience Design Development', '$45,000–$75,000', 'Detailed concepts for the approved priority experiences—Prince, Michael Jackson, playable console wall, R&B living museum and ballroom—plus materials, furnishings, lighting, art direction and presentation renders.'],
  ['04', 'Experience Engineering + Technology', '$30,000–$60,000', 'Purple Rain false window, reactive dance floor, playable console infrastructure, building projection, in-car audio, zoned sound, acoustics, controls, media and technical coordination briefs.'],
  ['05', 'Brand World, Digital Twin + Launch', '$25,000–$45,000', 'The Bodega retail identity, era-coded menus and cocktails, programming calendar, virtual-tour expansion, launch narrative, photography and film direction, social system and press-facing assets.'],
  ['06', 'Production Oversight + Opening Calibration', '$8,000–$14,000/mo', 'Vendor and fabricator review, design-intent protection, site coordination, installation direction, playable-system testing, punch-list review, soft-opening calibration and launch supervision.'],
]

const phaseOneLines = [
  ['Recorded concept synthesis + lead registry', '$3,000'],
  ['Experience translations + guest journey', '$3,250'],
  ['Landing page + overall digital experience', '$4,250'],
  ['Virtual-tour structure + content architecture', '$2,750'],
  ['Client scope, progress portal + production dashboard', '$3,250'],
  ['Executive deck foundation + presentation narrative', '$2,000'],
]

export default function Scope() {
  return (
    <main>
      <section className="section">
        <div className="shell">
          <div className="eyebrow">/scope · client facing</div>
          <ExperienceImage id="scope-phase-01" sizes="(max-width:800px) 100vw, 1400px" />
          <h2>Protect the concepts. Engineer the experience.</h2>
          <p className="sectionintro">
            Phase 01 establishes the recordings as the source of truth, preserves every named
            experience and translates each one into a usable creative brief. Later phases move
            the approved chapters into spatial design, engineering, production and launch.
          </p>
          <div className="callout">
            <strong>Phase 01 outcome:</strong> one aligned experience program—{leadExperiences.length} lead
            chapters, one connective doctrine and a clear priority sequence for design development.
          </div>
          <table className="table">
            <thead><tr><th>Phase</th><th>Investment</th><th>Deliverables</th><th>Status</th></tr></thead>
            <tbody>
              {phases.map((phase, index) => (
                <tr key={phase[0]}>
                  <td><strong>{phase[0]} · {phase[1]}</strong></td>
                  <td className="price">{phase[2]}</td>
                  <td>{phase[3]}</td>
                  <td><span className={`pill ${index === 0 ? 'active' : ''}`}>{index === 0 ? 'Ready to authorize' : 'Future phase'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="grid">
            <article className="card span6">
              <div className="num">RECOMMENDED AUTHORIZATION</div>
              <div className="metric">$18,500</div>
              <p>Phase 01 creative fee with a 60% start deposit of <strong>$11,100</strong>, 25% milestone of <strong>$4,625</strong>, and 15% completion payment of <strong>$2,775</strong>.</p>
            </article>
            <article className="card span6">
              <div className="num">OPTIONAL PRIORITY SCHEDULE</div>
              <div className="metric">+$4,000</div>
              <p>Accelerated reviews, expanded visual exploration, additional executive presentation polish and two extra consolidated revision rounds.</p>
            </article>
          </div>
          <div className="invoice-block">
            <div className="eyebrow">Phase 01 invoice structure</div>
            {phaseOneLines.map((line) => <div className="invoice-line" key={line[0]}><span>{line[0]}</span><strong>{line[1]}</strong></div>)}
            <div className="invoice-line total"><span>Total Phase 01 creative fee</span><strong>$18,500</strong></div>
          </div>
          <div className="callout">Architecture, engineering stamps, permitting, construction, general contracting, fabrication, AV equipment, furniture purchasing, installation labor, travel and third-party production remain separately contracted.</div>
        </div>
      </section>
    </main>
  )
}
