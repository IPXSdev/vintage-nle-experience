import type { ExperienceAssetId } from '@/lib/experience-assets'

export type LeadExperience = {
  id: string
  number: string
  title: string
  category: string
  recordedConcept: string
  elevatedTranslation: string
  signatures: string[]
  status: number
  assetId: ExperienceAssetId
}

export const leadExperiences: LeadExperience[] = [
  {
    id: 'sixties-room',
    number: '01',
    title: '1960s Vintage Room',
    category: 'Era Room',
    recordedConcept: 'A room fully rooted in the 1960s—not a generic retro backdrop.',
    elevatedTranslation: 'A transportive social salon built through period sound, collected furniture, tactile materials, service rituals and cultural artifacts that make the decade feel inhabited.',
    signatures: ['Period listening ritual', 'Collected furnishings', 'Era-specific service'],
    status: 44,
    assetId: 'sixties-room',
  },
  {
    id: 'seventies-room',
    number: '02',
    title: '1970s Room',
    category: 'Era Room',
    recordedConcept: 'A distinct 1970s environment with its own attitude and visual language.',
    elevatedTranslation: 'A warm, cinematic room of analog sound, deep textures and lived-in glamour—anchored by period objects and a service rhythm that feels like a private house party.',
    signatures: ['Analog audio', 'Deep texture palette', 'House-party energy'],
    status: 42,
    assetId: 'seventies-room',
  },
  {
    id: 'eighties-room',
    number: '03',
    title: '1980s Room',
    category: 'Era Room',
    recordedConcept: 'A dedicated 1980s room, clearly separated from every other decade.',
    elevatedTranslation: 'A high-energy chapter driven by bold light, music-video culture, collectible technology and programmed visual cues—expressive without becoming a costume set.',
    signatures: ['Programmed lighting', 'Music-video culture', 'Collectible technology'],
    status: 39,
    assetId: 'eighties-room',
  },
  {
    id: 'nineties-rnb-room',
    number: '04',
    title: '1990s R&B Living Museum',
    category: 'Era Room · Living Gallery',
    recordedConcept: 'A museum-like R&B room with record players, memorabilia, wall art, roped-off displays and a 1970s couch wrapped in plastic that guests can actually sit on.',
    elevatedTranslation: 'A playable archive instead of a static exhibit: high-fidelity listening, rotating loans, object stories and one rule-breaking hero moment—the protected couch becomes part of the guest experience.',
    signatures: ['Playable record library', 'Rotating memorabilia', 'Sit-on-the-art couch'],
    status: 57,
    assetId: 'nineties-rnb-room',
  },
  {
    id: 'prince-room',
    number: '05',
    title: 'The Prince Room',
    category: 'Icon Room',
    recordedConcept: 'A Prince room with a wall screen disguised as a window, showing purple rain falling outside.',
    elevatedTranslation: 'A sensual, cinematic salon where the false window, violet weather, layered sound and controlled reflections turn “Purple Rain” into an atmospheric event—not a literal tribute set.',
    signatures: ['Purple Rain window', 'Violet weather cues', 'Intimate listening salon'],
    status: 64,
    assetId: 'prince-room',
  },
  {
    id: 'michael-jackson-room',
    number: '06',
    title: 'The Michael Jackson Room',
    category: 'Icon Room',
    recordedConcept: 'A Michael Jackson room with a floor of tiles that light up beneath guests, referencing the cinematic dance-floor moment in the recording.',
    elevatedTranslation: 'A responsive performance room where footsteps trigger choreographed light and sound scenes, inviting guests to move through the space while preserving a polished, high-design finish.',
    signatures: ['Reactive light-up floor', 'Movement-triggered cues', 'Performance-ready sound'],
    status: 61,
    assetId: 'michael-jackson-room',
  },
  {
    id: 'rock-room',
    number: '07',
    title: 'Lenny Kravitz–Style Rock Room',
    category: 'Artist Residence Room',
    recordedConcept: 'A rock-and-roll room with the layered, residential cool associated with Lenny Kravitz.',
    elevatedTranslation: 'A collector-musician’s private den: tactile, sexy and slightly raw, with instruments, listening furniture, authentic objects and the energy of a room where music could happen at any moment.',
    signatures: ['Collector residence', 'Instruments as objects', 'Live-session potential'],
    status: 38,
    assetId: 'rock-room',
  },
  {
    id: 'video-game-room',
    number: '08',
    title: 'Video Game Room + Playable Console Wall',
    category: 'Interactive Room',
    recordedConcept: 'Two tall arcade machines, multiple gaming screens and a full wall of consoles—with every console wired, connected and playable—plus elevated board games, Monopoly boards, wooden checkers and crystal chess.',
    elevatedTranslation: 'A living history of play where hardware is displayed with museum discipline but remains usable. Curated tournaments, saved setups and premium game tables turn the room into both archive and social club.',
    signatures: ['Every console playable', 'Two hero arcade cabinets', 'Crystal chess + premium games'],
    status: 59,
    assetId: 'video-game-room',
  },
  {
    id: 'grand-ballroom',
    number: '09',
    title: 'Grand Ballroom + Dance Floor',
    category: 'Central Event Room',
    recordedConcept: 'The largest central room: a ballroom with a chandelier and a true dance floor.',
    elevatedTranslation: 'The house’s collective release valve—engineered to shift from elegant dining to dancing, performance and headline events through flexible furniture, show lighting and serious sound.',
    signatures: ['Statement chandelier', 'True dance floor', 'Dinner-to-show transformation'],
    status: 51,
    assetId: 'grand-ballroom',
  },
  {
    id: 'drive-in-nights',
    number: '10',
    title: 'Outdoor Drive-In Movie Nights',
    category: 'Exterior Program',
    recordedConcept: 'Movies projected from the parking lot onto the building, with the soundtrack delivered directly to guests in their cars.',
    elevatedTranslation: 'A recurring nighttime ritual with a building-scale screen, curated film calendar, car-side hospitality and an in-car audio system selected after technical testing for reliable guest access.',
    signatures: ['Building-scale projection', 'In-car audio', 'Car-side service'],
    status: 34,
    assetId: 'drive-in-nights',
  },
  {
    id: 'smoking-lounge',
    number: '11',
    title: 'Private Smoking Lounge + Humidor',
    category: 'Members Ritual',
    recordedConcept: 'An exclusive smoking lounge with a humidor and the option to extend into a cigar shop.',
    elevatedTranslation: 'A controlled, discreet club room with collection-grade storage, personal lockers, specialist service and dedicated ventilation; the cigar retail component remains an optional commercial layer.',
    signatures: ['Walk-in humidor', 'Private member service', 'Optional cigar retail'],
    status: 31,
    assetId: 'smoking-lounge',
  },
  {
    id: 'bodega',
    number: '12',
    title: 'The Bodega',
    category: 'Gift Shop · Retail',
    recordedConcept: 'The gift shop is called “The Bodega.”',
    elevatedTranslation: 'A tightly curated exit ritual carrying limited apparel, records, artist editions, house objects and surprise drops—designed to feel like a cultural store, never a souvenir counter.',
    signatures: ['Limited drops', 'Records + editions', 'Exit ritual'],
    status: 47,
    assetId: 'bodega',
  },
  {
    id: 'rooftop-program',
    number: '13',
    title: 'Rooftop Lounge + Live Program',
    category: 'Performance · Private Events',
    recordedConcept: 'A rooftop lounge for concerts, pop-ups, live music, special nights and small private events.',
    elevatedTranslation: 'A skyline stage with an authored programming calendar, flexible hospitality zones and controlled-capacity performances that keep the property alive beyond dinner service.',
    signatures: ['Rooftop concerts', 'Pop-up calendar', 'Private event mode'],
    status: 36,
    assetId: 'rooftop-program',
  },
  {
    id: 'menu-theater',
    number: '14',
    title: 'Era-Coded Menu Theater',
    category: 'Food + Beverage Ritual',
    recordedConcept: 'Cocktails named for eras, provocative powdered-sugar presentation and portions described with street-weight language such as “a kilo of shrimp” and “an eighth of French fries,” all referencing the cocaine/crack era.',
    elevatedTranslation: 'A witty, controlled service language that references the era through naming, vessels and tableside reveals. The provocation stays theatrical while recipes, messaging and execution remain operationally safe.',
    signatures: ['Era-named cocktails', 'Street-weight menu language', 'Tableside reveal'],
    status: 43,
    assetId: 'menu-theater',
  },
]

