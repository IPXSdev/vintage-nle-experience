/**
 * CENTRAL IMAGE MANIFEST
 * ----------------------
 * Single source of truth for every concept image on the site.
 *
 * How it works:
 *  - Each entry is keyed by a stable semantic id (e.g. "experience-01").
 *  - Pages read imagery from this manifest instead of hardcoding paths.
 *  - To place / swap an image you edit ONE entry here. You never touch layout.
 *  - Until a `src` is filled in, the UI renders no image (production stays text-only).
 *
 * Placement policy: images are placed STRICTLY into the slot named below.
 * Nothing is auto-placed. An empty `src` means "awaiting approved upload".
 *
 * File convention: drop approved images under
 *   public/experience/<route>/<asset-id>.<ext>
 * then set `src` to the matching "/experience/..." path.
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
  route: "/" | "/full-experience" | "/scope" | "/progress" | "/dashboard"
  /** Human label for the chapter / room / section it illustrates. */
  chapter: string
  /**
   * Public path to the approved image (e.g. "/experience/full-experience/experience-01.jpg").
   * Empty string = not yet placed; the UI renders nothing.
   */
  src: string
  /** Required, meaningful alt text. Describe the scene, not "image of…". */
  alt: string
  /** Safe crop anchor for responsive cropping. */
  focalPoint: FocalPoint
  /** Approval gate so nothing unreviewed ships by accident. */
  approvalStatus: ApprovalStatus
  /** Optional intrinsic dimensions if known (helps CLS). Falls back to fill. */
  width?: number
  height?: number
}

/**
 * The manifest. One entry per image slot the design supports.
 * Add rows here as new slots are designed; fill `src` as approved images arrive.
 */
export const experienceAssets = {
  /* ---- Landing (/) ------------------------------------------------------ */
  "home-hero": {
    id: "home-hero",
    route: "/",
    chapter: "Landing · Hero backdrop",
    src: "",
    alt: "The house at night — the destination as a single authored world.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },

  /* ---- Full Experience (/full-experience) — 10 mandatory concepts ------- */
  "experience-01": {
    id: "experience-01",
    route: "/full-experience",
    chapter: "01 · The House Is the Attraction",
    src: "",
    alt: "Exterior arrival: the property presented as a destination in its own right.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-02": {
    id: "experience-02",
    route: "/full-experience",
    chapter: "02 · Every Room Is Its Own World",
    src: "",
    alt: "A single room with its own material language, lighting scene and emotional tone.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-03": {
    id: "experience-03",
    route: "/full-experience",
    chapter: "03 · Private Salons and Hosted Experiences",
    src: "",
    alt: "An intimate hosted salon set for a small, invitation-led gathering.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-04": {
    id: "experience-04",
    route: "/full-experience",
    chapter: "04 · Hidden Rooms, Doors and Reveals",
    src: "",
    alt: "A concealed threshold or hidden door that rewards curiosity.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-05": {
    id: "experience-05",
    route: "/full-experience",
    chapter: "05 · Music as Architecture",
    src: "",
    alt: "A high-fidelity listening room where sound shapes the space.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-06": {
    id: "experience-06",
    route: "/full-experience",
    chapter: "06 · The Living Gallery",
    src: "",
    alt: "Rotating artwork and installations keeping the house culturally alive.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-07": {
    id: "experience-07",
    route: "/full-experience",
    chapter: "07 · Legendary Creative Residence Energy",
    src: "",
    alt: "A layered, collected, residential interior with edge and authenticity.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-08": {
    id: "experience-08",
    route: "/full-experience",
    chapter: "08 · Dining as One Chapter",
    src: "",
    alt: "Dining woven into performance and ritual rather than the sole focus.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-09": {
    id: "experience-09",
    route: "/full-experience",
    chapter: "09 · Emotionally Programmed Rooms",
    src: "",
    alt: "A space intentionally engineered around a single feeling.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },
  "experience-10": {
    id: "experience-10",
    route: "/full-experience",
    chapter: "10 · International Experience System",
    src: "",
    alt: "The concept localized by market while protecting core rituals.",
    focalPoint: "center",
    approvalStatus: "awaiting",
  },

  /* ---- Scope (/scope) --------------------------------------------------- */
  "scope-phase-01": {
    id: "scope-phase-01",
    route: "/scope",
    chapter: "Scope · Phase 01 hero",
    src: "",
    alt: "Visual reference for the revised Phase 01 scope of work.",
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
