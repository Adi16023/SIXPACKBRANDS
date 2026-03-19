"use client";

const CARDS = [
  { prompt: "Best founders in SaaS" },
  { prompt: "Best marketing experts" },
  { prompt: "Best lead generation tools" },
];

export default function SearchChanging() {
  return (
    <section id="why" style={{ position: "relative", padding: "96px 24px", background: "#fafaf9", overflow: "hidden" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>

        {/* Label */}
        <span className="badge" style={{ display: "inline-flex", marginBottom: 24 }}>Search Is Changing</span>

        {/* Heading */}
        <h2 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "#1c1917", letterSpacing: "-0.04em", lineHeight: 1.08, margin: "0 0 24px" }}>
          People don&apos;t search the internet<br />like before.
        </h2>

        {/* Body */}
        <p style={{ fontSize: 18, color: "#78716c", lineHeight: 1.7, margin: "0 0 56px" }}>
          They ask AI. If your brand is not in those answers, you lose the customer.
        </p>

        {/* Subheading */}
        <p style={{ fontSize: 13, fontWeight: 600, color: "#a8a29e", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>
          Ask AI about your industry
        </p>

        {/* Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 32 }}>
          {CARDS.map((c) => (
            <div
              key={c.prompt}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#ffffff",
                border: "1px solid #e7e5e4",
                borderRadius: 12,
                padding: "14px 20px",
                boxShadow: "0 2px 8px rgba(4,96,249,0.05)",
              }}
            >
              {/* AI sparkle icon */}
              <span style={{ fontSize: 16 }}>✦</span>
              <span style={{ fontSize: 15, fontWeight: 500, color: "#1c1917" }}>{c.prompt}</span>
            </div>
          ))}
        </div>

        {/* Below cards */}
        <p style={{ fontSize: 16, fontWeight: 600, color: "#1c1917", margin: 0 }}>
          Your brand should appear in these answers.
        </p>
      </div>
    </section>
  );
}
