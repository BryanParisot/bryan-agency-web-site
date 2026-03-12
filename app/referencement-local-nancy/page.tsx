import BlogSection from '@/components/BlogSection/BlogSection'
import CallToAction from '@/components/CTA/CallToAction'
import Faq from '@/components/FAQ/Faq'
import Header from '@/components/Header/Header'
import { Button } from '@/components/ui/button'
import { getCanonicalUrl } from '@/lib/site-config'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO local a Nancy',
  description:
    'Consultant SEO local a Nancy pour ameliorer votre visibilite sur Google, Google Maps et les recherches de proximite.',
  alternates: {
    canonical: getCanonicalUrl('/referencement-local-nancy'),
  },
}

const strengths = [
  {
    title: 'Google Business Profile optimise',
    text: "Travail de la fiche et des categories pour renforcer votre presence sur les recherches locales et dans Google Maps.",
  },
  {
    title: 'Pages locales plus convaincantes',
    text: 'Creation ou amelioration de pages capables de repondre a une intention locale et commerciale, sans sur-optimisation.',
  },
  {
    title: 'Signaux de confiance',
    text: 'Mise en avant des avis, des preuves locales, des cas clients et des informations de contact coherentes sur tout le site.',
  },
  {
    title: 'Technique SEO propre',
    text: 'Metadata, maillage interne, sitemap, donnees structurees et performance pour faciliter le travail des moteurs.',
  },
]

const processSteps = [
  'Audit SEO local de votre site et de votre presence Google.',
  "Definition des expressions prioritaires autour de Nancy et de votre activite.",
  'Creation de la page service principale et des contenus satellites.',
  'Optimisation de votre maillage interne et des preuves locales.',
  'Suivi des positions, des impressions et des demandes de contact.',
]

const faqs = [
  {
    question: 'Qu est-ce que le SEO local ?',
    answer:
      'Le SEO local vise a faire remonter votre entreprise sur les recherches geolocalisees, par exemple lorsqu un prospect cherche un prestataire a Nancy ou a proximite.',
  },
  {
    question: 'Quelle difference entre SEO classique et SEO local ?',
    answer:
      'Le SEO classique travaille votre visibilite globale. Le SEO local ajoute des signaux geographiques, la fiche Google Business Profile, les pages locales et la coherence des informations business.',
  },
  {
    question: 'Combien de temps faut-il pour voir des resultats ?',
    answer:
      'Les premiers signaux peuvent apparaitre en quelques semaines, mais les gains solides se construisent plutot sur plusieurs mois avec des optimisations continues.',
  },
  {
    question: 'Le blog est-il utile pour remonter localement ?',
    answer:
      'Oui, s il soutient une page service principale. Les articles servent a capter des recherches complementaires et a renforcer l autorite locale du site.',
  },
]

export default function ReferencementLocalNancyPage() {
  return (
    <main>
      <Header
        title="Consultant SEO local a Nancy"
        subtitle="Ameliorez votre visibilite locale sur Google"
        text="Je vous aide a gagner en visibilite sur les recherches locales a Nancy avec un travail combine sur votre site, votre maillage interne, vos contenus et votre presence Google."
      />

      <section className="px-5 py-16 sm:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-anton text-4xl font-bold tracking-wider text-gray-950 sm:text-5xl">
            Une page cible pour <span className="text-primary">SEO local Nancy</span>, pas juste du texte SEO
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-600">
            Pour remonter sur une requete locale concurrentielle, il faut une page utile, claire, credible et reliee a un ecosysteme de contenus coherents. Cette page devient votre point d entree commercial.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {strengths.map((item) => (
              <div key={item.title} className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 px-5 py-16 sm:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <h2 className="font-anton text-4xl font-bold tracking-wider text-gray-950 sm:text-5xl">
              Ce que je travaille pour un referencement local durable
            </h2>
            <p className="mt-5 text-lg text-gray-700">
              Le but n est pas seulement de faire apparaitre un mot-cle. Il faut faire progresser votre site sur l intention locale, montrer des preuves concretes et faciliter la conversion.
            </p>
            <div className="mt-8 space-y-4">
              {processSteps.map((step) => (
                <div key={step} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="font-medium text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gray-950 p-8 text-white shadow-xl">
            <h3 className="text-3xl font-bold">Priorite business</h3>
            <p className="mt-4 text-gray-300">
              Si vous voulez booster le site rapidement, la meilleure sequence est simple: une page service forte, puis des articles satellites qui la poussent en lien interne.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Demander un audit SEO local
                </Button>
              </Link>
              <Link href="/referencement-naturel-seo" className="text-sm font-semibold text-emerald-200">
                Voir aussi la page SEO generale
              </Link>
              <Link href="/blog" className="text-sm font-semibold text-emerald-200">
                Lire les articles SEO du blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <BlogSection />
      <Faq faq={faqs} />
    </main>
  )
}
