"use client"

import SplitText from "../SplitText"
import BlurText from "../BlurText"
import FallingText from "../FallingText"
import { Github, ExternalLink, Code2 } from "lucide-react"

type Project = {
  title: string
  subtitle?: string
  description: string
  stack: string[]
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: "All-In-One",
    subtitle: "KAVLO Smart Headband",
    description: "Android application acting as the central hub for KAVLO smart headband devices.",
    stack: ["Java", "Kotlin", "XML"],
    github: "https://github.com/LixUb/All-In-One",
  },
  {
    title: "E-Arsip",
    description: "Digital archiving system for efficient document management and retrieval.",
    stack: ["PHP", "Laravel", "Bootstrap"],
    github: "https://github.com/LixUb/e-arsip",
  },
  {
    title: "ISHOC 2025",
    description: "Event management platform with registration and scheduling features for ISHOC 2025.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LixUb/ISHOC2025",
  },
  {
    title: "PearlPals",
    description: "Mobile application built with modern Android development practices.",
    stack: ["Kotlin", "Android", "Jetpack"],
    github: "https://github.com/LixUb/pearlpals",
  },
  {
    title: "ZoNaTrip",
    description: "Travel and tourism platform connecting travelers with destinations and experiences.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LixUb/ZoNaTrip",
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center justify-center px-6 pb-24 pt-28 text-white md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300/80">
              Projects
            </p>

            <SplitText
              text="Things&nbsp;I&apos;ve&nbsp;Built"
              tag="h2"
              splitType="words, chars"
              className="text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl"
              textAlign="left"
            />

            <div className="max-w-2xl space-y-1.5">
              <BlurText
                text="A curated set of work across Android, web, and backend — the things that best represent how I like to build."
                animateBy="words"
                className="text-sm text-zinc-300/90 md:text-base"
                direction="bottom"
                delay={80}
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-zinc-200/80 backdrop-blur">
            <Code2 className="h-3.5 w-3.5 text-emerald-300" />
            <span>From Android to the web — one consistent developer story.</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-[0_18px_70px_rgba(15,23,42,0.9)] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(248,250,252,0.55)_0,transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
              <div className="relative flex h-full flex-col gap-4 rounded-[1.45rem] bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-950/40 px-4 py-5">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold text-zinc-50 md:text-base">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-xs text-zinc-300/90 md:text-sm">{project.description}</p>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.16em] text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-zinc-50 backdrop-blur transition hover:border-white hover:bg-white hover:text-black"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:border-emerald-300/80 hover:bg-emerald-300/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_70px_rgba(15,23,42,0.7)] md:p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-300/80">
            Playground
          </p>
          <div className="h-[260px] w-full md:h-[340px]">
            <FallingText
              text="Arch Linux in the terminal, Kotlin on Android, TypeScript on the web, Laravel for backend, clean architecture everywhere, performance first, pixel-perfect UI, API design that scales, and full-stack shipping mode always on."
              highlightWords={["Arch", "Linux", "Kotlin", "TypeScript", "Laravel", "backend", "full-stack", "performance", "UI", "API"]}
              trigger="hover"
              gravity={0.9}
              backgroundColor="transparent"
              mouseConstraintStiffness={0.22}
              fontSize="1rem"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
