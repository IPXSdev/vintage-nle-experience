import Image from "next/image"

/**
 * Editorial "rooms" sequence for the landing page. The four approved
 * environments are presented with alternating scale, placement and crop to
 * create cinematic rhythm — never a uniform four-card grid. Focal points are
 * preserved across breakpoints via per-image objectPosition.
 *
 * Suggested narrative order (per brief):
 *   1. Lounge Area — broad introductory lifestyle moment
 *   2. 90's Room  — nostalgia and cultural storytelling
 *   3. Game Room  — interactive entertainment
 *   4. The Bodega — retail, collectibles, the final discovery
 */
type Room = {
  src: string
  alt: string
  eyebrow: string
  title: string
  body: string
  /** layout variant drives scale + text placement */
  variant: "wide" | "left" | "right"
  focus: string
}

const ROOMS: Room[] = [
  {
    src: "/images/vintage-lounge.webp",
    alt: "The Lounge Area at VINTAGE — a candlelit salon with distressed terracotta walls, a mauve velvet sofa and guests in evening dress gathered around a marble table.",
    eyebrow: "The arrival",
    title: "The Lounge",
    body: "The first room you enter and the last you want to leave — candlelight on old plaster, low velvet seating and the hum of a gathering already in motion. It sets the register for the entire house: intimate, collected, alive.",
    variant: "wide",
    focus: "center",
  },
  {
    src: "/images/vintage-90s-room.webp",
    alt: "The 90's Room at VINTAGE — a burgundy music-history lounge with stacked vintage televisions, gold records, framed artist portraits and a plastic-wrapped leather sofa.",
    eyebrow: "The memory",
    title: "The 90's Room",
    body: "A shrine to a golden era of sound and style — walls of gold records and portraits, a wall of glowing tube screens, and the plastic-wrapped sofa that made a living room a sanctuary. Culture, remembered exactly as it felt.",
    variant: "left",
    focus: "center",
  },
  {
    src: "/images/vintage-game-room.webp",
    alt: "The Game Room at VINTAGE — a neon-lit arcade lounge with cabinets, CRT televisions running retro games, bean-bag seating and shelves of collectible consoles above a city skyline.",
    eyebrow: "The play",
    title: "The Game Room",
    body: "Where the house lets its guard down — arcade light, cathode glow and low seating pulled around a wall of screens. Competition, nostalgia and late-night ease, engineered as a room you fall into for hours.",
    variant: "right",
    focus: "center",
  },
  {
    src: "/images/vintage-bodega.webp",
    alt: "The Bodega at VINTAGE — a warm, golden corner shop with an ornate gilded wood counter, a clerk in shirt and tie, red-shaded lamps, shelves of bottles and collectibles and a glowing display fridge.",
    eyebrow: "The discovery",
    title: "The Bodega",
    body: "The final turn: a jewel-box shop of bottles, artifacts and curiosities under warm lamplight, tended like a private collection. The house sends you off with something found — a keepsake from a world you were let into.",
    variant: "left",
    focus: "center",
  },
]

export function RoomsGallery() {
  return (
    <section className="rooms" aria-label="The rooms of VINTAGE">
      <div className="shell">
        <p className="sec-eyebrow">Every room is its own world</p>
        <h2 className="rooms-h text-balance">
          A residence of distinct rooms — each a world with its own light, sound and ritual.
        </h2>

        <div className="rooms-flow">
          {ROOMS.map((room, i) => (
            <article className={`room room-${room.variant}`} key={room.src}>
              <div className="room-media">
                <Image
                  src={room.src || "/placeholder.svg"}
                  alt={room.alt}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                  sizes={
                    room.variant === "wide"
                      ? "(max-width: 800px) 100vw, 1200px"
                      : "(max-width: 800px) 100vw, 640px"
                  }
                  style={{ objectFit: "cover", objectPosition: room.focus }}
                />
                <span className="room-veil" aria-hidden="true" />
              </div>
              <div className="room-copy">
                <p className="room-eyebrow">{room.eyebrow}</p>
                <h3 className="room-title text-balance">{room.title}</h3>
                <p className="room-body text-pretty">{room.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
