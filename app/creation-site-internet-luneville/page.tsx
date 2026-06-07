import Header from '@/components/Header/Header'
import BlogSection from '@/components/BlogSection/BlogSection'
import CallToAction from '@/components/CTA/CallToAction'
import Faq from '@/components/FAQ/Faq'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'
import { siteConfig, getCanonicalUrl } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Création site internet Lunéville — Développeur web local',
  description:
    "Création de site internet à Lunéville pour artisans, PME et indépendants. Site vitrine, WordPress, refonte et référencement local.",
  alternates: {
    canonical: getCanonicalUrl('/creation-site-internet-luneville'),
  },
  openGraph: {
    title: 'Création site internet Lunéville — Développeur web local',
    description:
      "Création de site internet à Lunéville : site vitrine, WordPress, refonte, SEO local et performance. Demandez un devis.",
    url: getCanonicalUrl('/creation-site-internet-luneville'),
    siteName: siteConfig.name,
    images: [getCanonicalUrl('/logos/nav/logo_creation_site.svg')],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Création site internet Lunéville — Développeur web local',
    description:
      "Création de site internet à Lunéville : site vitrine, WordPress, refonte, SEO local et performance.",
  },
}

const faqItems = [
  {
    question: "Combien coûte la création d'un site internet à Lunéville ?",
    answer:
      "Le coût dépend du périmètre : site vitrine simple, site WordPress sur mesure ou application. Pour une estimation rapide : un site vitrine professionnel démarre généralement autour de 1 500 € HT, une création WordPress personnalisée autour de 2 500–6 000 € HT selon les fonctionnalités. Demandez un devis pour un chiffrage précis.",
  },
  {
    question: "Combien de temps faut-il pour lancer mon site ?",
    answer:
      "Dépendant du projet : 2 à 4 semaines pour un site vitrine simple, 4 à 8 semaines pour un site WordPress sur mesure ou une refonte complète (incluant audit, maquette, développement et optimisation SEO).",
  },
  {
    question: "Proposez-vous des solutions d'hébergement et de maintenance ?",
    answer:
      "Oui. J'accompagne la configuration du nom de domaine, l'hébergement sécurisé et la maintenance régulière (mises à jour, sauvegardes, monitoring de sécurité).",
  },
  {
    question: "Est-ce que le site sera optimisé pour le référencement local ?",
    answer:
      "Absolument : optimisation des métadonnées, balises schema (LocalBusiness), pages locales, performance et conseils pour Google Business Profile afin d'améliorer la visibilité sur Lunéville et le secteur Nancy / Meurthe-et-Moselle.",
  },
  {
    question: "Travaillez-vous avec WordPress et Next.js ?",
    answer:
      "Oui. J'utilise WordPress quand le besoin l'exige (CMS familier, back-office) et Next.js pour des solutions performantes, modernes et orientées Core Web Vitals.",
  },
  {
    question: "Puis-je modifier mon site moi-même après livraison ?",
    answer:
      "Oui : je peux livrer un back-office WordPress pour gestion simple, ou fournir une interface d'édition (CMS headless) si vous préférez une architecture moderne. Je livre aussi la documentation et une courte formation.",
  },
  {
    question: "Proposez-vous des services de refonte pour un site existant ?",
    answer:
      "Oui : audit SEO et UX, plan de refonte, migration des contenus et optimisation de la vitesse et de l'accessibilité. L'objectif est de conserver le référencement acquis tout en améliorant la conversion.",
  },
  {
    question: "Comment obtenir un devis ou réserver un appel ?",
    answer:
      "Utilisez le formulaire de contact pour demander un devis ou réservez un créneau via la page de contact. Je réponds sous 48h max pour un premier échange.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqItems.map((f) => ({
    '@type': 'Question',
    'name': f.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': f.answer,
    },
  })),
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': siteConfig.name,
  'url': siteConfig.siteUrl,
  'telephone': siteConfig.phone,
  'email': siteConfig.email,
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': siteConfig.city || 'Lunéville',
    'addressRegion': siteConfig.region || 'Grand Est',
    'addressCountry': siteConfig.country || 'FR',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Accueil',
      'item': siteConfig.siteUrl,
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Création de site internet à Lunéville',
      'item': getCanonicalUrl('/creation-site-internet-luneville'),
    },
  ],
}

