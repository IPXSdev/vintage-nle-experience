"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/scope", label: "Scope" },
  { href: "/experience", label: "Experience" },
]

/**
 * Reactive velvet / micro-sequin navigation.
 *
 * The surface is a layered CSS material (velvet texture + sequin dots + blur).
 * A pointer listener writes `--sx` / `--sy` custom properties so a soft specular
 * sheen follows the cursor, creating the "catching moving light" effect. On scroll the
 * bar gains density via a class toggle. All effects are progressive enhancement:
 * the nav is fully usable with no JS, and sheen motion is disabled under
 * `prefers-reduced-motion`.
 */
export function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Scroll density.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Cursor sheen.
  useEffect(() => {
    const el = navRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const sx = ((e.clientX - rect.left) / rect.width) * 100
        const sy = ((e.clientY - rect.top) / rect.height) * 100
        el.style.setProperty("--sx", `${sx}%`)
        el.style.setProperty("--sy", `${sy}%`)
      })
    }
    el.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      el.removeEventListener("pointermove", onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  // The Experience page is a full-screen cinematic film, so render no site chrome.
  if (pathname === "/experience") return null

  return (
    <nav ref={navRef} className={`vnav${scrolled ? " is-scrolled" : ""}`} aria-label="Primary">
      <span className="vnav-sheen" aria-hidden="true" />
      <div className="shell vnav-in">
        <Link className="vnav-brand" href="/" onClick={() => setMenuOpen(false)}>
          VINTAGE <span aria-hidden="true">×</span> <em>NLE</em>
        </Link>

        <div className="vnav-links" role="list">
          {LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <button
          type="button"
          className="vnav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="vnav-drawer"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            width: "auto",
            minWidth: 94,
            height: 42,
            padding: "0 14px",
            gap: 10,
            borderRadius: 9999,
            borderColor: "rgba(255, 255, 255, 0.26)",
            background: "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(12,12,10,0.18))",
            backdropFilter: "blur(18px) saturate(145%)",
            WebkitBackdropFilter: "blur(18px) saturate(145%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(0,0,0,0.18)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          <span
            className={`vnav-burger${menuOpen ? " is-open" : ""}`}
            aria-hidden="true"
            style={{ width: 18, transform: "scaleY(.92)" }}
          >
            <i />
            <i />
            <i />
          </span>
          <span
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: ".01em",
              color: "rgba(255,255,255,.94)",
              whiteSpace: "nowrap",
            }}
          >
            {menuOpen ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      <div id="vnav-drawer" className={`vnav-drawer${menuOpen ? " is-open" : ""}`} hidden={!menuOpen}>
        {LINKS.map((link) => {
          const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "is-active" : undefined}
              aria-current={active ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
