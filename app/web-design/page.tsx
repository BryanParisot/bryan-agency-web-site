import Image from 'next/image'

//COMPONENTS
import Header from '@/components/Header/Header'
import CardGeneral from '@/components/Cards/CardGeneral'
import CallToAction from '@/components/CTA/CallToAction'
import BlogSection from '@/components/BlogSection/BlogSection'
import Faq from '@/components/FAQ/Faq'
import CallToActionLight from '@/components/CTA/CallToActionLight'
import LittleCard from '@/components/Cards/LittleCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


//LOGOS | PICTURES
import picture_site from "../../public/pictures/site/site_page.png"
import loupe from "../../public/logos/integration/loupe.svg"
import content from "../../public/logos/seo/content.svg"
import browser from "../../public/logos/seo/browser.svg"
import customer from "../../public/logos/web-design/customer.svg"
import quality from "../../public/logos/web-design/quality.svg"
import branding from "../../public/logos/web-design/branding.svg"
import web_design from "../../public/pictures/web-design/web-design.jpg"
import web_design_1 from "../../public/pictures/web-design/web-design-1.jpg"
import web_design_2 from "../../public/pictures/web-design/web-design-2.jpg"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design freelance : Créez une expérience unique en ligne',
  description: "Transformez votre présence en ligne avec Bryan Parisot, développeur web freelance spécialisé en web design."

}



