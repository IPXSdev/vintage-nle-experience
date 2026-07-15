import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "VINTAGE × NLE | Immersive Hospitality Experience",
  description: "Private client experience portal and production dashboard."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Nav/>{children}<Footer/></body></html>
}
