/**
 * EXPERIENCE ROOM MANIFEST
 * ------------------------
 * Central, typed source of truth for the /experience walkthrough.
 *
 * Pages NEVER hardcode chapter content. They render from this manifest.
 * The type intentionally carries fields for a FUTURE interactive 3D build
 * (modelUrl, cameraPosition, cameraTarget, hotspots, sound/scent profiles) so
 * the same data can drive a React Three Fiber / GLTF walkthrough later with no
 * migration. See docs/experience-roadmap.md.
 *
 * Media policy:
 *  - `heroImage` currently points at generated ATMOSPHERIC PLACEHOLDER covers.
 *  - `gallery`, `video`, `ambientAudio` are empty until approved uploads arrive.
 *  - Real room photography is placed STRICTLY where specified, never auto-placed.
 */

/** A future interactive point inside a 3D room. Unused by the MVP renderer. */
export interface ExperienceHotspot {
  id: string
  label: string
  description?: string
  /** World-space position for the future 3D scene. */
  position?: [number, number, number]
  /** Optional deep link to another room slug or media asset. */
  target?: string
  kind?: "info" | "navigation" | "media" | "reveal"
}

export type RoomStatus = "concept" | "approved" | "in-development" | "complete"

export interface ExperienceRoom {
  id: string
  slug: string
  title: string
  chapter: string
  description: string
  emotionalObjective: string
  heroImage?: string
  gallery?: string[]
  video?: string
  ambientAudio?: string
  /** Future 3D model (GLB/GLTF). When present, a room can render an R3F canvas. */
  modelUrl?: string
  cameraPosition?: [number, number, number]
  cameraTarget?: [number, number, number]
  hotspots?: ExperienceHotspot[]
  lightingProfile?: string
  soundProfile?: string
  scentProfile?: string
  guestRitual?: string
  hiddenDiscovery?: string
  engineeringNotes?: string[]
  internationalNotes?: string[]
  status: RoomStatus
}

