//COMPONENTS
import CallToAction from "@/components/CTA/CallToAction";
import SectionWithPictures from "@/components/Section/SectionWithPictures";
import BlogSection from "@/components/BlogSection/BlogSection";
import Header from "@/components/Header/Header";
import SiteCards from "../../components/Cards/SiteCards";
import Faq from "@/components/FAQ/Faq";

//LOGOS | PICTURES
import logo_vitrine from "../../public/logos/site/logo_vitrine.svg"
import logo_e_commerce from "../../public/logos/site/logo_e_commerce.svg"
import logo_landing_page from "../../public/logos/site/logo_landing_page.svg"
import logo_wordpress from "../../public/logos/site/logo_wordpress.svg"
import logo_refonte from "../../public/logos/site/logo_refonte.svg"
import logo_maintenance from "../../public/logos/site/logo_maintenance.svg"
import picture_site from "../../public/pictures/site/site_page.png"
import presence_en_ligne from "../../public/pictures/site/presence_en_ligne.jpg"


import { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Développeur Web Freelance | Création de site web - Pret à lever l\'ancre',
  description: 'Voguez vers le succès avec Bryan Parisot, votre freelance développeur web. Des sites web sur mesure qui naviguent entre créativité et performance.',
  alternates: {
    canonical: `${process.env.URL_SITE}/creation-site-internet`
  }

}


