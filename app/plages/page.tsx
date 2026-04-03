import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plages de l'Île de Ré — Guide Complet des Plus Belles Plages",
  description:
    "Guide des plages de l'Île de Ré : familles, surf, naturisme, romantique. Horaires, surveillance, accès et caractéristiques de chaque plage.",
};

const plages = [
  {
    nom: "Plage de la Couarde-sur-Mer",
    village: "La Couarde-sur-Mer",
    longueur: "3,5 km",
    type: "Kitesurf & Sport",
    famille: "Modéré",
    surveillee: "Juillet-août",
    desc: "La plus longue plage de l'île, régulièrement ventée, est le rendez-vous des kitesurfers et véliplanchistes. Eau claire, sable blanc, face à l'Atlantique ouvert.",
    points: ["Spot kitesurf réputé", "Eau claire", "Coucher de soleil spectaculaire", "Parking proche"],
    emoji: "🪁",
    color: "#1B4F72",
  },
  {
    nom: "Plage de Rivedoux-Plage",
    village: "Rivedoux-Plage",
    longueur: "1,2 km",
    type: "Tous publics",
    famille: "Idéal",
    surveillee: "Juin-septembre",
    desc: "Première plage après le pont de l'île, surveillance estivale, accès facile en voiture ou à vélo. Eaux calmes côté nord, idéal pour les premiers séjours avec enfants.",
    points: ["Accès facile", "Surveillance estivale", "Eaux calmes", "Commerces adjacents"],
    emoji: "🏖",
    color: "#C1440E",
  },
  {
    nom: "Plage des Gollandières",
    village: "La Flotte-en-Ré",
    longueur: "800 m",
    type: "Sport nautique",
    famille: "Difficile",
    surveillee: "Non",
    desc: "Plage sauvage de caractère, appréciée des sportifs et des amoureux de nature préservée. Accès par sentier, aucune infrastructure — un écrin de solitude même en saison.",
    points: ["Cadre sauvage", "Portrait de photographes", "Peu de monde", "Nature préservée"],
    emoji: "🏄",
    color: "#5D8A5E",
  },
  {
    nom: "Plage Peu Ragot",
    village: "Le Bois-Plage-en-Ré",
    longueur: "2,1 km",
    type: "Romantique",
    famille: "Bon",
    surveillee: "Juillet-août",
    desc: "Une des plus belles plages de l'île côté Atlantique. Dunes, pins et sable fin pour des après-midis inoubliables. Réputée pour ses couchers de soleil dorés.",
    points: ["Couchers de soleil", "Dunes préservées", "Sable blanc fin", "Piste cyclable adjacente"],
    emoji: "🌅",
    color: "#D4A017",
  },
  {
    nom: "Plage de Saint-Martin-de-Ré",
    village: "Saint-Martin-de-Ré",
    longueur: "600 m",
    type: "Village",
    famille: "Idéal",
    surveillee: "Juillet-août",
    desc: "La plage du centre, à deux pas du vieux port et des remparts. Petit format mais idéalement situé pour ceux qui logent en ville. Très animée en été.",
    points: ["Centre-ville", "Animée et conviviale", "Vieux port adjacent", "Nombreux commerces"],
    emoji: "⚓",
    color: "#2980B9",
  },
  {
    nom: "Plage du Défend",
    village: "Sainte-Marie-de-Ré",
    longueur: "1,8 km",
    type: "Familles",
    famille: "Excellent",
    surveillee: "Juin-août",
    desc: "La plage la plus appréciée des familles avec enfants : eaux peu profondes côté mer de pertuis, fond plat et sable fin. Accès direct depuis la D735.",
    points: ["Eaux peu profondes", "Fond plat", "Idéal enfants", "Location matériel nautique"],
    emoji: "👨‍👩‍👧‍👦",
    color: "#8E44AD",
  },
];

const infos = [
  { emoji: "🚿", titre: "Douches", texte: "La majorité des plages surveillées sont équipées de douches et sanitaires en été." },
  { emoji: "♿", titre: "Accessibilité", texte: "6 plages sont équipées de fauteuils amphibies et de matériel Handiplage. Renseignements à l'Office de Tourisme." },
  { emoji: "🐕", titre: "Chiens", texte: "Les chiens sont autorisés sur toutes les plages en dehors des zones de baignade surveillées." },
  { emoji: "⛱", titre: "Location", texte: "Transats, parasols et kayaks disponibles à la location sur les plages les plus fréquentées (juin-septembre)." },
];

export default function PlagesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "400px", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image src="/images/beaches-family-beach.jpeg" alt="Plage familiale Île de Ré" fill priority style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "rgba(21,67,96,0.75)", zIndex: 1 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Plages</span>
          </nav>
          <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>30 km de côtes</p>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Les Plages de l&apos;Île de Ré
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", maxWidth: "500px" }}>
            Du spot de surf sauvage à la plage familiale surveillée, découvrez les plus belles adresses balnéaires de l&apos;île.
          </p>
        </div>
      </section>

      {/* Plages */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Notre sélection</p>
            <h2 className="section-title">Les Plages par Profil</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.75rem" }}>
            {plages.map((plage) => (
              <div key={plage.nom} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{
                  height: "6px",
                  background: `linear-gradient(90deg, ${plage.color}, ${plage.color}80)`,
                }} />
                <div style={{ padding: "1.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                    <div>
                      <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.15rem", marginBottom: "0.25rem" }}>
                        {plage.emoji} {plage.nom}
                      </h2>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
                        📍 {plage.village}
                      </span>
                    </div>
                    <span className="badge badge-primary" style={{ flexShrink: 0 }}>{plage.type}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {plage.desc}
                  </p>
                  <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem", fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    <span>📏 {plage.longueur}</span>
                    <span>👨‍👩‍👧 Famille : {plage.famille}</span>
                    <span>🩺 Surveillance : {plage.surveillee}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {plage.points.map((p) => (
                      <span key={p} style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        color: plage.color,
                        background: `${plage.color}15`,
                        padding: "0.2rem 0.5rem",
                        borderRadius: "4px",
                        fontWeight: 600,
                      }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">À savoir</p>
            <h2 className="section-title">Infos Pratiques Plages</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {infos.map((info) => (
              <div key={info.titre} className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>{info.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1rem", marginBottom: "0.5rem" }}>{info.titre}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)", lineHeight: 1.55, margin: 0 }}>{info.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>
            Prêt pour la Plage ?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
            Trouvez l&apos;hébergement idéal à proximité de votre plage favorite.
          </p>
          <Link href="/hebergements" className="btn-primary">Voir les hébergements →</Link>
        </div>
      </section>
    </>
  );
}
