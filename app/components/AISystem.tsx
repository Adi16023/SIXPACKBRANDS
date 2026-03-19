"use client";

const CARDS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    tag: "Step 01",
    title: "Authority Setup",
    description: "Before building authority, we analyze how AI currently sees you. This helps us define what you should be known for.",
    bullets: [
      "AI visibility audit (what AI currently says about you)",
      "Competitor and industry analysis",
      "Founder positioning and niche definition",
      "Topic authority research",
      "Expertise mapping (what topics you should own)",
      "Profile and website positioning review",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    tag: "Step 02",
    title: "Authority Content",
    description: "We create consistent content that shows your expertise. This helps AI associate your name with specific topics.",
    bullets: [
      "Founder posts on X",
      "Founder posts on LinkedIn",
      "Authority threads and insights",
      "Educational posts around your expertise",
      "Structured authority content on your website",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    tag: "Step 03",
    title: "AI Authority Signals",
    description: "AI models learn from how expertise appears across the internet. We strengthen those signals.",
    bullets: [
      "Consistent topic presence across platforms",
      "Founder mentions across the web",
      "Authority discussions in communities (forums, Reddit, etc.)",
      "Expertise signals connected to your website",
      "Expanding your knowledge footprint online",
    ],
  },
];

export default function AISystem() {
  return (
    <section id="system" style={{ padding: "96px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#0460f9", background: "rgba(4,96,249,0.06)", border: "1px solid rgba(4,96,249,0.2)", padding: "5px 14px", borderRadius: 9999, marginBottom: 20, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            How We Make AI Recommend You
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#1c1917", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 auto 20px", maxWidth: 600 }}>
            The 12-Week AI<br />Recommendation System
          </h2>
        </div>

        {/* 3 Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 56 }}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              style={{ background: "#fafaf9", border: "1px solid #e7e5e4", borderRadius: 16, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16, transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {/* Icon */}
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#ffffff", border: "1px solid #e7e5e4", display: "flex", alignItems: "center", justifyContent: "center", color: "#0460f9", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                {card.icon}
              </div>

              {/* Tag + Title */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#a8a29e", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{card.tag}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1c1917", margin: 0, letterSpacing: "-0.02em" }}>{card.title}</h3>
              </div>

              {/* Description */}
              <p style={{ fontSize: 14, color: "#78716c", lineHeight: 1.65, margin: 0 }}>{card.description}</p>

              {/* Divider */}
              <div style={{ height: 1, background: "#f0efee" }} />

              {/* Bullets */}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {card.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#57534e", lineHeight: 1.5 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#0460f9", marginTop: 7, flexShrink: 0, display: "block" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing line + CTA */}
        <div style={{ textAlign: "center", borderTop: "1px solid #f0efee", paddingTop: 48 }}>
          <p style={{ fontSize: 20, fontWeight: 700, color: "#1c1917", margin: "0 0 32px", letterSpacing: "-0.02em" }}>
            When someone asks AI about your industry,<br />your name should appear in the answer.
          </p>
          <a
            href="#"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 700, color: "#fff", background: "#1c1917", padding: "14px 32px", borderRadius: 12, textDecoration: "none", letterSpacing: "-0.01em", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", transition: "background 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#44403c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1917")}
          >
            Book a Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