export default function Page() {

  const cardData = [
    {
      title: 'Création d’un site vitrine',
      text: 'Mon approche de création de sites vitrine va bien au-delà d\'une simple présentation en ligne. Je conçois des sites qui attirent, engagent et convertissent vos visiteurs en clients. Mettant en avant votre entreprise de manière élégante et persuasive, je vous offre une expérience utilisateur exceptionnelle. Découvrez comment je peux vous aider à briller en ligne avec un site vitrine.',
      image: logo_vitrine,
      alt: 'logo site vitrine',
      link: '/creation-site-internet/site-vitrine'
    },
    {
      title: 'Création d’un site e-commerce',
      text: 'Explorez le monde du commerce électronique avec confiance en choisissant mes services. Je suis spécialisé dans la création de boutiques en ligne sur mesure, conçues pour transformer les visiteurs en clients fidèles. Mon expertise en design, développement e-commerce et optimisation vous permettra de prospérer dans le paysage en constante évolution du commerce en ligne.',
      image: logo_e_commerce,
      alt: 'logo e-commerce',
      link: '/creation-site-internet/e-commerce'
    },
    {
      title: 'Création d’une landing-page',
      text: 'Mes sites vitrine vont bien au-delà d\'une simple vitrine en ligne. Ils sont conçus pour attirer, engager et convertir vos visiteurs en clients. Mettant en avant votre entreprise de manière élégante et persuasive, j\'offre une expérience utilisateur exceptionnelle.Découvrez comment je peux vous aider à briller en ligne avec une landing page qui laisse une impression mémorable.',
      image: logo_landing_page,
      alt: 'logo landing page',
      link: '/creation-site-internet/landing-page'
    },
    {
      title: 'Votre site WordPress personnalisé',
      text: 'Optez pour la puissance de WordPress avec mes services. En tant qu\'expert dans la création de sites web sur mesure utilisant la plateforme WordPress, je personnalise chaque détail pour répondre à vos besoins spécifiques. Que ce soit pour un blog, un site vitrine ou un site e-commerce, je transforme votre vision en un site web WordPress fonctionnel et attrayant, prêt à attirer l\'attention en ligne.',
      image: logo_wordpress,
      alt: 'logo wordpress personnalisé',
      link: '/creation-site-internet/wordpress-personnalise'
    },
    {
      title: 'Transformez votre site web le service de refonte',
      text: 'Votre site web mérite d\'être à la hauteur de votre entreprise en constante évolution. Avec mon service de refonte de site web, je peux revitaliser votre présence en ligne, moderniser votre design et améliorer votre expérience utilisateur. Que vous souhaitiez une mise à jour esthétique, une optimisation pour les moteurs de recherche ou de nouvelles fonctionnalités.',
      image: logo_refonte,
      alt: 'logo refonte de site web/app',
      link: '/creation-site-internet/refonte'
    },
    {
      title: 'Service de maintenance WordPress',
      text: 'La maintenance régulière est essentielle pour garantir le bon fonctionnement et la sécurité de votre site WordPress. Mon service de maintenance prend en charge toutes les tâches fastidieuses, des mises à jour de sécurité aux sauvegardes régulières, en passant par la gestion des plugins. Vous pouvez vous concentrer sur votre entreprise pendant que je veille sur votre site.',
      image: logo_maintenance,
      alt: 'logo maintenance wordpress',
      link: '/creation-site-internet/maintenance-wordpress'
    }
  ];

  const faqs = [
    {
      question: "Quels sont les avantages de la création d'un site web pour mon entreprise ?",
      answer:
        "La création d'un site web offre de nombreux avantages à votre entreprise. Cela vous permet d'atteindre un public plus large, d'améliorer votre visibilité en ligne, de renforcer la crédibilité de votre entreprise et d'offrir un moyen pratique pour les clients de vous contacter ou d'acheter vos produits ou services.",
    },
    {
      question: "Pouvez-vous m'aider à choisir la plateforme adaptée à mes besoins pour mon site ?",
      answer:
        "Bien sûr, nous pouvons vous aider à choisir la plateforme de création de site web la mieux adaptée à vos besoins. Nous évaluerons vos objectifs, vos fonctionnalités requises et votre budget pour recommander la plateforme la plus appropriée, que ce soit WordPress, Shopify, ou d'autres options.",
    },
    {
      question: "Quels sont les délais typiques pour la création d'un site web ?",
      answer:
        "Les délais varient en fonction de la taille et de la complexité de votre projet. Pour les sites web simples, cela peut prendre quelques semaines, tandis que des projets plus importants peuvent prendre plusieurs mois. Nous travaillerons avec vous pour établir un calendrier réaliste.",
    },
    {
      question: "Proposez-vous des services d'hébergement web en plus de la création de site web ?",
      answer:
        "Oui, nous proposons des services d'hébergement web pour votre site. Nous pouvons vous aider à choisir un plan d'hébergement adapté à vos besoins, assurant ainsi la performance et la sécurité de votre site web une fois qu'il est en ligne.",
    },
  ];

  return (
    <main>
      <Header
        title="Développeur web - créateur de site internet"
        subtitle="Création de site web pour booster votre visibilité sur internet"
        text="Découvrez comment mon expertise en tant que développeur web freelance peut transformer votre présence en ligne en un atout puissant pour votre entreprise locale. Avec mon expérience dans le développement web, je crée des sites internet optimisés pour les moteurs de recherche. Propulsez votre visibilité et atteignez vos objectifs en ligne."
        image={picture_site}
        alt="image png developpeur web"
      />

      <div className="mt-10 mb-10">

        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold px-2 sm:px-0" >
          Mes prestation de <span className="text-emerald-600">création de site web</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
          {
            cardData.map((item) => (
              <SiteCards title={item.title} text={item.text} image={item.image} alt={item.alt} link={item.link} key={item.title} />
            ))
          }
        </div>

        <div className="px-5 sm:px-16">

          <CallToAction />

          <SectionWithPictures
            title="Créez votre présence en ligne avec mon expertise en création de site web"
            description="Découvrez l'art de la création de site web sur mesure avec moi, Bryan Parisot, votre développeur web freelance. Je crois en la puissance d'une présence en ligne unique qui représente fidèlement votre vision et votre activité. Mon engagement se concentre sur la création de sites web fonctionnels, esthétiques et optimisés. Que vous ayez besoin d'un site vitrine, d'un site e-commerce ou d'un site WordPress, je conçois des solutions sur mesure pour répondre à vos objectifs. Laissez-moi vous guider à travers le processus et transformez votre idée en une réalité numérique."
            image={presence_en_ligne}
            alt='illustration web'
            buttonLink="/contact"
            buttonText="Contactez-moi"
          />

        </div>
        <div className="px-0 sm:px-16">
          <BlogSection />
          <Faq faq={faqs} />

        </div>
      </div>
    </main>
  )
}