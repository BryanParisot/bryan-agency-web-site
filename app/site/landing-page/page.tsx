import React from 'react'
import Image from 'next/image'

//COMPONENTS
import Header from '@/components/Header/Header'
import CardGeneral from '@/components/Cards/CardGeneral'

//LOGOS | PICTURES
import picture_site from "../../../public/pictures/site/site_page.png"
import logo_optimization from "../../../public/logos/site/landing/logo_optimization.svg"
import logo_audience from "../../../public/logos/site/landing/logo_audience.svg"
import logo_roi from "../../../public/logos/site/vitrine/logo_roi.svg"
import double_screen from "../../../public/pictures/site/vitrine/double_screen.png"
import vitrine_site from "../../../public/pictures/site/vitrine/vitrine_site.png"
import CallToAction from '@/components/CTA/CallToAction'
import SectionLogos from '@/components/Section/SectionLogos'
import BlogSection from '@/components/BlogSection/BlogSection'
import Faq from '@/components/FAQ/Faq'


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
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Pourquoi ai-je besoin d'une landing page ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Quels éléments devraient figurer sur une landing page efficace ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Quelle est la différence entre une landing page et une page d'accueil ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]



  return (
    <main>
      <Header
        title="Agence de création de landing page"
        subtitle="Création d'une landing page sur mesure"
        text="Chez [Nom de Votre Entreprise], nous sommes convaincus que chaque visiteur sur votre site web est une opportunité en or. C'est pourquoi nous nous spécialisons dans la création de landing pages qui captivent, persuadent et convertissent."
        image={picture_site}
        alt="image png developpeur web"
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

        <div className='flex flex-col sm:flex-row mt-20 sm:max-h-[500px]  h-full'>
          <div className="flex items-center sm:order-first sm:w-1/2 md:w-6/12">
            <Image className="w-full h-full" src={double_screen} alt="Double Ecran illustration" />
          </div>
          <div className='w-full sm:w-3/6 space-y-4 px-8'>
            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
              Optimisez vos taux de conversion avec notre expertise en landing pages
            </h2>
            <p>
              Chez [Nom de Votre Entreprise], nous comprenons que chaque clic sur votre site web représente une opportunité de conversion précieuse. C'est pourquoi nous mettons notre savoir-faire au service de la création de landing pages qui captivent vos visiteurs et les incitent à agir.            </p>
            <p>
              Que votre objectif soit de collecter des leads, de vendre un produit ou de promouvoir une offre spéciale, notre équipe d'experts en design et en rédaction sait comment créer des landing pages persuasives. Nous personnalisons chaque élément pour répondre aux besoins de votre public cible, en optimisant l'expérience de l'utilisateur pour maximiser les conversions.            </p>
            <p>
              Découvrez comment nous pouvons vous aider à obtenir des résultats concrets en ligne grâce à nos landing pages de haute performance. Avec [Nom de Votre Entreprise], chaque visiteur est une opportunité de conversion que nous saisissons avec succès.            </p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:max-h-[500px] h-full mt-10 sm:mt-0'>
          <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
            <Image className="w-full h-full" src={vitrine_site} alt="Illustration d'un site vitrine" />
          </div>
          <div className='w-full sm:w-3/6 space-y-4 px-8 mt-5'>
            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
              Une landing page qui vous ressemble             </h2>
            <p>
              Votre landing page est bien plus qu'une simple page web. C'est votre première impression en ligne, une opportunité de captiver vos visiteurs et de les inciter à prendre des mesures. Chez [Nom de Votre Entreprise], nous comprenons l'importance de créer une landing page qui reflète votre identité de marque, votre message unique et vos objectifs spécifiques.
            </p>
            <p>
              Que vous souhaitiez promouvoir un produit, générer des leads ou lancer une campagne spéciale, notre équipe d'experts en design et en rédaction travaille en étroite collaboration avec vous pour personnaliser chaque élément de votre landing page. Nous croyons que chaque entreprise est unique, et votre landing page devrait l'être aussi.
            </p>
            <p>
              Faites confiance à notre expertise pour créer une landing page qui vous ressemble, une page qui communique avec succès votre histoire, vos valeurs et votre proposition de valeur. Découvrez comment nous pouvons vous aider à optimiser votre présence en ligne et à inciter vos visiteurs à passer à l'action.
            </p>
          </div>
        </div>
      </div>

      <div className='sm:px-20 px-5 mb-10'>
        <CallToAction />

        <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre landing page" />
        <BlogSection />
        <Faq faq={faqs} />
      </div>



    </main>
  )
}
