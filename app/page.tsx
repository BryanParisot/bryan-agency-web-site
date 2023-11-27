//COMPONENTS
import Header from "@/components/Header/Header";
import picture_home from "../public/pictures/header/picture_home_page.svg"
import HomeCards from "@/components/Cards/HomeCards";
import CallToAction from "@/components/CTA/CallToAction";
import SectionWithPictures from "@/components/Section/SectionWithPictures";
import BlogSection from "@/components/BlogSection/BlogSection";
import Faq from "@/components/FAQ/Faq";

//PICTURES | LOGOS
import logo_creation_site from "../public/logos/nav/logo_html.svg"
import logo_refonte_site from "../public/logos/nav/logo_refonte.svg"
import logo_sass_web from "../public/logos/nav/logo_sass.svg"
import logo_integration_maquette from "../public/logos/nav/logo_intégration.svg"
import logo_referencement_seo from "../public/logos/nav/logo_seo.svg"
import logo_referencement_sea from "../public/logos/nav/logo_sea.svg"
import logo_design from "../public/logos/nav/logo_design.svg"
import illustration_web from '../public/pictures/home/illustration_web.jpg'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Développeur web freelance | Bryan Parisot - Création de sites et applications',
  description: 'Bryan Parisot, développeur web freelance spécialisé dans la création de sites et d\'applications sur mesure.',
}


