import Header from "@/components/Header/Header";
import picture_site from "../../public/pictures/site/site_page.png"
import SiteCards from "../../components/Cards/SiteCards";

//LOGOS
import logo_vitrine from "../../public/logos/site/logo_vitrine.svg"
import logo_e_commerce from "../../public/logos/site/logo_e_commerce.svg"
import logo_landing_page from "../../public/logos/site/logo_landing_page.svg"
import logo_wordpress from "../../public/logos/site/logo_wordpress.svg"
import logo_refonte from "../../public/logos/site/logo_refonte.svg"
import logo_maintenance from "../../public/logos/site/logo_maintenance.svg"
import CallToAction from "@/components/CTA/CallToAction";

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
      title: 'Votre Site WordPress Personnalisé', text: 'Optez pour la puissance de WordPress avec [Nom de Votre Entreprise]. Nous sommes des experts dans la création de sites web sur mesure utilisant la plateforme WordPress, leader dans le domaine de la gestion de contenu. Que ce soit pour un blog, un site vitrine ou un site e-commerce, nous personnalisons chaque détail pour répondre à vos besoins spécifiques. Découvrez comment nous pouvons transformer votre vision en un site web WordPress fonctionnel et attrayant, prêt à attirer l\'attention en ligne.', image: logo_wordpress, alt: 'logo wordpress personnalisé', link: '/site/wordpress-personnalise'
    },
    {
      title: 'Transformez Votre Site Web Avec Notre Service de Refonte', text: 'Votre site web mérite d\'être à la hauteur de votre entreprise en constante évolution.Avec notre service de refonte de site web, nous pouvons revitaliser votre présence en ligne, moderniser votre design et améliorer votre expérience utilisateur.Que vous souhaitiez une mise à jour esthétique, une optimisation pour les moteurs de recherche ou de nouvelles fonctionnalités, nous pouvons donner une nouvelle vie à votre site web existant', image: logo_refonte, alt: 'logo refonte de site web/app', link: '/site/refonte'
    },
    {
      title: 'Service de Maintenance WordPress', text: 'La maintenance régulière est essentielle pour garantir le bon fonctionnement et la sécurité de votre site WordPress. Notre service de maintenance dédié prend en charge toutes les tâches fastidieuses, des mises à jour de sécurité aux sauvegardes régulières, en passant par la gestion des plugins. Vous pouvez vous concentrer sur votre entreprise pendant que nous veillons sur votre site web. Découvrez comment notre service de maintenance peut vous offrir la tranquillité d\'esprit et la performance dont vous avez besoin.', image: logo_maintenance, alt: 'logo maintenance wordpress', link: '/site/maintenance-wordpress'
    }
  ]

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
        <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >Nos prestation de <span className="text-emerald-600">création de site web</span> </h2>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-20">
          {
            cardData.map((item) => (
              <SiteCards title={item.title} text={item.text} image={item.image} alt={item.alt} link={item.link} key={item.title} />
            ))
          }
        </div>

        <div className="px-5 sm:px-16">

          <CallToAction />

          

        </div>



      </div>
    </main>
  )
}