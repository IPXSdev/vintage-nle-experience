/**
 * CENTRAL IMAGE MANIFEST
 * ----------------------
 * One stable, semantic slot for every lead experience. Pages never hardcode
 * image paths. Until an approved `src` is provided, the site stays text-only.
 *
 * File convention:
 *   public/experience/<route>/<asset-id>.<ext>
 */

export type ApprovalStatus = 'awaiting' | 'review' | 'approved'

export type FocalPoint =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export interface ExperienceAsset {
  id: string
  route: '/' | '/full-experience' | '/scope' | '/progress' | '/dashboard'
  chapter: string
  src: string
  alt: string
  focalPoint: FocalPoint
  approvalStatus: ApprovalStatus
  width?: number
  height?: number
}

const awaiting = (id: string, chapter: string, alt: string): ExperienceAsset => ({
  id,
  route: '/full-experience',
  chapter,
  src: '',
  alt,
  focalPoint: 'center',
  approvalStatus: 'awaiting',
})

export const experienceAssets = {
  'home-hero': {
    id: 'home-hero',
    route: '/',
    chapter: 'Landing · Hero backdrop',
    src: '',
    alt: 'The VINTAGE house at night, presented as one destination of many worlds.',
    focalPoint: 'center',
    approvalStatus: 'awaiting',
  },
  'sixties-room': awaiting('sixties-room', '01 · 1960s Vintage Room', 'A collected 1960s social salon shaped by period sound and furnishings.'),
  'seventies-room': awaiting('seventies-room', '02 · 1970s Room', 'A warm 1970s room with analog sound, deep textures and lived-in glamour.'),
  'eighties-room': awaiting('eighties-room', '03 · 1980s Room', 'A bold 1980s room shaped by music-video light and collectible technology.'),
  'nineties-rnb-room': awaiting('nineties-rnb-room', '04 · 1990s R&B Living Museum', 'A playable R&B archive with records, memorabilia and a plastic-wrapped vintage couch.'),
  'prince-room': awaiting('prince-room', '05 · The Prince Room', 'An intimate violet salon with a false window showing purple rain.'),
  'michael-jackson-room': awaiting('michael-jackson-room', '06 · The Michael Jackson Room', 'A polished performance room with a reactive light-up tile floor.'),
  'rock-room': awaiting('rock-room', '07 · Lenny Kravitz–Style Rock Room', 'A tactile collector-musician den layered with instruments and listening furniture.'),
  'video-game-room': awaiting('video-game-room', '08 · Video Game Room + Playable Console Wall', 'A full wall of connected playable consoles, arcade cabinets and premium tabletop games.'),
  'grand-ballroom': awaiting('grand-ballroom', '09 · Grand Ballroom + Dance Floor', 'The central ballroom with a statement chandelier and true dance floor.'),
  'drive-in-nights': awaiting('drive-in-nights', '10 · Outdoor Drive-In Movie Nights', 'A film projected across the building while guests listen from their cars.'),
  'smoking-lounge': awaiting('smoking-lounge', '11 · Private Smoking Lounge + Humidor', 'A discreet members smoking lounge with a collection-grade humidor.'),
  bodega: awaiting('bodega', '12 · The Bodega', 'A cultural retail space for records, artist editions and limited house drops.'),
  'rooftop-program': awaiting('rooftop-program', '13 · Rooftop Lounge + Live Program', 'A skyline lounge arranged for intimate concerts, pop-ups and private events.'),
  'menu-theater': awaiting('menu-theater', '14 · Era-Coded Menu Theater', 'A theatrical food and cocktail presentation using provocative era-coded language.'),
  'scope-phase-01': {
    id: 'scope-phase-01',
    route: '/scope',
    chapter: 'Scope · Phase 01 hero',
    src: '',
    alt: 'The recording-led experience registry translated into a phased creative program.',
    focalPoint: 'center',
    approvalStatus: 'awaiting',
  },
} satisfies Record<string, ExperienceAsset>

export type ExperienceAssetId = keyof typeof experienceAssets

export function getAsset(id: ExperienceAssetId): ExperienceAsset {
  return experienceAssets[id]
}

export function isAssetReady(id: ExperienceAssetId): boolean {
  const asset = getAsset(id)
  return asset.src.trim() !== '' && asset.approvalStatus === 'approved'
}