export default function Home() {

  const contentCards = [
    { title: "Création de Sites Internet", text: 'En tant que développeur web freelance, je suis là pour créer un site web unique et optimisé qui représentera votre entreprise de manière professionnelle en ligne. J\'intègre soigneusement vos besoins et votre identité dans chaque aspect du site, assurant ainsi une expérience utilisateur exceptionnelle.', icon: logo_creation_site, link: '/creation-site-internet', bg: 'bg-amber-200', alt: "Icone création de site internet" },
    { title: "Refonte de Site Web", text: 'Donnez une nouvelle vie à votre site web existant. Mon expertise en tant que développeur web freelance vous aidera à moderniser votre site, améliorer son design et son efficacité pour rester compétitif en ligne. Découvrez comment je peux revitaliser votre présence sur le web', icon: logo_refonte_site, link: '/creation-site-internet/refonte', bg: 'bg-blue-200', alt: "Icone refonte de site internet" },
    { title: "Applications Web / SaaS", text: 'En tant que développeur web freelance, je crée des applications web sur mesure et des logiciels en tant que service (SaaS) pour répondre à vos besoins professionnels. Transformez vos idées en réalité numérique avec mon expertise en développement d\'applications web.', icon: logo_sass_web, link: '/sass', bg: 'bg-green-200', alt: "Icone application web/sass" },
    { title: "Intégration de Vos Maquettes", text: 'Mon expertise en tant que développeur web freelance assure une parfaite intégration de vos maquettes dans des solutions web fonctionnelles et esthétiques. Transformez vos idées visuelles en sites web et applications web interactifs grâce à mon savoir-faire en intégration.', icon: logo_integration_maquette, link: '/integration', bg: 'bg-amber-200', alt: "Icone intégration de maquette" },
    { title: "Référencement Naturel - SEO", text: 'Maximisez votre visibilité en ligne avec mon expertise en référencement naturel (SEO). J\'optimise votre site web pour les moteurs de recherche, ce qui signifie une meilleure visibilité, plus de trafic organique et des résultats durables.', icon: logo_referencement_seo, link: '/referencement-naturel-seo', bg: 'bg-blue-200', alt: "Icone référencement naturel SEO" },
    { title: "Référencement Sponsorisé - SEA", text: 'Boostez votre visibilité instantanément avec mon expertise en référencement sponsorisé (SEA). Je crée et gère des campagnes publicitaires ciblées pour maximiser votre présence sur les moteurs de recherche.', icon: logo_referencement_sea, link: '/referencement-sponsorise-sea', bg: 'bg-green-200', alt: "Icone référencement Sponsorisé - SEA", },
    { title: "Web Design", text: 'Mon talent en tant que développeur web freelance se consacre à la création d\'expériences en ligne inoubliables. Je crois que le design va bien au-delà de l\'esthétique ; c\'est l\'art de créer des sites web qui suscitent l\'émotion, renforcent la crédibilité et génèrent des résultats tangibles.', icon: logo_design, link: '/web-design', bg: 'bg-amber-200', alt: "Icone web design", },
  ]

  const faqs = [
    {
      question: "Quels sont les avantages de la création d'un site web pour mon entreprise ?",
      answer:
        "La création d'un site web offre de nombreux avantages pour votre entreprise. Il vous permet d'élargir votre présence en ligne, d'atteindre un public plus large, d'augmenter votre visibilité et votre crédibilité, et de fournir des informations essentielles sur vos produits ou services 24/7. De plus, un site web bien conçu peut renforcer la confiance des clients et améliorer l'expérience utilisateur.",
    },
    {
      question: "Combien de temps faut-il pour créer un site web personnalisé ?",
      answer:
        "La durée de création d'un site web personnalisé dépend de plusieurs facteurs, notamment la complexité du projet, les fonctionnalités requises, le design, et la taille de l'équipe de développement. En général, cela peut prendre de quelques semaines à plusieurs mois. Nous travaillons en étroite collaboration avec nos clients pour définir des délais réalistes et assurer un processus de création efficace.",
    },
    {
      question: "Pouvez-vous m'aider à mettre à jour ou à moderniser un site web existant ?",
      answer:
        "Absolument ! Nous proposons des services de mise à jour et de modernisation de sites web existants. Que votre site ait besoin de nouvelles fonctionnalités, d'une refonte de design, de mises à jour de contenu ou de corrections techniques, notre équipe d'experts peut vous aider à revitaliser votre présence en ligne et à rester compétitif sur le marché.",
    },
    {
      question: "Quelles technologies utilisez-vous pour créer des sites web ?",
      answer:
        "Nous utilisons un large éventail de technologies de développement web pour créer des sites web personnalisés. Cela inclut des langages de programmation tels que HTML, CSS, JavaScript, ainsi que des CMS populaires comme WordPress et des frameworks tels que React/Next. Nous adaptons nos choix technologiques en fonction des besoins spécifiques de chaque projet pour garantir des solutions sur mesure de haute qualité.",
    },
  ];


  return (
    <main>
      <Header
        title="Développeur web freelance"
        subtitle="Hissez les voiles vers votre succès digital avec un capitaine du web expérimenté"
        text="Cap sur la réussite digitale ! Votre développeur web freelance expert en création de sites, refonte et applications. Naviguez vers le succès avec nous."
        image={picture_home}
        alt="image png developpeur web"
      />

      <div className="sm:mt-20 sm:mb-20 mt-14 mb-14 px-5 sm:px-16">
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold">Transformez vos idées en réalité <span className="text-emerald-600">digitale</span></h2>

        <div className="sm:mt-20 mt-14 grid grid-cols-1 sm:grid-cols-3 sm:gap-10 gap-5 justify-items-center">
          {contentCards.map((card) => (
            <HomeCards key={card.title} title={card.title} text={card.text} image={card.icon} alt={card.alt} link={card.link} bg={card.bg} />
          ))}
        </div>

        <div className="px-5 sm:px-16">
          <CallToAction />

          <SectionWithPictures
            title="Pourquoi choisir un développeur web freelance ?"
            description="Pourquoi opter pour un développeur web freelance ? Parce que je suis le capitaine de votre navire numérique, naviguant à travers les vastes océans du développement web. Avec mon expertise polyvalente, je m'engage à hisser les voiles de votre succès en ligne. Du design captivant à l'optimisation pour les moteurs de recherche, en passant par une stratégie numérique percutante, je suis là pour donner vie à votre présence en ligne. Gagnez du temps, restez à la pointe de la technologie, et laissez-moi prendre en charge la construction de votre site web. Prêt à embarquer pour un voyage numérique exceptionnel ? Contactez-moi aujourd'hui et hissons ensemble les voiles de votre réussite digitale."
            image={illustration_web}
            alt="Illustration web"
            buttonLink="/contact"
            buttonText="Contactez-moi"
          />
          <BlogSection />

          <Faq faq={faqs} />

        </div>
      </div>
    </main>
  )
}
