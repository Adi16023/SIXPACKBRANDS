"use client";
const STEPS = [
  {
    num: "01",
    title: "Describe Your Brand",
    desc: "Describe your product and audience. SixPackBrands translates your words into design constraints.",
    tag: "Natural language input",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.8">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Pick Your Identity",
    desc: "The engine constructs logos, palettes, and typography rules on a mathematical grid.",
    tag: "AI-powered generation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Export to Your Stack",
    desc: "Download your brand as a React codebase with Tailwind config and vector assets.",
    tag: "Code-ready exports",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ position: "relative", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="badge" style={{ marginBottom: 20, display: "inline-flex" }}>Simple Process</span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#1c1917", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0 }}>
            From Idea to Codebase<br />
            <span style={{ color: "#a8a29e" }}>in 3 Steps.</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: 32, display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(255,69,0,0.10)",
                  border: "1px solid rgba(255,69,0,0.22)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {step.icon}
                </div>
                <span style={{ fontSize: 40, fontWeight: 800, color: "#e7e5e4", lineHeight: 1, userSelect: "none" }}>{step.num}</span>
              </div>

              <div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#1c1917", margin: "0 0 8px", letterSpacing: "-0.02em" }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#78716c", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>

              <div style={{ marginTop: "auto" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12, fontWeight: 500,
                  background: "rgba(255,69,0,0.10)",
                  color: "#FF4500",
                  padding: "4px 12px", borderRadius: 9999,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#FF4500", flexShrink: 0 }} />
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
