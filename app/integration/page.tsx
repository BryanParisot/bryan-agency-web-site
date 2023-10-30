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

import double_screen from "../../public/pictures/site/vitrine/double_screen.png"
import CallToActionLight from '@/components/CTA/CallToActionLight'
import LittleCard from '@/components/Cards/LittleCard'



export default function page() {

  const step = [
    {
      id: 1, title: "Nous analysons votre maquette", text: "Nous commençons par examiner attentivement votre maquette, que ce soit au format PSD, XD, Sketch ou tout autre format graphique. Nous étudions chaque élément, de la mise en page aux polices, pour comprendre votre vision."
    },
    {
      id: 2, title: "Évaluation des besoins", text: "Après avoir analysé votre maquette, nous discutons avec vous pour comprendre vos besoins spécifiques, vos objectifs et les fonctionnalités requises pour votre site web."
    },
    {
      id: 3, title: "Devis personnalisé", text: "Sur la base de notre analyse et de votre vision, nous vous envoyons un devis détaillé sous 48 heures. Ce devis comprendra un aperçu des coûts et des délais pour l'intégration de votre maquette."
    },
    {
      id: 4, title: "Développement Front-End", text: "Notre équipe commence le travail d'intégration en traduisant chaque élément de votre maquette en code HTML/CSS ou dans le cms de votre choix. Nous veillons à ce que le site soit compatible avec tous les navigateurs et appareils."
    },
    {
      id: 5, title: "Intégration des fonctionnalités", text: "Si votre site nécessite des fonctionnalités spécifiques, comme des formulaires interactifs, des boutons de partage sur les réseaux sociaux ou une section de blog, nous les intégrons avec soin."
    },
    {
      id: 6, title: "Livraison et suivi", text: "Une fois que tout est parfait, nous vous livrons le site web intégré et prêt à être déployé. Notre équipe reste à votre disposition pour toute assistance future ou pour répondre à vos questions."
    },
  ]

  const choiceMaquetteData = [
    {
      title: "Expertise Inégalée", text: "Chez [Nom de Votre Entreprise], nous sommes fiers de notre expertise inégalée en matière d'intégration de maquettes. Notre équipe d'intégrateurs de maquettes chevronnés possède une vaste expérience dans la transformation de designs visuels en sites web fonctionnels et esthétiquement plaisants."
    },
    {
      title: " Engagement envers la qualité", text: "Notre engagement envers la qualité est au cœur de notre processus d'intégration. Chaque détail de votre maquette est soigneusement pris en compte pour garantir une fidélité visuelle exceptionnelle. Nous mettons un point d'honneur à maintenir les plus hauts standards de qualité tout au long du projet."
    },
    {
      title: "Collaboration transparente", text: "Nous croyons en une collaboration transparente avec nos clients. Votre vision est notre priorité, et nous travaillons étroitement avec vous à chaque étape du processus. Nous écoutons vos besoins, vos préoccupations et vos idées, et nous vous tenons régulièrement informés de l'avancement du projet."
    },
    {
      title: "Respect des délais", text: "Nous comprenons à quel point le respect des délais est important pour votre entreprise. Notre réputation repose sur notre capacité à livrer les projets à temps, ce qui vous permet de planifier vos activités en toute confiance."
    },
    {
      title: "Satisfaction client", text: "La satisfaction de nos clients est notre principale récompense. Nous sommes fiers de nos relations solides avec nos clients, bâties grâce à notre dévouement envers la qualité et à notre approche orientée vers les solutions."
    },
  ]

  const faqs = [
    {
      question: "Dans quel langage intégrez-vous nos maquettes",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Pourquoi l'intégration de maquette est-elle importante ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Combien de temps faut-il pour intégrer une maquette en site web ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Combien coûte l’intégration d’une maquette ? ",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ]

  const atouts = [
    {
      title: "SEO-friendly", text: "Nos sites sont structurés de façon à être SEO-friendly. Nous paramétrons les balises et toutes les fonctionnalités avancées nécessaires pour améliorer votre visibilité dans les moteurs de recherche.", logo: loupe, alt: "logo loupe"
    },
    {
      title: "Responsive (adaptatif)", text: "Nos intégrations sont bien sûr 100% responsive, garantissant une expérience utilisateur optimale sur tous les appareils, des ordinateurs de bureau aux smartphones.", logo: device, alt: "logo appareil responsive"
    },
    {
      title: "Conversion-oriented", text: "Notre approche d'intégration est orientée vers la conversion. Nous optimisons chaque élément pour encourager les visiteurs à passer à l'action et à devenir des clients.", logo: conversion, alt: "logo conversion"
    },
    {
      title: "Haute performance", text: "Nous nous assurons que nos sites web intègrent les meilleures pratiques de performance, garantissant une vitesse de chargement rapide et une expérience utilisateur sans accroc.", logo: deadline, alt: "logo deadline"
    },
    {
      title: "Convivialité maximale", text: "La convivialité est au cœur de notre travail. Nous nous efforçons de créer des sites web qui sont faciles à naviguer et à utiliser, quel que soit le niveau de compétence de l'utilisateur.", logo: people, alt: "logo personnes"
    },
    {
      title: "Design personnalisé", text: "Chaque intégration que nous réalisons est unique et adaptée à vos besoins spécifiques. Notre équipe de conception travaille en étroite collaboration avec vous pour créer un design personnalisé qui reflète votre marque.", logo: crayon, alt: "logo crayon"
    },
  ]


  return (
    <main>
      <Header
        title="Agence d’intégration de maquette"
        subtitle="Intégration de maquettes : Transformez votre vision en réalité en ligne"
        text="Chez [Nom de Votre Entreprise], nous sommes spécialisés dans l'intégration de maquettes, transformant vos designs visuels en sites web dynamiques et fonctionnels. Nous comprenons l'importance de faire passer votre vision du concept à la réalité en ligne, et nous avons l'expertise nécessaire pour le faire de manière impeccable.
"
        image={picture_site}
        alt="image png developpeur web"
      />

      <div className="mt-10 mb-10">
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
          Les avantages de nous laisser <span className="text-emerald-600">le service de maintenance</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
          {
            step.map((item) => (
              <div className='space-y-4' key={item.id}>
                <div className='w-12 h-12 bg-emerald-200 rounded-full flex justify-center items-center text-white font-extrabold text-lg' >{item.id}</div>
                <h3 className='font-bold text-lg text-emerald-950'>{item.title}</h3>
                <p className='text-gray-500'>{item.text}</p>
              </div>

            ))
          }
        </div>

        <div className='flex flex-col sm:flex-row mt-20 sm:max-h-full  h-full'>
          <div className="flex items-center sm:order-first sm:w-1/2 md:w-6/12">
            <Image className="w-full h-full" src={double_screen} alt="Double Ecran illustration" />
          </div>
          <div className='w-full sm:w-3/6 space-y-6 px-8'>
            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
              Pourquoi choisir [Nom de Votre Entreprise] pour l'intégration de votre maquette ?
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

      <div className="px-5 sm:px-16 mb-10">

        <div className='bg-emerald-50 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20 rounded-lg py-20'>
          {
            atouts.map((item) => (
              <LittleCard key={item.title} title={item.title} text={item.text} logo={item.logo} alt={item.alt} />
            ))
          }

        </div>

        <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre site Wordpress personnalisé" />
        <BlogSection />

        <CallToActionLight />

        <Faq faq={faqs} />
      </div>

    </main>
  )
}
