import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurants & Gastronomie Île de Ré — Huîtres, Terroir & Bons Plans",
  description:
    "Les meilleures adresses pour manger à l'Île de Ré : restaurants de poisson, cabanes à huîtres, marchés locaux et spécialités du terroir rétais.",
};

const categories = [
  {
    titre: "Cabanes à Huîtres & Poissons",
    emoji: "🦪",
    desc: "L'expérience authentique par excellence : déguster des huîtres fraîches directement chez le producteur, les pieds dans l'eau ou assis sur des tonneaux en bois. À partir de 6€ la douzaine.",
    adresses: [
      { nom: "Les Viviers du Fier à Ars-en-Ré", specialite: "Huîtres N°3 et plateau mixte", ambiance: "Convivial & local" },
      { nom: "Cabane des Pêcheurs — La Flotte", specialite: "Bar, maquereau et huîtres", ambiance: "Bord d'eau sauvage" },
      { nom: "Chez Gilles — Bois-Plage", specialite: "Plateau royal huîtres-crevettes", ambiance: "Populaire & animé" },
    ],
  },
  {
    titre: "Tables Gastronomiques",
    emoji: "🍽",
    desc: "Pour un dîner raffiné, plusieurs tables de l'île proposent une cuisine du marché mettant à l'honneur les produits locaux : poissons de la criée, légumes des potagers rétais, vins de la région.",
    adresses: [
      { nom: "Le Bistrot de Bernard — Saint-Martin", specialite: "Cuisine du marché, poissons", ambiance: "Élégant & romantique" },
      { nom: "La Baleine Bleue — La Flotte", specialite: "Plateau fruits de mer, languoustes", ambiance: "Vue mer" },
      { nom: "Le Chat Botté — Saint-Clément", specialite: "Gibier et terroir charentais", ambiance: "Raffiné & discret" },
    ],
  },
  {
    titre: "Crêperies & Bistrots",
    emoji: "🥞",
    desc: "Pour les repas décontractés en famille ou entre amis, les crêperies et bistrots de village offrent une cuisine généreuse à prix raisonnables, souvent avec terrasse fleurie.",
    adresses: [
      { nom: "Crêperie La Dunette — Les Portes", specialite: "Galettes sarrasin complètes", ambiance: "Village typique" },
      { nom: "Le Port Vieux — Ars-en-Ré", specialite: "Moules-frites, café gourmand", ambiance: "Port de pêche" },
      { nom: "Bistrot des Sauniers — Loix", specialite: "Tapas et vins naturels", ambiance: "Tendance & local" },
    ],
  },
];

const marches = [
  { lieu: "Saint-Martin-de-Ré", jours: "Mardi & Vendredi matin", desc: "Le plus grand marché de l'île, 150 producteurs, huîtres, légumes, fleurs et artisanat" },
  { lieu: "La Flotte-en-Ré", jours: "Mercredi & Dimanche", desc: "Marché de village animé autour du vieux port, spécialités locales et fromages" },
  { lieu: "Ars-en-Ré", jours: "Jeudi matin", desc: "Petit marché authentique avec producteurs locaux, sel de Ré et miel" },
  { lieu: "Le Bois-Plage", jours: "Mardi & Vendredi", desc: "Marché estival en plein air, produits bio et artisanat rétais" },
];

const specialites = [
  { nom: "Huîtres de l'Île de Ré", desc: "Affinées dans les claires, d'une finesse et d'une iodisation unique", emoji: "🦪", prix: "6-12€/dz" },
  { nom: "Sel et Fleur de Sel de Ré", desc: "Récolté à la main, le meilleur sel de France selon les grands chefs", emoji: "🧂", prix: "5-15€/kg" },
  { nom: "Pommes de Terre de Noirmoutier-Ré", desc: "IGP reconnue pour sa texture et son goût du terroir atlantique", emoji: "🥔", prix: "4-8€/kg" },
  { nom: "Pineau des Charentes", desc: "Apéritif local doux, mélange jus de raisin et cognac, à déguster frais", emoji: "🍷", prix: "12-18€/bouteille" },
];

export default function RestaurantsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "380px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/gastronomy-local-market.jpeg" alt="Marché local Île de Ré" fill priority style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(21,67,96,0.78)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Restaurants</span>
          </nav>
          <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>Art de vivre rétais</p>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Gastronomie & Restaurants
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "500px" }}>
            De la cabane à huîtres à la table gastronomique, l&apos;Île de Ré régale ses visiteurs avec authenticité et générosité.
          </p>
        </div>
      </section>

      {/* Spécialités */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Produits du terroir</p>
            <h2 className="section-title">Incontournables à Goûter</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "3rem" }}>
            {specialites.map((s) => (
              <div key={s.nom} className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{s.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1rem", marginBottom: "0.4rem" }}>{s.nom}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)", lineHeight: 1.5, marginBottom: "0.75rem" }}>{s.desc}</p>
                <span className="badge badge-accent">{s.prix}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catégories de restaurants */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Sélection adresses</p>
            <h2 className="section-title">Nos Adresses Coup de Cœur</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {categories.map((cat) => (
              <div key={cat.titre} className="card" style={{ padding: "2.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2.5rem" }}>{cat.emoji}</span>
                  <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.4rem", margin: 0 }}>
                    {cat.titre}
                  </h2>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                  {cat.desc}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                  {cat.adresses.map((adr) => (
                    <div key={adr.nom} style={{
                      background: "var(--color-secondary)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.25rem",
                    }}>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--color-primary)", marginBottom: "0.4rem" }}>{adr.nom}</h3>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-accent)", marginBottom: "0.35rem", fontWeight: 600 }}>{adr.specialite}</p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-muted)", margin: 0 }}>{adr.ambiance}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marchés */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Agenda gourmand</p>
            <h2 className="section-title">Marchés de l&apos;Île de Ré</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>
            {marches.map((m) => (
              <div key={m.lieu} className="card" style={{ padding: "1.75rem", display: "flex", gap: "1.25rem" }}>
                <div style={{ fontSize: "2rem", flexShrink: 0 }}>🛒</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.05rem", marginBottom: "0.25rem" }}>
                    Marché de {m.lieu}
                  </h3>
                  <span className="badge badge-gold" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                    🗓 {m.jours}
                  </span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-light)", margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🍷</div>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "white", marginBottom: "1rem" }}>
            Et les Vins de Bordeaux ?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.8)", maxWidth: "450px", margin: "0 auto 2rem" }}>
            À 1h de l&apos;île, découvrez les grands châteaux du Médoc et de Saint-Émilion pour compléter votre expérience gastronomique.
          </p>
          <Link href="/bordeaux" className="btn-accent">Découvrir Bordeaux →</Link>
        </div>
      </section>
    </>
  );
}