export const experienceDoctrine = [
  {
    title: 'The House Is the Attraction',
    description: 'The individual rooms combine into one destination people travel to enter—not a restaurant with decorative themes.',
  },
  {
    title: 'Every Room Owns a World',
    description: 'Each room receives its own emotion, soundtrack, materials, scent, service behavior and reason to return.',
  },
  {
    title: 'Music Is Architecture',
    description: 'Audio, acoustics, live performance and listening rituals actively determine how each environment behaves.',
  },
  {
    title: 'The Gallery Stays Alive',
    description: 'Memorabilia, art, objects and commissions rotate so the house evolves after opening night.',
  },
  {
    title: 'Discovery Is Designed',
    description: 'Hidden thresholds, unexpected reveals and changing programs make repeat visits structurally different.',
  },
  {
    title: 'Hospitality Becomes Ritual',
    description: 'Food, drink, performance, projection and hosted access are choreographed as part of each story.',
  },
  {
    title: 'Creative Residence Energy',
    description: 'The rooms feel collected, intimate and personal—like entering an artist’s legendary private home.',
  },
  {
    title: 'Global Rules, Local Culture',
    description: 'The protected experience system can travel while art, sound, food and cultural voices localize by market.',
  },
]

export const featuredExperienceIds = [
  'prince-room',
  'michael-jackson-room',
  'video-game-room',
  'nineties-rnb-room',
  'grand-ballroom',
  'rooftop-program',
]

export const featuredExperiences = leadExperiences.filter((experience) =>
  featuredExperienceIds.includes(experience.id),
)