export default function page() {

  const vitrineData = [
    {
      title: 'Identité visuelle unique', text: 'Un design personnalisé permet de créer une identité visuelle unique et mémorable pour votre entreprise. Votre site se démarque des concurrents et reflète l\'unicité de votre marque.', image: branding, alt: 'Logo meilleure visibilité'
    },
    {
      title: 'Adaptation aux besoins', text: 'Un design sur mesure peut être spécifiquement adapté aux besoins et aux objectifs de votre entreprise. Vous pouvez mettre en avant les éléments qui sont les plus importants pour votre activité.', image: quality, alt: 'Logo qualité'
    },
    {
      title: 'Expérience utilisateur améliorée', text: 'Un design personnalisé permet de créer une expérience utilisateur (UX) optimale en fonction de votre public cible. Vous pouvez concevoir des interfaces conviviales qui favorisent la navigation et la conversion.', image: customer, alt: 'logo experience utilisateur'
    }
  ]

  const faqs = [
    {
      question: "Qu'est-ce que le web design exactement ?",
      answer:
        "Le web design est le processus de conception, de planification et de création d'éléments visuels et interactifs pour un site web. Cela inclut la disposition, la couleur, la typographie, les images, les icônes et d'autres éléments visuels qui contribuent à l'apparence et à l'expérience utilisateur d'un site web. Le web design vise à créer des sites web esthétiquement attrayants, faciles à naviguer et efficaces pour atteindre leurs objectifs.",
    },
    {
      question: "Quelle est l'importance du web design pour mon entreprise ?",
      answer:
        "Le web design est d'une importance cruciale pour votre entreprise, car il influe sur la première impression que les visiteurs ont de votre site web. Un design bien pensé peut renforcer la crédibilité de votre entreprise, améliorer l'expérience utilisateur, encourager l'engagement des visiteurs et augmenter les conversions. Il contribue également à la cohérence de la marque et à la différenciation par rapport à la concurrence.",
    },
    {
      question: "Quelle est la différence entre le design web et le développement web ?",
      answer:
        "Le design web se concentre sur l'apparence visuelle et l'expérience utilisateur d'un site web. Il implique la création de maquettes, de mises en page, de couleurs, de typographie et de visuels. En revanche, le développement web se concentre sur la création du code et de la structure qui rendent un site web fonctionnel. Les développeurs web traduisent les conceptions en code, ajoutent des fonctionnalités interactives et assurent le bon fonctionnement du site.",
    },
    {
      question: "Quelle est la différence entre UI et UX design ?",
      answer:
        "L'UI (User Interface) design se concentre sur la conception des éléments interactifs d'un site web, tels que les boutons, les menus, les formulaires et les icônes. L'objectif est de rendre l'interface utilisateur esthétiquement agréable et facile à utiliser. L'UX (User Experience) design se concentre sur l'expérience globale de l'utilisateur en interagissant avec le site. Il vise à rendre cette expérience fluide, intuitive et agréable. Les deux aspects du design web travaillent ensemble pour créer des sites web performants et conviviaux.",
    },
  ];


  const atouts = [
    {
      title: "UX design", text: "Le UX design se concentre sur la création d'une expérience utilisateur fluide et agréable. Cela inclut la recherche sur les utilisateurs, la création de personas, la conception d'itinéraires utilisateur, et l'optimisation de la convivialité du site.", logo: loupe, alt: "logo loupe"
    },
    {
      title: "UI design", text: " L'UI design se penche sur l'aspect visuel de l'interface utilisateur. Il englobe la création de maquettes, le choix des couleurs, des typographies, des icônes, et des éléments graphiques pour rendre le site esthétiquement attrayant et fonctionnel.", logo: content, alt: "logo appareil responsive"
    },
    {
      title: "Conception Réactive (Responsive Design)", text: "Cela implique la création d'un site web qui s'adapte automatiquement à différents appareils et résolutions d'écran, garantissant une expérience utilisateur optimale sur ordinateurs de bureau, tablettes et smartphones.", logo: browser, alt: "logo conversion"
    },
  ]


  return (
    <main>
      <Header
        title="Agence de web-design à Nancy"
        subtitle="Donnez vie à votre site web avec un design personnalisé"
        text="Au cœur de notre agence web, le design est une passion qui prend vie à travers chaque projet que nous entreprenons. Nous sommes déterminés à donner vie à votre vision en créant des sites web uniques, captivants et parfaitement adaptés à votre entreprise ou à votre projet. Notre équipe de concepteurs talentueux s'engage à créer des expériences en ligne exceptionnelles qui captivent vos visiteurs, renforcent votre image de marque et stimulent votre succès en ligne. Explorez notre portfolio pour découvrir comment nous pouvons transformer votre vision en une réalité web à couper le souffle"
        image={picture_site}
        alt="image png developpeur web"
      />

      <div className="mt-10 mb-10">
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
          Les avantages de la création d’un <span className="text-emerald-600">design personnalisé </span>
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
          {
            vitrineData.map((item) => (
              <CardGeneral key={item.title} title={item.title} text={item.text} image={item.image} alt={item.alt} />
            ))
          }
        </div>
        <div className='sm:px-20 px-5'>
          <div className='flex flex-col sm:flex-row mt-20 sm:h-[52vh] h-full'>
            <div className="mb-8 flex items-center sm:order-first sm:w-1/2 md:w-6/12">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={web_design}
                alt="Double Ecran illustration" />
            </div>
            <div className='w-full sm:w-3/6 space-y-6 px-8'>
              <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                Qu'est-ce que le <span className='text-emerald-600'> Web Design ?</span>
              </h2>
              <p>
                Le web design, ou conception web, est l'art et la discipline de créer des interfaces visuelles attrayantes et fonctionnelles pour les sites web. Il englobe la disposition des éléments visuels, la typographie, les couleurs, les images, les icônes et d'autres éléments graphiques qui composent l'apparence et la convivialité d'un site web. Le web design vise à créer une expérience utilisateur agréable et intuitive, à renforcer l'identité visuelle de la marque et à atteindre les objectifs spécifiques du site, que ce soit la génération de leads, la vente en ligne, l'information ou la sensibilisation.            </p>
              <p>
                Les web designers s'appuient sur leur expertise en design, en ergonomie, en UX (expérience utilisateur) et en connaissances techniques pour concevoir des sites web qui sont à la fois esthétiques et fonctionnels. Ils tiennent compte des besoins de l'entreprise, du public cible et des dernières tendances en matière de design pour créer des sites web qui se démarquent dans l'univers numérique en constante évolution. Le web design joue un rôle crucial dans la réussite en ligne, car il influe sur l'impression que les visiteurs ont d'un site et sur leur engagement envers son contenu.                                      </p>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row mt-20 sm:h-[52vh] h-full'>
            <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={web_design_1}
                alt="Illustration d'un site vitrine" />
            </div>
            <div className='w-full sm:w-3/6 space-y-4 px-8 mt-5 flex flex-col justify-center'>
              <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                L'Art de Créer des <span className='text-emerald-600'>sites web</span>  mémorables
              </h2>

              <p>
                Le web design va au-delà de la simple esthétique. C'est l'art de créer des sites web qui laissent une impression durable. Chaque élément, depuis la disposition des pages jusqu'au choix des couleurs, est minutieusement conçu pour établir une connexion avec les visiteurs. Un bon design web prend en compte la psychologie de l'utilisateur, s'efforce de simplifier la navigation et de rendre l'information accessible, tout en suscitant un sentiment d'authenticité et de confiance.
              </p>
              <p>
                Les web designers combinent créativité et expertise technique pour concevoir des expériences en ligne qui vont au-delà de l'esthétique pour répondre aux besoins des utilisateurs et des entreprises. En investissant dans un design web de qualité, vous créez une vitrine virtuelle engageante qui non seulement attire l'attention, mais incite également les visiteurs à rester, à explorer et à s'engager. Le web design est l'art de créer des sites web mémorables qui laissent une impression durable dans l'esprit des visiteurs.
              </p>

              <div className="flex justify-start items-start">
                <div>
                  <Link href="/site">
                    <Button size="lg" variant="primary">Découvrir nos préstations </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </div>

      <div className="px-5 sm:px-16 mb-10">
        <div className='bg-emerald-50 flex items-center flex-col py-5'>
          <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950 text-center'>
            Prestations en <span className='text-emerald-600'>web design</span>
          </h2>
          <div className='bg-emerald-50 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20 rounded-lg py-20'>
            {
              atouts.map((item) => (
                <LittleCard key={item.title} title={item.title} text={item.text} logo={item.logo} alt={item.alt} />
              ))
            }

          </div>
        </div>


        <div className='flex flex-col sm:flex-row mt-20 sm:h-[45vh] h-full'>
          <div className="mb-8 flex items-center sm:order-first sm:w-1/2 md:w-6/12">
            <Image
              className="rounded-xl shadow-xl shadow-emerald-900/20 h-full w-full"
              src={web_design_2}
              alt="Double Ecran illustration" />
          </div>
          <div className='w-full sm:w-3/6 space-y-6 px-8'>
            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
              L’importance du <span className='text-emerald-600'>web-design</span>
            </h2>
            <p>
              Le web design est bien plus qu'une simple esthétique ; c'est l'art de créer des expériences en ligne mémorables. Dans un monde numérique en constante évolution, votre site web est souvent la première interaction que les clients potentiels ont avec votre entreprise. Il est donc crucial que cette interaction soit positive et inoubliable.
            </p>
            <p>
              Un design web soigné va au-delà de l'apparence. Il s'agit de créer une expérience utilisateur (UX) exceptionnelle. Un site bien conçu est facile à naviguer, offre une disposition intuitive et met en valeur le contenu de manière à ce qu'il soit clair et engageant. Il est conçu pour répondre aux besoins des utilisateurs, qu'ils recherchent des informations, des produits ou des services.
            </p>
          </div>
        </div>

        <BlogSection />

        <CallToActionLight />

        <Faq faq={faqs} />
      </div>

    </main >
  )
}
