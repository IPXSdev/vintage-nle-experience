# VINTAGE × NLE — v0 Continuation Handoff

## Mandatory preflight
This is an existing Next.js App Router project. Do not generate a replacement project and do not restart the design from a blank canvas.

Live reference deployment:
https://vintage-nle-experience.vercel.app

Required routes:
- /
- /full-experience
- /scope
- /progress
- /dashboard

## Source of truth
Use the imported GitHub repository as the source of truth once connected. First sync and inspect the complete existing codebase, route structure, global styles, components, package.json, and current responsive behavior.

Preserve:
- Next.js App Router architecture
- existing route paths
- current client-facing scope and pricing structure
- separation between client progress and internal production dashboard
- dark cinematic art-house direction
- VINTAGE × NLE naming
- IPXS creative-direction attribution

Do not replace the project with a generic restaurant template, luxury gold theme, conventional hospitality website, or standard card-grid landing page.

## Current commercial structure
Phase 1: $18,500
Start deposit: $11,100
Midpoint milestone: $4,625
Final payment: $2,775
Optional accelerated schedule: +$4,000

## Recording-led source of truth
The discovery recordings are the foundation. Their named concepts are not references,
examples, or optional mood-board directions. They are the lead experiences and must remain
visible in the guest journey, commercial scope, progress view, and production dashboard.

The 14 lead experiences are:
1. 1960s Vintage Room
2. 1970s Room
3. 1980s Room
4. 1990s R&B Living Museum, including record players, memorabilia, roped displays and the sit-able plastic-wrapped vintage couch
5. Prince Room with the Purple Rain false window
6. Michael Jackson Room with the reactive light-up floor
7. Lenny Kravitz–style rock-and-roll room
8. Video Game Room with two arcade cabinets, multiple screens, a fully playable console wall and elevated tabletop games
9. Grand Ballroom with chandelier and dance floor
10. Outdoor drive-in movie nights with building-scale projection and in-car audio
11. Private smoking lounge and humidor, with an optional cigar-retail layer
12. The Bodega cultural gift shop
13. Rooftop lounge, concerts, pop-ups, live music and small private events
14. Era-coded menu theater, including cocktail naming, street-weight portion language and provocative service presentation

## Elevation layer
The project remains a destination hospitality property: part cultural institution, private
members club, immersive art installation, entertainment venue, and legendary creative
residence. The following principles connect and elevate the recorded concepts; they never
replace a specific room with a generic category:
1. The house itself is the attraction.
2. Every room is its own independent world.
3. Music acts as architecture, not background decoration.
4. Art, memorabilia and commissions form an evolving living gallery.
5. Hidden thresholds, changing programs and surprise reveals create constant discovery.
6. Hospitality integrates food, performance, storytelling, projection, sound and ritual.
7. The atmosphere carries collected, high-end creative-residence energy.
8. International rollout protects the global experience standards while localizing culture.

Implementation source: `src/lib/experience-program.ts` is the canonical registry. Reuse it
across routes so the lead experiences cannot drift or disappear during future revisions.

## Image replacement workflow
The user will upload new reference and concept images directly into v0.

For every image:
- place it only in the specifically identified section
- do not reinterpret, redraw, recolor, crop away key architecture, or modify logos
- use next/image where appropriate
- preserve image focal points on mobile and desktop
- add descriptive alt text
- avoid visual repetition across rooms
- keep each room aesthetically distinct
- do not apply one global gold or formal-luxury treatment

Create a centralized image manifest or data object so room imagery can be replaced without restructuring pages. Use clear semantic filenames and route-to-asset mapping.

## Git and Vercel rules
- import this existing GitHub repository into v0
- connect the imported project to the existing Vercel project
- do not create a duplicate Vercel production project
- keep production alias: vintage-nle-experience.vercel.app
- work on a branch for major revisions
- push reviewed changes to the connected repository
- run npm build before completion
