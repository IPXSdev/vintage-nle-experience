import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VINTAGE × NLE | Every Room Is a Headliner",
  description: "A recording-led destination of era rooms, icon rooms, live performance, play and hospitality ritual."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Nav/>{children}<Footer/></body></html>
}
