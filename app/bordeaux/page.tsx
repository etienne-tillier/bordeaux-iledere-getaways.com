import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bordeaux & Vignobles — Excursions depuis l'Île de Ré",
  description:
    "De l'Île de Ré à Bordeaux : vins du Médoc, Saint-Émilion, visites de châteaux et gastronomie bordelaise. Comment combiner les deux à la perfection.",
};

const excursions = [
  {
    titre: "Route des Châteaux du Médoc",
    duree: "Journée",
    distance: "90 km de l'île",
    desc: "Le Médoc est le fleuron viticole de Bordeaux : Margaux, Pauillac, Saint-Estèphe... Une route spectaculaire entre châteaux aux architectures majestueuses et vignobles à perte de vue. Visites et dégustations incluses.",
    points: ["Château Margaux", "Château Pichon-Baron", "Château Lynch-Bages", "Médoc Marathon (octobre)"],
    emoji: "🏰",
    color: "#8B2635",
  },
  {
    titre: "Saint-Émilion UNESCO",
    duree: "Demi-journée à journée",
    distance: "140 km de l'île",
    desc: "Village médiéval classé au patrimoine mondial de l'UNESCO, entouré de ses vignobles légendaires. Visite des caves souterraines, dégustation de Merlot et macarons spécialité locale.",
    points: ["Village médiéval", "Caves souterraines", "Macarons de Saint-Émilion", "Grand Cru tasting"],
    emoji: "🏰",
    color: "#C1440E",
  },
  {
    titre: "Bordeaux Cité du Vin",
    duree: "Demi-journée",
    distance: "80 km de l'île",
    desc: "La Cité du Vin est le musée du vin le plus moderne d'Europe. Architecture spectaculaire, exposition permanente immersive et dégustation en terrasse panoramique au 8ème étage.",
    points: ["Musée interactif", "Tour panoramique 360°", "Dégustation incluse", "Quai des Chartrons"],
    emoji: "🍷",
    color: "#1B4F72",
  },
  {
    titre: "Arcachon & Dune du Pilat",
    duree: "Journée",
    distance: "100 km de l'île",
    desc: "La plus haute dune d'Europe (106m) est à portée de route depuis l'Île de Ré. Combinez avec une excursion en bateau vers le Banc d'Arguin et une dégustation d'huîtres d'Arcachon.",
    points: ["Dune du Pilat 106m", "Vue sur l'océan", "Huîtres d'Arcachon", "Bassin d'Arcachon"],
    emoji: "⛵",
    color: "#5D8A5E",
  },
];

const vins = [
  { appellation: "Médoc", cepages: "Cabernet-Sauvignon majoritaire", style: "Puissant, tannique, grande garde", example: "Château Latour, Margaux..." },
  { appellation: "Saint-Émilion", cepages: "Merlot majoritaire", style: "Fruité, rond, accessible jeune", example: "Cheval Blanc, Pétrus..." },
  { appellation: "Sauternes", cepages: "Sémillon, Sauvignon", style: "Liquoreux, miel, abricot", example: "Château d'Yquem..." },
  { appellation: "Bordeaux Blanc", cepages: "Sauvignon Blanc, Sémillon", style: "Frais, aromatique, parfait avec huîtres", example: "Château Carbonnieux..." },
];

const pratique = [
  { emoji: "🚗", titre: "En voiture", texte: "1h15 depuis le pont : A837, A10 puis Bordeaux." },
  { emoji: "🚆", titre: "En train", texte: "TGV La Rochelle–Bordeaux : 45 min. Puis navette vers l'île." },
  { emoji: "🚌", titre: "En bus", texte: "Liaisons régulières La Rochelle–Bordeaux, billets dès 10€." },
  { emoji: "☀️", titre: "Meilleure saison", texte: "Vendanges en septembre-octobre, floraison en mai." },
];

export default function BordeauxPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "400px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/gastronomy-local-market.jpeg" alt="Vins et gastronomie bordelaise" fill priority style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(139,38,53,0.85) 0%, rgba(21,67,96,0.8) 100%)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Bordeaux</span>
          </nav>
          <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>À 1h de l&apos;île</p>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Bordeaux & Vignobles
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "550px" }}>
            L&apos;Île de Ré et Bordeaux forment le duo parfait : mer et vins, nature sauvage et culture urbaine, farniente et gastronomie.
          </p>
        </div>
      </section>

      {/* Excursions */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Escapades depuis l&apos;île</p>
            <h2 className="section-title">Excursions à ne pas Manquer</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.75rem" }}>
            {excursions.map((exc) => (
              <div key={exc.titre} className="card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2.5rem" }}>{exc.emoji}</span>
                  <div>
                    <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.2rem", marginBottom: "0.3rem" }}>
                      {exc.titre}
                    </h2>
                    <div style={{ display: "flex", gap: "1rem", fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                      <span>⏱ {exc.duree}</span>
                      <span>📍 {exc.distance}</span>
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {exc.desc}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {exc.points.map((p) => (
                    <span key={p} style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.72rem",
                      padding: "0.2rem 0.6rem", borderRadius: "4px",
                      background: `${exc.color}15`, color: exc.color, fontWeight: 600,
                    }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vins de Bordeaux */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Initiation œnologie</p>
            <h2 className="section-title">Les Grandes Appellations</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {vins.map((vin) => (
              <div key={vin.appellation} className="card" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>🍷</span>
                  <h3 style={{ fontFamily: "var(--font-serif)", color: "#8B2635", fontSize: "1.15rem", margin: 0 }}>{vin.appellation}</h3>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-muted)", marginBottom: "0.4rem" }}>
                  <strong>Cépages :</strong> {vin.cepages}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-muted)", marginBottom: "0.4rem" }}>
                  <strong>Style :</strong> {vin.style}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-muted)", margin: 0, fontStyle: "italic" }}>
                  Ex. : {vin.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pratique */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Informations pratiques</p>
            <h2 className="section-title">Rejoindre Bordeaux depuis l&apos;Île</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {pratique.map((p) => (
              <div key={p.titre} className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>{p.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>{p.titre}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)", margin: 0 }}>{p.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark" style={{ textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-serif)", color: "white", marginBottom: "1rem" }}>
            Planifiez Votre Escapade Bordelaise
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.8)", maxWidth: "420px", margin: "0 auto 2rem" }}>
            Combinez séjour à l&apos;Île de Ré et excursion bordelaise pour des vacances inoubliables.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guides" className="btn-accent">Voir nos guides →</Link>
            <Link href="/contact" className="btn-outline-white">Nous contacter →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
