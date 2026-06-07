import Header from '@/components/Header/Header'
import Faq from '@/components/FAQ/Faq'
import { Button } from '@/components/ui/button'
import { getCanonicalUrl } from '@/lib/site-config'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Développeur web freelance à Lunéville | Sites & applications web',
  description:
    'Développeur web freelance à Lunéville pour applications web, intégrations WordPress, Next.js et solutions sur mesure. Accompagnement local pour artisans, PME et indépendants.',
  alternates: {
    canonical: getCanonicalUrl('/developpeur-web-freelance-luneville'),
  },
  openGraph: {
    title: 'Développeur web freelance à Lunéville | Sites & applications web',
    description:
      'Développeur web freelance à Lunéville pour sites vitrines, applications web, WordPress, Next.js et solutions sur mesure.',
    url: getCanonicalUrl('/developpeur-web-freelance-luneville'),
    siteName: 'Bryan Parisot',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Développeur web freelance à Lunéville | Sites & applications web',
    description:
      'Développeur web freelance à Lunéville pour sites vitrines, applications web, WordPress, Next.js et solutions sur mesure.',
  },
}

const services = [
  'Développement web sur mesure à Lunéville pour applications, sites vitrines et solutions d entreprise.',
  'Intégration WordPress pour garder la main sur vos contenus et votre communication.',
  'Développement Next.js performant, mobile-first et optimisé pour la vitesse.',
  'Optimisation technique et maintenance web pour garantir fiabilité et sécurité.',
  'Accompagnement local pour artisans, PME et indépendants en Meurthe-et-Moselle.',
]

const achievements = [
  'Applications web professionnelles pour entreprises locales.',
  'Intégrations WordPress solides et faciles à administrer.',
  'Sites et solutions optimisés pour le référencement local à Lunéville.',
]

const pricing = [
  'Développement web sur mesure: budget adapté pour projet professionnel et application web.',
  'Intégration WordPress: solution flexible pour autonomie, SEO local et gestion de contenu.',
  'Maintenance web: support, mises à jour, sauvegardes et optimisation continue.',
]

