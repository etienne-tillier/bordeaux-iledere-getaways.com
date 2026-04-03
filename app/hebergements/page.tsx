import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hébergements Île de Ré — Hôtels, Campings, Chambres d'hôtes & Locations",
  description:
    "Sélection d'hébergements à l'Île de Ré : hôtels charme, campings étoilés, chambres d'hôtes et locations saisonnières. Tous budgets, toutes saisons.",
};

const categories = [
  {
    titre: "Hôtels & Thalasso",
    desc: "De l'hôtel de charme 3 étoiles aux resorts de thalassothérapie face à l'Atlantique, l'Île de Ré propose une offre hôtelière de qualité. Chambres avec vue mer, restaurants gastronomiques, spa... Pour un séjour tout confort.",
    points: ["Vue mer disponible", "Restaurants sur place", "Service concierge", "Spa et bien-être"],
    emoji: "🏨",
    color: "var(--color-primary)",
    budget: "À partir de 120€/nuit",
  },
  {
    titre: "Chambres d'hôtes",
    desc: "Vivre l'Île de Ré comme un local en séjournant chez l'habitant. Petits-déjeuners maison, conseils de passionnés, jardins fleuris... Les chambres d'hôtes rétaises sont parmi les plus charmantes de France.",
    points: ["Petit-déjeuner inclus", "Conseils locaux", "Ambiance familiale", "Jardin souvent disponible"],
    emoji: "🏡",
    color: "var(--color-accent)",
    budget: "À partir de 85€/nuit",
  },
  {
    titre: "Campings étoilés",
    desc: "L'Île de Ré possède des campings de grande qualité, souvent classés 4 ou 5 étoiles, avec piscine, restaurant et accès direct à la plage ou au cœur des vignes. Idéal pour les familles qui souhaitent allier natureaurait et confort.",
    points: ["Piscine chauffée", "Proximité plages", "Mobil-homes disponibles", "Animations estivales"],
    emoji: "⛺",
    color: "var(--color-sage)",
    budget: "À partir de 35€/nuit (tente)",
  },
  {
    titre: "Locations saisonnières",
    desc: "Maisons rétaises typiques avec volets colorés, jardin fleuri et vélos inclus. La location saisonnière est idéale pour les séjours en famille ou entre amis, avec toute la liberté d'organiser vos journées à votre rythme.",
    points: ["Cuisine équipée", "Jardin privatif", "Parfait en groupe", "Vélos souvent inclus"],
    emoji: "🏠",
    color: "var(--color-gold)",
    budget: "À partir de 600€/semaine",
  },
];

const villages = [
  { nom: "Saint-Martin-de-Ré", ambiance: "Urbain & animé", pour: "Restaurants, boutiques, remparts" },
  { nom: "La Flotte-en-Ré", ambiance: "Village de charme", pour: "Plus Beaux Villages de France" },
  { nom: "Le Bois-Plage-en-Ré", ambiance: "Balnéaire & nature", pour: "Surf, vélo, plages" },
  { nom: "Ars-en-Ré", ambiance: "Authentique & préservé", pour: "Marais salants, tranquillité" },
  { nom: "Sainte-Marie-de-Ré", ambiance: "Familial", pour: "Proche pont, plages sécurisées" },
  { nom: "La Couarde-sur-Mer", ambiance: "Sport & nature", pour: "Kitesurf, plages sauvages" },
];

export default function HebergementsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "400px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/accommodations-hotel-terrace.jpeg" alt="Hôtel avec terrasse Île de Ré" fill priority style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(21,67,96,0.78)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Hébergements</span>
          </nav>
          <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>Où dormir</p>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem", maxWidth: "600px" }}>
            Hébergements à l&apos;Île de Ré
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "500px" }}>
            Notre sélection des meilleures adresses pour chaque budget et style de voyage, de l&apos;hôtel charme au camping nature.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Notre sélection</p>
            <h2 className="section-title">Types d&apos;Hébergements</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {categories.map((cat) => (
              <div key={cat.titre} className="card" style={{ padding: "2.5rem 2rem" }}>
                <div style={{
                  width: "56px", height: "56px",
                  background: cat.color, borderRadius: "var(--radius-md)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", marginBottom: "1.25rem",
                }}>
                  {cat.emoji}
                </div>
                <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.3rem", marginBottom: "0.75rem" }}>
                  {cat.titre}
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--color-text-light)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {cat.desc}
                </p>
                <ul style={{ paddingLeft: 0, listStyle: "none", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {cat.points.map((p) => (
                    <li key={p} style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text)", display: "flex", gap: "0.5rem" }}>
                      <span style={{ color: cat.color }}>✓</span> {p}
                    </li>
                  ))}
                </ul>
                <div style={{
                  background: "var(--color-secondary)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.6rem 1rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.82rem",
                  color: "var(--color-text-light)",
                  display: "inline-block",
                }}>
                  💶 {cat.budget}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Par village */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Localisation</p>
            <h2 className="section-title">Où Rester Selon Vos Envies</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {villages.map((v) => (
              <div key={v.nom} className="card-warm" style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.05rem", marginBottom: "0.35rem" }}>
                  📍 {v.nom}
                </h3>
                <span className="badge badge-primary" style={{ marginBottom: "0.5rem", display: "inline-block" }}>{v.ambiance}</span>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", color: "var(--color-text-light)", margin: 0 }}>
                  Idéal pour : {v.pour}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>
            Besoin d&apos;un Conseil Personnalisé ?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
            Dites-nous votre budget, vos dates et vos envies : nous vous orientons vers l&apos;adresse idéale.
          </p>
          <Link href="/contact" className="btn-accent">Demander un conseil →</Link>
        </div>
      </section>
    </>
  );
}
