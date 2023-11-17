import React from 'react'
import Image from 'next/image'

//COMPONENTS
import Header from '@/components/Header/Header'
import CardGeneral from '@/components/Cards/CardGeneral'
import CallToAction from '@/components/CTA/CallToAction'
import SectionLogos from '@/components/Section/SectionLogos'
import BlogSection from '@/components/BlogSection/BlogSection'
import Faq from '@/components/FAQ/Faq'

//LOGOS | PICTURES
import picture_site from "../../../public/pictures/site/site_page.png"
import logo_optimization from "../../../public/logos/site/landing/logo_optimization.svg"
import logo_audience from "../../../public/logos/site/landing/logo_audience.svg"
import logo_roi from "../../../public/logos/site/vitrine/logo_roi.svg"
import landing_page from "../../../public/pictures/site/landing_page/illustration_landing_page.jpg"
import maquette_landing from "../../../public/pictures/site/landing_page/maquette_landing.jpg"


import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développeur Web Freelance | Création de landing page - Pret à lever l\'ancre',
  description: "Transformez vos visiteurs en clients avec des landing pages. Développeur web freelance, conçoit des pages pour maximiser votre taux de conversion"
}

export default function page() {

  const vitrineData = [
    {
      title: 'Conversion maximale', text: 'Les landing pages sont conçues pour une seule action ou objectif, ce qui les rend hautement efficaces pour convaincre les visiteurs d\'effectuer cette action spécifique.Une landing page bien conçue est optimisée pour maximiser les conversions.', image: logo_optimization, alt: 'Logo optimisation en ligne'
    },
    {
      title: 'Personnalisation ciblée', text: 'Les landing pages sont généralement créées pour des publics spécifiques ou des campagnes marketing particulières. Cela permet une personnalisation approfondie du contenu, du design et des éléments de persuasion pour répondre aux besoins et aux intérêts de votre public cible.', image: logo_audience, alt: 'Logo audience'
    },
    {
      title: 'Mesure et optimisation faciles', text: 'Les landing pages offrent une visibilité claire sur les performances, ce qui facilite la mesure du taux de conversion et l\'optimisation continue.Vous pouvez effectuer des tests A/ B pour découvrir ce qui fonctionne le mieux et ajuster votre landing page en conséquence.', image: logo_roi, alt: 'logo roi'
    }
  ]

  const faqs = [
    {
      question: "Qu'est-ce qu'une landing page ?",
      answer:
        "Une landing page, ou page d'atterrissage, est une page web spécialement conçue pour convertir les visiteurs en leads ou en clients. Elle est généralement associée à une campagne marketing ou publicitaire et présente un contenu ciblé pour inciter les visiteurs à effectuer une action spécifique, comme remplir un formulaire, télécharger un ebook ou effectuer un achat. Les landing pages sont conçues pour maximiser le taux de conversion en fournissant un message clair et des incitations à l'action.",
    },
    {
      question: "Pourquoi ai-je besoin d'une landing page ?",
      answer:
        "Les landing pages sont essentielles pour les entreprises cherchant à convertir les visiteurs en clients ou prospects. Elles permettent de cibler efficacement votre public, d'obtenir des informations précieuses sur les visiteurs et d'augmenter le taux de conversion. Les landing pages sont idéales pour les campagnes publicitaires, le lancement de produits, la collecte de leads, ou toute autre action marketing nécessitant une conversion spécifique. Elles vous aident à mesurer et à optimiser vos efforts marketing.",
    },
    {
      question: "Quels éléments devraient figurer sur une landing page efficace ?",
      answer:
        "Une landing page efficace doit comporter plusieurs éléments clés, notamment : Un titre accrocheur qui capte l'attention. Un contenu clair et convaincant qui explique les avantages de votre offre. Un appel à l'action (CTA) clair et incitatif. Un formulaire de conversion pour recueillir des informations précieuses. Des éléments visuels, tels que des images ou des vidéos, pour renforcer le message. Des témoignages ou des preuves sociales pour établir la crédibilité. Une conception responsive pour une expérience utilisateur optimale. Des informations de contact ou des liens vers des pages supplémentaires si nécessaire. Une landing page bien conçue doit être axée sur la conversion et présenter un contenu pertinent pour le public cible.",
    },
    {
      question: "Quelle est la différence entre une landing page et une page d'accueil ?",
      answer:
        "La principale différence entre une landing page et une page d'accueil réside dans leur objectif et leur contenu. Une landing page est conçue pour une conversion spécifique, généralement dans le cadre d'une campagne marketing ou publicitaire. Son contenu est ciblé et axé sur une incitation à l'action claire, comme s'inscrire à une newsletter ou acheter un produit. En revanche, une page d'accueil est la porte d'entrée principale de votre site web. Elle offre un aperçu général de votre entreprise, de vos produits ou services, et de la navigation vers d'autres pages du site. Elle vise à informer, orienter et présenter l'ensemble de votre offre. Une page d'accueil n'a pas un objectif de conversion spécifique, contrairement à une landing page.",
    },
  ];


  return (
    <main>
      <Header
        title="Développeur web créateur de landing page"
        subtitle="Création d'une landing page sur mesure"
        text="En tant que développeur web freelance, je suis convaincu que chaque visiteur sur votre site web est une opportunité en or. C'est pourquoi je me spécialise dans la création de landing pages qui captivent, persuadent et convertissent."
        image={picture_site}
        alt="image png developpeur web freelance"
      />

      <div className="mt-10 mb-10">
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
          Les avantages de créer <span className="text-emerald-600">une landing page</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
          {
            vitrineData.map((item) => (
              <CardGeneral key={item.title} title={item.title} text={item.text} image={item.image} alt={item.alt} />
            ))
          }
        </div>
        <div className='sm:px-20 px-5 mb-10'>

          <div className='flex flex-col sm:flex-row mt-20 sm:h-[52vh] h-full'>
            <div className="mb-8 flex items-center sm:order-first sm:w-1/2 md:w-6/12">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={landing_page}
                alt="Freelance landing page nancy" />
            </div>
            <div className='w-full sm:w-3/6 space-y-4 px-8'>
              <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                Optimisez vos taux de conversion avec mon expertise en <span className='text-emerald-600'>landing pages</span>
              </h2>
              <p>
                En tant que développeur web freelance, je comprends que chaque clic sur votre site web représente une opportunité de conversion précieuse. C'est pourquoi je mets mon savoir-faire au service de la création de <span className='font-bold'>landing pages</span> qui captivent vos visiteurs et les incitent à agir.
              </p>
              <p>
                Que votre objectif soit de collecter des leads, de vendre un produit ou de promouvoir une offre spéciale, je sais comment créer des <span className='font-bold'>landing pages</span> persuasives. Je personnalise chaque élément pour répondre aux besoins de votre public cible, en optimisant l'expérience de l'utilisateur pour maximiser les conversions.
              </p>
              <p>
                Découvrez comment je peux vous aider à obtenir des résultats concrets en ligne grâce à mes <span className='font-bold'>landing pages</span> de haute performance. Avec moi, chaque visiteur est une opportunité de conversion que nous saisissons avec succès.
              </p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row mt-20 sm:h-[52vh] h-full'>
            <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={maquette_landing}
                alt="Freelance landing page Nancy" />
            </div>
            <div className='w-full sm:w-3/6 space-y-4 px-8 mt-5'>
              <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                Une <span className='text-emerald-600'>landing page</span> qui vous ressemble
              </h2>
              <p>
                Votre <span className='font-bold'>landing page</span> est bien plus qu'une simple page web. C'est votre première impression en ligne, une opportunité de captiver vos visiteurs et de les inciter à prendre des mesures. En tant que développeur web freelance, je comprends l'importance de créer une <span className='font-bold'>landing page</span> qui reflète votre identité de marque, votre message unique et vos objectifs spécifiques.
              </p>
              <p>
                Que vous souhaitiez promouvoir un produit, générer des leads ou lancer une campagne spéciale, je travaille en étroite collaboration avec vous pour personnaliser chaque élément de votre <span className='font-bold'>landing page</span>. Je crois que chaque entreprise est unique, et votre <span className='font-bold'>landing page</span> devrait l'être aussi.
              </p>
              <p>
                Faites confiance à mon expertise pour créer une <span className='font-bold'>landing page</span> qui vous ressemble, une page qui communique avec succès votre histoire, vos valeurs et votre proposition de valeur. Découvrez comment je peux vous aider à optimiser votre présence en ligne et à inciter vos visiteurs à passer à l'action.
              </p>
            </div>
          </div>
        </div>

        <CallToAction />

        <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre landing page" />
        <BlogSection />
        <Faq faq={faqs} />
      </div>



    </main>
  )
}
