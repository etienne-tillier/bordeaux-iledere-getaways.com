import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Bordeaux Île de Ré Getaways",
  description: "Politique de confidentialité du site bordeaux-iledere-getaways.com : données collectées, droits utilisateurs et contacts DPO.",
};

export default function PolitiqueConfidentialitePage() {
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
            <span>Politique de confidentialité</span>
          </nav>
          <h1 style={{ fontFamily: "var(--font-serif)", color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="prose-blog">

            <h2>1. Introduction</h2>
            <p>
              La présente politique de confidentialité décrit la manière dont <strong>Bordeaux Île de Ré Getaways</strong> (ci-après &quot;nous&quot;, &quot;notre site&quot;) collecte, utilise et protège les données à caractère personnel des utilisateurs du site <strong>bordeaux-iledere-getaways.com</strong>.
            </p>
            <p>
              Nous nous engageons à assurer la protection de votre vie privée conformément au Règlement Général sur la Protection des Données (RGPD - UE 2016/679) et à la loi Informatique et Libertés.
            </p>

            <h2>2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est :<br />
              <strong>Marine Delacroix</strong> — Bordeaux Île de Ré Getaways<br />
              Email : <a href="mailto:contact@bordeaux-iledere-getaways.com">contact@bordeaux-iledere-getaways.com</a><br />
              Adresse : Saint-Martin-de-Ré, 17410 Île de Ré
            </p>

            <h2>3. Données collectées</h2>
            <p>Notre site peut collecter les types de données suivants :</p>
            <ul>
              <li><strong>Données de navigation</strong> : adresse IP (anonymisée), navigateur, pages visitées, durée de session — via outils d&apos;analyse d&apos;audience (Google Analytics ou équivalent)</li>
              <li><strong>Cookies techniques</strong> : nécessaires au fonctionnement du site (préférences, session)</li>
              <li><strong>Données de contact</strong> : si vous nous contactez par email, votre adresse email et le contenu de votre message</li>
            </ul>
            <p>
              <strong>Nous ne collectons pas</strong> : numéro de carte bancaire, données sensibles au sens du RGPD, ni aucune donnée de mineurs de moins de 15 ans.
            </p>

            <h2>4. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul>
              <li>Analyser et améliorer l&apos;audience et la qualité du site</li>
              <li>Répondre à vos messages et demandes</li>
              <li>Assurer la sécurité et le bon fonctionnement du site</li>
              <li>Se conformer aux obligations légales</li>
            </ul>

            <h2>5. Base légale du traitement</h2>
            <ul>
              <li><strong>Intérêt légitime</strong> : analyse d&apos;audience anonymisée pour améliorer le site</li>
              <li><strong>Consentement</strong> : cookies non essentiels (analytiques, publicitaires)</li>
              <li><strong>Exécution d&apos;un contrat</strong> : traitement des demandes de contact</li>
            </ul>

            <h2>6. Durée de conservation</h2>
            <ul>
              <li>Données de navigation : 13 mois maximum (conformément aux recommandations CNIL)</li>
              <li>Emails reçus : 3 ans à compter du dernier contact</li>
              <li>Cookies : 13 mois maximum</li>
            </ul>

            <h2>7. Destinataires des données</h2>
            <p>
              Vos données peuvent être transmises à nos sous-traitants techniques dans le cadre de l&apos;hébergement et de l&apos;analyse d&apos;audience (Vercel, Google Analytics). Ces prestataires sont soumis à des engagements contractuels de confidentialité.
            </p>
            <p>
              Nous ne vendons ni ne cédons vos données personnelles à des tiers à des fins commerciales.
            </p>

            <h2>8. Transferts hors UE</h2>
            <p>
              Certains de nos prestataires (Vercel, Google) hébergent des données hors de l&apos;Union Européenne. Ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission Européenne ou par des certifications Privacy Shield/DPF adéquates.
            </p>

            <h2>9. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d&apos;accès</strong> : obtenir la confirmation que des données vous concernant sont traitées</li>
              <li><strong>Droit de rectification</strong> : faire corriger des données inexactes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données (&quot;droit à l&apos;oubli&quot;)</li>
              <li><strong>Droit à la limitation</strong> : restreindre le traitement dans certains cas</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement fondé sur l&apos;intérêt légitime</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@bordeaux-iledere-getaways.com">contact@bordeaux-iledere-getaways.com</a>
            </p>

            <h2>10. Contact DPO</h2>
            <p>
              Notre délégué à la protection des données est joignable à l&apos;adresse :<br />
              <a href="mailto:contact@bordeaux-iledere-getaways.com">contact@bordeaux-iledere-getaways.com</a>
            </p>
            <p>
              Vous avez également le droit d&apos;introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" rel="noopener noreferrer">www.cnil.fr</a>.
            </p>

            <h2>11. Cookies</h2>
            <p>
              Le site utilise des cookies pour améliorer votre expérience. Vous pouvez les gérer via les paramètres de votre navigateur. La désactivation de certains cookies peut affecter le fonctionnement du site.
            </p>
            <p>
              Types de cookies utilisés :
            </p>
            <ul>
              <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site, ne peuvent être désactivés</li>
              <li><strong>Cookies analytiques</strong> : mesurent l&apos;audience (Google Analytics), peuvent être désactivés</li>
            </ul>

            <h2>12. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier la présente politique à tout moment. Les modifications prendront effet dès leur publication sur le site. Nous vous invitons à consulter régulièrement cette page.
            </p>

            <p style={{ marginTop: "3rem", padding: "1rem 1.5rem", background: "var(--color-secondary)", borderRadius: "var(--radius-md)", fontSize: "0.85rem" }}>
              <em>Dernière mise à jour : Janvier 2024</em>
            </p>
          </div>

          <div style={{ marginTop: "3rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/" className="btn-outline">← Retour à l&apos;accueil</Link>
            <Link href="/mentions-legales" className="btn-outline">Mentions légales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
