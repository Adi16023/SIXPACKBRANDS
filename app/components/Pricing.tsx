"use client";
import { useState } from "react";

const plans = [
  {
    name: "Explorer",
    badge: "FOREVER FREE",
    price: "$0",
    period: "",
    description: "Explore possibilities. Find your perfect mark.",
    cta: "Start Free",
    ctaHref: "#",
    highlight: false,
    note: "Perfect for testing ideas",
    features: [
      { text: "1 Free Generation", included: true },
      { text: "Live Preview & Mockups", included: true },
      { text: "Low-Res PNG (500px)", included: true },
      { text: "SVG Vector Export", included: false },
      { text: "Prompt for vibe coding tools", included: false },
      { text: "Figma Export", included: false },
      { text: "Commercial License", included: false },
    ],
  },
  {
    name: "Monthly",
    badge: "FULL ACCESS",
    price: "$19",
    period: "/mo",
    description: "Full access with flexibility.",
    cta: "Start Monthly",
    ctaHref: "#",
    highlight: true,
    note: "No commitment, cancel anytime",
    features: [
      { text: "Unlimited Generations", included: true },
      { text: "Commercial License", included: true },
      { text: "High-Res PNG (4000px)", included: true },
      { text: "Vector SVG Export", included: true },
      { text: "Prompt for vibe coding tools", included: true },
      { text: "Tailwind CSS Config", included: true },
      { text: "React Component", included: true },
      { text: "Color Palettes", included: true },
      { text: "Generation History", included: true },
      { text: "Figma Export", included: false },
    ],
  },
  {
    name: "One-Time",
    badge: "ONE-TIME PAYMENT",
    price: "$49",
    period: "",
    description: "Own it forever. No recurring fees.",
    cta: "Get Lifetime Access",
    ctaHref: "#",
    highlight: false,
    note: "Early access pricing — price increases soon",
    features: [
      { text: "Unlimited Generations", included: true },
      { text: "Commercial License", included: true },
      { text: "High-Res PNG (4000px)", included: true },
      { text: "Vector SVG Export", included: true },
      { text: "Prompt for vibe coding tools", included: true },
      { text: "Tailwind CSS Config", included: true },
      { text: "React Component", included: true },
      { text: "Color Palettes", included: true },
      { text: "Generation History", included: true },
      { text: "Figma Export", included: true },
      { text: "Lifetime Updates", included: true },
      { text: "Priority Support", included: true },
    ],
  },
];

export default function Pricing() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="pricing" style={{ position: "relative", padding: "96px 24px" }}>
      {/* Top divider line */}
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:1, height:96, background:"linear-gradient(to bottom,transparent,rgba(255,69,0,0.3))" }} />

      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="badge" style={{ marginBottom: 20, display: "inline-flex" }}>Pricing</span>
          <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: "#1c1917", letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 12px" }}>
            Simple, Transparent Pricing.
          </h2>
          <p style={{ fontSize: 15, color: "#78716c", margin: "0 0 12px" }}>Start free. Upgrade when you&apos;re ready to ship.</p>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#34d399", background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.18)", padding: "4px 12px", borderRadius: 9999 }}>
            <span className="pulse-dot-green" />
            Over 200 unique brands generated
          </span>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: 20,
                padding: 24,
                transition: "border-color 0.2s, box-shadow 0.2s",
                background: plan.highlight ? "#ffffff" : "#ffffff",
                border: plan.highlight
                  ? "2px solid #0460f9"
                  : hovered === i
                  ? "1px solid #d6d3d1"
                  : "1px solid #e7e5e4",
                boxShadow: plan.highlight ? "0 8px 40px rgba(4,96,249,0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", background: "#0460f9", padding: "5px 14px", borderRadius: 9999, whiteSpace: "nowrap", letterSpacing: "0.02em" }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#a8a29e", letterSpacing: "0.1em", textTransform: "uppercase" }}>{plan.badge}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1c1917", letterSpacing: "-0.02em", margin: "4px 0" }}>{plan.name}</h3>
                <p style={{ fontSize: 13, color: "#78716c", margin: 0 }}>{plan.description}</p>
              </div>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 20 }}>
                <span style={{ fontSize: 40, fontWeight: 800, color: "#1c1917", letterSpacing: "-0.04em", lineHeight: 1 }}>{plan.price}</span>
                {plan.period && <span style={{ fontSize: 14, color: "#a8a29e", marginBottom: 4 }}>{plan.period}</span>}
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                style={{
                  display: "block",
                  textAlign: "center",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "11px",
                  borderRadius: 12,
                  marginBottom: 20,
                  textDecoration: "none",
                  transition: "background 0.15s",
                  ...(plan.highlight
                    ? { background: "#0460f9", color: "#fff", border: "none" }
                    : { background: "#f5f5f4", color: "#44403c", border: "1px solid #e7e5e4" }),
                }}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div style={{ borderTop: "1px solid #f5f5f4", marginBottom: 18 }} />

              {/* Features */}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                {plan.features.map((f) => (
                  <li key={f.text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
                    {f.included ? (
                      <span style={{ width: 16, height: 16, borderRadius: "50%", background: "rgba(4,96,249,0.10)", border: "1px solid rgba(4,96,249,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="#0460f9" strokeWidth="2.5">
                          <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    ) : (
                      <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#f5f5f4", border: "1px solid #e7e5e4", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="#d6d3d1" strokeWidth="2.5">
                          <path d="M3 3l6 6M9 3l-6 6" strokeLinecap="round" />
                        </svg>
                      </span>
                    )}
                    <span style={{ color: f.included ? "#44403c" : "#d6d3d1", textDecoration: f.included ? "none" : "line-through" }}>{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* Footer note */}
              <p style={{ marginTop: 18, fontSize: 11, color: "#a8a29e", textAlign: "center" }}>{plan.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
