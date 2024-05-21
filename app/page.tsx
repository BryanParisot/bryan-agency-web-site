//COMPONENTS
import BlogSection from "@/components/BlogSection/BlogSection";
import CallToAction from "@/components/CTA/CallToAction";
import HomeCards from "@/components/Cards/HomeCards";
import Faq from "@/components/FAQ/Faq";
import Header from "@/components/Header/Header";

//PICTURES | LOGOS
import logo_design from "../public/logos/nav/logo_design.svg";
import logo_creation_site from "../public/logos/nav/logo_html.svg";
import logo_integration_maquette from "../public/logos/nav/logo_integration.svg";
import logo_refonte_site from "../public/logos/nav/logo_refonte.svg";
import logo_sass_web from "../public/logos/nav/logo_sass.svg";
import logo_referencement_sea from "../public/logos/nav/logo_sea.svg";
import logo_referencement_seo from "../public/logos/nav/logo_seo.svg";

import { Button } from "@/components/ui/button";
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Développeur web freelance | Bryan Parisot - Création de sites et applications',
  description: 'Bryan Parisot, développeur web freelance spécialisé dans la création de sites et d\'applications sur mesure.',
  alternates: {
    canonical: process.env.URL_SITE
  }
}


export default function Home() {

  const contentCards = [
    { title: "Création de sites internet", text: 'En tant que développeur web freelance, je suis là pour créer un site web unique et optimisé qui représentera votre entreprise de manière professionnelle en ligne. J\'intègre soigneusement vos besoins et votre identité dans chaque aspect du site, assurant ainsi une expérience utilisateur exceptionnelle.', icon: logo_creation_site, link: '/creation-site-internet-nancy', bg: 'bg-amber-200', alt: "Icone création de site internet" },
    { title: "Refonte de site Web", text: 'Donnez une nouvelle vie à votre site web existant. Mon expertise en tant que développeur web freelance vous aidera à moderniser votre site, améliorer son design et son efficacité pour rester compétitif en ligne. Découvrez comment je peux revitaliser votre présence sur le web', icon: logo_refonte_site, link: '/creation-site-internet-nancy/refonte', bg: 'bg-blue-200', alt: "Icone refonte de site internet" },
    { title: "Applications web / saaS", text: 'En tant que développeur web freelance, je crée des applications web sur mesure et des logiciels en tant que service (SaaS) pour répondre à vos besoins professionnels. Transformez vos idées en réalité numérique avec mon expertise en développement d\'applications web.', icon: logo_sass_web, link: '/saas', bg: 'bg-red-200', alt: "Icone application web/saas" },
    { title: "Intégration de vos Maquettes", text: 'Mon expertise en tant que développeur web freelance assure une parfaite intégration de vos maquettes dans des solutions web fonctionnelles et esthétiques. Transformez vos idées visuelles en sites web et applications web interactifs grâce à mon savoir-faire en intégration.', icon: logo_integration_maquette, link: '/integration', bg: 'bg-amber-200', alt: "Icone intégration de maquette" },
    { title: "Référencement naturel - SEO", text: 'Maximisez votre visibilité en ligne avec mon expertise en référencement naturel (SEO). J\'optimise votre site web pour les moteurs de recherche, ce qui signifie une meilleure visibilité, plus de trafic organique et des résultats durables.', icon: logo_referencement_seo, link: '/referencement-naturel-seo', bg: 'bg-blue-200', alt: "Icone référencement naturel SEO" },
    { title: "Référencement sponsorisé - SEA", text: 'Boostez votre visibilité instantanément avec mon expertise en référencement sponsorisé (SEA). Je crée et gère des campagnes publicitaires ciblées pour maximiser votre présence sur les moteurs de recherche.', icon: logo_referencement_sea, link: '/referencement-sponsorise-sea', bg: 'bg-red-200', alt: "Icone référencement Sponsorisé - SEA", },
    { title: "Web design", text: 'Mon talent en tant que développeur web freelance se consacre à la création d\'expériences en ligne inoubliables. Je crois que le design va bien au-delà de l\'esthétique ; c\'est l\'art de créer des sites web qui suscitent l\'émotion, renforcent la crédibilité et génèrent des résultats tangibles.', icon: logo_design, link: '/web-design', bg: 'bg-amber-200', alt: "Icone web design", },
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
        title="Développeur web freelance à Nancy"
        subtitle="Expert en création de site internet et application web à Nancy"
        text="Cap sur la réussite digitale ! Votre développeur web freelance expert en création de sites, refonte et applications, SEA, SEO. Naviguez vers le succès avec nous."
      />

      <div className="sm:mt-20 sm:mb-20 mt-14 mb-14 px-5 sm:px-16">
        <h2 className="text-center font-anton tracking-wider text-3xl sm:text-5xl text-gray-900 font-semibold">Mes services en tant que <span className="text-primary font-extrabold">développeur web à Nancy</span></h2>

        <div className="sm:mt-20 mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 gap-5 justify-items-center">
          {contentCards.map((card) => (
            <HomeCards key={card.title} title={card.title} text={card.text} image={card.icon} alt={card.alt} link={card.link} bg={card.bg} />
          ))}
        </div>

        <CallToAction />
      </div>

      <div className="flex flex-col sm:flex-row bg-secondary sm:p-10 p-5 ">
        <div className="flex flex-col items-start justify-center sm:w-1/3 space-y-10 w-full">
          <h2 className="text-4xl sm:text-6xl font-bold font-anton line">Pourquoi choisir un <span className="font-extrabold text-primary">développeur web freelance à Nancy ?</span> </h2>
          <Link href="/contact">
            <Button size="lg" variant="black">Contactez-nous</Button>
          </Link>
        </div>
        <div className="sm:w-2/3 pl-0 sm:pl-10 sm:mt-0 mt-10 w-full">

          <div className="grid sm:grid-cols-2 gap-6 grid-cols-1">
            <div className="bg-white shadow p-10 space-y-2 rounded-lg">
              <h3 className="text-xl font-bold">Flexibilité et adaptabilité</h3>
              <p>En optant pour un développeur web freelance basé à Nancy, vous bénéficiez d'une flexibilité et d'une adaptabilité inégalées. En travaillant avec un professionnel indépendant, vous avez la liberté de définir les horaires de travail et les délais en fonction de vos besoins spécifiques. Cette souplesse vous permet d'ajuster facilement le calendrier des projets en cours et de répondre rapidement aux exigences changeantes de votre entreprise.</p>
            </div>
            <div className="bg-white shadow p-10 space-y-2 rounded-lg">
              <h3 className="text-xl font-bold">Expertise locale</h3>
              <p>Faire appel à un développeur web freelance local à Nancy présente de nombreux avantages. En plus de soutenir l'économie locale, vous avez accès à une expertise spécifique à la région. Le développeur comprendra mieux les tendances du marché local, les comportements des consommateurs et pourra intégrer ces connaissances dans la conception de votre site web. De plus, la proximité géographique facilite la communication et les réunions en personne si nécessaire.</p>
            </div>
            <div className="bg-white shadow p-10 space-y-2 rounded-lg">
              <h3 className="text-xl font-bold">Personnalisation et attention individualisée</h3>
              <p>Travailler avec un développeur web freelance garantit une attention individualisée à votre projet. Contrairement aux agences qui peuvent avoir plusieurs projets en cours simultanément, un freelance peut se concentrer pleinement sur votre entreprise. Cela se traduit par une personnalisation accrue, une écoute attentive de vos besoins et une collaboration étroite tout au long du processus de développement.</p>
            </div>
            <div className="bg-white shadow p-10 space-y-2 rounded-lg">
              <h3 className="text-xl font-bold">Coûts compétitifs</h3>
              <p>Engager un développeur web freelance peut souvent être plus économique que de faire appel à une agence. Les frais généraux sont généralement plus bas, ce qui se reflète dans des tarifs compétitifs pour des services de qualité. De plus, en évitant les intermédiaires, vous pouvez réduire les coûts supplémentaires et bénéficier d'un meilleur retour sur investissement pour votre projet web.</p>
            </div>
          </div>
        </div>
      </div>


      <BlogSection />

      <Faq faq={faqs} />
    </main>
  )
}
