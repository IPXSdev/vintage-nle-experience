"use client"

import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  // The Experience page is a full-screen cinematic film — render no site chrome.
  if (pathname === "/experience") return null
  return (
    <footer className="footer">
      <div className="shell">
        Private concept environment · Creative direction and experience design by IPXS · Client
        review MVP
      </div>
    </footer>
  )
}
