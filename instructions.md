## Description
## Site spécialisé Île de Ré et Bordeaux - Guide touristique complet

**bordeaux-iledere-getaways.com** est un site de contenu touristique spécialisé sur l'Île de Ré et la région bordelaise. Il s'adresse aux voyageurs français souhaitant organiser leurs vacances sur l'Île de Ré, avec un focus sur l'information pratique et les conseils d'initiés. Le site propose des guides détaillés, fiches pratiques, itinéraires personnalisés (camping-car, vélo), conseils d'hébergement et de restauration, ainsi que des informations sur les produits locaux et le terroir bordelais.

L'objectif principal est de devenir LA référence SEO pour les requêtes liées au tourisme sur l'Île de Ré, en monétisant via l'affiliation (hébergements, activités, locations) et la génération de leads qualifiés. Le contenu couvre tous les aspects du voyage : budget, durée de séjour, activités familiales, accessibilité avec animaux domestiques, plages recommandées, gastronomie locale, et connexions avec Bordeaux (vins, produits du terroir). Le public cible comprend les familles, couples et groupes d'amis planifiant des vacances dans cette région prisée de la côte atlantique française.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Bordeaux Île de Ré Getaways
- Domaine : bordeaux-iledere-getaways.com
- Type de site : Money site (affiliation tourisme + génération leads)
- Thématiques : Tourisme, Île de Ré, Bordeaux, Guides voyage, Hébergements
- Objectif business : Monétisation via affiliation (booking, activités) + leads qualifiés
- Audience cible : Familles, couples, groupes d'amis planifiant vacances Île de Ré

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance : authentique, maritime, chaleureux, lumineux, raffiné
- **Références visuelles mentales** : phares rayés rouge et blanc, maisons blanches aux volets colorés, marais salants, vignobles bordelais au coucher de soleil, vélos sur dunes, cabanes ostréicoles
- **Émotions à évoquer** : évasion maritime, authenticité française, convivialité familiale, découverte gourmande, sérénité insulaire

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. S'inspirer des couleurs naturelles de l'Île de Ré : blanc des maisons, bleu océan atlantique, rouge des phares, vert des vignes, beige du sable
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : bleu océan profond mais chaleureux
   - Couleur secondaire (secondary) : blanc cassé/crème inspiré des maisons rétaises
   - Couleur d'accent (accent) : rouge doux des tuiles et phares
   - Couleur de fond (background) : beige sable très subtil
   - Variante hover : version plus saturée du bleu principal
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- Google Font principale : **Libre Baskerville** (élégance maritime française)
- Google Font secondaire : **Open Sans** (lisibilité parfaite pour guides pratiques)
- Style : mélange sophistication bordelaise et décontraction insulaire

## 2. SEO & métadonnées
- **Titre SEO principal** : "Île de Ré : Guide Complet 2024 | Bordeaux Getaways"
- **Méta-description principale** : "Guide complet Île de Ré : hébergements, restaurants, activités, plages. Conseils pratiques, itinéraires et bons plans pour vos vacances parfaites."
- **Open Graph title** : "Votre Guide Complet pour l'Île de Ré | Bordeaux Getaways"
- **Open Graph description** : "Découvrez l'Île de Ré comme un local : guides, bons plans, hébergements sélectionnés. Organisez vos vacances parfaites facilement."

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation maritime)
  - `app/globals.css` (palette Île de Ré selon méthodologie section 1)
  - contenus de démo remplacés par guides touristiques dans `content/data/*` et MDX
  - configuration blog Supabase (`SITE_DOMAIN`, routes `/guides/*`, `/hebergements/*`)

## 4. Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

Les images suivantes ont été générées et sont disponibles sur le bucket R2. **OBLIGATOIRE** : télécharger et intégrer dans le projet :

**Page d'accueil :**
- Hero principal : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-home-hero-lighthouse-sunset.jpeg
- Section destinations : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-home-destinations-village-bikes.jpeg
- Section hébergements : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-home-accommodations-hotel-terrace.jpeg
- Section activités : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-home-activities-oyster-farming.jpeg
- Section plages : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-home-beaches-family-beach.jpeg
- Section gastronomie : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-home-gastronomy-local-market.jpeg

**Page Guides :**
- Header guides : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-guides-hero-cycling-tour.jpeg
- Guide camping-car : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-guides-camping-car-motorhome-parking.jpeg

