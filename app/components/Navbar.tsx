"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Why sixpackbrands", href: "#why" },
    { label: "How It Works", href: "#system" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .nav-desktop { display: none !important; width: 0 !important; overflow: hidden !important; }
        .nav-mobile-btn { display: flex !important; }
      }
    `}</style>
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        /* Only add padding when scrolled so the inner bar floats */
        padding: scrolled ? "10px 24px" : "0 24px",
        transition: "padding 0.25s ease",
        pointerEvents: "none",
      }}
    >
      <header
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          borderRadius: scrolled ? 14 : 0,
          transition: "background 0.25s ease, box-shadow 0.25s ease, border-radius 0.25s ease",
          background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          border: scrolled ? "1px solid #e7e5e4" : "none",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.07)" : "none",
          pointerEvents: "auto",
        }}
      >
      <div
        style={{
          padding: "0 20px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <span style={{ color: "#1c1917", fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em" }}>
            sixpackbrands
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="nav-desktop" style={{ alignItems: "center", gap: 28 }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                color: "#78716c",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="nav-desktop" style={{ alignItems: "center", gap: 12 }}>
          <a
            href="#"
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
              background: "#1c1917",
              padding: "10px 22px",
              borderRadius: 12,
              textDecoration: "none",
              transition: "background 0.15s",
              letterSpacing: "-0.01em",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#44403c")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1c1917")}
          >
            Book a Free Audit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#1c1917", padding: 4 }}
          className="nav-mobile-btn"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen
              ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu — full overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#fafaf9",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            padding: "0 20px 32px",
          }}
        >
          {/* Top bar with logo + close */}
          <div style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e7e5e4" }}>
            <span style={{ color: "#1c1917", fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em" }}>sixpackbrands</span>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#1c1917", padding: 4 }}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div style={{ background: "#ffffff", borderRadius: 16, border: "1px solid #e7e5e4", marginTop: 20, overflow: "hidden" }}>
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#1c1917",
                  textDecoration: "none",
                  padding: "16px 20px",
                  borderBottom: i < navLinks.length - 1 ? "1px solid #f5f5f4" : "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                fontSize: 15,
                fontWeight: 700,
                color: "#1c1917",
                background: "#ffffff",
                border: "1px solid #e7e5e4",
                padding: "14px",
                borderRadius: 14,
                textDecoration: "none",
              }}
            >
              Learn More
            </a>
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                background: "#1c1917",
                padding: "14px",
                borderRadius: 14,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              Book a Free Audit
            </a>
          </div>
        </div>
      )}
      </header>
    </div>
    </>
  );
}
