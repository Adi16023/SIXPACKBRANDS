"use client";

import { useState, useRef, useEffect } from "react";

function FAQItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${isOpen ? "rgba(4,96,249,0.30)" : "#e7e5e4"}`,
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.25s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500, color: isOpen ? "#1c1917" : "#44403c", lineHeight: 1.4, transition: "color 0.2s" }}>
          {faq.q}
        </span>
        <span style={{
          marginLeft: 16,
          flexShrink: 0,
          width: 24,
          height: 24,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), background 0.2s, border-color 0.2s",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          background: isOpen ? "rgba(4,96,249,0.08)" : "#f5f5f4",
          border: isOpen ? "1px solid rgba(4,96,249,0.30)" : "1px solid #e7e5e4",
        }}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke={isOpen ? "#0460f9" : "#a8a29e"} strokeWidth="2">
            <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {/* Animated body */}
      <div
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div ref={bodyRef} style={{ padding: "0 24px 20px" }}>
          <div style={{ borderTop: "1px solid #f5f5f4", paddingTop: 16 }}>
            <p style={{ fontSize: 14, color: "#78716c", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "What is AI visibility?",
    a: "AI visibility means your brand appears when people ask AI tools questions. For example, someone might ask: best marketing experts, best founders in SaaS, or best agencies in a specific industry. AI tools generate answers by analyzing information across the internet. Our system helps strengthen your authority online so AI systems recognize your expertise and recommend you.",
  },
  {
    q: "How is this different from a personal branding agency?",
    a: "Most personal branding agencies focus on growing social media followers. They help founders post content on platforms like X or LinkedIn. Our approach focuses on authority signals that AI systems recognize. This means building consistent expertise around specific topics so AI tools associate your name with those topics.",
  },
  {
    q: "Will this work if I already invest in SEO or content marketing?",
    a: "Yes. SEO and content marketing help build website authority. Our system strengthens additional signals that AI systems use to recommend experts, including founder authority and multi-platform expertise signals. This often works alongside existing SEO strategies.",
  },
  {
    q: "Which AI tools does this help with?",
    a: "Our system improves how your brand appears across AI systems people use to research information. These systems learn from online content such as articles, discussions, founder content, and expert insights. By building strong authority signals across the internet, your chances of appearing in AI answers increase.",
  },
  {
    q: "How long does it take to see results?",
    a: "AI authority builds over time as your expertise becomes clearer across the internet. Most founders start seeing early signals within 60–90 days. The exact timeline depends on your industry and current online presence.",
  },
  {
    q: "Do you create the content?",
    a: "Yes. We help plan and create founder content that builds authority around your expertise. This includes content on X and LinkedIn as well as structured authority posts.",
  },
  {
    q: "Do I need a large audience for this to work?",
    a: "No. AI systems do not only look at follower counts. They look at expertise signals, topic consistency, and authority across the internet. Even founders with small audiences can become highly visible to AI.",
  },
  {
    q: "Who is this service best suited for?",
    a: "This system works best for founders who want to build authority in their industry and become discoverable through AI. Examples include SaaS founders, consultants and experts, agency owners, and startup founders.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ position: "relative", padding: "96px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#1c1917", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 12px" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 16, color: "#78716c", margin: 0 }}>Everything you need to know about AI authority building.</p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
        {/* After FAQ CTA */}
        <div style={{ marginTop: 56, textAlign: "center", padding: "40px 32px", background: "#fafaf9", borderRadius: 16, border: "1px solid #e7e5e4" }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#a8a29e", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Have more questions?</p>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#1c1917", letterSpacing: "-0.03em", margin: "0 0 24px" }}>
            Let&apos;s talk about your situation.
          </h3>
          <a
            href="#"
            style={{ display: "inline-flex", alignItems: "center", fontSize: 15, fontWeight: 700, color: "#fff", background: "#1c1917", padding: "14px 32px", borderRadius: 12, textDecoration: "none", letterSpacing: "-0.01em", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", transition: "background 0.15s" }}
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
