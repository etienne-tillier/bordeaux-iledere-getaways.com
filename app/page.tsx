import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Île de Ré : Guide Complet 2024 | Bordeaux Getaways",
  description:
    "Guide complet Île de Ré : hébergements, restaurants, activités, plages. Conseils pratiques, itinéraires et bons plans pour vos vacances parfaites.",
};

const destinations = [
  {
    name: "Saint-Martin-de-Ré",
    desc: "La capitale insulaire, ses remparts Vauban classés UNESCO et ses ruelles fleuries",
    emoji: "🏰",
    color: "#1B4F72",
  },
  {
    name: "La Flotte-en-Ré",
    desc: "Village de charme avec son vieux port, récompensé Plus Beaux Villages de France",
    emoji: "⚓",
    color: "#C1440E",
  },
  {
    name: "Ars-en-Ré",
    desc: "Le village aux volets noirs et son église au clocher noir, symbole des marins",
    emoji: "⛪",
    color: "#5D8A5E",
  },
  {
    name: "Le Bois-Plage-en-Ré",
    desc: "Le paradis du vélo, des plages sauvages et de la dégustation d'huîtres",
    emoji: "🚲",
    color: "#D4A017",
  },
];

const hebergements = [
  { type: "Hôtels & Thalasso", desc: "De l'hôtel charme au resort spa face à l'océan", emoji: "🏨", count: "18 sélections" },
  { type: "Chambres d'hôtes", desc: "Chez l'habitant pour vivre l'Île de Ré comme un local", emoji: "🏡", count: "34 adresses" },
  { type: "Campings étoilés", desc: "En pleine nature, entre vignes, marais et plages", emoji: "⛺", count: "12 terrains" },
  { type: "Locations saisonnières", desc: "Maisons rétaises avec jardin pour familles et groupes", emoji: "🏠", count: "Nombreuses offres" },
];

const activites = [
  { name: "Vélo sur l'île", desc: "240 km de pistes balisées à travers vignes, marais et villages", emoji: "🚴", href: "/activites" },
  { name: "Plages & baignade", desc: "Des plages familiales aux spots de surf, pour tous les goûts", emoji: "🏖", href: "/plages" },
  { name: "Ostréiculture", desc: "Dégustez des huîtres directement chez le producteur", emoji: "🦪", href: "/activites" },
  { name: "Phares & patrimoine", desc: "Du phare des Baleines aux remparts de Saint-Martin", emoji: "🏛", href: "/activites" },
  { name: "Marchés locaux", desc: "Produits du terroir, artisanat et spécialités rétaises", emoji: "🛒", href: "/activites" },
  { name: "Sports nautiques", desc: "Kitesurf, voile, kayak, planche à voile et stand-up paddle", emoji: "🏄", href: "/activites" },
];

const plages = [
  { name: "Plage de la Couarde", public: "Familles", desc: "Vaste plage protégée, eaux calmes, idéale avec enfants", couleur: "🟡" },
  { name: "Plage de Rivedoux", public: "Tous", desc: "Première plage après le pont, accès facile, surveillance estivale", couleur: "🟢" },
  { name: "Plage des Gollandières", public: "Sport", desc: "Spot favori des kitesurfers et véliplanchistes", couleur: "🔵" },
  { name: "Plage du Peu Ragot", public: "Couples", desc: "Ambiance sauvage et préservée, couchers de soleil mémorables", couleur: "🔴" },
];

const gastronomie = [
  { nom: "Huîtres de l'Île de Ré", desc: "Affinées dans les claires rétaises, d'une finesse exceptionnelle", emoji: "🦪" },
  { nom: "Vins de Pays Charentais", desc: "Pineau des Charentes et cognac issus des vignobles environnants", emoji: "🍷" },
  { nom: "Sel et fleur de sel", desc: "Récolté à la main dans les marais salants rétais depuis des siècles", emoji: "🧂" },
  { nom: "Vins de Bordeaux", desc: "À 2h, les grands châteaux du Médoc et Saint-Émilion", emoji: "🍇" },
];

