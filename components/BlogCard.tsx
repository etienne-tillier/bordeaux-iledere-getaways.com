"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const category = post.categories?.[0];

  return (
    <article className="card" style={{ display: "flex", flexDirection: "column" }}>
      {/* Cover image */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
        {post.cover?.file_url ? (
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || post.h1}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="blog-card-img"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3rem",
          }}>
            🌊
          </div>
        )}
        {/* Category badge overlay */}
        {category && (
          <div style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            background: "var(--color-accent)",
            color: "white",
            fontSize: "0.7rem",
            fontWeight: 700,
            fontFamily: "var(--font-sans)",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            padding: "0.25rem 0.65rem",
            borderRadius: "999px",
          }}>
            {category.label}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.8rem",
          color: "var(--color-text-muted)",
          marginBottom: "0.6rem",
        }}>
          {new Date(post.published_at).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h2 style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.15rem",
          color: "var(--color-primary)",
          marginBottom: "0.75rem",
          lineHeight: 1.35,
          flex: 1,
        }}>
          {post.h1}
        </h2>

        {post.excerpt && (
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            color: "var(--color-text-light)",
            lineHeight: 1.65,
            marginBottom: "1.25rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {post.excerpt}
          </p>
        )}

        <Link
          href={`/blog/${post.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "var(--color-accent)",
            textDecoration: "none",
          }}
        >
          Lire l&apos;article <span>→</span>
        </Link>
      </div>
    </article>
  );
}
