"use client";
import { useState, useEffect } from "react";

const PRODUCT_LINKS = [
  { label: "Why sixpackbrands", href: "#comparison" },
  { label: "How It Works", href: "#system" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Free Audit", href: "#", badge: { text: "Free", color: "#34d399", bg: "rgba(52,211,153,0.10)", border: "rgba(52,211,153,0.22)" } },
];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <footer style={{ borderTop: "1px solid #e7e5e4", padding: "56px 24px 40px", background: "#fafaf9" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr", gap: isMobile ? "32px 24px" : 40, marginBottom: 48 }}>

          {/* Brand col */}
          <div style={{ display:"flex", flexDirection:"column", gap:16, gridColumn: isMobile ? "1 / -1" : "auto" }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ color:"#1c1917", fontWeight:600, fontSize:17, letterSpacing:"-0.02em" }}>sixpackbrands</span>
            </div>
            <p style={{ fontSize:13, color:"#78716c", lineHeight:1.65, margin:0, maxWidth:280 }}>
              We help founders get recommended in AI answers by building founder authority across the internet.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              <span style={{ fontSize:12, fontWeight:600, color:"#a8a29e", textTransform:"uppercase", letterSpacing:"0.06em" }}>Connect with us</span>
              <div style={{ display:"flex", gap:10 }}>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:34, height:34, borderRadius:8, background:"#f5f5f4", border:"1px solid #e7e5e4", color:"#78716c", textDecoration:"none", transition:"background 0.15s, color 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background="#1c1917"; e.currentTarget.style.color="#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background="#f5f5f4"; e.currentTarget.style.color="#78716c"; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer"
                  style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:34, height:34, borderRadius:8, background:"#f5f5f4", border:"1px solid #e7e5e4", color:"#78716c", textDecoration:"none", transition:"background 0.15s, color 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background="#0077b5"; e.currentTarget.style.color="#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background="#f5f5f4"; e.currentTarget.style.color="#78716c"; }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Product col */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <h4 style={{ fontSize:13, fontWeight:600, color:"#1c1917", margin:0 }}>Product</h4>
            <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:10 }}>
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}
                    style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:13, color:"#78716c", textDecoration:"none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
                  >
                    {l.label}
                    {l.badge && (
                      <span style={{ fontSize:9, fontWeight:600, color:l.badge.color, background:l.badge.bg, border:`1px solid ${l.badge.border}`, padding:"1px 6px", borderRadius:4 }}>
                        {l.badge.text}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal col */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <h4 style={{ fontSize:13, fontWeight:600, color:"#1c1917", margin:0 }}>Legal</h4>
            <ul style={{ listStyle:"none", margin:0, padding:0, display:"flex", flexDirection:"column", gap:10 }}>
              {LEGAL_LINKS.map((l) => (
                <li key={l}>
                  <a href="#"
                    style={{ fontSize:13, color:"#78716c", textDecoration:"none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid #e7e5e4", paddingTop:20, display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent: isMobile ? "center" : "space-between", flexDirection: isMobile ? "column" : "row", gap:12, textAlign: isMobile ? "center" : "left" }}>
          <span style={{ fontSize:12, color:"#a8a29e" }}>© 2026 sixpackbrands. All rights reserved.</span>
          <a href="#" target="_blank" rel="noopener noreferrer"
            style={{ fontSize:12, color:"#a8a29e", textDecoration:"none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#78716c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a8a29e")}
          >Made by sixpackbrands Team</a>
        </div>
      </div>
    </footer>
  );
}
