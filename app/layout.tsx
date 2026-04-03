import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Île de Ré : Guide Complet 2024 | Bordeaux Getaways",
    template: "%s | Bordeaux Île de Ré Getaways",
  },
  description:
    "Guide complet Île de Ré : hébergements, restaurants, activités, plages. Conseils pratiques, itinéraires et bons plans pour vos vacances parfaites.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Votre Guide Complet pour l'Île de Ré | Bordeaux Getaways",
    description:
      "Découvrez l'Île de Ré comme un local : guides, bons plans, hébergements sélectionnés. Organisez vos vacances parfaites facilement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Île de Ré : Guide Complet | Bordeaux Getaways",
    description:
      "Guide complet Île de Ré : hébergements, restaurants, activités, plages. Conseils pratiques pour vos vacances parfaites.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
