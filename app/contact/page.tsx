import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Bordeaux Île de Ré Getaways",
  description:
    "Contactez l'équipe de Bordeaux Île de Ré Getaways pour toute question sur votre séjour à l'Île de Ré ou dans la région bordelaise.",
};

const sujets = [
  { emoji: "🗺", titre: "Question sur un guide", desc: "Itinéraire, durée, difficulté, étapes recommandées" },
  { emoji: "🏨", titre: "Hébergement", desc: "Recommandations, disponibilités, tarifs saisonniers" },
  { emoji: "🤝", titre: "Partenariat", desc: "Vous êtes une adresse locale et souhaitez apparaître dans nos guides" },
  { emoji: "✍️", titre: "Correction", desc: "Information périmée, erreur dans un article" },
  { emoji: "🎥", titre: "Presse & Médias", desc: "Demande d'interview, partenariat éditorial" },
  { emoji: "💌", titre: "Autre", desc: "Tout autre sujet lié à l'Île de Ré et la région" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-primary) 0%, #154360 100%)",
        padding: "5rem 0 4rem",
      }}>
        <div className="container">
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Contact</span>
          </nav>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Contactez-nous
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "500px" }}>
            Une question sur votre séjour à l&apos;Île de Ré ? Notre équipe d&apos;experts locaux vous répond sous 48h.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            {/* Infos contact */}
            <div>
              <p className="section-eyebrow">Nous écrire</p>
              <h2 className="section-title">Notre Adresse Email</h2>
              <div className="divider-lighthouse" />

              <div style={{
                background: "var(--color-primary)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem 2rem",
                textAlign: "center",
                marginBottom: "2rem",
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
                <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", marginBottom: "0.75rem" }}>
                  Écrivez-nous directement à :
                </p>
                <a
                  href="mailto:contact@bordeaux-iledere-getaways.com"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    color: "var(--color-gold-light)",
                    textDecoration: "none",
                    fontWeight: 700,
                    wordBreak: "break-word",
                  }}
                >
                  contact@bordeaux-iledere-getaways.com
                </a>
                <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", marginTop: "1rem", marginBottom: 0 }}>
                  Réponse sous 48h en saison (72h hors saison)
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.25rem" }}>⏰</span>
                  <div>
                    <strong style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text)" }}>Disponibilité</strong>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)", margin: 0 }}>Lundi au vendredi, 9h–18h</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.25rem" }}>📍</span>
                  <div>
                    <strong style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text)" }}>Base de l&apos;équipe</strong>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)", margin: 0 }}>Saint-Martin-de-Ré, Île de Ré (17)</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.25rem" }}>🌐</span>
                  <div>
                    <strong style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text)" }}>Site</strong>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)", margin: 0 }}>bordeaux-iledere-getaways.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sujets fréquents */}
            <div>
              <p className="section-eyebrow">Avant d&apos;écrire</p>
              <h2 className="section-title">Sujets Fréquents</h2>
              <div className="divider-lighthouse" />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {sujets.map((s) => (
                  <div key={s.titre} style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    background: "var(--color-surface-warm)",
                    padding: "1rem 1.25rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border-light)",
                  }}>
                    <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{s.emoji}</span>
                    <div>
                      <strong style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-primary)", display: "block", marginBottom: "0.2rem" }}>
                        {s.titre}
                      </strong>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liens utiles */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>
            Trouvez Votre Réponse en Autonomie
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2.5rem", maxWidth: "400px", margin: "0 auto 2.5rem" }}>
            La plupart des questions trouvent leur réponse dans nos guides et articles.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guides" className="btn-primary">Consulter les guides</Link>
            <Link href="/blog" className="btn-outline">Lire le blog</Link>
            <Link href="/a-propos" className="btn-outline">À propos de nous</Link>
          </div>
        </div>
      </section>
    </>
  );
}
