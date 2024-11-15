import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
import BlogSection from '@/components/BlogSection/BlogSection'
import CallToAction from '@/components/CTA/CallToAction'
import CardGeneral from '@/components/Cards/CardGeneral'
import Faq from '@/components/FAQ/Faq'
import Header from '@/components/Header/Header'
import SectionEmerald from '@/components/Section/SectionEmerald'
import SectionLogos from '@/components/Section/SectionLogos'
import { Button } from '@/components/ui/button'


//LOGOS | PICTURES
import logo_promotion from "../../../public/logos/site/vitrine/logo_promotion.svg"
import logo_roi from "../../../public/logos/site/vitrine/logo_roi.svg"
import logo_visibilite from "../../../public/logos/site/vitrine/logo_visibilite.svg"
import double_screen from "../../../public/pictures/site/vitrine/double_screen.png"
import responsive from "../../../public/pictures/site/vitrine/responsive.jpg"
import score_site from "../../../public/pictures/site/vitrine/score_site.png"
import vitrine_site from "../../../public/pictures/site/vitrine/vitrine_site.png"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développeur Web Freelance | Création de site vitrine à Nancy',
  description: 'Hissons les voiles avec la création de site vitrine à Nancy par Bryan Parisot, développeur web freelance. Embarquez pour une présence en ligne mémorable',
  alternates: {
    canonical: `${process.env.URL_SITE}/creation-site-internet-nancy/site-vitrine`
  }
}



