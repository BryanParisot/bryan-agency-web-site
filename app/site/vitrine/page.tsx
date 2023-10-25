//COMPONENTS
import Header from '@/components/Header/Header'
import CardGeneral from '@/components/Cards/CardGeneral'

//LOGO
import picture_site from "../../../public/pictures/site/site_page.png"
import logo_visibilite from "../../../public/logos/site/vitrine/logo_visibilite.svg"
import logo_promotion from "../../../public/logos/site/vitrine/logo_promotion.svg"
import logo_roi from "../../../public/logos/site/vitrine/logo_roi.svg"





export default function page() {

  const vitrineData = [
    {
      title: 'Visibilité en Ligne', text: 'Un site vitrine permet à votre entreprise d\'avoir une présence en ligne 24 heures sur 24, 7 jours sur 7. Il est accessible aux clients potentiels à tout moment, ce qui augmente votre visibilité et votre accessibilité.', image: logo_visibilite, alt: 'Logo visibilité en ligne'
    },
    {
      title: 'Promotion de Votre Marque', text: 'Un site vitrine bien conçu permet de présenter votre entreprise, vos produits ou services, et votre identité de marque de manière professionnelle. Il offre une plateforme pour communiquer votre message et renforcer la confiance.', image: logo_promotion, alt: 'Logo promotion de votre marque'
    },
    {
      title: 'Chiffre d\'Affaires', text: 'Un site vitrine bien conçu peut contribuer à l\'augmentation de votre chiffre d\'affaires en attirant de nouveaux clients, en augmentant la notoriété de votre entreprise et en facilitant la vente de vos produits ou services en ligne.', image: logo_roi, alt: 'logo roi'
    }
  ]

  return (
    <main>
      <Header
        title="Agence de création de site vitrine"
        subtitle="Création d'un Site Vitrine Sur Mesure"
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


      </div>


    </main>
  )
}