const faqItems = [
  {
    question: 'Pourquoi faire appel à un développeur web freelance à Lunéville ?',
    answer:
      'Un développeur freelance apporte une relation directe, une meilleure réactivité et une compréhension locale de votre activité. C est idéal pour les artisans, PME et indépendants qui veulent une solution claire, efficace et adaptative.',
  },
  {
    question: 'Quelle différence entre un développeur web et une agence web ?',
    answer:
      'Un développeur freelance offre un interlocuteur unique, une exécution plus rapide et souvent un budget mieux maîtrisé. L agence peut convenir pour des projets très gros, mais un freelance local est plus adapté pour un accompagnement personnalisé à Lunéville.',
  },
  {
    question: 'Pouvez-vous développer un site WordPress ?',
    answer:
      'Oui. Je conçois des sites WordPress sur mesure, sécurisés et faciles à administrer, avec un back-office pratique pour gérer textes, images et pages sans dépendre du développeur pour chaque modification.',
  },
  {
    question: 'Pouvez-vous créer une application web sur mesure ?',
    answer:
      'Oui. Je développe des applications web professionnelles adaptées aux besoins des entreprises locales, avec des parcours utilisateurs fiables, un design responsive et une optimisation technique pour assurer la performance.',
  },
  {
    question: 'Travaillez-vous avec Next.js ?',
    answer:
      'Oui. Next.js est mon choix pour les sites et applications qui doivent être rapides, robustes et bien référencés. Il permet de combiner performance, SEO et expérience utilisateur fluide.',
  },
  {
    question: 'Proposez-vous la maintenance après livraison ?',
    answer:
      'Oui. Je propose des formules de maintenance web, des mises à jour, des sauvegardes et une optimisation technique continue pour que votre solution reste performante et sécurisée.',
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

const highlightCards = [
  {
    title: 'Positionnement local',
    text: 'Une prestation pensée pour le développeur web freelance Lunéville, avec un focus sur la visibilité locale et la conversion.',
  },
  {
    title: 'Solution web sur mesure',
    text: 'Je construis des intégrations WordPress, des applications web et des outils numériques alignés sur vos besoins métier.',
  },
  {
    title: 'Optimisation technique',
    text: 'Performance, vitesse, maintenance web et référencement sont intégrés dès la conception du projet.',
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-anton text-3xl tracking-[0.03em] text-slate-950 sm:text-5xl">
      {children}
    </h2>
  )
}

export default function Page() {
  return (
    <main>
      <Header
        title="Développeur web freelance à Lunéville"
        subtitle="J’accompagne les entreprises, artisans et indépendants de Lunéville dans le développement d’applications web, d’intégrations WordPress et de solutions digitales sur mesure."
        text="Développeur web freelance à Lunéville pour applications web, intégrations WordPress, Next.js, optimisation technique et maintenance web."
      />
      <div className="px-5 pb-20 pt-10 sm:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <section className="grid gap-6 lg:grid-cols-[1.25fr_0.7fr]">
            <div className="rounded-[2rem] border border-black/8 bg-white/95 p-8 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.28)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Développeur web freelance Lunéville
              </p>
              <h1 className="mt-4 font-anton text-4xl tracking-[0.03em] text-slate-950 sm:text-6xl">
                Développeur web freelance à Lunéville
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Vous cherchez un développeur web freelance à Lunéville pour faire évoluer votre présence en ligne ? J’accompagne les artisans, PME et indépendants du Grand Est avec des applications web, des intégrations WordPress et des solutions techniques sur mesure qui améliorent la conversion, la performance et la gestion quotidienne.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Mon approche combine développement Next.js, optimisation technique, design UX et maintenance web. Ensemble, nous construisons une solution digitale qui fonctionne pour vos clients, votre visibilité et vos objectifs de croissance.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Demandez un devis pour votre projet web
                  </Button>
                </Link>
                <Link href="/web-design-nancy">
                  <Button size="lg" variant="outline">
                    Voir mes services web
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-slate-950 p-8 text-white shadow-[0_30px_80px_-52px_rgba(15,23,42,0.55)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary/70">
                Ce que vous obtenez
              </p>
              <ul className="mt-6 space-y-5">
                {highlightCards.map((card) => (
                  <li key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-secondary/70 p-8 shadow-sm sm:p-10">
            <SectionTitle>
              Pourquoi faire appel à un développeur web freelance à Lunéville ?
            </SectionTitle>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  À Lunéville, une présence digitale performante permet d attirer des prospects et de se démarquer face à la concurrence locale. Un développeur web freelance apporte une réponse sur mesure, une relation directe et une meilleure réactivité pour vos besoins.
                </p>
                <p>
                  Je construis des solutions web qui servent votre activité : site vitrine, application web, intégration WordPress ou optimisation technique. L'objectif est de transformer votre présence en ligne en un outil de génération de contacts.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6">
                <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                  <li>Un interlocuteur unique pour votre projet.</li>
                  <li>Une réponse locale adaptée à Lunéville et au Grand Est.</li>
                  <li>Une solution web sur mesure, rapide et évolutive.</li>
                  <li>Une approche orientée performance et maintenance.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>
                Développement web sur mesure à Lunéville
              </SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Le développement web sur mesure à Lunéville permet de créer des outils numériques parfaitement alignés avec votre modèle de business. C’est la meilleure option si vous cherchez plus qu’un simple site vitrine : un système qui répond à vos processus et à vos clients.
                </p>
                <p>
                  Je développe des applications web professionnelles, des espaces clients, des formulaires avancés et des interfaces utilisateur sur mesure. Tout cela avec une attention particulière portée à l’UX, à la performance et à la maintenance web.
                </p>
                <p>
                  En partenariat avec des entreprises locales, j’aide à construire des solutions durables qui évoluent avec l’activité, sans surcharger votre budget ni complexifier la gestion quotidienne.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-primary/5 p-8 shadow-sm sm:p-10">
              <SectionTitle>
                Développeur WordPress et Next.js pour les entreprises locales
              </SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Je propose des développements WordPress pour les structures qui veulent un site administrable et facile à faire évoluer. Je propose aussi du développement Next.js quand la performance, le SEO et l’expérience utilisateur sont prioritaires.
                </p>
                <p>
                  Cette double expertise permet de choisir la technologie la plus adaptée : intégration WordPress pour l’autonomie de contenu, ou Next.js pour les solutions techniques avancées.
                </p>
                <ul className="list-disc space-y-3 pl-6">
                  <li>Intégration WordPress sur mesure</li>
                  <li>Développement Next.js pour des performances élevées</li>
                  <li>Maintenance web et optimisation technique continue</li>
                  <li>Application web professionnelle pour services ou réservation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>
              Quand faire appel à un développeur web freelance ?
            </SectionTitle>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Quand vous avez besoin d’une solution web sur mesure, d’une application professionnelle, ou d’une optimisation technique, faire appel à un freelance est souvent la meilleure option. Le freelance apporte simplicité, proximité et un suivi direct.
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>Vous avez besoin d’un développement web sur mesure à Lunéville.</li>
                <li>Vous souhaitez un accompagnement technique durable et local.</li>
                <li>Vous cherchez un développeur WordPress ou Next.js expérimenté.</li>
                <li>Vous voulez sécuriser la maintenance web et la performance de votre site.</li>
              </ul>
              <p>
                J’accompagne les projets qui recherchent à la fois une vision stratégique et une exécution technique fiable, en restant proche de vos réalités de terrain.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>Pourquoi choisir un freelance plutôt qu une agence web</SectionTitle>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Beaucoup de dirigeants hésitent entre un freelance et une <strong>agence web Lunéville</strong>. Un freelance local peut offrir une relation plus fluide, un respect du budget et une meilleure compréhension des enjeux locaux.
              </p>
              <p>
                Vous travaillez avec un interlocuteur unique, pas avec plusieurs services. Cela facilite les ajustements, accélère les décisions et simplifie le suivi du projet.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-secondary/55 bg-secondary/55 p-8 shadow-sm sm:p-10">
            <SectionTitle>Mes services de développement web à Lunéville</SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-700">
              J accompagne les entreprises locales sur tout le cycle du projet, du cadrage initial à la mise en ligne puis à la maintenance. Cela me permet de proposer une prestation cohérente, pensée pour durer et pour soutenir votre activité sur le long terme.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 text-base leading-8 text-slate-700">
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>Mes réalisations</SectionTitle>
              <p className="mt-6 text-base leading-8 text-slate-700">
                Mon travail repose sur une logique simple : des sites et des applications clairs, convaincants et orientés résultat. Je conçois des projets pour des structures qui ont besoin d une solution web professionnelle sans lourdeur inutile.
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>Tarif développement web à Lunéville</SectionTitle>
              <p className="mt-6 text-base leading-8 text-slate-700">
                Le prix du développement web sur mesure varie selon le type de projet, le volume de fonctionnalités, les besoins WordPress ou Next.js, ainsi que le niveau d optimisation technique et de maintenance.
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                {pricing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Demandez votre devis gratuit pour votre projet web à Lunéville.
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>Zone d intervention</SectionTitle>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Je propose le développement web à Lunéville, Nancy, Baccarat, Saint-Nicolas-de-Port et dans toute la Meurthe-et-Moselle.
              </p>
              <p>
                Cette proximité me permet d accompagner des entreprises locales avec une meilleure compréhension de leur marché, de leur concurrence et des recherches géographiques pertinentes.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-slate-950/20 bg-slate-950 px-8 py-10 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)] sm:px-10">
            <SectionTitle>Prêt à lancer votre projet web ?</SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Si vous voulez un site plus clair, plus crédible et plus visible localement, je peux vous aider. Mon objectif est de vous proposer une <strong>solution web sur mesure</strong> utile, durable et orientée vers vos demandes entrantes.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Demandez votre devis gratuit ou prenez contact pour parler de votre prochaine application web professionnelle.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Demander un devis gratuit
                </Button>
              </Link>
              <Link href="/referencement-naturel-seo">
                <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                  Voir aussi mes services SEO
                </Button>
              </Link>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-base leading-8 text-slate-700">
              Si votre besoin concerne principalement un site vitrine ou une refonte, consultez ma page dédiée à la <Link href="/creation-site-internet-luneville" className="font-semibold text-slate-950 underline">création de site internet à Lunéville</Link>.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-700">
              Consulter mes <Link href="/realisations" className="font-semibold text-slate-950 underline">réalisations</Link> vous aidera à comprendre comment j’associe technique et design pour des projets locaux et concrets.
            </p>
          </section>
        </div>
      </div>

      <Faq faq={faqItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  )
}
