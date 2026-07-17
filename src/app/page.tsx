import Link from "next/link"
import { Hero } from "@/components/Hero"
import { RoomsGallery } from "@/components/RoomsGallery"

const doctrine = [
  {
    k: "I",
    title: "The location is the attraction",
    body: "An approximately 5,000-square-foot commercial location, fully transformed into a destination with its own memory, myths and gravity.",
  },
  {
    k: "II",
    title: "Every room is its own world",
    body: "Distinct material languages, lighting scenes and emotional tones make moving through Vintage House feel like moving through chapters.",
  },
  {
    k: "III",
    title: "Music as architecture",
    body: "Sound, acoustics and listening rituals are designed as structure, something you sit inside rather than hear in passing.",
  },
  {
    k: "IV",
    title: "Hidden rooms and reveals",
    body: "Concealed doors, changing thresholds and rewards for curiosity keep the experience alive and give every visit a secret to find.",
  },
  {
    k: "V",
    title: "A living cultural gallery",
    body: "Rotating art, commissions and performance keep Vintage House culturally significant. It is an institution, never a backdrop.",
  },
  {
    k: "VI",
    title: "International by design",
    body: "A protected global doctrine expressed through locally specific art, sound, food and ritual in every city it enters.",
  },
]

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="manifesto" id="doctrine">
        <div className="shell manifesto-grid">
          <div className="manifesto-heading">
            <p className="sec-eyebrow">The creative doctrine</p>
            <h2 className="manifesto-h text-balance">
              A 5,000-square-foot cultural destination, transformed entirely for the Vintage House experience.
            </h2>
          </div>
          <div className="manifesto-detail">
            <p className="manifesto-p text-pretty">
              Vintage House is the name of the concept and the world guests enter, not a literal residence.
              The goal is to secure an approximately 5,000-square-foot commercial location and design every
              room, threshold and sensory detail specifically for the experience.
            </p>
            <dl className="manifesto-facts">
              <div>
                <dt>Target footprint</dt>
                <dd>Approximately 5,000 square feet</dd>
              </div>
              <div>
                <dt>Real estate</dt>
                <dd>Commercial location</dd>
              </div>
              <div>
                <dt>Design approach</dt>
                <dd>Fully transformed for Vintage House</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="doctrine" aria-label="Vintage House creative principles">
        <div className="shell">
          <div className="doctrine-grid">
            {doctrine.map((d) => (
              <article className="crystal-card" key={d.k}>
                <span className="crystal-num">{d.k}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RoomsGallery />

      <section className="invitation">
        <div className="shell invitation-in">
          <p className="sec-eyebrow">The film</p>
          <h2 className="invitation-h text-balance">Step inside, in one unbroken take.</h2>
          <p className="invitation-p text-pretty">
            The full Vintage House concept, captured as a single cinematic experience and presented full-screen,
            with sound. Enter when you are ready to be somewhere else.
          </p>
          <Link className="cine-btn cine-btn-primary" href="/experience">
            Enter the Experience
          </Link>
        </div>
      </section>
    </main>
  )
}
