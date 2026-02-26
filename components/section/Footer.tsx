"use client"

import { LogoLoop, type LogoItem } from "../LogoLoop"

const techLogos: LogoItem[] = [
  { src: "https://cdn.simpleicons.org/github/ffffff", alt: "GitHub", href: "https://github.com", title: "GitHub" },
  { src: "https://cdn.simpleicons.org/vercel/ffffff", alt: "Vercel", href: "https://vercel.com", title: "Vercel" },
  { src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "TypeScript", href: "https://www.typescriptlang.org", title: "TypeScript" },
  { src: "https://cdn.simpleicons.org/docker/2496ED", alt: "Docker", href: "https://www.docker.com", title: "Docker" },
  { src: "https://cdn.simpleicons.org/nextdotjs/ffffff", alt: "Next.js", href: "https://nextjs.org", title: "Next.js" },
  { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React", href: "https://react.dev", title: "React" },
  { src: "https://cdn.simpleicons.org/nodedotjs/5FA04E", alt: "Node.js", href: "https://nodejs.org", title: "Node.js" },
]

export default function FooterSection() {
  return (
    <footer className="relative px-6 pb-10 pt-2 text-white md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.26em] text-zinc-400/85">
          Built with
        </p>

        <div className="rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur">
          <LogoLoop
            logos={techLogos}
            speed={34}
            gap={46}
            logoHeight={26}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#020617"
            ariaLabel="Technology logos"
          />
        </div>
      </div>
    </footer>
  )
}
