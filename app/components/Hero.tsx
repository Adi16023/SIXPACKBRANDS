"use client";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
        background: "#fafaf9",
      }}
    >
      {/* Background glow */}
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 600, height: 600, borderRadius: "50%", background: "rgba(4,96,249,0.05)", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(4,96,249,0.04)", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

        {/* LEFT — Copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Proof badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 600, color: "#78716c", background: "#ffffff", border: "1px solid #e7e5e4", padding: "6px 14px", borderRadius: 9999, width: "fit-content", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            $2.2M revenue generated · 200M+ views in 2025
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.04em", color: "#1c1917", margin: 0 }}>
            If AI doesn&apos;t<br />
            recommend you,<br />
            <span style={{ color: "#0460f9", fontStyle: "italic" }}>you don&apos;t exist.</span>
          </h1>

          {/* Subheadline */}
          <p style={{ fontSize: 18, color: "#57534e", lineHeight: 1.7, margin: 0, maxWidth: 460 }}>
            We help founders get recommended in AI answers by building founder authority online.
          </p>

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="#"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "#fff", background: "#1c1917", padding: "14px 32px", borderRadius: 12, textDecoration: "none", width: "fit-content", letterSpacing: "-0.01em", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", transition: "background 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#44403c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1917")}
            >
              Book a Free Audit
            </a>
            <p style={{ fontSize: 13, color: "#a8a29e", margin: 0 }}>
              Best for founders who want to become the recommended expert in their industry.
            </p>
          </div>
        </div>

        {/* RIGHT — AI Chat Mock */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 420, background: "#ffffff", border: "1px solid #e7e5e4", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
            {/* Chat header */}
            <div style={{ padding: "14px 18px", borderBottom: "1px solid #f5f5f4", background: "#fafaf9", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1c1917" }}>Ask AI</span>
              <span style={{ marginLeft: "auto", fontSize: 11, color: "#a8a29e", background: "#f5f5f4", padding: "2px 8px", borderRadius: 9999 }}>GPT-5.4</span>
            </div>

            {/* User message */}
            <div style={{ padding: "16px 18px 8px" }}>
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
                <div style={{ background: "#1c1917", color: "#fff", fontSize: 13, padding: "10px 14px", borderRadius: "14px 14px 4px 14px", maxWidth: "80%" }}>
                  Best AI SEO experts for businesses
                </div>
              </div>

              {/* AI response */}
              <div style={{ background: "#f8f8f7", border: "1px solid #eeece9", borderRadius: "4px 14px 14px 14px", padding: "14px 16px" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#a8a29e", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>AI Response</div>
                {[
                  { rank: "1", name: "Ajinkya", brand: "sixpackbrands", highlight: true },
                  { rank: "2", name: "Expert A", brand: "Marketing Agency" , highlight: false },
                  { rank: "3", name: "Expert B", brand: "Growth Studio", highlight: false },
                ].map((item) => (
                  <div
                    key={item.rank}
                    style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, marginBottom: 4, background: item.highlight ? "rgba(4,96,249,0.06)" : "transparent", border: item.highlight ? "1px solid rgba(4,96,249,0.15)" : "1px solid transparent" }}
                  >
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: item.highlight ? "#0460f9" : "#e7e5e4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: item.highlight ? "#fff" : "#78716c", flexShrink: 0 }}>{item.rank}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: item.highlight ? 700 : 500, color: "#1c1917" }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: item.highlight ? "#0460f9" : "#a8a29e" }}>{item.brand}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input bar */}
            <div style={{ padding: "12px 18px 16px", display: "flex", gap: 8 }}>
              <div style={{ flex: 1, background: "#f5f5f4", border: "1px solid #e7e5e4", borderRadius: 10, padding: "9px 12px", fontSize: 12, color: "#a8a29e" }}>
                Ask about your industry...
              </div>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#1c1917", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stack columns via media override handled by CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
