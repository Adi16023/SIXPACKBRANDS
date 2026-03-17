"use client";
const TOC = ["Overview", "Logo", "Typography", "Color Palette", "Usage Rules", "Code Export"];
const PALETTE = [
  { hex: "#FF4500", name: "Primary" },
  { hex: "#cc3700", name: "Secondary" },
  { hex: "#ff8c66", name: "Accent" },
  { hex: "#F8FAFC", name: "Light" },
  { hex: "#0C0A09", name: "Dark" },
];
const GRID_ACTIVE = new Set([0,1,2,3,4,7,8,11,12,13,14,15]);

export default function BrandSystem() {
  return (
    <section className="grid-bg" style={{ position: "relative", padding: "96px 24px", overflow: "hidden" }}>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:700, height:450, borderRadius:"50%", background:"rgba(249,115,22,0.05)", filter:"blur(120px)", pointerEvents:"none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1152, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="badge" style={{ marginBottom: 20, display: "inline-flex" }}>Complete System</span>
          <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#1c1917", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
            Not just a logo.<br />
            <span style={{ color: "#a8a29e" }}>A complete brand system.</span>
          </h2>
          <p style={{ fontSize: 16, color: "#78716c", margin: 0 }}>Logo, colors, typography, guidelines, and code — all generated in seconds, ready for production.</p>
        </div>

        {/* Guidelines mockup card */}
        <div className="glass-card" style={{ maxWidth: 960, margin: "0 auto", borderRadius: 24, overflow: "hidden" }}>

          {/* Top bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 24px", borderBottom: "1px solid #e7e5e4", background: "#fafaf9" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="4" height="4" rx="0.6" fill="white" fillOpacity="0.95" />
                  <rect x="7" y="1" width="4" height="4" rx="0.6" fill="white" fillOpacity="0.55" />
                  <rect x="1" y="7" width="4" height="4" rx="0.6" fill="white" fillOpacity="0.55" />
                  <rect x="7" y="7" width="4" height="4" rx="0.6" fill="white" fillOpacity="0.25" />
                </svg>
              </div>
              <span style={{ color: "#1c1917", fontWeight: 600, fontSize: 14 }}>Brand Guidelines</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ fontSize: 12, color: "#78716c", background: "transparent", border: "1px solid #d6d3d1", padding: "5px 12px", borderRadius: 8, cursor: "pointer" }}>Export PDF</button>
              <button style={{ fontSize: 12, color: "#fff", background: "#f97316", border: "none", padding: "5px 12px", borderRadius: 8, cursor: "pointer" }}>Download All</button>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <div style={{ width: 176, borderRight: "1px solid #e7e5e4", padding: 16, background: "#fafaf9", flexShrink: 0 }} className="hidden md:block">
              <p style={{ fontSize: 10, fontWeight: 600, color: "#a8a29e", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 12px 4px" }}>Contents</p>
              {TOC.map((item, i) => (
                <button key={item} style={{
                  display: "block", width: "100%", textAlign: "left", fontSize: 12, padding: "7px 10px",
                  borderRadius: 8, border: i === 1 ? "1px solid rgba(249,115,22,0.30)" : "1px solid transparent",
                  background: i === 1 ? "rgba(249,115,22,0.08)" : "transparent",
                  color: i === 1 ? "#f97316" : "#78716c", cursor: "pointer", marginBottom: 2,
                }}>{item}</button>
              ))}
            </div>

            {/* Main */}
            <div style={{ flex: 1, padding: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

              {/* Logo col */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: 10, fontWeight: 600, color: "#a8a29e", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>Logo</p>
                <div style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: 12, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, minHeight: 160 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: "#f97316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
                      <rect x="3" y="3" width="10" height="10" rx="1.8" fill="white" fillOpacity="0.95" />
                      <rect x="17" y="3" width="10" height="10" rx="1.8" fill="white" fillOpacity="0.55" />
                      <rect x="3" y="17" width="10" height="10" rx="1.8" fill="white" fillOpacity="0.55" />
                      <rect x="17" y="17" width="10" height="10" rx="1.8" fill="white" fillOpacity="0.25" />
                    </svg>
                  </div>
                  <span style={{ color: "#1c1917", fontWeight: 700, fontSize: 18, letterSpacing: "-0.03em" }}>SixPackBrands</span>
                  <span style={{ fontSize: 11, color: "#a8a29e" }}>Geometric construction on 4×4 grid.</span>
                </div>
                {/* Construction grid */}
                <div style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: 12, padding: 16 }}>
                  <p style={{ fontSize: 11, color: "#a8a29e", margin: "0 0 10px" }}>Construction Grid</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 4, width: 80 }}>
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} style={{
                        aspectRatio: "1", borderRadius: 3,
                        background: GRID_ACTIVE.has(i) ? "rgba(249,115,22,0.25)" : "#e7e5e4",
                        border: `1px solid ${GRID_ACTIVE.has(i) ? "rgba(249,115,22,0.40)" : "#d6d3d1"}`,
                      }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Type + Color col */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Typography */}
                <div>
                  <p style={{ fontSize: 10, fontWeight: 600, color: "#a8a29e", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>Typography</p>
                  <div style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 24, fontWeight: 700, color: "#1c1917", letterSpacing: "-0.03em" }}>Geist Sans</span>
                    <span style={{ fontSize: 13, color: "#78716c", fontWeight: 300 }}>Regular · Medium · Bold</span>
                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                      {["Aa", "Bb", "Cc", "123"].map((l) => (
                        <span key={l} style={{ fontSize: 12, background: "#ffffff", border: "1px solid #e7e5e4", color: "#78716c", padding: "3px 8px", borderRadius: 6 }}>{l}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Color palette */}
                <div>
                  <p style={{ fontSize: 10, fontWeight: 600, color: "#a8a29e", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 10px" }}>Color Palette</p>
                  <div style={{ background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: 12, padding: 16 }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      {PALETTE.map((c) => (
                        <div key={c.hex} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                          <div style={{ height: 40, borderRadius: 8, background: c.hex, border: c.hex === "#F8FAFC" ? "1px solid rgba(255,255,255,0.12)" : "none" }} />
                          <span style={{ fontSize: 9, color: "#52525b", textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Code snippet */}
                <div className="code-block">
                  <div style={{ color: "#52525b", marginBottom: 4 }}>{'// tailwind.config.js'}</div>
                  <div style={{ color: "#60a5fa" }}>{'colors: {'}</div>
                  <div style={{ paddingLeft: 16, color: "#4ade80" }}>primary: <span style={{ color: "#fbbf24" }}>&apos;#FF4500&apos;</span>,</div>
                  <div style={{ paddingLeft: 16, color: "#4ade80" }}>secondary: <span style={{ color: "#fbbf24" }}>&apos;#cc3700&apos;</span>,</div>
                  <div style={{ paddingLeft: 16, color: "#4ade80" }}>accent: <span style={{ color: "#fbbf24" }}>&apos;#ff8c66&apos;</span>,</div>
                  <div style={{ color: "#60a5fa" }}>{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
