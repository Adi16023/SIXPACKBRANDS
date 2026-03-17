"use client";
const TRUST = ["No credit card required", "Generate in 30 seconds", "Cancel anytime"];

export default function CTASection() {
  return (
    <section
      className="grid-bg"
      style={{ position: "relative", padding: "96px 24px", overflow: "hidden" }}
    >
      {/* Glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:800, height:500, borderRadius:"50%", background:"rgba(249,115,22,0.06)", filter:"blur(120px)", pointerEvents:"none" }} />

      <div style={{ position:"relative", zIndex:1, maxWidth:720, margin:"0 auto", textAlign:"center", display:"flex", flexDirection:"column", alignItems:"center", gap:32 }}>

        {/* Icon */}
        <div style={{
          width: 64, height: 64, borderRadius: 18, background: "#f97316",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 32px rgba(249,115,22,0.30)",
        }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="4" y="4" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.95" />
            <rect x="15" y="4" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.55" />
            <rect x="4" y="15" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.55" />
            <rect x="15" y="15" width="9" height="9" rx="1.5" fill="white" fillOpacity="0.25" />
          </svg>
        </div>

        {/* Headline */}
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <h2 style={{ fontSize:"clamp(32px,5vw,48px)", fontWeight:700, color:"#1c1917", letterSpacing:"-0.03em", lineHeight:1.1, margin:0 }}>
            Your brand identity.<br />
            <span className="gradient-text">30 seconds.</span>
          </h2>
          <p style={{ fontSize:17, color:"#78716c", lineHeight:1.6, margin:0 }}>
            Logo. Colors. Typography. Code-ready exports.<br />
            No credit card required.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:16 }}>
          <a
            href="#"
            style={{
              display:"inline-flex", alignItems:"center", gap:8,
              fontSize:14, fontWeight:600, color:"#fff",
              background:"#f97316", padding:"12px 28px",
              borderRadius:14, textDecoration:"none",
              boxShadow:"0 4px 20px rgba(249,115,22,0.30)",
              transition:"background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ea6c0a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f97316")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Generate Your Brand
          </a>
          <a href="#" style={{ fontSize:13, color:"#78716c", textDecoration:"none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
          >
            Already have an account?{" "}
            <span style={{ color:"#f97316", textDecoration:"underline", textUnderlineOffset:3 }}>Log in</span>
          </a>
        </div>

        {/* Trust signals */}
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:20 }}>
          {TRUST.map((t) => (
            <span key={t} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"#a8a29e" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#d6d3d1" strokeWidth="1.5">
                <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
