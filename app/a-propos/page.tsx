import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À Propos — Bordeaux Île de Ré Getaways",
  description:
    "Découvrez l'équipe derrière Bordeaux Île de Ré Getaways : des passionnés de l'île qui vous partagent leurs meilleurs conseils depuis plus de 10 ans.",
};

const equipe = [
  {
    nom: "Marine Delacroix",
    role: "Fondatrice & Rédactrice en Chef",
    bio: "Fille d'un ostréiculteur de La Flotte, Marine a grandi les pieds dans les claires. Après 8 ans dans le tourisme à Paris, elle décide de revenir s'installer à Saint-Martin-de-Ré pour créer le guide de voyage authentique que ses parents méritaient.",
    specialite: "Hébergements & gastronomie locale",
    emoji: "👩‍💼",
  },
  {
    nom: "Thomas Beaucastel",
    role: "Expert Vélo & Randonnée",
    bio: "Cycliste du dimanche reconverti en guide passionné, Thomas a parcouru tous les sentiers de l'île à raison de 4 000 km par an. Ses itinéraires précis et ses conseils pratiques sont la colonne vertébrale de nos guides vélo.",
    specialite: "Vélo, randonnée, plein air",
    emoji: "🚴",
  },
  {
    nom: "Sophie Arnaud-Vignier",
    role: "Spécialiste Patrimoine & Culture",
    bio: "Historienne de formation, Sophie connaît chaque pierre des remparts de Saint-Martin et chaque légende rétaise. Ses visites commentées virtuelles sont plébiscitées par nos lecteurs.",
    specialite: "Patrimoine, histoire, architecture",
    emoji: "🏛",
  },
  {
    nom: "Laurent Micheau",
    role: "Photographe & Vidéaste",
    bio: "Pêcheur amateur et photographe professionnel, Laurent capture l'âme de l'île au lever du soleil sur les marais salants ou lors des grandes marées. Son œil unique donne vie à nos guides visuels.",
    specialite: "Photographie & nature",
    emoji: "📸",
  },
];

const valeurs = [
  {
    titre: "Authenticité avant tout",
    desc: "Nous ne recommandons que les adresses et activités que nous testons personnellement. Aucune publicité déguisée, aucune compromission.',",
    emoji: "🤝",
  },
  {
    titre: "L'île comme un local",
    desc: "Nos conseils viennent du terrain, des habitants et des professionnels du tourisme de l'île — pas des brochures touristiques.",
    emoji: "🏡",
  },
  {
    titre: "Tourisme responsable",
    desc: "Nous promouvons un tourisme respectueux de l'environnement fragile de l'île : préservation des dunes, éco-mobilité, circuits courts.",
    emoji: "🌿",
  },
  {
    titre: "Information actualisée",
    desc: "Tarifs, horaires, disponibilités : nous mettons à jour nos contenus chaque saison pour vous éviter les mauvaises surprises.",
    emoji: "📅",
  },
];

export default function AProposPage() {
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
            <span>À propos</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>Notre histoire</p>
              <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 2.8rem)", marginBottom: "1.5rem" }}>
                Des Passionnés de l&apos;Île de Ré à Votre Service
              </h1>
              <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Bordeaux Île de Ré Getaways est né en 2014 d&apos;une conviction simple : les voyageurs méritent des informations locales, authentiques et actualisées — pas des catalogues touristiques impersonnels.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Depuis 10 ans, notre équipe sillonne l&apos;île et les vignobles bordelais pour tester, vérifier et você vous partager les meilleures adresses, les bons plans et les secrets des locaux.
              </p>
            </div>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", height: "380px", position: "relative" }}>
              <Image
                src="/images/about-team.jpeg"
                alt="Équipe d'experts de l'Île de Ré"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow">Notre approche</p>
            <h2 className="section-title">Ce qui Nous Distingue</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {valeurs.map((v) => (
              <div key={v.titre} className="card" style={{ padding: "2rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.05rem", marginBottom: "0.75rem" }}>{v.titre}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">L&apos;équipe</p>
            <h2 className="section-title">Ceux Qui Font L&apos;île Vivre</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {equipe.map((membre) => (
              <div key={membre.nom} className="card" style={{ padding: "2rem", display: "flex", gap: "1.5rem" }}>
                <div style={{
                  width: "72px", height: "72px",
                  background: "var(--color-primary)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", flexShrink: 0,
                }}>
                  {membre.emoji}
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", fontSize: "1.15rem", marginBottom: "0.2rem" }}>
                    {membre.nom}
                  </h3>
                  <span className="badge badge-accent" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                    {membre.role}
                  </span>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-light)", lineHeight: 1.65, marginBottom: "0.6rem" }}>
                    {membre.bio}
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--color-text-muted)", margin: 0 }}>
                    🎯 Spécialité : {membre.specialite}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", textAlign: "center" }}>
            {[
              { val: "10 ans", lab: "d'expertise locale" },
              { val: "50 000", lab: "lecteurs mensuels" },
              { val: "200+", lab: "articles publiés" },
              { val: "95%", lab: "de satisfaction lecteurs" },
            ].map((s) => (
              <div key={s.lab} className="stat-pill">
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "white", marginBottom: "0.3rem" }}>
                  {s.val}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {s.lab}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>
            Une Question ? On Vous Répond
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
            Notre équipe est disponible pour répondre à toutes vos questions avant et pendant votre séjour.
          </p>
          <Link href="/contact" className="btn-primary">Nous contacter →</Link>
        </div>
      </section>
    </>
  );
}
