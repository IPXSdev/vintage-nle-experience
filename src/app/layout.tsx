import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodySans = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "G-14 Classified | Vintage",
  description: "Access to Vintage is currently restricted.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070706",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  void children;

  return (
    <html lang="en" className={`bg-background ${displaySerif.variable} ${bodySans.variable}`}>
      <body style={{ margin: 0, background: "#070706" }}>
        <main
          aria-labelledby="classified-title"
          style={{
            minHeight: "100svh",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
            position: "relative",
            padding: "clamp(28px, 6vw, 80px)",
            background:
              "radial-gradient(circle at 50% 35%, rgba(128, 97, 50, 0.16), transparent 35%), radial-gradient(circle at 50% 100%, rgba(77, 55, 29, 0.13), transparent 45%), #070706",
            color: "#f1eadc",
            textAlign: "center",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 18,
              border: "1px solid rgba(196, 170, 119, 0.22)",
              pointerEvents: "none",
            }}
          />
          <section
            style={{
              width: "min(780px, 88vw)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Image
              src="/experience/system/vintage-wordmark.webp"
              alt="Vintage"
              width={1600}
              height={520}
              priority
              sizes="(max-width: 768px) 82vw, 700px"
              style={{
                width: "min(700px, 82vw)",
                height: "auto",
                objectFit: "contain",
                marginBottom: "clamp(36px, 7vw, 68px)",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                width: 48,
                height: 1,
                background: "rgba(210, 183, 128, 0.75)",
                marginBottom: 24,
              }}
            />
            <h1
              id="classified-title"
              style={{
                margin: 0,
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "clamp(0.78rem, 1.6vw, 0.94rem)",
                fontWeight: 600,
                letterSpacing: "0.32em",
                lineHeight: 1.4,
                textTransform: "uppercase",
                color: "#d2b780",
              }}
            >
              G-14 Classified
            </h1>
            <p
              style={{
                margin: "20px 0 0",
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(1.25rem, 3vw, 1.7rem)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                lineHeight: 1.4,
                color: "rgba(241, 234, 220, 0.88)",
              }}
            >
              Contact IPXS for access
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}
