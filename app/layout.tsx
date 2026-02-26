import "./globals.css"
import type { Metadata } from "next"
import Squares from "@/components/Squares"

export const metadata: Metadata = {
  title: "Rayy | Portfolio",
  description: "Full Animated Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white overflow-x-hidden">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <Squares
            direction="diagonal"
            speed={0.6}
            borderColor="rgba(148, 163, 184, 0.3)"
            squareSize={40}
            hoverFillColor="rgba(15, 23, 42, 0.9)"
          />
        </div>

        {children}
      </body>
    </html>
  )
}