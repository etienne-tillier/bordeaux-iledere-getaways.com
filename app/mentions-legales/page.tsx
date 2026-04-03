import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions Légales — Bordeaux Île de Ré Getaways",
  description: "Mentions légales du site bordeaux-iledere-getaways.com : éditeur, hébergeur, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
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
            <span>Mentions légales</span>
          </nav>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            Mentions Légales
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="prose-blog">

            <h2>1. Éditeur du site</h2>
            <p>
              Le site <strong>bordeaux-iledere-getaways.com</strong> est édité par :
            </p>
            <p>
              <strong>{siteConfig.name}</strong><br />
              Statut : Entrepreneur individuel<br />
              Adresse : Saint-Martin-de-Ré, 17410 Île de Ré, France<br />
              Email : <a href="mailto:contact@bordeaux-iledere-getaways.com">contact@bordeaux-iledere-getaways.com</a><br />
              Directeur de la publication : Marine Delacroix
            </p>

            <h2>2. Hébergeur</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, photographies, illustrations, logos, mise en page) est protégé par les lois françaises et internationales sur la propriété intellectuelle et les droits d&apos;auteur.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable de l&apos;éditeur.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>

            <h2>4. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre informatif. L&apos;éditeur n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur fonctionnement.
            </p>
            <p>
              L&apos;éditeur autorise la création de liens hypertextes vers ses pages, sous réserve que ces liens ne soient pas utilisés à des fins commerciales ou publicitaires et qu&apos;ils n&apos;induisent pas en erreur sur la nature du contenu référencé.
            </p>

            <h2>5. Données personnelles</h2>
            <p>
              Le traitement de vos données personnelles est décrit dans notre{" "}
              <Link href="/politique-confidentialite">Politique de Confidentialité</Link>.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Le site bordeaux-iledere-getaways.com peut utiliser des cookies à des fins de mesure d&apos;audience et d&apos;amélioration de l&apos;expérience utilisateur. Conformément à la réglementation en vigueur, vous pouvez paramétrer l&apos;utilisation des cookies dans les options de votre navigateur.
            </p>

            <h2>7. Responsabilité</h2>
            <p>
              L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur le site. Toutefois, l&apos;éditeur ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour.
            </p>
            <p>
              Les informations touristiques (tarifs, horaires, disponibilités) sont données à titre indicatif et peuvent évoluer sans préavis. Nous vous recommandons de vérifier les informations auprès des prestataires concernés avant tout déplacement.
            </p>

            <h2>8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. Tout litige relatif au site sera soumis à la compétence exclusive des tribunaux français.
            </p>

            <p style={{ marginTop: "3rem", padding: "1rem 1.5rem", background: "var(--color-secondary)", borderRadius: "var(--radius-md)", fontSize: "0.85rem" }}>
              <em>Dernière mise à jour : Janvier 2024</em>
            </p>
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link href="/" className="btn-outline">← Retour à l&apos;accueil</Link>
          </div>
        </div>
      </section>
    </>
  );
}
