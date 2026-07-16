/**
 * SCOPE PHASE MANIFEST
 * --------------------
 * Central, typed source of truth for the /scope engagement.
 *
 * IMPORTANT: This manifest contains NO pricing, deposits, fee ranges, invoice
 * lines or commercial totals. The public scope page is editorial only.
 *
 * The /scope page renders entirely from this data. No hardcoded phase copy in
 * the page component. Each panel is deep-linkable via its `id` (used as the
 * URL hash / anchor).
 */

export interface ScopePhase {
  /** Stable anchor id, used for deep linking (#phase-01). */
  id: string
  /** "01".."12" */
  number: string
  title: string
  /** One-line editorial summary shown in the collapsed state. */
  summary: string
  purpose: string
  strategicObjective: string
  designResponsibilities: string[]
  experienceResponsibilities: string[]
  deliverables: string[]
  clientDecisions: string[]
  specialists: string[]
  dependencies: string[]
  approvalGate: string
  nextPhase: string
  /** Optional note (e.g. licensing disclaimers). No commercial content. */
  note?: string
}

export const scopePhases: ScopePhase[] = [
  {
    id: "phase-01",
    number: "01",
    title: "Experience Strategy, Site Brief & Creative Foundation",
    summary: "Define the Vintage House concept and the requirements for an approximately 5,000-square-foot commercial location.",
    purpose:
      "Establish the intellectual, emotional and real estate brief before a location is selected or a room is designed. This becomes the north star every later decision is measured against.",
    strategicObjective:
      "Position Vintage House as a singular cultural destination rather than a conventional restaurant, club or hotel, and define the commercial site criteria needed to support it.",
    designResponsibilities: [
      "Discovery synthesis of all inputs, references and ambitions",
      "Brand and cultural research",
      "Vintage House vision and creative manifesto",
      "Commercial site criteria for an approximately 5,000-square-foot location",
      "Global concept standards and design principles",
    ],
    experienceResponsibilities: [
      "Experience positioning and audience definition",
      "Emotional objectives for the Vintage House experience as a whole",
      "Master experience narrative",
      "Site selection criteria and spatial requirements brief",
    ],
    deliverables: [
      "Discovery synthesis document",
      "Creative manifesto",
      "Design principles and global concept standards",
      "Master experience narrative",
      "Initial executive presentation",
    ],
    clientDecisions: [
      "Endorsement of the Vintage House vision and positioning",
      "Approval of the target footprint, market and commercial location criteria",
      "Approval of the creative manifesto and guiding principles",
    ],
    specialists: ["Cultural researchers", "Brand strategists", "Commercial real estate and zoning advisors"],
    dependencies: ["Access to stakeholders, references, market priorities and any existing brand material"],
    approvalGate: "Signed-off creative foundation, master narrative and commercial site brief.",
    nextPhase: "The approved narrative and site criteria drive candidate evaluation, guest journey and spatial programming in Phase 02.",
    note: "Site acquisition, zoning confirmation, code review and permitting require qualified local professionals engaged separately from creative direction.",
  },
  {
    id: "phase-02",
    number: "02",
    title: "Story, Guest Journey & Spatial Programming",
    summary: "Map the full Vintage House journey and test it against candidate commercial locations.",
    purpose:
      "Translate the creative foundation into a spatial and narrative structure: how a guest moves, what they feel, and how Vintage House reveals itself over time and across repeat visits.",
    strategicObjective:
      "Engineer emotional pacing and circulation so the selected location rewards both first visits and long-term devotion.",
    designResponsibilities: [
      "Room hierarchy and adjacency planning",
      "Circulation and transition moments",
      "Public, private and hidden zone definition",
      "Candidate location fit testing against the approved site brief",
    ],
    experienceResponsibilities: [
      "Full guest journey with arrival and departure sequence",
      "Reservation logic and repeat-visit strategy",
      "Emotional pacing and private experience planning",
      "Room purpose and capacity",
    ],
    deliverables: [
      "Guest journey map",
      "Zoning and adjacency diagrams",
      "Room program with purpose and capacity",
      "Repeat-visit and reservation strategy",
      "Candidate location experience-fit review",
    ],
    clientDecisions: [
      "Approval of the guest journey and zoning",
      "Confirmation of room program and capacities",
      "Approval of a preferred commercial location before detailed design",
    ],
    specialists: ["Operations consultants", "Hospitality flow planners", "Licensed architects and code consultants"],
    dependencies: ["Approved creative foundation and site brief (Phase 01)", "Verified plans and site data for each candidate location"],
    approvalGate: "Approved commercial location, guest journey, zoning concept and room program.",
    nextPhase: "The spatial program sets the brief for architecture and interior creative direction in Phase 03.",
  },
  {
    id: "phase-03",
    number: "03",
    title: "Architecture & Interior Creative Direction",
    summary: "Give every room its own visual identity and architectural story.",
    purpose:
      "Develop the room-by-room design language through materials, light, furniture, thresholds and hidden moments, making each space its own world within one coherent Vintage House experience.",
    strategicObjective:
      "Translate the intimacy and collected character of a legendary creative residence into a code-compliant commercial venue that no competitor can template.",
    designResponsibilities: [
      "Room-by-room visual identities and material direction",
      "Furniture direction and custom millwork concepts",
      "Lighting direction, flooring, surfaces and ceiling treatments",
      "Doors, thresholds, portals and hidden architectural moments",
      "Exterior, terrace and private-room design",
    ],
    experienceResponsibilities: [
      "Architectural storytelling per room",
      "Private, collected atmosphere with legendary creative-world energy",
    ],
    deliverables: [
      "Room-by-room creative direction packages",
      "Material, furniture and lighting direction",
      "Custom millwork and threshold concepts",
      "Exterior and terrace direction",
    ],
    clientDecisions: [
      "Approval of room identities and material direction",
      "Selection among custom millwork and furniture concepts",
    ],
    specialists: ["Licensed architects", "Interior designers", "Lighting designers"],
    dependencies: ["Approved spatial program (Phase 02)"],
    approvalGate: "Approved creative direction for every room and exterior.",
    nextPhase: "Creative direction hands off to experience engineering in Phase 04.",
    note: "Licensed architectural and engineering documents, zoning confirmation, code review and permits require qualified project professionals engaged separately from creative direction.",
  },
  {
    id: "phase-04",
    number: "04",
    title: "Experience Engineering",
    summary: "Engineer the invisible systems that make rooms transform, respond and reset.",
    purpose:
      "Design the technical backbone of light, sound, media, scent, sensors and kinetics to deliver the emotional objectives reliably, safely and repeatably.",
    strategicObjective:
      "Make the magic operational: every reveal, transformation and sensory effect must run flawlessly night after night.",
    designResponsibilities: [
      "Concealed technology integration",
      "Kinetic elements and hidden reveals",
      "Room transformation design",
    ],
    experienceResponsibilities: [
      "Lighting-control concepts and spatial audio",
      "Acoustics, projection and interactive media",
      "Sensors, scent systems and environmental effects",
      "Show-control logic, accessibility, safety, maintenance and reset procedures",
    ],
    deliverables: [
      "Experience-engineering concept package",
      "Show-control and lighting logic",
      "Sensory systems plan (audio, scent, effects)",
      "Operational reset and maintenance procedures",
    ],
    clientDecisions: [
      "Approval of the technology and show-control approach",
      "Confirmation of operational and safety requirements",
    ],
    specialists: ["AV and show-control engineers", "Acousticians", "Scent designers", "Safety consultants"],
    dependencies: ["Approved creative direction (Phase 03)"],
    approvalGate: "Approved experience-engineering concept and operational logic.",
    nextPhase: "Engineered systems enable the art, music and cultural program in Phase 05.",
  },
  {
    id: "phase-05",
    number: "05",
    title: "Art, Music & Cultural Programming",
    summary: "Keep Vintage House culturally alive with rotating art, curated sound and live culture.",
    purpose:
      "Build the living cultural program, including its art, music and performance identity, to give Vintage House ongoing significance and a reason to return.",
    strategicObjective:
      "Establish the venue as a genuine cultural institution, not a themed backdrop.",
    designResponsibilities: [
      "Living-gallery strategy and rotating art program",
      "Collector displays and archival material",
      "Temporary installation design",
    ],
    experienceResponsibilities: [
      "Music curation and room-specific sound identities",
      "Listening experiences and performance programming",
      "Artist commissions and cultural partnerships",
    ],
    deliverables: [
      "Cultural programming framework",
      "Rotating art and commission strategy",
      "Room-specific sound identities",
      "Performance and partnership program",
    ],
    clientDecisions: [
      "Approval of the cultural program direction",
      "Endorsement of key partnerships and commissions",
    ],
    specialists: ["Curators", "Music directors", "Performance producers"],
    dependencies: ["Experience-engineering concept (Phase 04)"],
    approvalGate: "Approved cultural programming framework.",
    nextPhase: "Cultural program integrates with culinary and hospitality in Phase 06.",
    note: "International artist localization is planned so each market contributes local culture within global standards.",
  },
  {
    id: "phase-06",
    number: "06",
    title: "Culinary & Hospitality Integration",
    summary: "Weave dining and service into Vintage House as ritual, not the sole event.",
    purpose:
      "Choreograph food, drink and service as chapters of the experience, integrated with performance, environment and personalization.",
    strategicObjective:
      "Make hospitality feel personal, intimate and hosted rather than processed through a conventional venue.",
    designResponsibilities: [
      "Table presentation and service-object direction",
      "Room-specific service experience design",
    ],
    experienceResponsibilities: [
      "Dining rituals, private dinners and hosted tastings",
      "Beverage moments and service choreography",
      "Menu storytelling and culinary integration with performance and environment",
      "Guest personalization, VIP and membership experience",
    ],
    deliverables: [
      "Hospitality experience framework",
      "Service choreography and ritual design",
      "Menu-storytelling approach",
      "VIP and membership experience design",
    ],
    clientDecisions: [
      "Approval of the hospitality and service approach",
      "Confirmation of membership and VIP structure",
    ],
    specialists: ["Culinary directors", "Beverage directors", "Service designers"],
    dependencies: ["Cultural program (Phase 05)"],
    approvalGate: "Approved hospitality and service framework.",
    nextPhase: "Hospitality touchpoints feed the brand world in Phase 07.",
  },
  {
    id: "phase-07",
    number: "07",
    title: "Brand World & Guest Touchpoints",
    summary: "Extend Vintage House into every object, message and material a guest touches.",
    purpose:
      "Expand the visual identity across every physical and digital touchpoint so the brand world is coherent from invitation to merchandise.",
    strategicObjective:
      "Ensure the brand is felt in the hand as strongly as it is felt in the room.",
    designResponsibilities: [
      "Visual identity expansion and signage",
      "Menus, uniforms, membership materials and invitations",
      "Packaging, printed collateral and merchandise",
      "Guest arrival materials",
    ],
    experienceResponsibilities: [
      "Reservation communications and digital touchpoints",
      "International brand standards",
    ],
    deliverables: [
      "Extended identity system",
      "Touchpoint and collateral suite",
      "Merchandise and packaging direction",
      "International brand standards guide",
    ],
    clientDecisions: [
      "Approval of the extended identity and touchpoint suite",
      "Sign-off on international brand standards",
    ],
    specialists: ["Graphic designers", "Industrial/packaging designers"],
    dependencies: ["Hospitality framework (Phase 06)"],
    approvalGate: "Approved brand world and touchpoint suite.",
    nextPhase: "The brand world informs the digital experience and interactive tour in Phase 08.",
  },
  {
    id: "phase-08",
    number: "08",
    title: "Digital Experience & Interactive Tour",
    summary: "Build the cinematic website and lay the foundation for a full virtual walkthrough.",
    purpose:
      "Create a cinematic, story-driven digital front door and architect the data and media structure for a future interactive, headset-ready tour.",
    strategicObjective:
      "Make the digital experience a genuine extension of Vintage House and a platform the venue can grow into over years.",
    designResponsibilities: [
      "Cinematic website and room stories",
      "Image and video galleries",
      "Interactive maps and experience previews",
    ],
    experienceResponsibilities: [
      "Reservation pathways and digital member experience",
      "Virtual-tour foundation and digital-twin planning",
      "3D asset strategy, immersive audio and web-based walkthrough",
      "Future headset and metaverse compatibility",
    ],
    deliverables: [
      "Cinematic website",
      "Room-story and gallery system",
      "Virtual-tour foundation and 3D asset strategy",
      "Digital member experience plan",
    ],
    clientDecisions: [
      "Approval of the digital experience direction",
      "Confirmation of the virtual-tour and digital-twin roadmap",
    ],
    specialists: ["Web engineers", "3D/technical artists", "Interactive developers"],
    dependencies: ["Brand world (Phase 07)", "Media captured across prior phases"],
    approvalGate: "Approved digital experience and virtual-tour foundation.",
    nextPhase: "Digital foundations support documentation and fabrication in Phase 09.",
  },
  {
    id: "phase-09",
    number: "09",
    title: "Documentation, Fabrication & Vendor Coordination",
    summary: "Translate design intent into buildable packages and coordinate every maker.",
    purpose:
      "Produce the design-intent documentation and manage the fabrication and vendor process so the creative vision survives contact with construction.",
    strategicObjective:
      "Protect design intent through rigorous documentation, review and change control.",
    designResponsibilities: [
      "Design-intent packages and fabrication briefs",
      "Finish and furniture schedules",
      "Art placement and mockups",
    ],
    experienceResponsibilities: [
      "Technology requirements and AV coordination",
      "Vendor and prototype reviews",
      "Sample approvals, revision tracking and change control",
    ],
    deliverables: [
      "Design-intent documentation set",
      "Fabrication briefs and schedules",
      "Vendor coordination and review records",
      "Change-control log",
    ],
    clientDecisions: [
      "Approval of design-intent packages",
      "Sign-off on prototypes and samples",
    ],
    specialists: ["Fabricators", "Millworkers", "AV integrators", "Project managers"],
    dependencies: ["Approved design across Phases 03–08"],
    approvalGate: "Approved documentation and fabrication readiness.",
    nextPhase: "Documented design moves into installation and creative supervision in Phase 10.",
  },
  {
    id: "phase-10",
    number: "10",
    title: "Installation & Creative Supervision",
    summary: "Supervise the build-out so the finished Vintage House venue matches the intent exactly.",
    purpose:
      "Provide on-site creative supervision through installation, styling and calibration to ensure the completed venue protects the design intent.",
    strategicObjective:
      "Guarantee that what opens is what was promised, down to the light levels and the last styled object.",
    designResponsibilities: [
      "Styling and furniture/art placement",
      "Installation review and design-intent protection",
    ],
    experienceResponsibilities: [
      "Lighting and sound calibration",
      "Media, sensory and guest-flow testing",
      "Punch-list direction and final creative approvals",
    ],
    deliverables: [
      "Installation supervision and styling",
      "Calibration reports (light, sound, media, sensory)",
      "Punch list and final creative sign-off",
    ],
    clientDecisions: [
      "Final creative approvals",
      "Acceptance of calibrated rooms",
    ],
    specialists: ["Installers", "Calibration technicians", "Stylists"],
    dependencies: ["Fabrication and documentation (Phase 09)"],
    approvalGate: "Approved, calibrated and styled rooms.",
    nextPhase: "The finished venue enters soft opening and calibration in Phase 11.",
  },
  {
    id: "phase-11",
    number: "11",
    title: "Soft Opening & Experience Calibration",
    summary: "Rehearse the experience with real audiences and tune every moment.",
    purpose:
      "Run rehearsal experiences with invited audiences to test hospitality, technology and choreography, then refine the experience before public launch.",
    strategicObjective:
      "De-risk the launch by calibrating the full sensory and operational experience under real conditions.",
    designResponsibilities: [
      "Sensory calibration and final refinements",
      "Room reset timing",
    ],
    experienceResponsibilities: [
      "Rehearsal experiences with invited test audiences",
      "Staff choreography and hospitality testing",
      "Technology stress testing and guest feedback",
      "Operational adjustments",
    ],
    deliverables: [
      "Soft-opening program",
      "Feedback synthesis and adjustment plan",
      "Final sensory and operational calibration",
    ],
    clientDecisions: [
      "Approval of adjustments from soft-opening findings",
      "Go/no-go for public launch",
    ],
    specialists: ["Operations teams", "Front-of-house leadership"],
    dependencies: ["Calibrated rooms (Phase 10)"],
    approvalGate: "Launch-ready experience validated by real audiences.",
    nextPhase: "The validated experience goes public in Phase 12.",
  },
  {
    id: "phase-12",
    number: "12",
    title: "Launch & Ongoing Programming",
    summary: "Open Vintage House and keep it evolving with seasonal culture and expansion standards.",
    purpose:
      "Direct the launch experience and establish the ongoing creative program that keeps the venue alive, current and ready to expand.",
    strategicObjective:
      "Turn the opening into a sustained cultural presence and a repeatable model for future locations.",
    designResponsibilities: [
      "Opening creative direction",
      "Seasonal room changes and content updates",
    ],
    experienceResponsibilities: [
      "Launch experience direction",
      "Ongoing art rotation and music programming",
      "Cultural events and member programming",
      "International expansion standards and future location adaptations",
    ],
    deliverables: [
      "Launch experience direction",
      "Ongoing programming calendar",
      "Expansion and adaptation standards",
    ],
    clientDecisions: [
      "Approval of the launch program",
      "Endorsement of the ongoing programming and expansion model",
    ],
    specialists: ["Programming directors", "Marketing and events teams"],
    dependencies: ["Validated experience (Phase 11)"],
    approvalGate: "Successful launch and an active ongoing program.",
    nextPhase: "Vintage House operates as a living cultural institution, with standards ready to adapt to future commercial locations worldwide.",
  },
]

export function getPhaseById(id: string): ScopePhase | undefined {
  return scopePhases.find((p) => p.id === id)
}
