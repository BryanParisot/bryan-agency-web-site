import Header from '@/components/Header/Header'
import Faq from '@/components/FAQ/Faq'
import { Button } from '@/components/ui/button'
import { siteConfig, getCanonicalUrl } from '@/lib/site-config'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Google Business Profile Nancy | Optimisation fiche Google',
  description:
    'Améliorez votre visibilité locale grâce à une fiche Google Business Profile optimisée. Création, optimisation et gestion de votre présence sur Google Maps à Nancy.',
  alternates: {
    canonical: getCanonicalUrl('/google-business-profile-nancy'),
  },
  openGraph: {
    title: 'Google Business Profile Nancy | Optimisation fiche Google',
    description:
      'Améliorez votre visibilité locale grâce à une fiche Google Business Profile optimisée. Création, optimisation et gestion de votre présence sur Google Maps à Nancy.',
    url: getCanonicalUrl('/google-business-profile-nancy'),
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Business Profile Nancy | Optimisation fiche Google',
    description:
      'Améliorez votre visibilité locale grâce à une fiche Google Business Profile optimisée. Création, optimisation et gestion de votre présence sur Google Maps à Nancy.',
  },
}

const faqItems = [
  {
    question: 'Qu est-ce que Google Business Profile Nancy ?',
    answer:
      'Google Business Profile Nancy est la fiche Google qui représente votre entreprise locale dans les résultats de recherche et sur Google Maps lorsque des clients cherchent des services à Nancy. C est un élément essentiel du SEO local.',
  },
  {
    question: 'Pourquoi faut-il optimiser ma fiche Google Business Profile ?',
    answer:
      'Une fiche optimisée augmente votre visibilité, attire des appels, des demandes d itinéraire et des visiteurs en magasin. Elle renforce aussi la confiance en affichant des informations cohérentes, des avis clients et des photos professionnelles.',
  },
  {
    question: 'Comment apparaître dans le Pack Local Google à Nancy ?',
    answer:
      'Pour apparaître dans le Pack Local, il faut travailler la pertinence votre fiche, la distance et la notoriété : catégories, description, avis, publications, citations locales et qualité du site web liés à Nancy.',
  },
  {
    question: 'Puis-je confier la gestion de ma fiche à un consultant ?',
    answer:
      'Oui. Je propose un accompagnement complet : audit, création, optimisation, publication d actualités et réponse aux avis. Vous gardez le contrôle et je vous aide à améliorer votre référencement local durablement.',
  },
  {
    question: 'Quel est l impact des avis clients sur Google Maps ?',
    answer:
      'Les avis influent sur votre classement local et sur la confiance des clients. Une fiche avec des avis récents et des réponses professionnelles convertit mieux et attire plus de demandes de contact.',
  },
  {
    question: 'Faut-il ajouter des photos géolocalisées ?',
    answer:
      'Oui. Les photos géolocalisées renforcent le référencement local et améliorent la qualité de votre fiche. Elles permettent à Google de mieux comprendre votre établissement et donnent une image plus professionnelle aux internautes.',
  },
  {
    question: 'Quelle catégorie choisir pour mon entreprise à Nancy ?',
    answer:
      'La catégorie principale doit décrire précisément votre activité. Je vous aide à sélectionner des catégories pertinentes qui améliorent votre visibilité sur des requêtes ciblées comme "Google Business Nancy" ou "référencement local Nancy".',
  },
  {
    question: 'Est-ce que la fiche Google peut générer des prospects ?',
    answer:
      'Oui. Une fiche bien optimisée attire des appels, des messages et des visites physiques. C est un canal de conversion direct, surtout pour les entreprises locales de Nancy qui veulent générer du trafic qualifié.',
  },
  {
    question: 'A quelle fréquence faut-il mettre à jour la fiche Google ?',
    answer:
      'Idéalement, la fiche doit être actualisée régulièrement : horaires, services, promotions, publications et photos. Une présence active montre à Google que votre entreprise est dynamique et améliore la confiance des prospects.',
  },
  {
    question: 'Offrez-vous un audit Google Business Profile Nancy ?',
    answer:
      'Oui. Je propose un audit spécifique de votre fiche Google, des recommandations SEO local et une feuille de route pour optimiser votre visibilité sur Google Maps et les recherches de proximité.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nancy',
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  areaServed: {
    '@type': 'City',
    name: 'Nancy',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: siteConfig.siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Google Business Profile Nancy',
      item: getCanonicalUrl('/google-business-profile-nancy'),
    },
  ],
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-anton text-3xl tracking-[0.03em] text-slate-950 sm:text-5xl">
      {children}
    </h2>
  )
}