export default function page() {

  const vitrineData = [
    {
      title: 'Visibilité en ligne',
      text: 'Un site vitrine permet à votre entreprise d\'avoir une présence en ligne 24 heures sur 24, 7 jours sur 7. Il est accessible aux clients potentiels à tout moment, ce qui augmente votre visibilité en ligne et votre accessibilité.',
      image: logo_visibilite,
      alt: 'Logo visibilité en ligne'
    },
    {
      title: 'Promotion de votre marque',
      text: 'Un site vitrine bien conçu permet de présenter votre entreprise, vos produits ou services, et votre identité de marque de manière professionnelle. Il offre une plateforme pour communiquer votre message, renforcer la confiance.',
      image: logo_promotion,
      alt: 'Logo promotion de votre marque'
    },
    {
      title: 'Chiffre d\'affaires',
      text: 'Un site vitrine bien conçu peut contribuer à l\'augmentation de votre chiffre d\'affaires en attirant de nouveaux clients, en augmentant la notoriété de votre entreprise et en facilitant la vente de vos produits ou services en ligne.',
      image: logo_roi,
      alt: 'logo roi'
    }
  ]

  const faqs = [
    {
      question: "Combien coûte la création d'un site vitrine ?",
      answer:
        "Le coût de création d'un site vitrine peut varier en fonction de plusieurs facteurs. Cela inclut la complexité du site, les fonctionnalités spécifiques que vous souhaitez inclure. N'hésitez pas à nous demander un devis gratuit personnalisé",
    },
    {
      question: "Quel est l’objectif d’un site vitrine ?",
      answer:
        "Un site vitrine a pour objectif principal de présenter votre entreprise, vos produits ou services en ligne. Il agit comme une vitrine virtuelle, offrant aux visiteurs des informations sur votre entreprise, son expertise et son offre. Il peut aider à établir votre présence en ligne, renforcer votre crédibilité et fournir un moyen pour les clients potentiels de vous contacter. C'est un excellent outil pour attirer de nouveaux clients et renforcer votre image de marque.",
    },
    {
      question: "De quelles étapes ai-je besoin pour créer un site web de A à Z ?",
      answer:
        "La création d'un site web de A à Z implique plusieurs étapes. Tout d'abord, vous devez définir clairement vos objectifs et besoins. Ensuite, choisissez une plateforme (comme WordPress, Shopify, etc.) et un nom de domaine. Concevez la structure de votre site, créez du contenu de qualité, et assurez-vous de l'optimiser pour les moteurs de recherche. Enfin, choisissez un hébergement web, configurez votre site, testez-le, et assurez-vous de sa maintenance continue.",
    },
    {
      question: "Quelle plateforme de création de site web dois-je utiliser (WordPress, Shopify, etc.) ?",
      answer:
        "Le choix de la plateforme dépend de vos besoins et objectifs spécifiques. WordPress est une option populaire pour sa polyvalence et sa facilité d'utilisation. Shopify est idéal pour les sites de commerce électronique. La décision dépendra de votre secteur d'activité, de votre budget, et des fonctionnalités requises pour votre site. Il est conseillé de consulter un professionnel pour déterminer la meilleure plateforme pour votre projet.",
    },
  ];

  return (
    <main>
      <Header
        title="Développeur web freelance créateur de site vitrine à Nancy"
        subtitle="Création d'un site vitrine sur mesure à Nancy"
        text="Découvrez l'élégance et la simplicité d'un site vitrine conçu spécialement pour votre entreprise. Mettons en avant votre image de marque et vos produits/services de manière captivante. Transformez les visiteurs en clients avec un site web vitrine qui laisse une impression mémorable."
      />

      <div className="mt-10 mb-10">
        <h2 className="text-center text-4xl sm:text-5xl text-gray-950 font-bold tracking-wider font-anton px-3 sm:px-0" >
          Les avantages de créer <span className="text-primary">un site vitrine</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
          {
            vitrineData.map((item) => (
              <CardGeneral key={item.title} title={item.title} text={item.text} image={item.image} alt={item.alt} />
            ))
          }
        </div>
        <div className='xl:px-20 px-5'>

          <div className='flex flex-col xl:flex-row mt-20 xl:h-[52vh] h-full'>
            <div className="mb-8 flex items-center justify-center xl:order-first xl:w-1/2">
              {" "}
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={double_screen}
                alt="Double Ecran illustration" />
            </div>
            <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8'>
              <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-5xl font-anton line tracking-wider text-gray-950">
                Boostez votre présence en ligne avec mon expertise en création de <span className='text-primary'>sites vitrine</span> à Nancy </h2>
              <p>
                Vous cherchez à développer votre entreprise en ligne ? Ne cherchez pas plus loin. Je suis fier d'offrir mes services de création de sites web sur mesure.
              </p>
              <p>
                En tant que développeur web freelance, je suis prêt à travailler avec vous pour créer un site web qui capte l'attention de votre public cible. Que vous ayez besoin d'un <span className='font-bold'>site vitrine</span> pour mettre en avant vos services, d'un <Link className='font-bold underline' href="/creation-site-internet-nancy/e-commerce">site e-commerce</Link>  pour vendre vos produits, ou d'une <Link className='font-bold underline' href="refonte">refonte </Link> pour moderniser votre présence en ligne, j'ai l'expertise pour vous accompagner à chaque étape.
              </p>
              <p>
                Je suis là pour vous aider à prospérer dans cet environnement numérique compétitif. Découvrez comment mon savoir-faire peut faire une différence significative pour votre entreprise.
              </p>
            </div>
          </div>

          <div className='flex flex-col xl:flex-row mt-20 xl:h-[52vh] h-full'>
            <div className="mb-8 flex items-center justify-center xl:order-last xl:w-1/2 w-full">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={vitrine_site} alt="Illustration d'un site vitrine" />
            </div>
            <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8 mt-0 xl:mt-5'>
              <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-5xl text-gray-950 font-anton line tracking-wider">
                <span className='text-primary'>Un site vitrine</span> qui vous ressemble
              </h2>
              <p>
                En tant que développeur web freelance, je comprends que votre <span className='font-bold'>site vitrine</span> doit être bien plus qu'une simple présence en ligne. Il doit être une extension de votre entreprise, reflétant votre identité, vos valeurs et votre style unique. C'est pourquoi je m'engage à créer un <span className='font-bold'>site vitrine</span> sur mesure qui vous ressemble.
              </p>
              <p>
                Travaillant en étroite collaboration avec vous, je capture l'essence de votre entreprise et la traduis en un design web exceptionnel. Je crois que chaque entreprise est unique, et votre site web devrait l'être aussi.
              </p>
              <p>
                Que vous ayez besoin d'un <span className='font-bold'>site vitrine</span> élégant, moderne, créatif ou professionnel, j'ai l'expertise pour créer une expérience en ligne qui séduit votre public cible. Mettez en avant votre entreprise d'une manière qui vous ressemble. Découvrez comment je peux vous aider à créer un <Link className='font-bold underline' href="/creation-site-internet-nancy" >site web </Link> qui reflète parfaitement votre vision et à le partager avec le monde.
              </p>
            </div>
          </div >


        </div >
        <CallToAction />
      </div >

      <div className=" mb-10">
        <SectionEmerald image={score_site} alt="représentation du score du site">
          <div className='space-y-6'>
            <h2 className='mt-2 text-4xl font-bold lg:text-left md:text-5xl text-gray-950 font-anton line tracking-wider'>
              Optimisez votre présence en ligne avec mon service de <span className='text-primary'>refonte de site</span>
            </h2>
            <p>
              La <span className='font-bold'>refonte de site</span> est une étape essentielle pour maintenir la pertinence en ligne de votre entreprise. En tant que développeur web freelance, je propose un service complet de refonte de site qui vous permet de moderniser votre présence en ligne, d'améliorer l'expérience utilisateur et d'optimiser la performance.
            </p>
            <p>
              En tant que développeur web freelance, je m'occupe de tout, de la conception à la mise en œuvre, pour donner une nouvelle vie à votre site web. Mon objectif est d'optimiser la vitesse de chargement de votre site, offrant ainsi une expérience utilisateur améliorée pour vos visiteurs, sans avoir besoin d'une équipe étendue. Découvrez comment je peux revitaliser votre présence en ligne de manière efficace et personnalisée.
            </p>
            <p>
              Découvrez comment mon service de refonte de site peut vous aider à rester compétitif en ligne et à offrir une expérience utilisateur exceptionnelle.
            </p>
            <div>
              <Link href="/creation-site-internet-nancy/refonte">
                <Button size="lg" variant="primary">
                  En savoir plus sur la refonte de site
                </Button>
              </Link>
            </div>
          </div>
        </SectionEmerald>

        <div className='xl:px-20 px-5 mb-20'>


          <div className='flex flex-col xl:flex-row mt-20 xl:h-[59vh] h-full'>
            <div className="mb-8 flex items-center justify-center xl:order-last xl:w-1/2 w-full">
              <Image
                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                src={responsive} alt="Illustration d'un site vitrine responsive" />
            </div>
            <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8 mt-0 xl:mt-5'>
              <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-5xl text-gray-950 font-anton line tracking-wider">
                <span className='text-primary'>Un site vitrine responsive</span> une présence adaptative et captivante
              </h2>
              <p>
                En tant que développeur web freelance spécialisé dans les sites vitrines, je m'engage à créer une présence en ligne qui s'adapte à tous les écrans.
              </p>
              <h3 className='text-2xl font-anton line tracking-wider'>
                Pourquoi opter pour un <span className='font-bold'> site vitrine responsive</span> ?
              </h3>
              <p>
                Votre site doit être accessible sur tous les appareils. Un site vitrine responsive assure une expérience utilisateur optimale, quel que soit le dispositif utilisé, renforçant ainsi votre crédibilité et améliorant votre référencement.
              </p>
              <h3 className='text-2xl font-anton line tracking-wider'>
                Mon engagement envers le <span className='font-bold'>responsive design</span>
              </h3>
              <p>
                Collaborons pour donner vie à un site vitrine qui représente fidèlement votre entreprise de manière adaptative. Contactez-moi aujourd'hui pour discuter de la création d'un site vitrine responsive, propulsant votre entreprise vers de nouveaux sommets dans le monde numérique compétitif.
              </p>
            </div>
          </div >
        </div>

        <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre site vitrine" />

        <BlogSection />

        <Faq faq={faqs} />

      </div>

    </main >
  )
}
