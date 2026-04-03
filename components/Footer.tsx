import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
              <span style={{ fontSize: "2rem" }}>🏖</span>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "white" }}>
                  Bordeaux · Île de Ré
                </div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                  Getaways
                </div>
              </div>
            </div>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Votre guide de confiance pour découvrir l&apos;Île de Ré et la région bordelaise. Des conseils locaux authentiques pour des vacances inoubliables.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.7)" }}>
              <span>✉️</span>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="footer-link"
                style={{ fontSize: "0.9rem" }}
              >
                {siteConfig.social.email}
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {siteConfig.footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="footer-title">{group.title}</h3>
              <nav>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            <p style={{ fontSize: "0.8rem", margin: 0 }}>
              © {currentYear} {siteConfig.name}. Tous droits réservés.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/mentions-legales" className="footer-link" style={{ fontSize: "0.8rem", padding: 0 }}>
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="footer-link" style={{ fontSize: "0.8rem", padding: 0 }}>
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