export default function GoogleBusinessProfileNancyPage() {
  return (
    <main>
      <Header
        title="Google Business Profile à Nancy"
        subtitle="Optimisation fiche Google, visibilité locale et référencement sur Google Maps pour les entreprises de Nancy."
        text="Améliorez votre visibilité locale avec une fiche Google Business Profile performante et une stratégie SEO locale pensée pour Nancy et la Meurthe-et-Moselle."
      />

      <section className="px-5 pb-20 pt-10 sm:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <section className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.28)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Google Business Profile Nancy
            </p>
            <h1 className="mt-4 font-anton text-4xl tracking-[0.03em] text-slate-950 sm:text-6xl">
              Google Business Profile à Nancy
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Une fiche Google Business Profile solide est aujourd'hui indispensable pour apparaître sur Google Maps, capter des appels, des demandes d itinéraire et des prospects qui recherchent des services locaux à Nancy. Sans fiche optimisée, votre entreprise reste invisible aux yeux des clients de proximité.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Je vous aide à créer, optimiser et gérer votre présence Google, afin que votre entreprise locale gagne en visibilité, en confiance et en conversion. Mon objectif est de transformer votre fiche en un levier de trafic local durable.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Demander un audit Google Business Profile
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Réserver un appel
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Recevoir un devis
                </Button>
              </Link>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-secondary/70 p-8 shadow-sm sm:p-10">
            <SectionTitle>
              Pourquoi Google Business Profile est essentiel pour une entreprise locale ?
            </SectionTitle>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Pour une entreprise à Nancy, une fiche Google Business Profile n est pas seulement un profil. C est la face visible de votre activité sur les recherches de proximité, sur Google Maps et dans le Pack Local. Sans cette fiche, vous perdez des opportunités de contact direct et vous laissez la place à vos concurrents.
                </p>
                <p>
                  La fiche permet de capter les prospects qui cherchent « Google Business Nancy », « fiche Google Nancy » ou « référencement local Nancy ». Elle augmente la visibilité locale, améliore la confiance et transforme une recherche en action : appel, itinéraire, visite ou prise de contact.
                </p>
                <p>
                  En combinant l optimisation de la fiche avec un site local fort et un maillage interne adapté, vous bâtissez un écosystème cohérent qui pousse votre entreprise en tête des résultats géolocalisés.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6">
                <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                  <li>Visibilité sur Google Maps et recherche locale.</li>
                  <li>Confiance renforcée grâce aux avis clients.</li>
                  <li>Plus d appels, de messages et de demandes d itinéraire.</li>
                  <li>Meilleure exposition pour les recherches « Nancy » et « Meurthe-et-Moselle ». </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>Création de fiche Google Business Profile</SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  La création d une fiche Google Business Profile commence par la vérification de votre existence commerciale : adresse, secteur d activité, numéro de téléphone et site web doivent être exacts. Une fiche complète et cohérente attire davantage l attention des clients locaux.
                </p>
                <p>
                  Le processus de création comprend la validation de la fiche, la sélection des catégories principales et secondaires, la saisie des horaires, l ajout d images de qualité, et la définition des services. Chaque détail compte pour Google et pour vos prospects.
                </p>
                <p>
                  Je vous accompagne sur la validation de la fiche auprès de Google, sur l optimisation du format d adresse, sur la rédaction d une présentation claire et sur la structuration des services. L objectif est d être visible dès les premières recherches.
                </p>
                <p>
                  Créer une fiche dans les règles garantit aussi que vos informations ne soient pas dupliquées ou confondues avec d autres établissements à Nancy. C est un élément stratégique simple mais très efficace pour le référencement local.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-primary/5 p-8 shadow-sm sm:p-10">
              <SectionTitle>Optimisation de fiche Google Business Profile</SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  L optimisation de la fiche passe par les bons mots-clés, les catégories pertinentes, une description riche et des publications régulières. Il faut aussi ajouter des produits, des services et des photos géolocalisées associées à Nancy.
                </p>
                <p>
                  Une fiche bien optimisée se distingue par une description qui inclut naturellement des termes comme « Google Business Profile », « Google Maps Nancy », « SEO local » et « visibilité locale nancy ». Elle répond à l intention des clients qui cherchent un prestataire local.
                </p>
                <p>
                  Les catégories doivent être cohérentes : la catégorie principale doit refléter votre activité principale et les catégories secondaires doivent couvrir les services annexes. Cela aide Google à matcher votre fiche avec les requêtes des internautes.
                </p>
                <p>
                  Les publications, les photos et les services renforcent votre autorité. Les clients voient immédiatement que votre entreprise est active et engagée, ce qui influence positivement le taux de clic et les conversions.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>Comment apparaître dans le Pack Local Google ?</SectionTitle>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Le Pack Local Google repose sur trois piliers : pertinence, distance et notoriété. Pour Nancy, cela signifie que votre fiche doit être bien renseignée, proche du lieu de recherche et perçue comme fiable par Google.
              </p>
              <p>
                La pertinence concerne le contenu de votre fiche : services, description, catégories, mots-clés et informations. La distance est liée à la localisation réelle de votre entreprise à Nancy ou dans la métropole. La notoriété dépend des avis, des backlinks, des mentions locales et de la qualité du site.
              </p>
              <p>
                En optimisant ces trois axes, vous maximisez vos chances d être affiché dans le Pack Local lorsque vos clients potentiels recherchent des expressions comme « Google Business Nancy », « fiche google nancy » ou « optimisation google maps nancy ».
              </p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-950">Schéma simple du Pack Local :</p>
                <ul className="mt-4 list-disc pl-6 text-slate-700">
                  <li>1. Pertinence : fiche complète et mots-clés locaux.</li>
                  <li>2. Distance : adresse claire à Nancy ou proximité immédiate.</li>
                  <li>3. Notoriété : avis clients, citations, pages locales.</li>
                </ul>
              </div>
              <p>
                Ce schéma explique pourquoi il ne suffit pas d avoir une fiche : il faut un ensemble cohérent de signaux pour apparaître dans les meilleurs emplacements Google Maps.
              </p>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>Les erreurs fréquentes sur Google Business Profile</SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Les erreurs les plus fréquentes empêchent une fiche d être performante. Les entreprises à Nancy commettent souvent des erreurs comme une mauvaise catégorie, une fiche incomplète ou des informations incohérentes entre Google, le site web et les annuaires.
                </p>
                <ul className="list-disc pl-6 text-slate-700">
                  <li>Mauvaise catégorie principale ou absence de catégories secondaires pertinentes.</li>
                  <li>Fiche non optimisée avec une description trop courte ou trop générique.</li>
                  <li>Avis non traités, absence de réponses ou notation moyenne faible.</li>
                  <li>Informations incohérentes : adresse, nom, téléphone différents selon les sources.</li>
                  <li>Photos de mauvaise qualité ou trop peu de visuels pour rassurer les clients.</li>
                </ul>
                <p>
                  Ces erreurs réduisent vos chances d être visible dans les recherches locales et de recevoir des demandes de contact. En corrigeant ces points, vous améliorez à la fois votre visibilité et votre image professionnelle.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-primary/10 bg-primary/5 p-8 shadow-sm sm:p-10">
              <SectionTitle>Gestion des avis clients</SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Les avis clients sont au cœur du référencement local. Plus votre fiche comporte d avis positifs et plus vous montrez à Google et aux prospects que votre entreprise à Nancy est fiable.
                </p>
                <p>
                  Récolter des avis demande une méthode : demander aux clients satisfaits, proposer un lien direct vers la fiche et faciliter l avis sur mobile. La qualité des avis compte autant que leur nombre.
                </p>
                <p>
                  Répondre aux avis est également essentiel. Une réponse personnalisée montre que vous êtes attentif et professionnel. Cela améliore l expérience client et envoie un signal positif à Google.
                </p>
                <ul className="list-disc pl-6 text-slate-700">
                  <li>Collecte d avis : processus simple et automatisé.</li>
                  <li>Réponse aux avis : rapide, professionnelle et orientée service client.</li>
                  <li>Impact SEO local : plus d avis donne plus de visibilité et plus de confiance.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>Mon accompagnement Google Business Profile à Nancy</SectionTitle>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Mon accompagnement s adresse aux entreprises locales qui veulent maîtriser leur visibilité sur Google Maps et dans les résultats de recherche. Je propose un audit complet, une création structurée, une optimisation technique et un suivi régulier.
              </p>
              <p>
                Mes prestations comprennent :
              </p>
              <ul className="list-disc pl-6 text-slate-700">
                <li>Audit de votre Google Business Profile existant ou étude de votre présence locale.</li>
                <li>Création ou revendication de la fiche avec validation auprès de Google.</li>
                <li>Optimisation des catégories, de la description, des services et des photos.</li>
                <li>Publication d actualités, gestion des avis et recommandations d amélioration continue.</li>
                <li>Suivi de la performance locale et ajustements en fonction des résultats.</li>
              </ul>
              <p>
                J accompagne également votre site web pour qu il devienne un support solide à votre fiche Google Business Profile, en créant des pages locales adaptées à Nancy ou en renforçant le maillage interne vers des contenus de proximité.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-secondary/55 bg-secondary/55 p-8 shadow-sm sm:p-10">
            <SectionTitle>Services complémentaires pour booster votre visibilité</SectionTitle>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-6 text-slate-700">
                <h3 className="text-2xl font-semibold text-slate-950">Création de site internet à Nancy</h3>
                <p className="mt-4">
                  Une fiche optimisée fonctionne encore mieux lorsqu elle renvoie vers un site local de qualité. Découvrez mes services de <Link href="/creation-site-internet-nancy" className="font-semibold text-slate-950 underline">création de site internet à Nancy</Link> pour des pages qui convertissent.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-6 text-slate-700">
                <h3 className="text-2xl font-semibold text-slate-950">Référencement local Nancy</h3>
                <p className="mt-4">
                  Pour aller plus loin, je peux aussi travailler le <Link href="/referencement-seo-nancy" className="font-semibold text-slate-950 underline">référencement local à Nancy</Link> avec des pages locales, un contenu optimisé et un maillage adapté aux recherches de proximité.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-6 text-slate-700">
                <h3 className="text-2xl font-semibold text-slate-950">Web design à Nancy</h3>
                <p className="mt-4">
                  L apparence de votre présence digitale compte. Je propose également des prestations de <Link href="/web-design-nancy" className="font-semibold text-slate-950 underline">web design à Nancy</Link> pour une identité visuelle claire, professionnelle et adaptée à votre clientèle.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/70 bg-white/90 p-6 text-slate-700">
                <h3 className="text-2xl font-semibold text-slate-950">Présence sur Google Maps</h3>
                <p className="mt-4">
                  La visibilité sur Google Maps est un levier majeur. En optimisant votre fiche et votre site, vous augmentez vos chances de capter du trafic local qualifié et des demandes directes de rendez-vous ou de devis.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>FAQ Google Business Profile Nancy</SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-700">
              Voici les réponses aux questions que se posent les dirigeants et responsables d entreprise à Nancy au sujet de Google Business Profile et du référencement local.
            </p>
            <div className="mt-8">
              <Faq faq={faqItems} />
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-950/20 bg-slate-950 px-8 py-10 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)] sm:px-10">
            <SectionTitle>Prêt à optimiser votre fiche Google à Nancy ?</SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Si vous souhaitez améliorer votre visibilité locale sur Google Maps, gagner des appels et des demandes d itinéraire, je vous propose un accompagnement sur mesure avec un audit complet et un plan d action clair.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Contactez-moi pour obtenir un devis, réserver un échange ou lancer la création de votre fiche Google Business Profile à Nancy.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Demander un audit Google Business Profile
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Réserver un appel
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </main>
  )
}