**Page À propos :**
- Section à propos : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bordeaux-iledere-getaways-com-about-team-island-experts.jpeg

## 5. Contenu & structure à mettre en place

### Sections obligatoires sur la page d'accueil (`/`) :
- **Hero** : "Votre Guide Complet de l'Île de Ré" + CTA "Planifier mon séjour"
- **Destinations phares** : Saint-Martin-de-Ré, La Flotte, Ars-en-Ré, Le Bois-Plage
- **Types d'hébergements** : hôtels, chambres d'hôtes, campings, locations saisonnières
- **Activités incontournables** : vélo, plages, ostréiculture, phares, marchés
- **Plages recommandées** : familles, couples, sports nautiques
- **Gastronomie locale** : huîtres, vins de pays, produits du terroir
- **Guides pratiques** : durée séjour, budget, avec enfants/animaux
- **Blog articles récents** : conseils saisonniers, bons plans, actualités

### Pages principales :
- `/guides/` : guides thématiques (vélo, camping-car, famille, budget)
- `/hebergements/` : sélection d'hébergements par catégorie
- `/activites/` : activités par type et par saison
- `/plages/` : guide des plages avec caractéristiques
- `/restaurants/` : sélection restaurants et spécialités
- `/blog/` : articles conseils et actualités
- `/bordeaux/` : connexion avec Bordeaux (vins, excursions)

### Clusters thématiques :
- Hébergements (hôtels, B&B, camping, locations)
- Activités (vélo, nautique, culturel, gastronomie)
- Pratique (transport, budget, famille, animaux)
- Saisons (été, hors-saison, événements)
- Terroir (produits locaux, vins, marchés)

## 6. Consignes éditoriales
- **Ton** : expert local bienveillant, authentique mais accessible, pratique avant tout
- **Types d'articles** :
  - Guides pratiques détaillés ("Combien de temps rester", "Budget type")
  - Sélections personnalisées ("Top 5 restaurants familiaux")
  - Itinéraires thématiques ("3 jours à vélo", "Week-end gourmand")
  - Conseils saisonniers et actualités locales
- **Contraintes à éviter** : promesses marketing excessives, généralités touristiques, concurrence déloyale avec locals

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=bordeaux-iledere-getaways.com, BLOG_API_SECRET)
- Mise à jour `config/site.ts` avec navigation thématique
- **Création de la palette maritime UNIQUE** dans `app/globals.css`
- Logos maritimes (`/public/logo.svg`, `/app/icon.svg`) inspirés phares/bateaux
- **Téléchargement et intégration des 9 images pré-générées** dans `/public/images/`
- Configuration blog Supabase (filtrage par domaine, catégories touristiques)
- Routes spécialisées : `/guides/*`, `/hebergements/*`, `/activites/*`
- Vérifier `npm run lint` et `npm run build`
- Configuration déploiement avec variables d'environnement

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system maritime
❌ Utiliser des couleurs génériques "bleues" sans inspiration Île de Ré
❌ Oublier de télécharger et intégrer les 9 images pré-générées
❌ Créer un design touristique générique
❌ Négliger l'aspect pratique au profit du marketing
❌ Laisser des placeholders de contenu ou couleurs

## 9. Spécificités fonctionnelles
- Système de filtrage hébergements par critères (budget, type, localisation)
- Calculateur de budget personnalisé
- Cartes interactives des points d'intérêt
- Calendrier saisonnier des activités
- Formulaires de demande d'information (génération leads)
- Intégration widgets météo et marées
- Liens d'affiliation transparents et conformes

## URLs à rediriger
bordeaux-iledere-getaways.com/bordeaux-slave-trade/

## Instructions redirection
Chaque URL doit rediriger vers la version blog.
Insérer /blog/ entre le domaine et le slug.
Les segments après le domaine sont concaténés avec des tirets pour former le slug.
IMPORTANT: si l'URL contient des caractères encodés (%C3%A9, etc.), décoder d'abord l'URL puis slugifier normalement (ne jamais garder des morceaux c3a9/c3a8 dans le slug).
Exemples:
www.offreslg.fr/tv-oled-c2g2 -> www.offreslg.fr/blog/tv-oled-c2g2
www.offreslg.fr/tv/check-status -> www.offreslg.fr/blog/tv-check-status
www.site.fr/guide-conf%C3%A9rence -> www.site.fr/blog/guide-conference