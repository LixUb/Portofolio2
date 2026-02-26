"use client"

import GooeyNav from "../GooeyNav"

const items = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <GooeyNav items={items} particleCount={20} />
    </div>
  )
}