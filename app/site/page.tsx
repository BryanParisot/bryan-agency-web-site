//COMPONENTS
import CallToAction from "@/components/CTA/CallToAction";
import SectionWithPictures from "@/components/Section/SectionWithPictures";
import BlogSection from "@/components/BlogSection/BlogSection";
import Header from "@/components/Header/Header";
import SiteCards from "../../components/Cards/SiteCards";
import Faq from "@/components/FAQ/Faq";
import Carousel from "@/components/Carrousel/Carousel";

//LOGOS | PICTURES
import logo_vitrine from "../../public/logos/site/logo_vitrine.svg"
import logo_e_commerce from "../../public/logos/site/logo_e_commerce.svg"
import logo_landing_page from "../../public/logos/site/logo_landing_page.svg"
import logo_wordpress from "../../public/logos/site/logo_wordpress.svg"
import logo_refonte from "../../public/logos/site/logo_refonte.svg"
import logo_maintenance from "../../public/logos/site/logo_maintenance.svg"
import picture_site from "../../public/pictures/site/site_page.png"
import presence_en_ligne from "../../public/pictures/site/presence_en_ligne.jpg"




export default function Page() {

  const cardData = [
    {
      title: 'Création d’un site vitrine', text: 'Nos sites vitrine sont bien plus qu\'une simple vitrine en ligne.Ils sont conçus pour attirer, engager et convertir vos visiteurs en clients.Chez[Nom de Votre Entreprise], nous mettons en avant votre entreprise de manière élégante et persuasive, offrant une expérience utilisateur exceptionnelle.Découvrez comment nous pouvons vous aider à briller en ligne avec un site web vitrine qui laisse une impression mémorable.', image: logo_vitrine, alt: 'logo site vitrine', link: '/site/vitrine'
    },
    {
      title: 'Création d’un site e-commerce', text: 'Explorez le monde du commerce électronique avec confiance en choisissant [Nom de Votre Entreprise]. Nous sommes spécialisés dans la création de boutiques en ligne sur mesure, conçues pour transformer les visiteurs en clients fidèles. Notre expertise en design, développement e-commerce et optimisation vous permettra de prospérer dans le paysage en constante évolution du commerce en ligne.', image: logo_e_commerce, alt: 'logo e-commerce', link: '/site/e-commerce'
    },
    {
      title: 'Création d’une landing-page', text: 'Nos sites vitrine sont bien plus qu\'une simple vitrine en ligne.Ils sont conçus pour attirer, engager et convertir vos visiteurs en clients.Chez[Nom de Votre Entreprise], nous mettons en avant votre entreprise de manière élégante et persuasive, offrant une expérience utilisateur exceptionnelle.Découvrez comment nous pouvons vous aider à briller en ligne avec un site web vitrine qui laisse une impression mémorable.', image: logo_landing_page, alt: 'logo landing page', link: '/site/landing-page'
    },
    {
      title: 'Votre site WordPress personnalisé', text: 'Optez pour la puissance de WordPress avec [Nom de Votre Entreprise]. Nous sommes des experts dans la création de sites web sur mesure utilisant la plateforme WordPress, leader dans le domaine de la gestion de contenu. Que ce soit pour un blog, un site vitrine ou un site e-commerce, nous personnalisons chaque détail pour répondre à vos besoins spécifiques. Découvrez comment nous pouvons transformer votre vision en un site web WordPress fonctionnel et attrayant, prêt à attirer l\'attention en ligne.', image: logo_wordpress, alt: 'logo wordpress personnalisé', link: '/site/wordpress-personnalise'
    },
    {
      title: 'Transformez votre site web avec notre service de refonte', text: 'Votre site web mérite d\'être à la hauteur de votre entreprise en constante évolution.Avec notre service de refonte de site web, nous pouvons revitaliser votre présence en ligne, moderniser votre design et améliorer votre expérience utilisateur.Que vous souhaitiez une mise à jour esthétique, une optimisation pour les moteurs de recherche ou de nouvelles fonctionnalités, nous pouvons donner une nouvelle vie à votre site web existant', image: logo_refonte, alt: 'logo refonte de site web/app', link: '/site/refonte'
    },
    {
      title: 'Service de maintenance WordPress', text: 'La maintenance régulière est essentielle pour garantir le bon fonctionnement et la sécurité de votre site WordPress. Notre service de maintenance dédié prend en charge toutes les tâches fastidieuses, des mises à jour de sécurité aux sauvegardes régulières, en passant par la gestion des plugins. Vous pouvez vous concentrer sur votre entreprise pendant que nous veillons sur votre site web. Découvrez comment notre service de maintenance peut vous offrir la tranquillité d\'esprit et la performance dont vous avez besoin.', image: logo_maintenance, alt: 'logo maintenance wordpress', link: '/site/maintenance-wordpress'
    }
  ]

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
        title="Agence de création de site web"
        subtitle="Création de site web à nancy pour booster votre visibilité sur internet."
        text="Découvrez comment notre agence web peut transformer votre présence en ligne en un atout puissant pour votre entreprise locale. Notre équipe de professionnels du développement web crée des sites internet et optimisés pour les moteurs de recherche. Propulsez votre visibilité"
        image={picture_site}
        alt="image png developpeur web"
      />

      <div className="mt-10 mb-10">

        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
          Nos prestation de <span className="text-emerald-600">création de site web</span>
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
            title="Créez votre présence en ligne personnalisée avec nos services de création de site web"
            description="Pourquoi choisir une agence web ? Parce que nous sommes les navigateurs de l'univers numérique. Avec notre expertise en développement web, design, référencement et stratégie numérique, nous vous aidons à hisser les voiles vers le succès en ligne. Notre équipe technique assure une conception professionnelle, une visibilité accrue dans les moteurs de recherche et un site web optimisé. Gagnez du temps, restez à la pointe de la technologie et concentrez-vous sur votre entreprise pendant que nous donnons vie à votre présence en ligne. Contactez-nous aujourd'hui pour commencer votre voyage vers la réussite digitale."
            image={presence_en_ligne}
            alt='illustration web'
          />

          <BlogSection />


          <Faq faq={faqs} />


          <Carousel />
        </div>



      </div>
    </main>
  )
}