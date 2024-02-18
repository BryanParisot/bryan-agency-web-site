import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
import Header from '@/components/Header/Header'
import CallToAction from '@/components/CTA/CallToAction'
import SectionLogos from '@/components/Section/SectionLogos'
import BlogSection from '@/components/BlogSection/BlogSection'
import Faq from '@/components/FAQ/Faq'


//LOGOS | PICTURES
import picture_site from "../../public/pictures/site/site_page.png"

import loupe from "../../public/logos/integration/loupe.svg"
import device from "../../public/logos/integration/device.svg"
import conversion from "../../public/logos/integration/conversion.svg"
import deadline from "../../public/logos/integration/deadline.svg"
import people from "../../public/logos/integration/people.svg"
import crayon from "../../public/logos/integration/crayon.svg"

import integration from "../../public/pictures/integration/integration.jpg"
import CallToActionLight from '@/components/CTA/CallToActionLight'
import LittleCard from '@/components/Cards/LittleCard'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développeur Web Freelance | Intégration de vos maquettes - Pret à lever l\'ancre',
  description: "Confiez l'intégration de vos maquettes à Bryan Parisot, développeur web freelance. Transformez vos designs en sites web fonctionnels et esthétiques.",
  alternates: {
    canonical: `${process.env.URL_SITE}/integration`
  }
}

