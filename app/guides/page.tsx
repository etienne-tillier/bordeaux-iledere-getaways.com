import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides Île de Ré — Itinéraires, Conseils Pratiques & Bons Plans",
  description:
    "Nos guides complets pour l'Île de Ré : vélo, camping-car, séjour en famille, budget type. Tout ce qu'il faut savoir pour préparer votre voyage.",
};

const guides = [
  {
    titre: "3 jours à vélo sur l'Île de Ré",
    desc: "L'itinéraire incontournable pour découvrir l'île à vélo : villages de caractère, plages secrètes, cabanes ostréicoles et couchers de soleil sur les marais salants. Programme jour par jour avec distances, pauses déjeuner et hébergements recommandés.",
    image: "/images/guides-hero-cycling-tour.jpeg",
    tags: ["Vélo", "Actif", "Nature"],
    duree: "3 jours",
    niveau: "Facile à Modéré",
    emoji: "🚴",
  },
  {
    titre: "Île de Ré en camping-car",
    desc: "Aire de service, règles de stationnement, meilleurs emplacements, saisons conseillées : tout ce que les camping-caristes doivent savoir avant de traverser le pont. Guide complet avec carte des aires autorisées.",
    image: "/images/guides-camping-car.jpeg",
    tags: ["Camping-car", "Liberté", "Nature"],
    duree: "Séjour libre",
    niveau: "Tous niveaux",
    emoji: "🚐",
  },
  {
    titre: "L'Île de Ré en famille",
    desc: "Activités adaptées par âge (0-5 ans, 6-12 ans, adolescents), plages sécurisées avec surveillance, hébergements family-friendly, restaurants avec menus enfants. Un guide pensé pour que toute la famille profite.",
    image: "/images/beaches-family-beach.jpeg",
    tags: ["Famille", "Enfants", "Activités"],
    duree: "3 à 7 jours",
    niveau: "Tous niveaux",
    emoji: "👨‍👩‍👧",
  },
  {
    titre: "Budget type pour un séjour à l'Île de Ré",
    desc: "Combien prévoir par personne par jour ? Estimation détaillée par catégorie (hébergement, restauration, activités, transport) et par type de séjour : budget serré, confort, luxe. Bons plans pour économiser en haute saison.",
    image: "/images/gastronomy-local-market.jpeg",
    tags: ["Budget", "Astuces", "Pratique"],
    duree: "Variable",
    niveau: "Tous niveaux",
    emoji: "💰",
  },
];

const conseilsRapides = [
  { emoji: "🌤", titre: "Meilleure période", texte: "Mai-juin ou septembre pour éviter la foule. Juillet-août pour l'ambiance estivale maximale." },
  { emoji: "🚗", titre: "Venir à l'Île de Ré", texte: "Pont à péage (gratuit hors saison). Train jusqu'à La Rochelle puis navette ou voiture." },
  { emoji: "🚲", titre: "Se déplacer", texte: "Le vélo est roi. 240 km de pistes, disponibles à la location partout sur l'île." },
  { emoji: "🐕", titre: "Avec un animal", texte: "L'île est dog-friendly. Nombreuses plages et hébergements acceptent les animaux." },
  { emoji: "📱", titre: "Appli utile", texte: "L'Office de Tourisme de l'Île de Ré propose une appli avec carte, agenda et météo." },
  { emoji: "💶", titre: "Coût de la vie", texte: "Légèrement plus élevé qu'à La Rochelle. Prévoir 20-30% de plus en juillet-août." },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "400px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/guides-hero-cycling-tour.jpeg"
            alt="Tour cycliste de l'Île de Ré"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(21,67,96,0.78)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Guides</span>
          </nav>
          <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>Conseils d&apos;initiés</p>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem", maxWidth: "600px" }}>
            Guides Pratiques Île de Ré
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "500px" }}>
            Itinéraires, conseils de voyage et informations pratiques rédigés par des passionnés de l&apos;île.
          </p>
        </div>
      </section>

      {/* Guides */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
            <p className="section-eyebrow">Nos guides thématiques</p>
            <h2 className="section-title">Préparez Votre Séjour</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {guides.map((guide, i) => (
              <div key={guide.titre} className="card" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1.5fr" : "1.5fr 1fr", gap: 0, overflow: "hidden" }}>
                <div style={{ position: "relative", minHeight: "280px", order: i % 2 === 0 ? 0 : 1 }}>
                  <Image src={guide.image} alt={guide.titre} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 1 : 0 }}>
                  <span style={{ fontSize: "2.5rem", marginBottom: "0.75rem", display: "block" }}>{guide.emoji}</span>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.85rem" }}>
                    {guide.tags.map((tag) => (
                      <span key={tag} className="badge badge-primary">{tag}</span>
                    ))}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.4rem", marginBottom: "0.75rem" }}>
                    {guide.titre}
                  </h2>
                  <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {guide.desc}
                  </p>
                  <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                    <span>⏱ {guide.duree}</span>
                    <span>📊 {guide.niveau}</span>
                  </div>
                  <Link href="/blog" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                    Lire le guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils rapides */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Infos essentielles</p>
            <h2 className="section-title">À Savoir Avant de Partir</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {conseilsRapides.map((conseil) => (
              <div key={conseil.titre} className="card" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{conseil.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{conseil.titre}</h3>
                <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{conseil.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>
            Des Questions sur Votre Séjour ?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
            Notre équipe d&apos;experts de l&apos;Île de Ré est disponible pour vous aider à planifier votre voyage idéal.
          </p>
          <Link href="/contact" className="btn-accent">Nous contacter →</Link>
        </div>
      </section>
    </>
  );
}
