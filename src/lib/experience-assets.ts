/**
 * MEDIA UPLOAD MANIFEST (landing + scope)
 * ---------------------------------------
 * Gated registry for approved image uploads on the LANDING and SCOPE routes.
 *
 * Experience-chapter media (hero images, galleries, video, ambient audio) is
 * managed in `experience-rooms.ts` instead — that manifest is the single source
 * of truth for the /experience walkthrough.
 *
 * How it works:
 *  - Each entry is keyed by a stable semantic id.
 *  - Components read imagery from here via <ExperienceImage id="..." />.
 *  - Until a `src` is filled AND approvalStatus is "approved", nothing renders.
 *  - Images are placed STRICTLY into the named slot — never auto-placed.
 *
 * File convention: drop approved uploads under
 *   public/experience/<route>/<asset-id>.<ext>
 * then set `src` and flip approvalStatus to "approved".
 */

export type ApprovalStatus = "awaiting" | "review" | "approved"

/** Where the focal subject sits, so object-position can crop safely on any ratio. */
export type FocalPoint =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"

export interface ExperienceAsset {
  /** Stable semantic id. Never reuse or renumber. */
  id: string
  /** Which route this image belongs to. */
  route: "/" | "/scope"
  /** Human label for the section it illustrates. */
  chapter: string
  /** Public path to the approved image. Empty = not yet placed; renders nothing. */
  src: string
  /** Required, meaningful alt text. Describe the scene, not "image of…". */
  alt: string
  /** Safe crop anchor for responsive cropping. */
  focalPoint: FocalPoint
  /** Approval gate so nothing unreviewed ships by accident. */
  approvalStatus: ApprovalStatus
  width?: number
  height?: number
}

export const experienceAssets = {
  /* ---- Landing (/) ------------------------------------------------------ */
  "home-atmosphere": {
    id: "home-atmosphere",
    route: "/",
    chapter: "Landing · Optional real atmosphere still",
    src: "",
    alt: "The house at night — the destination as a single authored world.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },

  /* ---- Scope (/scope) --------------------------------------------------- */
  "scope-overview": {
    id: "scope-overview",
    route: "/scope",
    chapter: "Scope · Optional editorial still",
    src: "",
    alt: "Visual reference for the design and production engagement.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
} satisfies Record<string, ExperienceAsset>

/** Union of every valid asset id, for type-safe lookups in components. */
export type ExperienceAssetId = keyof typeof experienceAssets

/** Type-safe getter. Returns the asset entry for a known id. */
export function getAsset(id: ExperienceAssetId): ExperienceAsset {
  return experienceAssets[id]
}

/** True only when an image is present AND approved to ship. */
export function isAssetReady(id: ExperienceAssetId): boolean {
  const asset = getAsset(id)
  return asset.src.trim() !== "" && asset.approvalStatus === "approved"
}