const guides = [
  { titre: "3 jours à vélo sur l'île", desc: "Itinéraire complet avec étapes, distances et points de pause", emoji: "🗺", href: "/guides" },
  { titre: "Île de Ré en camping-car", desc: "Aires de stationnement, règles et meilleures saisons", emoji: "🚐", href: "/guides" },
  { titre: "L'Île de Ré en famille", desc: "Activités par âge, plages sécurisées, hébergements adaptés", emoji: "👨‍👩‍👧", href: "/guides" },
  { titre: "Budget : combien prévoir ?", desc: "Estimation jour par jour selon votre type de séjour", emoji: "💰", href: "/guides" },
];

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(3, 0);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="hero wave-pattern">
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-lighthouse-sunset.jpeg"
            alt="Phare de l'Île de Ré au coucher de soleil"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content" style={{ width: "100%", paddingTop: "4rem", paddingBottom: "5rem" }}>
          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ marginBottom: "1rem" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              background: "rgba(212, 160, 23, 0.15)",
              border: "1px solid rgba(212, 160, 23, 0.3)",
              padding: "0.4rem 1rem",
              borderRadius: "999px",
            }}>
              🏖 Guide touristique de référence
            </span>
          </div>

          {/* H1 */}
          <h1 className="animate-fade-up delay-100" style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            color: "white",
            maxWidth: "700px",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}>
            Votre Guide Complet de l&apos;Île de Ré
          </h1>

          <p className="animate-fade-up delay-200" style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.88)",
            maxWidth: "560px",
            marginBottom: "2.5rem",
            lineHeight: 1.7,
          }}>
            Hébergements, restaurants, activités, plages et bons plans — tout ce qu&apos;il faut savoir pour organiser votre séjour parfait sur l&apos;île la plus préservée de l&apos;Atlantique.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/guides" className="btn-accent">
              🗺 Planifier mon séjour
            </Link>
            <Link href="/hebergements" className="btn-outline-white">
              Voir les hébergements
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up delay-400" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            marginTop: "4rem",
            maxWidth: "680px",
          }}>
            {[
              { val: "85 km²", lab: "de paysages" },
              { val: "80 km", lab: "de pistes vélo" },
              { val: "30 km", lab: "de plages" },
              { val: "1h", lab: "de Bordeaux" },
            ].map((s) => (
              <div key={s.lab} className="stat-pill">
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: "0.2rem" }}>
                  {s.val}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {s.lab}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DESTINATIONS ========== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Destinations phares</p>
            <h2 className="section-title">Les Villages Incontournables</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Chaque village de l&apos;Île de Ré a son caractère unique. Voici les quatre étapes essentielles de votre séjour.
            </p>
          </div>

          {/* Image + grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center", marginBottom: "2rem" }}>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", height: "420px", position: "relative" }}>
              <Image
                src="/images/destinations-village-bikes.jpeg"
                alt="Village de l'Île de Ré avec vélos"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              {destinations.map((dest) => (
                <div key={dest.name} className="card-warm" style={{ padding: "1.5rem" }}>
                  <div style={{
                    width: "48px", height: "48px",
                    background: dest.color,
                    borderRadius: "var(--radius-md)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem",
                    marginBottom: "0.85rem",
                  }}>
                    {dest.emoji}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--color-primary)", marginBottom: "0.4rem" }}>
                    {dest.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-light)", lineHeight: 1.55 }}>
                    {dest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/guides" className="btn-outline">Voir tous les guides →</Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .destinations-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ========== HÉBERGEMENTS ========== */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">Où dormir</p>
            <h2 className="section-title">Hébergements Sélectionnés</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              De l&apos;hôtel charme au camping nature, nous avons sélectionné les meilleures adresses pour chaque budget et style de voyage.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", position: "relative", gridRow: "span 2", minHeight: "400px" }}>
              <Image
                src="/images/accommodations-hotel-terrace.jpeg"
                alt="Hôtel avec terrasse à l'Île de Ré"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(21,67,96,0.8) 0%, transparent 60%)",
              }} />
              <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
                <span style={{ display: "inline-block", background: "var(--color-accent)", color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "999px", marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Coup de cœur
                </span>
                <h3 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "1.3rem", marginBottom: "0.4rem" }}>
                  Hôtels & Thalasso
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                  Séjours bien-être face à l&apos;Atlantique
                </p>
              </div>
            </div>
            {hebergements.slice(1).map((h) => (
              <div key={h.type} className="card" style={{ padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2rem", lineHeight: 1 }}>{h.emoji}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--color-primary)", marginBottom: "0.35rem" }}>
                    {h.type}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-light)", marginBottom: "0.5rem" }}>
                    {h.desc}
                  </p>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-accent)", fontWeight: 600 }}>{h.count}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/hebergements" className="btn-primary">Voir les hébergements →</Link>
          </div>
        </div>
      </section>

      {/* ========== ACTIVITÉS ========== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow">À faire & voir</p>
            <h2 className="section-title">Activités Incontournables</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Nature, culture, gastronomie et sport : l&apos;Île de Ré propose une diversité d&apos;activités pour tous les profils de voyageurs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {activites.map((act) => (
                <Link key={act.name} href={act.href} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: "1.5rem", textAlign: "center", cursor: "pointer" }}>
                    <div style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>{act.emoji}</div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "0.98rem", color: "var(--color-primary)", marginBottom: "0.4rem" }}>
                      {act.name}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "var(--color-text-light)", lineHeight: 1.5 }}>
                      {act.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", height: "480px", position: "relative" }}>
              <Image
                src="/images/activities-oyster-farming.jpeg"
                alt="Ostréiculture sur l'Île de Ré"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== PLAGES ========== */}
      <section style={{ padding: "var(--section-py) 0", background: "linear-gradient(180deg, var(--color-primary-pale) 0%, var(--color-bg) 100%)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <p className="section-eyebrow">Bord de mer</p>
              <h2 className="section-title">Plages pour Chaque Envie</h2>
              <div className="divider-lighthouse" />
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Avec 30 km de côtes, l&apos;Île de Ré offre des plages pour tous : familles avec enfants, amateurs de sports nautiques, couples cherchant la tranquillité ou photographes chassant les couchers de soleil.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                {plages.map((plage) => (
                  <div key={plage.name} style={{
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    background: "white",
                    padding: "1rem 1.25rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border-light)",
                    boxShadow: "var(--shadow-sm)",
                  }}>
                    <span style={{ fontSize: "1.25rem", marginTop: "2px" }}>{plage.couleur}</span>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                        <strong style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "var(--color-primary)" }}>{plage.name}</strong>
                        <span className="badge badge-primary" style={{ fontSize: "0.65rem" }}>{plage.public}</span>
                      </div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)", margin: 0 }}>{plage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/plages" className="btn-primary">Guide complet des plages →</Link>
            </div>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", height: "500px", position: "relative" }}>
              <Image
                src="/images/beaches-family-beach.jpeg"
                alt="Plage familiale à l'Île de Ré"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== GASTRONOMIE ========== */}
      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="section-eyebrow" style={{ color: "var(--color-gold-light)" }}>Art de vivre</p>
            <h2 className="section-title" style={{ color: "white" }}>Gastronomie & Terroir</h2>
            <div className="divider-lighthouse" style={{ margin: "0 auto 1rem" }} />
            <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.75)", margin: "0 auto" }}>
              De l&apos;huître fraîche au grand cru bordelais, la région offre une palette gastronomique d&apos;une richesse exceptionnelle.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }}>
            {gastronomie.map((g) => (
              <div key={g.nom} style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem 1.5rem",
                textAlign: "center",
                transition: "background var(--transition)",
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{g.emoji}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "white", marginBottom: "0.6rem" }}>{g.nom}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{g.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
            <div style={{ position: "relative", minHeight: "280px" }}>
              <Image
                src="/images/gastronomy-local-market.jpeg"
                alt="Marché local produits frais Île de Ré"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{
              background: "rgba(255,255,255,0.07)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}>
              <h3 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "1.4rem" }}>
                Connexion Bordeaux
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                À seulement 1h de l&apos;île, Bordeaux et ses vignobles classés UNESCO complètent idéalement votre séjour rétais.
              </p>
              <Link href="/bordeaux" className="btn-outline-white" style={{ alignSelf: "flex-start" }}>
                Explorer Bordeaux →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GUIDES PRATIQUES ========== */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", height: "420px" }}>
              <Image
                src="/images/guides-hero-cycling-tour.jpeg"
                alt="Tour cycliste de l'Île de Ré"
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Overlay badge */}
              <div style={{
                position: "absolute",
                top: "1.5rem", right: "1.5rem",
                background: "var(--color-accent)",
                color: "white",
                borderRadius: "var(--radius-md)",
                padding: "0.75rem 1.25rem",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 700 }}>4</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Guides</div>
              </div>
            </div>
            <div>
              <p className="section-eyebrow">Conseils d&apos;initiés</p>
              <h2 className="section-title">Guides Pratiques</h2>
              <div className="divider-lighthouse" />
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Nos guides thématiques vous donnent toutes les clés pour préparer et vivre votre séjour sereinement, avec les vraies informations pratiques.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {guides.map((g) => (
                  <Link key={g.titre} href={g.href} style={{ textDecoration: "none" }}>
                    <div className="card" style={{ padding: "1.2rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                      <span style={{ fontSize: "1.8rem" }}>{g.emoji}</span>
                      <div>
                        <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.98rem", color: "var(--color-primary)", fontWeight: 700, marginBottom: "0.2rem" }}>{g.titre}</div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--color-text-light)" }}>{g.desc}</div>
                      </div>
                      <span style={{ marginLeft: "auto", color: "var(--color-accent)", fontSize: "1.1rem" }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/guides" className="btn-primary">Accéder à tous les guides →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BLOG ARTICLES ========== */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p className="section-eyebrow">Conseils & Inspirations</p>
              <h2 className="section-title" style={{ margin: 0 }}>Articles Récents</h2>
            </div>
            <Link href="/blog" className="btn-outline">Voir tous les articles →</Link>
          </div>

          {posts.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.75rem" }}>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "var(--color-secondary)",
              borderRadius: "var(--radius-xl)",
              border: "2px dashed var(--color-border)",
            }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", fontSize: "1rem" }}>
                Aucun article publié pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section style={{
        padding: "var(--section-py) 0",
        background: "linear-gradient(135deg, var(--color-primary) 0%, #154360 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Décoration géométrique */}
        <div style={{
          position: "absolute", top: "-40px", right: "-40px",
          width: "300px", height: "300px",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "400px", height: "400px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "50%",
        }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "1.25rem" }}>🌊</span>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "1rem" }}>
            Prêt à Découvrir l&apos;Île de Ré ?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Consultez nos guides complets, trouvez votre hébergement idéal et planifiez le séjour de vos rêves.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/guides" className="btn-accent">Découvrir nos guides</Link>
            <Link href="/contact" className="btn-outline-white">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
