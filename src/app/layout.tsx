import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
  title: "VINTAGE × NLE | A House of Culture, Sound, Art and Transformation",
  description:
    "An immersive hospitality world where the house itself is the attraction — a cinematic residence of art, music, ritual and hidden rooms.",
  openGraph: {
    title: "VINTAGE × NLE",
    description:
      "A House of Culture, Sound, Art and Transformation. Step inside an immersive residence of art, music and ritual.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#090908",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-background ${displaySerif.variable} ${bodySans.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
