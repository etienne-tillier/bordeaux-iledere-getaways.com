"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <span style={{ fontSize: "1.6rem" }}>🏖</span>
            <div>
              <div style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.1,
              }}>
                Bordeaux · Île de Ré
              </div>
              <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}>
                Getaways
              </div>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav style={{ display: "flex", gap: "0.25rem" }} className="hidden-mobile">
            {siteConfig.mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="header-link">
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Burger mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "none",
            }}
            className="burger-btn"
            aria-label="Menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{
            paddingBottom: "1rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "0.75rem",
          }} className="mobile-nav">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-link"
                style={{ display: "block", padding: "0.6rem 0.5rem" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
