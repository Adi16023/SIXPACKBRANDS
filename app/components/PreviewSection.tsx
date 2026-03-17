"use client";
const FEATURES = [
  "Real-Time Contextual Previews",
  "Instant Social & Marketing Kit",
  "Production-Ready SVG & Code",
];

const PLATFORMS = ["Twitter / X", "LinkedIn", "Instagram"];
const MERCH = ["T-Shirt", "Mug", "Cap"];

export default function PreviewSection() {
  return (
    <section id="why" style={{ position: "relative", padding: "96px 24px", overflow: "hidden" }}>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:350, borderRadius:"50%", background:"rgba(249,115,22,0.05)", filter:"blur(100px)", pointerEvents:"none" }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>

          {/* Left: text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <span className="badge" style={{ alignSelf: "flex-start" }}>Live Previews</span>
            <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#1c1917", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0 }}>
              See It Before<br />
              <span style={{ color: "#a8a29e" }}>You Ship It.</span>
            </h2>
            <p style={{ fontSize: 16, color: "#78716c", lineHeight: 1.7, margin: 0 }}>
              Don&apos;t guess. See exactly how your brand looks on real-world merchandise, social media, and landing pages instantly.
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {FEATURES.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#44403c" }}>
                  <span style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(249,115,22,0.10)", border: "1px solid rgba(249,115,22,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#f97316" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#" style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#fff", background: "#f97316", padding: "10px 20px", borderRadius: 10, textDecoration: "none", boxShadow: "0 4px 12px rgba(249,115,22,0.25)" }}>
              Visualize My Brand
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: mockup cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Social preview card */}
            <div className="glass-card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#a8a29e", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>Social Preview</p>
              <div style={{ background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 12, padding: 24, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 120 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <rect x="3" y="3" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.9" />
                      <rect x="14" y="3" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.55" />
                      <rect x="3" y="14" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.55" />
                      <rect x="14" y="14" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.25" />
                    </svg>
                  </div>
                  <span style={{ color: "#1c1917", fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em" }}>SixPackBrands</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {PLATFORMS.map((p) => (
                  <div key={p} style={{ flex: 1, background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: 8, padding: "6px 0", textAlign: "center", fontSize: 11, color: "#a8a29e" }}>{p}</div>
                ))}
              </div>
            </div>

            {/* Merch card */}
            <div className="glass-card" style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: "#a8a29e", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>Merchandise Preview</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
                {MERCH.map((item) => (
                  <div key={item} style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: 10, padding: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 80 }}>
                    <div style={{ width: 24, height: 24, borderRadius: 6, background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <rect x="1" y="1" width="4" height="4" rx="0.5" fill="#f97316" />
                        <rect x="7" y="1" width="4" height="4" rx="0.5" fill="#f97316" fillOpacity="0.55" />
                        <rect x="1" y="7" width="4" height="4" rx="0.5" fill="#f97316" fillOpacity="0.55" />
                        <rect x="7" y="7" width="4" height="4" rx="0.5" fill="#f97316" fillOpacity="0.25" />
                      </svg>
                    </div>
                    <span style={{ fontSize: 11, color: "#a8a29e" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Export ready badge */}
            <div className="glass-card" style={{ padding: 14, display: "flex", alignItems: "center", gap: 12, borderRadius: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "#1c1917" }}>Export Package Ready</div>
                <div style={{ fontSize: 11, color: "#a8a29e", marginTop: 2 }}>SVG, PNG (4000px), React, Tailwind CSS</div>
              </div>
              <span style={{ fontSize: 11, color: "#34d399", background: "rgba(52,211,153,0.08)", padding: "3px 8px", borderRadius: 6 }}>Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
