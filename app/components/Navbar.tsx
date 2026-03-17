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
    { label: "Why SixPackBrands", href: "#why" },
    { label: "How It Works", href: "#system" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.95" />
              <rect x="7" y="1" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.6" />
              <rect x="1" y="7" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.6" />
              <rect x="7" y="7" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.3" />
            </svg>
          </div>
          <span style={{ color: "#1c1917", fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em" }}>
            SixPackBrands.
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden md:flex">
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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hidden md:flex">
          {/* NEW badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              padding: "5px 12px",
              borderRadius: 9999,
              background: "rgba(249,115,22,0.08)",
              border: "1px solid rgba(249,115,22,0.20)",
              color: "#fb923c",
            }}
          >
            <span className="pulse-dot" />
            <span style={{ fontWeight: 600, color: "#f97316" }}>NEW</span>
            <span style={{ color: "#a8a29e" }}>Free Brand Audit Tool</span>
          </div>
          <a
            href="#"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              background: "#1c1917",
              padding: "8px 18px",
              borderRadius: 9999,
              textDecoration: "none",
              transition: "background 0.15s",
              letterSpacing: "-0.01em",
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
          style={{ background: "none", border: "none", cursor: "pointer", color: "#78716c", padding: 4 }}
          className="md:hidden"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen
              ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: "rgba(250,250,249,0.97)",
            borderTop: "1px solid #e7e5e4",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: 14,
                color: "#78716c",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid #f5f5f4",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: 12,
              display: "block",
              textAlign: "center",
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              background: "#f97316",
              padding: "12px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            Book a Free Audit
          </a>
        </div>
      )}
      </header>
    </div>
  );
}
