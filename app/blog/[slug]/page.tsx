import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug } from "@/lib/blog";
import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { injectDofollowMarker } from "@/lib/dofollow";

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  const buildArticleUrl = (articleSlug: string) =>
    siteOrigin ? `${siteOrigin}/blog/${articleSlug}` : `/blog/${articleSlug}`;

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = buildArticleUrl(post.slug);

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = buildArticleUrl(translatedSlug);
    }
  }

  return languages;
};

export const revalidate = 21600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article introuvable" };
  }

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1,
    description: post.meta_description || post.excerpt || "",
    openGraph: {
      title: post.seo_title || post.h1,
      description: post.meta_description || post.excerpt || "",
      images: post.cover?.file_url ? [{ url: post.cover.file_url, alt: post.cover.alt || post.h1 }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  // Traduction
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      if ((val as { slug?: string }).slug === slug) {
        displayH1 = (val as { h1?: string }).h1 || displayH1;
        displayBody = (val as { body_md?: string }).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");
  const category = post.categories?.[0];

  return (
    <>
      {/* Header article */}
      <section style={{
        background: "linear-gradient(135deg, var(--color-primary) 0%, #154360 100%)",
        padding: "4rem 0 3rem",
      }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "1.5rem", fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Accueil</Link>
            {" / "}
            <Link href="/blog" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Blog</Link>
            {" / "}
            <span style={{ color: "rgba(255,255,255,0.4)" }}>{displayH1}</span>
          </nav>

          {category && (
            <span className="badge badge-accent" style={{ marginBottom: "1.25rem", display: "inline-block" }}>
              {category.label}
            </span>
          )}

          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            {displayH1}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-sans)", fontSize: "0.85rem" }}>
            {post.published_at && (
              <span>
                📅 {new Date(post.published_at).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            )}
            {post.author?.name && <span>✍️ {post.author.name}</span>}
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* Cover image */}
          {post.cover?.file_url && (
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", marginBottom: "2.5rem", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src={post.cover.file_url}
                alt={post.cover.alt || displayH1}
                width={1200}
                height={630}
                priority
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}

          {/* Language switcher */}
          <LanguageSwitcher post={post} currentSlug={slug} />

          {/* Body */}
          <div className="prose-blog">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ a: MarkdownLink }}>
              {bodyMd}
            </ReactMarkdown>
          </div>

          {/* Author */}
          {post.author && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginTop: "3rem",
              borderTop: "1px solid var(--color-border)",
              background: "var(--color-surface-warm)",
              padding: "1.75rem",
              borderRadius: "var(--radius-lg)",
            }}>
              {post.author.avatar_url && (
                <Image
                  src={post.author.avatar_url}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                />
              )}
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--color-primary)", marginBottom: "0.3rem" }}>
                  {post.author.name}
                </p>
                {post.author.bio && (
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-text-light)", margin: 0 }}>
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/blog" className="btn-outline">← Retour aux articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
