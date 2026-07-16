import Link from "next/link"
import { Hero } from "@/components/Hero"
import { RoomsGallery } from "@/components/RoomsGallery"

const doctrine = [
  {
    k: "I",
    title: "The house is the attraction",
    body: "Not a themed restaurant or a club, but a residence people travel to enter — a world with its own memory, myths and gravity.",
  },
  {
    k: "II",
    title: "Every room is its own world",
    body: "Distinct material languages, lighting scenes and emotional tones, so moving through the house feels like moving through chapters.",
  },
  {
    k: "III",
    title: "Music as architecture",
    body: "Sound, acoustics and listening rituals are designed as structure — something you sit inside rather than hear in passing.",
  },
  {
    k: "IV",
    title: "Hidden rooms and reveals",
    body: "Concealed doors, changing thresholds and rewards for curiosity keep the house alive and give every visit a secret to find.",
  },
  {
    k: "V",
    title: "A living cultural gallery",
    body: "Rotating art, commissions and performance keep the residence culturally significant — an institution, never a backdrop.",
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

      <section className="manifesto">
        <div className="shell">
          <p className="sec-eyebrow">The creative doctrine</p>
          <h2 className="manifesto-h text-balance">
            A house of culture, sound, art and transformation — where the building itself is the
            performance.
          </h2>
          <p className="manifesto-p text-pretty">
            VINTAGE is conceived as an immersive residence: cinematic, tactile, rebellious and highly
            collected. It borrows nothing from hotel lobbies or corporate luxury. Instead it feels
            like the home of someone impossibly interesting — velvet and crystal, smoke and mirrored
            light, art on every wall and a secret behind more than one door.
          </p>
        </div>
      </section>

      <section className="doctrine">
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
            The full residence, captured as a single cinematic experience — presented full-screen,
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