export const experienceRooms: ExperienceRoom[] = [
  {
    id: "arrival",
    slug: "arrival",
    title: "Arrival",
    chapter: "Chapter 01",
    description:
      "The street gives nothing away. There is no marquee or velvet rope theatre, only a discreet doorway and the sense that the building itself has been waiting for you. The Vintage House location is the attraction, and the approach is the first act.",
    emotionalObjective:
      "Anticipation and quiet privilege: the feeling of being let in on a secret the rest of the city will never see.",
    heroImage: "/experience/chapters/01-arrival.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Low ambient street light, a single warm pool at the threshold, wet-pavement reflections.",
    soundProfile: "Muffled city, distant bass suggestion, footsteps, the hush before entry.",
    scentProfile: "Night air, rain on stone, a faint warm note escaping the door.",
    guestRitual: "Name given quietly at the door; no lists on display. The city falls away as the door opens.",
    hiddenDiscovery: "The building's real name is never posted. Only regulars know it.",
    engineeringNotes: [
      "Doctrine: The Location Is the Attraction. Arrival is designed as a destination in its own right, not a lobby to somewhere else.",
      "Exterior lighting concealed; no signage lightbox. Discretion is the headline.",
    ],
    internationalNotes: ["Arrival ritual localizes to each market's sense of discretion while protecting the unmarked-door principle."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.6, 8],
    cameraTarget: [0, 1.4, 0],
    hotspots: [],
  },
  {
    id: "threshold",
    slug: "threshold",
    title: "Threshold",
    chapter: "Chapter 02",
    description:
      "A vestibule between two worlds. Heavy velvet, dark lacquer, a single sculptural light. Here the pace changes. Coats are taken, phones are softened and the outside self is set down before Vintage House reveals itself.",
    emotionalObjective: "Transition and surrender: a deliberate decompression from the street into the world within.",
    heroImage: "/experience/chapters/02-threshold.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "One dramatic pendant, deep falloff, brass catching a single highlight.",
    soundProfile: "Room tone thickens; the city is gone; a low warm hum of Vintage House begins.",
    scentProfile: "The signature Vintage scent is introduced here as the olfactory 'logo'.",
    guestRitual: "A host greets by name, sets the tone and hints at what lies ahead without explaining it.",
    hiddenDiscovery: "The curtain conceals more than one direction; not every guest is led the same way.",
    engineeringNotes: [
      "Doctrine: Hidden Rooms, Doors and Reveals begins at the threshold. The first concealed choice is made here.",
      "Show-control cue: venue lighting and audio shift state the moment the inner curtain moves.",
    ],
    internationalNotes: ["Greeting choreography adapts to local hospitality customs; the scent signature stays constant worldwide."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.6, 6],
    cameraTarget: [0, 1.4, 0],
    hotspots: [],
  },
  {
    id: "main-house",
    slug: "main-house",
    title: "Main Salon",
    chapter: "Chapter 03",
    description:
      "The heart of Vintage House. Collected art layered on dark walls, vintage velvet, aged brass and pools of lamplight create the intimacy of a storied private salon inside a purpose-designed commercial venue.",
    emotionalObjective: "Belonging and fascination, with the legendary creative-world energy of a place that has a long, glamorous memory.",
    heroImage: "/experience/chapters/03-main-house.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Layered lamplight, no overheads, warm pools with deep shadow between them.",
    soundProfile: "Curated low music, conversation and the clink of glassware create a room that sounds alive.",
    scentProfile: "Warm woods, a trace of the signature Vintage scent, something faintly smoky.",
    guestRitual: "Guests are invited to wander; nothing is roped off. Vintage House rewards exploration.",
    hiddenDiscovery: "Several artworks rotate; regulars notice what has changed since their last visit.",
    engineeringNotes: [
      "Doctrine: Legendary Creative World. Layered, collected, authentic, with edge.",
      "Doctrine: Every Room Is Its Own World. The main salon sets the material language the other rooms depart from.",
    ],
    internationalNotes: ["Core furniture language travels; local artists and pieces are woven in per market."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.6, 7],
    cameraTarget: [0, 1.4, 0],
    hotspots: [],
  },
  {
    id: "living-gallery",
    slug: "living-gallery",
    title: "Living Gallery",
    chapter: "Chapter 04",
    description:
      "Art is not decoration here. It is programming. A rotating, curated collection under directional light keeps Vintage House culturally alive and gives every visit a reason to be different from the last.",
    emotionalObjective: "Cultural reverence and discovery, with the sense of being inside a living, changing institution.",
    heroImage: "/experience/chapters/04-living-gallery.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Focused gallery spots on dark textured walls, art floating in pools of light.",
    soundProfile: "Hushed, reverent; sound designed to recede so the eye can lead.",
    scentProfile: "Neutral and clean, the gallery is a palate cleanser between sensory rooms.",
    guestRitual: "Occasional artist talks and unveilings; commissions revealed to members first.",
    hiddenDiscovery: "One wall conceals a rotating commission visible only during certain programs.",
    engineeringNotes: [
      "Doctrine: The Living Gallery. Rotating art and installations keep Vintage House culturally significant.",
      "Art placement, AV and lighting calibration coordinated as a recurring program, not a one-time install.",
    ],
    internationalNotes: ["Rotating program features regional artists while maintaining global curatorial standards."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.6, 7],
    cameraTarget: [0, 1.5, 0],
    hotspots: [],
  },
  {
    id: "listening",
    slug: "listening",
    title: "Listening Experiences",
    chapter: "Chapter 05",
    description:
      "A room built around sound. Sculptural horn speakers, acoustically tuned surfaces, a single chair in the sweet spot. Music is treated as architecture, something you sit inside rather than hear in passing.",
    emotionalObjective: "Immersion and awe, with the physical and emotional weight of sound rendered in total fidelity.",
    heroImage: "/experience/chapters/05-listening.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Warm valve-amp glow, near-darkness, light that follows the music.",
    soundProfile: "Reference-grade playback, room-specific sonic identity, curated listening sessions.",
    scentProfile: "Warm electronics, vinyl and leather create the smell of a beloved hi-fi sanctuary.",
    guestRitual: "Hosted listening sessions; a record chosen and played start to finish, uninterrupted.",
    hiddenDiscovery: "A private archive of rare pressings available on request to those who know to ask.",
    engineeringNotes: [
      "Doctrine: Music as Architecture. The room is designed around the sound system, not the reverse.",
      "Spatial audio and acoustic treatment are core experience-engineering deliverables here.",
    ],
    internationalNotes: ["Each location develops its own room-specific sound identity within a shared fidelity standard."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.4, 5],
    cameraTarget: [0, 1.3, 0],
    hotspots: [],
  },
  {
    id: "private-dining",
    slug: "private-dining",
    title: "Private Dining",
    chapter: "Chapter 06",
    description:
      "Dining is one chapter of the evening, not the whole story. A single candlelit table, aged silver and theatrical shadow create a ritual woven into performance and environment rather than staged as the sole event.",
    emotionalObjective: "Intimacy and ceremony, expressed through the warmth of a hosted dinner among a chosen few.",
    heroImage: "/experience/chapters/06-private-dining.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Candlelight and one low chandelier; faces warm, edges of the room in shadow.",
    soundProfile: "Live or curated music at conversation level; service choreographed to the meal's pacing.",
    scentProfile: "The evening's menu, woodsmoke and wine make scent part of the course.",
    guestRitual: "Hosted tastings and menu storytelling; each course introduced as part of a narrative.",
    hiddenDiscovery: "An off-menu course served only when the host senses the table is ready.",
    engineeringNotes: [
      "Doctrine: Dining as One Chapter. Culinary elements are integrated with performance and ritual, not treated as the sole focus.",
      "Service choreography, table presentation and menu storytelling are designed like a scene.",
    ],
    internationalNotes: ["Menus localize to region and season while preserving the ritual of the hosted table."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.5, 6],
    cameraTarget: [0, 1.2, 0],
    hotspots: [],
  },
  {
    id: "artist-salons",
    slug: "artist-salons",
    title: "Artist Salons",
    chapter: "Chapter 07",
    description:
      "A bohemian room for the unplanned, with instruments in the shadows, velvet seating drawn into a circle and walls thick with collected work. This is where the rebellious, creative spirit of Vintage House gathers and improvises.",
    emotionalObjective: "Kinship and spontaneity, with the electric feeling that anything might happen tonight.",
    heroImage: "/experience/chapters/07-artist-salons.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Warm intimate lamplight, a piano half in shadow, pools that invite gathering.",
    soundProfile: "Impromptu performance, spoken word and laughter fill a room that makes its own sound.",
    scentProfile: "Old wood, candle wax and a trace of tobacco memory give the room a sense of the past.",
    guestRitual: "Salons where artists, musicians and guests mix without hierarchy or program.",
    hiddenDiscovery: "The piano bench holds decades of signatures from those who have played here.",
    engineeringNotes: [
      "Doctrine: Private Salons and Hosted Experiences. Invitation-led gatherings create real intimacy.",
      "Flexible power, lighting and audio infrastructure concealed to support impromptu performance.",
    ],
    internationalNotes: ["Salon culture adapts to local creative communities while protecting the no-hierarchy ethos."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.5, 6],
    cameraTarget: [0, 1.3, 0],
    hotspots: [],
  },
  {
    id: "hidden-rooms",
    slug: "hidden-rooms",
    title: "Hidden Rooms & Discoveries",
    chapter: "Chapter 08",
    description:
      "A door within a bookshelf, ajar on a sliver of coloured light. Vintage House rewards curiosity with rooms that are not on any map. Reveals are earned rather than advertised.",
    emotionalObjective: "Wonder and complicity, with the thrill of finding what most guests never will.",
    heroImage: "/experience/chapters/08-hidden-rooms.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Darkness with a single intriguing light leak; the reveal is the lighting event.",
    soundProfile: "A different sonic world bleeds through the gap, hinting at what is inside.",
    scentProfile: "A distinct scent escapes the hidden room, signalling a change of world.",
    guestRitual: "Discovery is unscripted. Staff never point the way, because the experience tests your curiosity.",
    hiddenDiscovery: "At least one room's entrance changes location on a schedule known only to the venue team.",
    engineeringNotes: [
      "Doctrine: Hidden Rooms, Doors and Reveals. Concealed thresholds and room transformation drive the experience.",
      "Kinetic architecture, concealed technology and hidden reveals are engineered as show moments.",
    ],
    internationalNotes: ["Every location carries at least one signature hidden room unique to its city."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.6, 5],
    cameraTarget: [0, 1.4, 0],
    hotspots: [],
  },
  {
    id: "performance",
    slug: "performance",
    title: "Performance & Entertainment",
    chapter: "Chapter 09",
    description:
      "An intimate stage under a single spotlight, a mirror ball scattering light across empty velvet seats. Vintage House is programmed for moments: a voice, a set, a surprise, all engineered around a single feeling.",
    emotionalObjective: "Exhilaration and presence, with the charge of live performance at arm's length.",
    heroImage: "/experience/chapters/09-performance.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "One dramatic spotlight, mirror-ball flecks, deep black surround; light is the set.",
    soundProfile: "Concert-grade sound in an intimate volume; every seat is the best seat.",
    scentProfile: "Warm bodies, haze fluid and a hint of the stage create the smell of a live room.",
    guestRitual: "Unannounced performances; the room transforms from lounge to venue in minutes.",
    hiddenDiscovery: "The stage retracts to reveal a dance floor as the night's mood turns.",
    engineeringNotes: [
      "Doctrine: Emotionally Programmed Rooms. The space is engineered around a single, deliberate feeling.",
      "Show-control logic, room transformation and kinetic elements converge here; reset procedures are core.",
    ],
    internationalNotes: ["Programming features local and touring talent within a consistent production standard."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.5, 8],
    cameraTarget: [0, 1.4, 0],
    hotspots: [],
  },
  {
    id: "terrace",
    slug: "terrace",
    title: "Terrace & Exterior",
    chapter: "Chapter 10",
    description:
      "Open air, held privately. Lush planting, low lounges, lantern light and a fire feature against the city glow create a place to exhale between chapters without ever leaving the world of Vintage House.",
    emotionalObjective: "Release and afterglow, with intimacy under the open sky while remaining entirely within the spell.",
    heroImage: "/experience/chapters/10-terrace.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Warm string and lantern light, firelight, the city as a distant glow.",
    soundProfile: "Softened music, night air and conversation lower the volume and raise the intimacy.",
    scentProfile: "Night-blooming planting, woodsmoke from the fire feature, cool air.",
    guestRitual: "A quiet drink under the sky; the terrace is where confidences are exchanged.",
    hiddenDiscovery: "A concealed corner seats only two. It is the most requested spot in the venue.",
    engineeringNotes: [
      "Doctrine: Every Room Is Its Own World extends outdoors. The terrace has a distinct climate and mood.",
      "Exterior lighting, weather strategy and acoustic control engineered for year-round intimacy.",
    ],
    internationalNotes: ["Terrace planting and climate strategy adapt to each city's environment and skyline."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.6, 8],
    cameraTarget: [0, 1.4, 0],
    hotspots: [],
  },
  {
    id: "departure",
    slug: "departure",
    title: "Departure",
    chapter: "Chapter 11",
    description:
      "Leaving is designed too. A warm glow recedes behind you, the night ahead feels different, and Vintage House sends you off with a small ritual that guarantees you will think about coming back before you reach the corner.",
    emotionalObjective: "Longing and loyalty, with the bittersweet afterglow that turns a visit into a habit.",
    heroImage: "/experience/chapters/11-departure.png",
    gallery: [],
    video: "",
    ambientAudio: "",
    lightingProfile: "Warm light behind, dark street ahead, a lingering reflection at the door.",
    soundProfile: "The sound of Vintage House fades as the door closes; the city returns, changed.",
    scentProfile: "The signature Vintage scent follows you out on your coat, becoming a memory you carry home.",
    guestRitual: "A parting token or word; the invitation to return is implicit, never transactional.",
    hiddenDiscovery: "Some guests leave with something they didn't know they were given.",
    engineeringNotes: [
      "Doctrine: International Experience System. The departure ritual is a repeatable, protected core moment.",
      "Repeat-visit strategy is engineered into the farewell; the last impression is the strongest.",
    ],
    internationalNotes: ["The farewell ritual is standardized worldwide so the brand memory is identical in every city."],
    status: "concept",
    modelUrl: "",
    cameraPosition: [0, 1.6, 8],
    cameraTarget: [0, 1.4, 0],
    hotspots: [],
  },
]

/** Ordered slugs, handy for directional navigation. */
export const roomOrder = experienceRooms.map((r) => r.slug)

export function getRoomBySlug(slug: string): ExperienceRoom | undefined {
  return experienceRooms.find((r) => r.slug === slug)
}
