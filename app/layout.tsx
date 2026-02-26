import "./globals.css"
import type { Metadata } from "next"
import Squares from "@/components/Squares"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const siteName = "Rayy Portfolio"
const title = "Rayy | Full-Stack Developer Portfolio"
const description =
  "Portfolio Rayhan Nulhafiz: Full-stack developer focused on Android, web apps, and clean scalable architecture."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rayy Portfolio Open Graph Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
