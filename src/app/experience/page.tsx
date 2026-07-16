import type { Metadata } from "next"
import { CinematicExperience } from "@/components/CinematicExperience"

export const metadata: Metadata = {
  title: "A Cinematic Experience | VINTAGE",
  description:
    "Step inside VINTAGE. One unbroken cinematic film, presented full-screen with sound, carries you through the residence of culture, sound, art and transformation.",
}

export default function ExperiencePage() {
  return (
    <main className="cx-page">
      <CinematicExperience />
    </main>
  )
}
