# Experience Walkthrough: Technical Roadmap

The `/experience` route is built as a **manifest-driven cinematic walkthrough** today, with the data model deliberately shaped so it can grow into a **fully interactive 3D / metaverse-compatible property tour** with no data migration.

## Stage 1: Cinematic media chapters (current / MVP)

- Content lives in `src/lib/experience-rooms.ts` as a typed `ExperienceRoom[]`.
- The page renders full-bleed imagery, cinematic fades, directional navigation, room numbers and progress.
- Media is poster-first and lazy where possible; nothing renders until it exists (no layout shift).
- Ambient audio is wired but silent until approved audio files are supplied.

## Stage 2: Interactive 3D behind a per-room flag

- Add `@react-three/fiber` + `@react-three/drei`.
- Any room whose `modelUrl` is set renders an interactive `<Canvas>` instead of (or alongside) its cinematic media. Rooms without a model stay cinematic. **No manifest change required.**
- `cameraPosition` / `cameraTarget` are already present on every room to seed the initial view.

## Stage 3: Real geometry + hotspots + modes

- Load GLB/GLTF exports (Blender, Matterport, Unreal, Twinmotion) via drei `useGLTF`.
- Render interactive points from each room's `hotspots[]` (`ExperienceHotspot`).
- Guided mode tweens the camera through `cameraPosition` / `cameraTarget`; free-roam enables orbit/first-person controls.

## Stage 4: Spatial audio, headset & digital twin

- Drive spatial audio from each room's `soundProfile`.
- Add WebXR for headset experiences (desktop, mobile and headset from one manifest).
- Extend toward a full digital twin using the same room ids and slugs.

## Design rules that make this possible

- **No hardcoded experience content in page components.** Everything reads from the manifests.
- Stable `id` / `slug` per room so 3D assets, analytics and deep links stay consistent across stages.
- Media, rooms, phases and (future) hotspot metadata are centralized and typed.
