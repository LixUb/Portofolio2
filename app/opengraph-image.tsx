import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(249,115,22,0.35) 0, transparent 40%), radial-gradient(circle at 80% 80%, rgba(34,197,94,0.25) 0, transparent 45%), #020617",
          color: "#f8fafc",
          border: "1px solid rgba(148,163,184,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#cbd5e1",
          }}
        >
          <span>Full-Stack</span>
          <span>•</span>
          <span>Android</span>
          <span>•</span>
          <span>Web</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h1 style={{ margin: 0, fontSize: 92, lineHeight: 1.02, fontWeight: 800 }}>
            Rayhan Nulhafiz
          </h1>
          <p style={{ margin: 0, fontSize: 34, color: "#93c5fd" }}>
            Full-Stack Developer Portfolio
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          <span>Building Android and web experiences with clean architecture</span>
          <span>rayy.dev</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

