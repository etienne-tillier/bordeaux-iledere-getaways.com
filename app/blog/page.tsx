import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog — Conseils & Guides Île de Ré",
  description:
    "Articles de conseils, itinéraires, bons plans et actualités sur l'Île de Ré et la région bordelaise. Préparez votre séjour avec nos experts locaux.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(12, 0);

  return (
    <>
      {/* Hero Blog */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-primary) 0%, #154360 100%)",
        padding: "5rem 0 4rem",
      }}>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <span style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "1rem",
            }}>
              📝 Conseils & Inspirations
            </span>
            <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Blog & Articles
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
              Guides pratiques, itinéraires thématiques et bons plans d&apos;initiés pour organiser votre séjour parfait à l&apos;Île de Ré.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "2rem", fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
            <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <span>Blog</span>
          </nav>

          {posts.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.75rem" }}>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: "center",
              padding: "5rem 2rem",
              background: "var(--color-secondary)",
              borderRadius: "var(--radius-xl)",
              border: "2px dashed var(--color-border)",
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              <div style={{ fontSize: "3.5rem", marginBottom: "1.25rem" }}>🌊</div>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", fontSize: "1.05rem", margin: 0 }}>
                Aucun article publié pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)", marginBottom: "1rem" }}>
            Planifiez Votre Séjour
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", marginBottom: "2rem", maxWidth: "450px", margin: "0 auto 2rem" }}>
            Accédez à nos guides pratiques pour organiser votre voyage à l&apos;Île de Ré.
          </p>
          <Link href="/guides" className="btn-primary">Voir les guides →</Link>
        </div>
      </section>
    </>
  );
}
