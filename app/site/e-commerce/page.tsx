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
import logo_visibilite from "../../../public/logos/site/vitrine/logo_visibilite.svg"
import logo_promotion from "../../../public/logos/site/vitrine/logo_promotion.svg"
import logo_roi from "../../../public/logos/site/vitrine/logo_roi.svg"
import vitrine_site from "../../../public/pictures/site/vitrine/vitrine_site.png"
import commerce from "../../../public/pictures/site/commerce/commerce.jpg"
import site_e_commerce_nancy from "../../../public/pictures/site/commerce/site_e_commerce_nancy.jpg"

site_e_commerce_nancy

export default function page() {

  const vitrineData = [
    {
      title: 'Expansion des marchés et de la clientèle', text: 'Un site e-commerce permet à votre entreprise d\'avoir une présence en ligne 24 heures sur 24, 7 jours sur 7. Il est accessible aux clients potentiels à tout moment, ce qui augmente votre visibilité et votre accessibilité.', image: logo_visibilite, alt: 'Logo visibilité en ligne'
    },
    {
      title: 'Réduction des coûts d\'exploitation', text: 'Un site e-commerce bien conçu permet de présenter votre entreprise, vos produits ou services, et votre identité de marque de manière professionnelle. Il offre une plateforme pour communiquer votre message et renforcer la confiance.', image: logo_promotion, alt: 'Logo promotion de votre marque'
    },
    {
      title: 'Chiffre d\'affaires', text: 'Un site internet e-commerce bien conçu peut contribuer à l\'augmentation de votre chiffre d\'affaires en attirant de nouveaux clients, en augmentant la notoriété de votre entreprise et en facilitant la vente de vos produits.', image: logo_roi, alt: 'logo roi'
    }
  ]

  const faqs = [
    {
      question: "Combien coûte la création d'un site e-commerce ?",
      answer:
        "Le coût de la création d'un site e-commerce peut varier considérablement en fonction de divers facteurs tels que la taille du site, les fonctionnalités requises, la conception, les fonctionnalités de paiement, etc. Les coûts peuvent aller de quelques milliers d'euros pour des solutions simples à plusieurs dizaines de milliers d'euros pour des projets plus complexes. Il est recommandé de discuter de vos besoins spécifiques avec des professionnels du développement web pour obtenir un devis précis.",
    },
    {
      question: "Quel est l'objectif d'un site internet e-commerce ?",
      answer:
        "L'objectif principal d'un site internet e-commerce est de permettre la vente de produits ou de services en ligne. Il offre aux entreprises une plateforme pour présenter leurs offres, gérer leur catalogue de produits, traiter les paiements en ligne et offrir une expérience d'achat conviviale aux clients. Un site e-commerce vise à générer des ventes, à fidéliser les clients et à développer une présence en ligne rentable.",
    },
    {
      question: "De quelles étapes ai-je besoin pour créer un site e-commerce de A à Z ?",
      answer:
        "La création d'un site e-commerce de A à Z implique plusieurs étapes clés : Planification : Définissez vos objectifs, identifiez votre public cible, choisissez les produits à vendre et établissez un budget.Conception : Créez une conception de site web attrayante et conviviale, en tenant compte de l'expérience utilisateur. Développement : Choisissez une plateforme (comme WooCommerce, Shopify, Magento) et développez votre site, en ajoutant des fonctionnalités de paiement, de gestion de produits, etc. Contenu : Ajoutez des descriptions de produits, des images de qualité, et optimisez votre contenu pour le référencement. Tests : Testez le site pour vous assurer qu'il fonctionne correctement, effectuez des tests de paiement, etc.  Lancement : Mettez en ligne votre site et commencez à vendre. Marketing : Promouvez votre site e-commerce à travers des canaux marketing comme le référencement, les médias sociaux, la publicité, etc.",
    },
    {
      question: "Quelle plateforme de création de site e-commerce dois-je utiliser (WordPress, Shopify, etc.) ?",
      answer:
        "Le choix de la plateforme dépend de vos besoins spécifiques. WordPress avec le plugin WooCommerce est une option populaire et polyvalente. Shopify est une solution conviviale tout-en-un. Magento est adapté aux grandes entreprises. La meilleure plateforme dépend de la taille de votre entreprise, du nombre de produits, de votre budget, etc. Il est recommandé de consulter des professionnels du développement web pour choisir la plateforme la plus adaptée à vos besoins.",
    },
  ];

  return (
    <main>
      <Header
        title="Agence de création de e-commerce"
        subtitle="Création d'un site internet e-commerce"
        text="Découvrez le potentiel infini de la vente en ligne avec [Nom de Votre Entreprise]. Notre expertise en création de sites e-commerce vous permet de transformer vos idées en une boutique en ligne florissante. Offrez à vos clients une expérience d'achat en ligne exceptionnelle et développez votre entreprise comme jamais auparavant."
        image={picture_site}
        alt="image png developpeur web"
      />

      <div className="mt-10 mb-10">
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
          Les avantages de créer <span className="text-emerald-600">un site internet e-commerce </span>
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
          {
            vitrineData.map((item) => (
              <CardGeneral key={item.title} title={item.title} text={item.text} image={item.image} alt={item.alt} />
            ))
          }
        </div>
        <div className='sm:px-20 px-5 mb-5'>

          <div className='flex flex-col sm:flex-row mt-20 sm:h-[50vh] h-full'>
            <div className="mb-8 flex items-center sm:order-first sm:w-1/2 md:w-6/12">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={commerce}
                alt="E-commerce nancy" />
            </div>
            <div className='w-full sm:w-3/6 space-y-4 px-8'>
              <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                Transformez votre entreprise en ligne avec une <span className='text-emerald-600'>boutique e-commerce</span> sur mesure
              </h2>
              <p>
                Chez [Nom de Votre Entreprise], nous sommes passionnés par la création de boutiques en ligne qui se démarquent. Notre expertise en développement e-commerce vous permet de créer une expérience d'achat en ligne exceptionnelle pour vos clients. Que vous vendiez des produits physiques, des services ou des produits numériques, nous concevons des sites e-commerce sur mesure qui répondent à vos besoins spécifiques.
              </p>
              <p>
                Nous comprenons l'importance de la convivialité, de la sécurité et de la performance pour votre boutique en ligne. C'est pourquoi nous mettons tout en œuvre pour vous offrir une plateforme e-commerce qui maximise vos ventes et fidélise vos clients.
              </p>
              <p>
                Explorez nos services de création de sites e-commerce et découvrez comment nous pouvons vous aider à développer votre entreprise en ligne. De la conception à la gestion, nous sommes là à chaque étape de votre parcours e-commerce.
              </p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row mt-20 sm:h-[52vh] h-full'>
            <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={site_e_commerce_nancy}
                alt="e-commerce nancy" />
            </div>
            <div className='w-full sm:w-3/6 space-y-4 px-8 mt-5'>
              <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                Un site internet  <span className='text-emerald-600'>e-commerce</span> qui vous ressemble
              </h2>
              <p>
                Votre boutique en ligne est plus qu'un simple site web, c'est le visage de votre entreprise sur internet. Chez [Nom de Votre Entreprise], nous comprenons l'importance de créer une boutique en ligne qui reflète votre identité de marque et votre vision.
              </p>
              <p>
                Que vous soyez une petite entreprise artisanale ou une entreprise établie, nous travaillons en étroite collaboration avec vous pour concevoir une boutique en ligne qui vous ressemble. De la personnalisation du design à l'intégration des fonctionnalités spécifiques, nous mettons tout en œuvre pour capturer l'essence de votre entreprise.
              </p>
              <p>
                Votre site e-commerce devrait être unique, tout comme vous. Faites confiance à notre équipe d'experts en développement e-commerce pour créer une boutique en ligne exceptionnelle qui séduit vos clients et vous aide à réussir dans le monde de la vente en ligne. Découvrez comment nous pouvons faire de votre boutique en ligne une extension authentique de votre entreprise.
              </p>
            </div>
          </div>
        </div>
        <CallToAction />
        <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre site e-commerce" />
        <BlogSection />
        <Faq faq={faqs} />
      </div>



    </main>
  )
}
