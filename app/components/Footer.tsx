"use client";
const PRODUCT_LINKS = [
  { label: "Why SixPackBrands", href: "#why" },
  { label: "How It Works", href: "#system" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Free Audit", href: "#", badge: { text: "Free", color: "#34d399", bg: "rgba(52,211,153,0.10)", border: "rgba(52,211,153,0.22)" } },
];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e7e5e4", padding: "56px 24px 40px", background: "#fafaf9" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="footer-grid">

          {/* Brand col */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:28, height:28, borderRadius:7, background:"#f97316", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.95" />
                  <rect x="7" y="1" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.55" />
                  <rect x="1" y="7" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.55" />
                  <rect x="7" y="7" width="4" height="4" rx="0.8" fill="white" fillOpacity="0.25" />
                </svg>
              </div>
              <span style={{ color:"#1c1917", fontWeight:600, fontSize:17, letterSpacing:"-0.02em" }}>SixPackBrands.</span>
            </div>
            <p style={{ fontSize:13, color:"#78716c", lineHeight:1.65, margin:0, maxWidth:280 }}>
              We help founders get recommended in AI answers by building founder authority across the internet.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:8, fontSize:13, color:"#78716c", textDecoration:"none", width:"fit-content" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1c1917")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#78716c")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow on X
            </a>
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
        <div style={{ borderTop:"1px solid #e7e5e4", paddingTop:20, display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:12 }}>
          <span style={{ fontSize:12, color:"#a8a29e" }}>© 2026 SixPackBrands. All rights reserved.</span>
          <a href="#" target="_blank" rel="noopener noreferrer"
            style={{ fontSize:12, color:"#a8a29e", textDecoration:"none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#78716c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a8a29e")}
          >Made by SixPackBrands Team</a>
        </div>
      </div>
    </footer>
  );
}
