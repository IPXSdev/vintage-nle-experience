import Link from 'next/link'
import { ArrowUpRight, Eye, Layers3, Radio, Sparkles, Globe2, Music2 } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">A destination hospitality world</div>
          <h1>THE HOUSE IS THE ATTRACTION.</h1>
          <p>A living cultural residence where every room becomes its own world of music, art, dining, performance, discovery and private ritual.</p>
          <div className="actions">
            <Link className="btn primary" href="/full-experience">Enter the full experience <ArrowUpRight size={16} /></Link>
            <Link className="btn" href="/scope">Review revised Phase 01 scope</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="eyebrow">The fixed creative doctrine</div>
          <h2>Not a themed restaurant. A world people travel to enter.</h2>
          <p className="sectionintro">The digital MVP now reflects the specific experience program from discovery and gives the client one place to understand the vision, scope, progress and engineering decisions.</p>
          <div className="grid">
            <article className="card span4"><Sparkles /><h3>Constant Discovery</h3><p>Hidden thresholds, changing environments and unexpected reveals create reasons to return.</p></article>
            <article className="card span4"><Music2 /><h3>Music as Architecture</h3><p>Sound, acoustics, eras and listening rituals actively shape the identity of every room.</p></article>
            <article className="card span4"><Globe2 /><h3>International by Design</h3><p>A protected global doctrine with culturally specific art, food, sound and programming by market.</p></article>
            <article className="card span4"><Eye /><h3>Virtual Experience</h3><p>A cinematic digital twin that grows into the interactive tour, sales tool and expansion reference.</p></article>
            <article className="card span4"><Layers3 /><h3>Client Scope</h3><p>Clear phases, approval gates, revised fees, exclusions and the exact Phase 01 invoice structure.</p></article>
            <article className="card span4"><Radio /><h3>Production Control</h3><p>Experience systems, dependencies, owners, decisions, risks and next actions in one command center.</p></article>
          </div>
        </div>
      </section>
    </main>
  )
}
