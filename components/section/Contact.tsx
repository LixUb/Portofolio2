"use client"

import Image from "next/image"
import BlurText from "../BlurText"
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, SendHorizonal } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center px-6 pb-32 pt-24 text-white md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-300/80">
            Contact
          </p>

          <div className="space-y-3">
            <h2 className="text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Let&apos;s build something amazing.
            </h2>

            <BlurText
              text="I'm always excited to connect with fellow developers, work on interesting projects, or just talk about code over coffee. Whether you have a concrete idea or a rough sketch, we can shape it together."
              animateBy="words"
              className="max-w-xl text-sm text-zinc-300/90 md:text-base"
              direction="bottom"
              delay={80}
            />
          </div>

          <div className="mt-4 grid gap-4 text-sm text-zinc-100/90 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <Mail className="mt-0.5 h-4 w-4 text-emerald-300" />
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.2em] text-zinc-400">Email</p>
                <a
                  href="mailto:hfzrayy@gmail.com"
                  className="text-sm font-medium text-zinc-100 hover:text-emerald-300"
                >
                  hfzrayy@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <Phone className="mt-0.5 h-4 w-4 text-sky-300" />
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.2em] text-zinc-400">Phone</p>
                <a
                  href="https://wa.me/6285835047866"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-zinc-100 hover:text-sky-300"
                >
                  +62 858-3504-7866
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur sm:col-span-2">
              <MapPin className="mt-0.5 h-4 w-4 text-amber-300" />
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.2em] text-zinc-400">Based in</p>
                <p className="text-sm font-medium text-zinc-100">
                  Batam, Indonesia <span className="ml-1.5 text-xs text-zinc-300/90">🇮🇩</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/LixUb"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-zinc-100 shadow-[0_0_20px_rgba(15,23,42,0.9)] transition hover:border-zinc-50 hover:bg-white hover:text-black"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-zinc-100 shadow-[0_0_20px_rgba(15,23,42,0.9)] transition hover:border-sky-300 hover:bg-sky-300 hover:text-black"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-zinc-100 shadow-[0_0_20px_rgba(15,23,42,0.9)] transition hover:border-emerald-300 hover:bg-emerald-300 hover:text-black"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/60 px-5 py-5 backdrop-blur-2xl shadow-[0_18px_80px_rgba(15,23,42,0.9)]">
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[conic-gradient(from_140deg_at_10%_0%,rgba(244,244,245,0.5)_0,rgba(52,211,153,0.5)_35%,rgba(56,189,248,0.5)_65%,rgba(244,114,182,0.5)_100%)] opacity-40 blur-xl" />
            <div className="relative flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/20 bg-zinc-900/70">
                <Image
                  src="/photo/012A0325.JPG"
                  alt="Rayhan Nulhafiz"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Quick snapshot
                </p>
                <p className="text-sm text-zinc-100/95">
                  Full‑stack dev who loves clean architecture, thoughtful UX, and playful little details.
                </p>
              </div>
            </div>
          </div>

          <form
            className="relative flex flex-col gap-4 rounded-3xl border border-white/15 bg-zinc-950/80 px-6 py-6 backdrop-blur-2xl shadow-[0_18px_80px_rgba(15,23,42,0.9)]"
            onSubmit={event => event.preventDefault()}
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Say hello
              </p>
              <p className="text-sm text-zinc-200/90">
                Share a project idea, a problem you&apos;re facing, or just your favorite Linux tweak.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="space-y-1.5 text-xs text-zinc-300">
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-emerald-300/80 focus:bg-black/70"
                />
              </label>
              <label className="space-y-1.5 text-xs text-zinc-300">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-sky-300/80 focus:bg-black/70"
                />
              </label>
            </div>

            <label className="space-y-1.5 text-xs text-zinc-300">
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me a bit about what you want to build…"
                className="w-full resize-none rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-zinc-50 outline-none ring-0 transition placeholder:text-zinc-500 focus:border-fuchsia-300/80 focus:bg-black/70"
              />
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-sky-400 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_30px_rgba(236,72,153,0.55)] transition hover:brightness-[1.03]"
            >
              <SendHorizonal className="h-4 w-4" />
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
