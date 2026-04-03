import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const revalidate = 21600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) return { title: "Catégorie introuvable" };

  return {
    title: `${category.label} — Blog Île de Ré`,
    description: category.description || `Tous les articles sur le thème : ${category.label}. Guides et conseils pour votre séjour à l'Île de Ré.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const [category, posts] = await Promise.all([
    getCategoryBySlug(slug),
    getPostsByCategory(slug),
  ]);

  if (!category) return notFound();

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-primary) 0%, #154360 100%)",
        padding: "4rem 0 3rem",
      }}>
        <div className="container">
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Blog</Link>
            {" / "}
            <span>{category.label}</span>
          </nav>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", marginBottom: "0.75rem" }}>
            {category.label}
          </h1>
          {category.description && (
            <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.8)", fontSize: "1rem", maxWidth: "500px" }}>
              {category.description}
            </p>
          )}
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", marginTop: "0.75rem" }}>
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
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
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌊</div>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-text-light)", fontSize: "1rem", margin: 0 }}>
                Aucun article publié pour le moment.
              </p>
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/blog" className="btn-outline">← Voir tous les articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
