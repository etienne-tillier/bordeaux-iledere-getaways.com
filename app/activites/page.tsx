import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activités Île de Ré — Vélo, Nautique, Culture & Gastronomie",
  description:
    "Toutes les activités à faire à l'Île de Ré : vélo, kitesurf, visite des phares, dégustations d'huîtres, marchés locaux. Par saison et par type.",
};

const categories = [
  {
    titre: "Vélo & Randonnée",
    emoji: "🚴",
    color: "#1B4F72",
    desc: "Avec 240 km de pistes cyclables balisées, l'Île de Ré est un paradis pour les cyclistes de tous niveaux. Des plats marécageux aux petits reliefs, vous traverserez vignes, villages et marais salants.",
    activites: [
      "Le Grand Tour de l'île à vélo (120 km aller-retour)",
      "Piste Bois-Plage — Phare des Baleines (36 km A/R)",
      "Circuit des marais salants d'Ars-en-Ré",
      "Balade nocturne sur les plages le soir d'été",
    ],
  },
  {
    titre: "Plages & Mer",
    emoji: "🏖",
    color: "#C1440E",
    desc: "30 km de côtes offrent une diversité remarquable : plages ventées pour les sports, criques protégées pour les familles, plages dunaires pour les amoureux. Chaque secteur a sa personnalité.",
    activites: [
      "Baignade surveillée (juin-août) sur 14 plages",
      "Kitesurf et planche à voile à La Couarde",
      "Stand-up paddle autour des cabanes ostréicoles",
      "Snorkeling dans les zones rocheux de Sainte-Marie",
    ],
  },
  {
    titre: "Patrimoine & Culture",
    emoji: "🏛",
    color: "#5D8A5E",
    desc: "L'île recèle un patrimoine exceptionnel : fortifications Vauban classées UNESCO, phares emblématiques, musées de la vie rétaise et architecture typique aux volets colorés.",
    activites: [
      "Visite des remparts de Saint-Martin-de-Ré (Vauban)",
      "Montée au Phare des Baleines (260 marches, vue 360°)",
      "Musée Ernest Cognacq à Saint-Martin",
      "Tour des 10 Plus Beaux Villages de l'île",
    ],
  },
  {
    titre: "Gastronomie & Terroir",
    emoji: "🦪",
    color: "#D4A017",
    desc: "L'île est un paradis gourmand : huîtres affinées dans les claires, sel et fleur de sel récoltés à la main, vins de pays et, à 1h, les grands châteaux viticoles bordelais.",
    activites: [
      "Dégustation d'huîtres chez le producteur",
      "Visite des marais salants d'Arès avec saunier",
      "Marché de Saint-Martin (mardi et vendredi matin)",
      "Atelier de cuisine aux produits locaux",
    ],
  },
];

const calendrier = [
  { saison: "Printemps (avr-mai)", emoji: "🌸", couleur: "#D4A017", ideal: "Vélo, balades nature, visites culturelles sans foule" },
  { saison: "Été (juin-août)", emoji: "☀️", couleur: "#C1440E", ideal: "Baignade, sports nautiques, marchés, activités nocturnes" },
  { saison: "Automne (sept-oct)", emoji: "🍂", couleur: "#5D8A5E", ideal: "Vélo, gastronomie, week-ends romantiques" },
  { saison: "Hiver (nov-mars)", emoji: "❄️", couleur: "#1B4F72", ideal: "Randonnée, thalasso, patrimoine, prix réduits" },
];

export default function ActivitesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "380px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/activities-oyster-farming.jpeg" alt="Ostréiculture Île de Ré" fill priority style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(21,67,96,0.78)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Activités</span>
          </nav>
          <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>À faire & voir</p>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Activités à l&apos;Île de Ré
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "500px" }}>
            Nature, culture, gastronomie et sport : découvrez tout ce que l&apos;île vous offre, saison après saison.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {categories.map((cat, i) => (
              <div key={cat.titre} className="card" style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "auto 1fr" : "1fr auto",
                gap: 0,
                padding: "2.5rem",
                alignItems: "center",
              }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1, textAlign: "center", padding: "0 2rem" }}>
                  <div style={{
                    width: "100px", height: "100px",
                    background: cat.color, borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "3rem", margin: "0 auto",
                    boxShadow: `0 8px 30px ${cat.color}40`,
                  }}>
                    {cat.emoji}
                  </div>
                </div>
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                    {cat.titre}
                  </h2>
                  <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {cat.desc}
                  </p>
                  <ul style={{ paddingLeft: 0, listStyle: "none", margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {cat.activites.map((act) => (
                      <li key={act} style={{ display: "flex", gap: "0.6rem", fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text)" }}>
                        <span style={{ color: cat.color, fontSize: "1.1rem", marginTop: "1px" }}>›</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendrier saisonnier */}
      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>Planification</p>
            <h2 className="section-title" style={{ color: "white" }}>Activités par Saison</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {calendrier.map((s) => (
              <div key={s.saison} style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem 1.5rem",
                textAlign: "center",
                borderTop: `4px solid ${s.couleur}`,
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{s.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "0.95rem", marginBottom: "0.75rem" }}>{s.saison}</h3>
                <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{s.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>
            Envie d&apos;en Savoir Plus ?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", maxWidth: "420px", margin: "0 auto 2rem" }}>
            Consultez nos guides thématiques pour des itinéraires complets et des conseils d&apos;initiés.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guides" className="btn-primary">Voir les guides →</Link>
            <Link href="/blog" className="btn-outline">Articles de blog →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