export default function CreationSiteLuneville() {
  return (
    <main>
      <Header
        title="Création de site internet à Lunéville"
        subtitle="Développeur web freelance — site vitrine, WordPress, refonte et SEO local"
        text="Vous voulez un site web qui attire des clients à Lunéville ? Je crée des sites performants, sûrs et optimisés pour la conversion et le référencement local."
      />

      <section className="px-5 sm:px-16 mt-10">
        <div className="max-w-5xl mx-auto prose prose-lg">
          <h1>Création de site internet à Lunéville</h1>
          <p>
            Vous cherchez un prestataire local pour la <strong>création de site internet à Lunéville</strong> ? En tant que développeur web freelance implanté en Meurthe-et-Moselle, je conçois des sites web pensés pour les artisans, PME, commerçants et indépendants qui veulent convertir leurs visiteurs en prospects.
          </p>
          <p>
            Mon approche combine webdesign, UX, développement sur mesure (Next.js ou WordPress) et optimisation pour le <em>référencement local</em>. Si votre objectif est d'augmenter la visibilité sur Google, d'attirer des clients locaux et d'améliorer votre acquisition, vous êtes au bon endroit.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="/contact" className="no-underline">
              <Button size="lg" variant="primary">Demander un devis</Button>
            </Link>
            <Link href="/contact" className="no-underline">
              <Button size="lg" variant="black">Réserver un appel</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12 mt-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-16">
          <h2>Pourquoi créer un site internet pour votre activité à Lunéville ?</h2>
          <p>
            À Lunéville comme ailleurs, un site internet est aujourd’hui la première vitrine de votre activité. Il permet de gagner en visibilité locale, d’être présent sur les résultats de recherche, d’expliquer vos services et d’attirer des prospects qualifiés. Un site bien conçu augmente la confiance des visiteurs et facilite la prise de contact.
          </p>
          <ul>
            <li>Présence sur Google pour des recherches locales</li>
            <li>Conversion : transformer les visiteurs en clients</li>
            <li>Crédibilité : un site professionnel renforce la confiance</li>
            <li>Acquisition : trafic organique via référencement naturel</li>
          </ul>
          <p>
            Vous trouverez plus bas des cas concrets, une grille tarifaire indicative et mon processus pour vous accompagner de l'idée à la mise en ligne.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-16 mt-12">
        <h2>Création de site vitrine à Lunéville</h2>
        <p>
          Le <strong>site vitrine</strong> est idéal pour présenter une entreprise, artisan, commerçant ou professionnel. L’objectif : générer des contacts via un design clair, des messages orientés client et des appels à l’action visibles.
        </p>

        <h3>Fonctionnalités clés</h3>
        <ul>
          <li>Page d’accueil optimisée pour la conversion</li>
          <li>Présentation des services et réalisations</li>
          <li>Formulaire de contact et intégration Google Business Profile</li>
          <li>Version responsive pour mobile et tablette</li>
          <li>Optimisation Core Web Vitals (vitesse et performance)</li>
        </ul>

        <h3>Exemple de comparaison rapide</h3>
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th>Type</th>
              <th>Délai</th>
              <th>Objectif</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Site vitrine simple</td>
              <td>2–4 semaines</td>
              <td>Présence et contact local</td>
            </tr>
            <tr>
              <td>Site vitrine premium</td>
              <td>4–6 semaines</td>
              <td>Design sur mesure & SEO</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4">
          Pour voir des exemples, consultez mes <Link href="/realisations">réalisations</Link> et découvrez comment un site vitrine augmente la visibilité locale.
        </p>
      </section>

      <section className="bg-secondary py-12 mt-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-16">
          <h2>Création de site WordPress à Lunéville</h2>
          <p>
            WordPress reste une solution robuste pour les entreprises qui veulent un back-office simple. Je construis des thèmes personnalisés, sécurisés et rapides, avec un éditeur intuitif pour gérer vos pages.
          </p>
          <ul>
            <li>Installation et configuration sécurisée</li>
            <li>Thème personnalisé pour respecter votre identité</li>
            <li>Optimisation SEO et performance</li>
            <li>Formations et documentation</li>
          </ul>

          <p>
            Besoin d’un site WordPress optimisé pour la conversion ? Je propose une solution complète, du choix du nom de domaine à l’hébergement et au support post-lancement.
          </p>

          <div className="mt-6">
            <Link href="/creation-site-internet-nancy">Comparez avec la création site internet à Nancy</Link>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-16 mt-12">
        <h2>Refonte de site internet à Lunéville</h2>
        <p>
          Une refonte peut redonner vie à un site ancien : modernisation du design, optimisation SEO, amélioration de la vitesse et adaptation mobile. J'effectue un audit approfondi avant toute refonte pour conserver et améliorer votre référencement.
        </p>
        <h3>Audit & migration</h3>
        <ul>
          <li>Audit technique et SEO</li>
          <li>Plan de migration des URLs</li>
          <li>Optimisation des contenus et balises</li>
        </ul>
      </section>

      <section className="bg-secondary py-12 mt-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-16">
          <h2>Pourquoi choisir un freelance plutôt qu'une agence web ?</h2>
          <p>
            Le choix d’un freelance garantit réactivité, relation directe et coût souvent plus compétitif. En travaillant directement avec le développeur, vous gagnez en simplicité et en précision dans l’exécution.
          </p>
          <ul>
            <li>Communication directe et transparente</li>
            <li>Souplesse et adaptabilité</li>
            <li>Meilleur rapport qualité/prix pour les petites structures</li>
          </ul>
        </div>
      </section>

      <section className="px-5 sm:px-16 mt-12">
        <h2>Un site internet pensé pour le référencement local</h2>
        <p>
          Le référencement local est central : optimisation des pages, balises schema, pages locales, stratégie Google Business Profile et acquisition de citations locales.
        </p>
        <ul>
          <li>Optimisation des balises title et meta description</li>
          <li>Structure claire des pages et Hn</li>
          <li>Schema LocalBusiness et FAQ</li>
          <li>Optimisation images et Core Web Vitals</li>
        </ul>
      </section>

      <section className="bg-secondary py-12 mt-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-16">
          <h2>Mon processus de création</h2>
          <h3>Analyse du projet</h3>
          <p>
            Premier échange pour comprendre vos objectifs, vos cibles et vos contraintes. J’analyse la concurrence locale (Nancy, Lunéville) et je propose un plan d’action clair.
          </p>

          <h3>Maquette et UX</h3>
          <p>
            Conception de maquettes fidèles à votre charte graphique, tests UX pour garantir une bonne conversion et parcours client simple.
          </p>

          <h3>Développement</h3>
          <p>
            Développement Frontend performant (Next.js) ou intégration WordPress selon le besoin. Respect des normes d’accessibilité et optimisation des performances.
          </p>

          <h3>Mise en ligne</h3>
          <p>
            Configuration du nom de domaine, hébergement, certificats TLS, tests finaux et mise en production.
          </p>

          <h3>Suivi et accompagnement</h3>
          <p>
            Maintenance, mises à jour, monitoring et optimisation continue pour garantir la performance et la sécurité.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-16 mt-12">
        <h2>Pourquoi travailler avec un développeur web local à Lunéville ?</h2>
        <p>
          La proximité facilite les rendez-vous, la connaissance du marché local (Nancy, Meurthe‑et‑Moselle) et la mise en place d’actions ciblées pour améliorer votre visibilité.
        </p>
        <ul>
          <li>Connaissance du tissu local (PME, artisans, commerçants)</li>
          <li>Accompagnement durable et personnalisé</li>
        </ul>
      </section>

      <section className="px-5 sm:px-16 mt-12">
        <h2>Questions fréquentes</h2>
        <Faq faq={faqItems} />
      </section>

      <section className="py-12 mt-12 px-5 sm:px-16">
        <div className="max-w-5xl mx-auto">
          <h2>Prêt à lancer votre projet à Lunéville ?</h2>
          <p>
            Demandez un devis personnalisé ou réservez un appel pour discuter de vos besoins. Je propose des solutions adaptées aux artisans, PME et indépendants.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="/contact" className="no-underline">
              <Button size="lg" variant="primary">Demander un devis</Button>
            </Link>
            <Link href="/contact" className="no-underline">
              <Button size="lg" variant="black">Discuter de votre projet</Button>
            </Link>
          </div>
        </div>
      </section>

      <BlogSection />

      {/* JSON-LD scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </main>
  )
}
