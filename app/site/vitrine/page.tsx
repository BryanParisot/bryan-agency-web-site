import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
import Header from '@/components/Header/Header'
import CardGeneral from '@/components/Cards/CardGeneral'
import CallToAction from '@/components/CTA/CallToAction'
import SectionLogos from '@/components/Section/SectionLogos'
import BlogSection from '@/components/BlogSection/BlogSection'
import Faq from '@/components/FAQ/Faq'
import { Button } from '@/components/ui/button'
import SectionEmerald from '@/components/Section/SectionEmerald'


//LOGOS | PICTURES
import picture_site from "../../../public/pictures/site/site_page.png"
import logo_visibilite from "../../../public/logos/site/vitrine/logo_visibilite.svg"
import logo_promotion from "../../../public/logos/site/vitrine/logo_promotion.svg"
import logo_roi from "../../../public/logos/site/vitrine/logo_roi.svg"
import double_screen from "../../../public/pictures/site/vitrine/double_screen.png"
import vitrine_site from "../../../public/pictures/site/vitrine/vitrine_site.png"
import score_site from "../../../public/pictures/site/vitrine/score_site.png"



export default function page() {

  const vitrineData = [
    {
      title: 'Visibilité en ligne', text: 'Un site vitrine permet à votre entreprise d\'avoir une présence en ligne 24 heures sur 24, 7 jours sur 7. Il est accessible aux clients potentiels à tout moment, ce qui augmente votre visibilité et votre accessibilité.', image: logo_visibilite, alt: 'Logo visibilité en ligne'
    },
    {
      title: 'Promotion de votre marque', text: 'Un site vitrine bien conçu permet de présenter votre entreprise, vos produits ou services, et votre identité de marque de manière professionnelle. Il offre une plateforme pour communiquer votre message et renforcer la confiance.', image: logo_promotion, alt: 'Logo promotion de votre marque'
    },
    {
      title: 'Chiffre d\'affaires', text: 'Un site vitrine bien conçu peut contribuer à l\'augmentation de votre chiffre d\'affaires en attirant de nouveaux clients, en augmentant la notoriété de votre entreprise et en facilitant la vente de vos produits ou services en ligne.', image: logo_roi, alt: 'logo roi'
    }
  ]

  const faqs = [
    {
      question: "Combien coûte la création d'un site vitrine ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Quel est l’objectif d’un site vitrine ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "De quelles étapes ai-je besoin pour créer un site web de A à Z ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Quelle plateforme de création de site web dois-je utiliser (WordPress, Shopify, etc.) ?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]


  return (
    <main>
      <Header
        title="Agence de création de site vitrine"
        subtitle="Création d'un site vitrine sur mesure"
        text="Découvrez l'élégance et la simplicité d'un site vitrine conçu spécialement pour votre entreprise. Chez [Nom de Votre Entreprise], nous mettons en avant votre image de marque et vos produits/services de manière captivante. Transformez les visiteurs en clients avec un site web vitrine qui laisse une impression mémorable."
        image={picture_site}
        alt="image png developpeur web"
      />

      <div className="mt-10 mb-10">
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
          Les avantages de créer <span className="text-emerald-600">un site vitrine</span>
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
              Boostez votre entreprise à Nancy avec notre expertise en création de sites vitrine
            </h2>
            <p>
              Vous êtes basé à Nancy ou dans ses environs et vous cherchez à développer votre entreprise en ligne ? Ne cherchez pas plus loin. Chez [Nom de Votre Entreprise], nous sommes fiers d'offrir nos services de création de sites web sur mesure spécialement conçus pour les entreprises locales de Nancy.
            </p>
            <p>
              Notre équipe d'experts en développement web, design et référencement est prête à travailler avec vous pour créer un site web qui capte l'attention de votre public cible à Nancy. Que vous ayez besoin d'un site vitrine pour mettre en avant vos services, d'un site e-commerce pour vendre vos produits, ou d'une refonte pour moderniser votre présence en ligne, nous avons l'expertise pour vous accompagner à chaque étape
            </p>
            <p>
              Nancy est une ville dynamique avec un marché en constante évolution, et nous sommes là pour vous aider à prospérer dans cet environnement numérique compétitif. Découvrez comment notre savoir-faire local peut faire une différence significative pour votre entreprise. Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière de création de site web et de marketing numérique
            </p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:max-h-[500px] h-full mt-10 sm:mt-0'>
          <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
            <Image className="w-full h-full" src={vitrine_site} alt="Illustration d'un site vitrine" />
          </div>
          <div className='w-full sm:w-3/6 space-y-4 px-8 mt-5'>
            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
              Un site vitrine qui vous ressemble
            </h2>
            <p>
              Chez [Nom de Votre Entreprise], nous comprenons que votre site web doit être bien plus qu'une simple présence en ligne. Il doit être une extension de votre entreprise, reflétant votre identité, vos valeurs et votre style unique. C'est pourquoi nous nous engageons à créer un site vitrine sur mesure qui vous ressemble            </p>
            <p>
              Notre équipe de designers et de développeurs travaille en étroite collaboration avec vous pour capturer l'essence de votre entreprise et la traduire en un design web exceptionnel. Nous croyons que chaque entreprise est unique, et votre site web devrait l'être aussi.
            </p>
            <p>
              Que vous ayez besoin d'un site vitrine élégant, moderne, créatif ou professionnel, nous avons l'expertise pour créer une expérience en ligne qui séduit votre public cible. Mettez en avant votre entreprise d'une manière qui vous ressemble. Découvrez comment nous pouvons vous aider à créer un site web qui reflète parfaitement votre vision et à             </p>
          </div>
        </div>


      </div>
      <div className='sm:px-20 px-5'>
        <CallToAction />
      </div>

      <div className="px-5 sm:px-16 mb-10">

        <SectionEmerald image={score_site} alt="représentation du score du site">
          <div className='space-y-6'>
            <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950'>
              Optimisez votre présence en ligne avec notre service de refonte de site
            </h2>
            <p>
              La refonte de site est une étape essentielle pour maintenir la pertinence en ligne de votre entreprise. Chez [Nom de Votre Entreprise], nous offrons un service de refonte de site complet qui vous permet de moderniser votre présence en ligne, d'améliorer l'expérience utilisateur et d'optimiser la performance.
            </p>
            <p>
              Notre équipe de designers, de développeurs et de spécialistes du marketing collabore pour donner une nouvelle vie à votre site web. Nous nous efforçons également d'obtenir un score élevé sur PageSpeed Insight de Google, ce qui améliore la vitesse de chargement de votre site, le rendant plus convivial pour vos visiteurs.
            </p>
            <p>
              Découvrez comment notre service de refonte de site peut vous aider à rester compétitif en ligne et à offrir une expérience utilisateur exceptionnelle.
            </p>
            <div>
              <Link href="/site/refonte">
                <Button variant="primary">
                  En savoir plus sur nos services de refonte de site ici
                </Button>
              </Link>
            </div>
          </div>
        </SectionEmerald>
        <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre site vitrine" />
        <BlogSection />
        <Faq faq={faqs} />

      </div>

    </main>
  )
}