export default function page() {

  const steps = [
    {
      id: 1,
      title: "Analyse de votre maquette",
      text: "En tant qu'intégrateur web freelance, je commence par examiner attentivement votre maquette, que ce soit au format PSD, XD, Sketch ou tout autre format graphique. J'étudie chaque élément, de la mise en page aux polices, pour comprendre votre vision."
    },
    {
      id: 2,
      title: "Évaluation des besoins",
      text: "Après avoir analysé votre maquette, je discute avec vous pour comprendre vos besoins spécifiques, vos objectifs et les fonctionnalités requises pour votre site web."
    },
    {
      id: 3,
      title: "Devis personnalisé",
      text: "Sur la base de mon analyse et de votre vision, je vous envoie un devis détaillé sous 48 heures. Ce devis comprendra un aperçu des coûts et des délais pour l'intégration de votre maquette."
    },
    {
      id: 4,
      title: "Développement Front-End",
      text: "Je commence le travail d'intégration en traduisant chaque élément de votre maquette en code HTML/CSS ou dans le CMS de votre choix. Je veille à ce que le site soit compatible avec tous les navigateurs et appareils."
    },
    {
      id: 5,
      title: "Intégration des fonctionnalités",
      text: "Si votre site nécessite des fonctionnalités spécifiques, comme des formulaires interactifs, des boutons de partage sur les réseaux sociaux ou une section de blog, je les intègre avec soin."
    },
    {
      id: 6,
      title: "Livraison et suivi",
      text: "Une fois que tout est parfait, je vous livre le site web intégré et prêt à être déployé. Je reste à votre disposition pour toute assistance future ou pour répondre à vos questions."
    },
  ];

  const choiceMaquetteData = [
    {
      title: "Mon Expertise Inégalée",
      text: "En tant qu'intégrateur web freelance, je suis fier de mon expertise inégalée en matière d'intégration de maquettes. Ma vaste expérience dans la transformation de designs visuels en sites web fonctionnels et esthétiquement plaisants fait de moi votre partenaire idéal."
    },
    {
      title: "Engagement envers la qualité",
      text: "Mon engagement envers la qualité est au cœur de mon processus d'intégration. Chaque détail de votre maquette est soigneusement pris en compte pour garantir une fidélité visuelle exceptionnelle. Je maintiens les plus hauts standards de qualité tout au long du projet."
    },
    {
      title: "Collaboration transparente",
      text: "Je crois en une collaboration transparente avec mes clients. Votre vision est ma priorité, et je travaille étroitement avec vous à chaque étape du processus. J'écoute vos besoins, vos préoccupations et vos idées, et je vous tiens régulièrement informé de l'avancement du projet."
    },
    {
      title: "Respect des délais",
      text: "Je comprends à quel point le respect des délais est important pour votre entreprise. Ma réputation repose sur ma capacité à livrer les projets à temps, ce qui vous permet de planifier vos activités en toute confiance."
    },
    {
      title: "Satisfaction client",
      text: "La satisfaction de mes clients est ma principale récompense. Je suis fier de mes relations solides avec mes clients, bâties grâce à mon dévouement envers la qualité et à mon approche orientée vers les solutions."
    },
  ];

  const faqs = [
    {
      question: "Dans quel langage intégrez-vous nos maquettes ?",
      answer:
        "Nous intégrons vos maquettes en utilisant des technologies web modernes, telles que HTML5, CSS3 et JavaScript. Ces langages nous permettent de créer des sites web interactifs, réactifs et esthétiques en respectant vos conceptions visuelles.",
    },
    {
      question: "Pourquoi l'intégration de maquette est-elle importante ?",
      answer:
        "L'intégration de maquettes est essentielle car elle transforme vos conceptions visuelles en une expérience web fonctionnelle. Elle garantit que le design est correctement traduit en code, assurant ainsi la cohérence visuelle et la convivialité de votre site. Une intégration de qualité est essentielle pour offrir une expérience utilisateur optimale.",
    },
    {
      question: "Combien de temps faut-il pour intégrer une maquette en site web ?",
      answer:
        "La durée d'intégration d'une maquette dépend de sa complexité et de ses fonctionnalités. En règle générale, cela peut prendre de quelques jours à quelques semaines. Notre équipe travaille efficacement pour respecter les délais tout en assurant une intégration de haute qualité.",
    },
    {
      question: "Combien coûte l’intégration d’une maquette ?",
      answer:
        "Le coût de l'intégration d'une maquette varie en fonction de la taille du projet, de la complexité de la maquette et des fonctionnalités requises. Nous vous fournirons un devis sur mesure pour votre projet d'intégration de maquette après une évaluation approfondie de vos besoins.",
    },
  ];

  const atouts = [
    {
      title: "SEO-friendly",
      text: "Mes sites sont structurés de façon à être SEO-friendly. Je paramètre les balises et toutes les fonctionnalités avancées nécessaires pour améliorer votre visibilité dans les moteurs de recherche.",
      logo: loupe,
      alt: "logo loupe"
    },
    {
      title: "Responsive (adaptatif)",
      text: "Mes intégrations sont bien sûr 100% responsive, garantissant une expérience utilisateur optimale sur tous les appareils, des ordinateurs de bureau aux smartphones.",
      logo: device,
      alt: "logo appareil responsive"
    },
    {
      title: "Conversion-oriented",
      text: "Mon approche d'intégration est orientée vers la conversion. J'optimise chaque élément pour encourager les visiteurs à passer à l'action et à devenir des clients.",
      logo: conversion,
      alt: "logo conversion"
    },
    {
      title: "Haute performance",
      text: "Je m'assure que mes sites web intègrent les meilleures pratiques de performance, garantissant une vitesse de chargement rapide et une expérience utilisateur sans accroc.",
      logo: deadline,
      alt: "logo deadline"
    },
    {
      title: "Convivialité maximale",
      text: "La convivialité est au cœur de mon travail. J'efforce de créer des sites web qui sont faciles à naviguer et à utiliser, quel que soit le niveau de compétence de l'utilisateur.",
      logo: people,
      alt: "logo personnes"
    },
    {
      title: "Design personnalisé",
      text: "Chaque intégration que je réalise est unique et adaptée à vos besoins spécifiques. Ma équipe de conception travaille en étroite collaboration avec vous pour créer un design personnalisé qui reflète votre marque.",
      logo: crayon,
      alt: "logo crayon"
    },
  ];


  return (
    <main>
      <Header
        title="Intégrateur web freelance - Intégrateur web "
        subtitle="Intégration web : Transformez votre vision en réalité en ligne"
        text="Bienvenue ! Je suis bryan parisot, un développeur web freelance, et je suis là pour vous offrir des services d'intégration web de qualité. En tant que votre partenaire de confiance, je me spécialise dans la transformation de vos designs visuels en sites web dynamiques et fonctionnels. Je comprends l'importance de faire passer votre vision du concept à la réalité en ligne, et j'ai l'expertise nécessaire pour le faire de manière impeccable."
        image={picture_site}
        alt="image png developpeur web"
      />
      <div className="mt-10 mb-10">
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
          Les avantages de me laisser <span className="text-emerald-600">l'intégration de votre maquette</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
          {
            steps.map((item) => (
              <div className='space-y-4 shadow-lg p-4' key={item.id}>
                <div className='w-12 h-12 bg-emerald-200 rounded-full flex justify-center items-center text-white font-extrabold text-lg ' >{item.id}</div>
                <h3 className='font-bold text-lg text-emerald-950'>{item.title}</h3>
                <p className='text-gray-500'>{item.text}</p>
              </div>

            ))
          }
        </div>

        <div className='flex flex-col xl:flex-row mt-20 xl:max-h-full  h-full'>
          <div className="flex items-center xl:order-first xl:w-1/2">
            <Image className="w-full h-full" src={integration} alt="Double Ecran illustration" />
          </div>
          <div className='w-full xl:w-3/6 space-y-6 px-8'>
            <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-4xl text-emerald-950">
              Pourquoi me choisir en tant qu'intégrateur web freelance ?
            </h2>
            {
              choiceMaquetteData.map((item) => (
                <div key={item.title} className='space-y-1'>
                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className='text-gray-600'>
                    {item.text}
                  </p>
                </div>

              ))
            }
          </div>
        </div>
      </div>

      <div className='sm:px-20 px-5'>
        <CallToAction />
      </div>

      <div className=" mb-10">

        <div className='bg-emerald-50 flex items-center flex-col py-5 px-5 sm:px-16'>
          <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950 text-center'>
            Les atouts de mes <span className='text-emerald-600'>intégration web</span> sur mesure
          </h2>
          <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20 rounded-lg py-12'>
            {
              atouts.map((item) => (
                <LittleCard key={item.title} title={item.title} text={item.text} logo={item.logo} alt={item.alt} />
              ))
            }
          </div>
        </div>

        <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre intégration web" />

        <BlogSection />

        <CallToActionLight />

        <Faq faq={faqs} />
      </div>

    </main >
  )
}
