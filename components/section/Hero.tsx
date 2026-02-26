"use client"

import SplitText from "../SplitText"
import TextType from "../TextType"
import BlurText from "../BlurText"
import ProfileCard from "../ProfileCard"
import {
  ArrowRight,
  Coffee,
  Code2,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
} from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pb-24 pt-32 text-white md:px-10 lg:px-16"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_30%_20%,#f97316_0,#4c1d95_40%,transparent_70%)] opacity-60 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_70%_80%,#22c55e_0,#0ea5e9_35%,transparent_70%)] opacity-60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
        {/* left: text content */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-zinc-200/80 backdrop-blur">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 blur-[2px]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>
            Full‑Stack • Android • Web
          </div>

          <div className="space-y-4">
            <SplitText
              text="Rayhan&nbsp;Nulhafiz"
              tag="h1"
              splitType="words, chars"
              className="text-balance text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl"
            />

            <TextType
              as="p"
              text={[
                "Full‑Stack Developer",
                "Android & Web Engineer",
                "Arch Linux Enthusiast",
              ]}
              className="mt-1 text-lg text-zinc-300/90 md:text-xl"
              typingSpeed={55}
              deletingSpeed={32}
              pauseDuration={2100}
              variableSpeed={{ min: 28, max: 85 }}
              textColors={[
                "#a5b4fc",
                "#f97316",
                "#22c55e",
              ]}
            />
          </div>

          <BlurText
            text="Building modern mobile & web experiences with clean, scalable code — from Android apps to backend systems, always learning and always improving."
            animateBy="words"
            className="max-w-xl text-sm text-zinc-300/80 md:text-base"
            delay={90}
            direction="bottom"
          />

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-300/90">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-emerald-300" />
              Batam, Indonesia
              <span className="text-xs text-zinc-400/80">🇮🇩</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
              <GraduationCap className="h-3.5 w-3.5 text-sky-300" />
              MAN Insan Cendekia Kota Batam
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-sky-400 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_40px_rgba(236,72,153,0.55)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.4)_0,transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative inline-flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                View projects
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-50 backdrop-blur transition hover:border-emerald-300/70 hover:bg-emerald-300/10"
            >
              <Coffee className="h-4 w-4 text-emerald-300" />
              Let&apos;s collaborate
            </a>

            <div className="ml-0 flex items-center gap-3 md:ml-4">
              <a
                href="https://github.com/LixUb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-zinc-100 shadow-[0_0_20px_rgba(24,24,27,0.9)] transition hover:border-zinc-50 hover:bg-white hover:text-black"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-zinc-100 shadow-[0_0_20px_rgba(24,24,27,0.9)] transition hover:border-sky-300 hover:bg-sky-300 hover:text-black"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* right: animated profile card */}
        <div className="flex-1 lg:flex-[0.9]">
          <div className="flex justify-center">
            <div className="w-[280px] sm:w-[300px] lg:w-[320px]">
              <ProfileCard
                className="w-full [--card-radius:26px] [&_.pc-card]:h-[380px] [&_.pc-card]:max-h-[380px] sm:[&_.pc-card]:h-[420px] sm:[&_.pc-card]:max-h-[420px]"
                avatarUrl="/photo/012A0325.JPG"
                miniAvatarUrl="/photo/012A0325.JPG"
                name="Rayhan Nulhafiz"
                title="Android & Web Engineer"
                handle="lixub"
                status="Arch Linux Enthusiast"
                contactText="Connect"
                showUserInfo={true}
                enableTilt={true}
                behindGlowEnabled={true}
                behindGlowColor="rgba(34, 197, 94, 0.45)"
                behindGlowSize="60%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
