"use client";

const ROWS = [
  { label: "Keyword & topic research",         seo: true,  pb: false, spb: true },
  { label: "Website authority articles",        seo: true,  pb: false, spb: true },
  { label: "Structured website pages & FAQs",   seo: true,  pb: false, spb: true },
  { label: "Founder positioning strategy",      seo: false, pb: true,  spb: true },
  { label: "X content creation",                seo: false, pb: true,  spb: true },
  { label: "LinkedIn authority posts",          seo: false, pb: true,  spb: true },
  { label: "Topic authority building",          seo: true,  pb: false, spb: true },
  { label: "Reddit & community discussions",    seo: false, pb: false, spb: true },
  { label: "Founder mentions across the web",   seo: false, pb: false, spb: true },
  { label: "Multi-platform authority signals",  seo: false, pb: false, spb: true },
  { label: "AI recommendation optimization",    seo: false, pb: false, spb: true },
];

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#dcfce7" />
    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cross = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#f5f5f4" />
    <path d="M9 9l6 6M15 9l-6 6" stroke="#a8a29e" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section-pad" style={{ padding: "96px 24px", background: "#fafaf9" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#1c1917", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 16px" }}>
            How founders build authority<br />online in 2026
          </h2>
        </div>

        {/* Table wrapper — scrollable on mobile */}
        <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #e7e5e4", background: "#ffffff", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
            <thead>
              <tr>
                <th style={{ padding: "16px 20px", textAlign: "left", fontSize: 13, fontWeight: 600, color: "#a8a29e", borderBottom: "1px solid #f0efee", background: "#fafaf9", width: "40%" }}>
                  Deliverable
                </th>
                <th style={{ padding: "16px 20px", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#a8a29e", borderBottom: "1px solid #f0efee", background: "#fafaf9" }}>
                  SEO Agencies
                </th>
                <th style={{ padding: "16px 20px", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#a8a29e", borderBottom: "1px solid #f0efee", background: "#fafaf9" }}>
                  Personal Branding
                </th>
                <th style={{ padding: "16px 20px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#0460f9", borderBottom: "1px solid #f0efee", background: "rgba(4,96,249,0.04)" }}>
                  sixpackbrands ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < ROWS.length - 1 ? "1px solid #f5f5f4" : "none" }}>
                  <td style={{ padding: "14px 20px", fontSize: 14, color: "#44403c", fontWeight: 500 }}>
                    {row.label}
                  </td>
                  <td style={{ padding: "14px 20px", textAlign: "center" }}>
                    {row.seo ? <Check /> : <Cross />}
                  </td>
                  <td style={{ padding: "14px 20px", textAlign: "center" }}>
                    {row.pb ? <Check /> : <Cross />}
                  </td>
                  <td style={{ padding: "14px 20px", textAlign: "center", background: "rgba(4,96,249,0.03)" }}>
                    {row.spb ? <Check /> : <Cross />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Caption */}
        <div className="comparison-caption" style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
          {[
            "SEO builds website authority.",
            "Personal branding builds social authority.",
            "We combine both to build AI authority across the internet.",
          ].map((text, i) => (
            <span
              key={i}
              style={{ fontSize: 14, color: i === 2 ? "#1c1917" : "#78716c", fontWeight: i === 2 ? 600 : 400 }}
            >
              {text}{i < 2 ? " " : ""}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
