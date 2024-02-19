
//COMPONENTS
import BlogSection from '@/components/BlogSection/BlogSection'
import CallToAction from '@/components/CTA/CallToAction'
import CallToActionLight from '@/components/CTA/CallToActionLight'
import CardGeneral from '@/components/Cards/CardGeneral'
import LittleCard from '@/components/Cards/LittleCard'
import Faq from '@/components/FAQ/Faq'
import Header from '@/components/Header/Header'
import Image from 'next/image'


//LOGOS | PICTURES
import crayon from "../../public/logos/integration/crayon.svg"
import loupe from "../../public/logos/integration/loupe.svg"
import audit from "../../public/logos/sea/audit.svg"
import competion from "../../public/logos/sea/competion.svg"
import conversion from "../../public/logos/sea/conversion.svg"
import growth from "../../public/logos/sea/growth.svg"
import map from "../../public/logos/sea/map.svg"
import road from "../../public/logos/sea/road.svg"
import speed from "../../public/logos/sea/speed.svg"
import target from "../../public/logos/sea/target.svg"
import test from "../../public/logos/sea/test.svg"
import content from "../../public/logos/seo/content.svg"
import logo_qualite from "../../public/logos/seo/logo_qualite.svg"
import logo_tag from "../../public/logos/seo/logo_tag.svg"
import logo_visibile from "../../public/logos/seo/logo_visibile.svg"
import sea from "../../public/pictures/sea/sea.jpg"
import sea_computer from "../../public/pictures/sea/sea_computer.jpg"
import picture_site from "../../public/pictures/site/site_page.png"


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Freelance SEA expert : Campagnes publicitaires performantes à Nancy',
    description: "Embarquez pour le succès avec Bryan Parisot, développeur web freelance expert en SEA à Nancy. Maximisez votre visibilité instantanément",
    alternates: {
        canonical: `${process.env.URL_SITE}/referencement-sponsorise-sea`
    }
}




export default function page() {

    const vitrineData = [
        {
            title: 'Visibilité immédiate', text: 'Le SEA permet d\'obtenir une visibilité immédiate sur les moteurs de recherche.Vous pouvez diffuser des annonces payantes qui apparaissent en haut des résultats de recherche, ce qui signifie que votre entreprise est instantanément visible par les utilisateurs qui effectuent des recherches pertinentes.', image: logo_visibile, alt: 'Logo meilleure visibilité'
        },
        {
            title: 'Contrôle total', text: 'Avec le SEA, vous avez un contrôle total sur vos campagnes publicitaires. Vous pouvez définir votre budget quotidien, choisir les mots-clés pour lesquels vous souhaitez apparaître, cibler des audiences spécifiques. Cela vous permet d\'optimiser vos dépenses publicitaires et d\'obtenir un bon retour sur investissement (ROI).', image: logo_qualite, alt: 'Logo qualité'
        },
        {
            title: 'Mesure et suivi précis', text: 'Le SEA offre des outils de suivi avancés qui vous permettent de mesurer précisément les performances de vos annonces. Vous pouvez suivre le nombre de clics, les conversions, le coût par conversion. Cela vous permet d\'ajuster vos campagnes en fonction des données réelles, de maximiser l\'efficacité et d\'obtenir des résultats.', image: growth, alt: 'logo tags'
        },
        {
            title: 'Flexibilité budgétaire', text: 'Vous pouvez ajuster rapidement votre budget en fonction des performances de vos campagnes, ce qui vous permet de maximiser votre retour sur investissement (ROI).', image: logo_tag, alt: 'logo tags'
        },
        {
            title: 'Rapidité', text: 'Contrairement au référencement organique, qui peut prendre du temps pour obtenir des résultats, le SEA offre une visibilité instantanée.', image: speed, alt: 'logo de rapidité'
        },
        {
            title: 'Test et optimisation', text: 'Vous pouvez effectuer des tests A/B pour vos annonces, essayer différentes approches marketing, et optimiser en fonction des résultats.', image: test, alt: 'logo test'
        },
        {
            title: 'Compétitivité', text: 'Vous pouvez rivaliser avec des entreprises de toutes tailles, car le SEA ne dépend pas de la taille de votre entreprise, mais de votre stratégie publicitaire.', image: competion, alt: 'logo test'
        },
        {
            title: 'Positionnement géographique', text: 'Le ciblage géographique vous permet de diffuser des annonces uniquement dans les zones géographiques pertinentes pour votre entreprise.', image: map, alt: 'logo map'
        },
        {
            title: 'Conversion élevée', text: 'Les utilisateurs qui cliquent sur des annonces sont souvent plus enclins à convertir en clients, car ils ont déjà manifesté un intérêt pour votre produit ou service.', image: conversion, alt: 'logo conversion'
        },
    ]

    const faqs = [
        {
            question: "Qu'est-ce que le SEA ?",
            answer:
                "Le SEA (Search Engine Advertising) est une stratégie de marketing en ligne qui consiste à diffuser des annonces publicitaires sur les moteurs de recherche. Les annonceurs paient pour que leurs annonces soient affichées en haut des résultats de recherche lorsque des utilisateurs effectuent des recherches sur des mots-clés pertinents. Le SEA est un moyen efficace d'attirer du trafic qualifié vers un site web en plaçant des annonces payantes.",
        },
        {
            question: "Pourquoi choisir le SEA comme levier ?",
            answer:
                "Le SEA est un choix judicieux pour de nombreuses raisons. Il offre un contrôle précis sur les annonces, permettant aux annonceurs de cibler des mots-clés spécifiques et de définir un budget quotidien. De plus, les résultats sont généralement rapides, ce qui signifie que vous pouvez augmenter votre visibilité instantanément. En outre, le SEA permet de mesurer précisément les performances de vos campagnes et d'ajuster votre stratégie en conséquence.",
        },
        {
            question: "Quels sont les avantages du SEA par rapport au référencement naturel (SEO) ?",
            answer:
                "Le SEA présente plusieurs avantages par rapport au référencement naturel (SEO) : 1. Résultats rapides : Contrairement au SEO, les campagnes SEA peuvent générer des résultats immédiats en affichant des annonces en haut des pages de résultats des moteurs de recherche. 2. Contrôle précis : Vous avez un contrôle total sur vos annonces, vos mots-clés et votre budget publicitaire. 3. Visibilité instantanée : Le SEA vous permet de maximiser votre visibilité en ligne rapidement, ce qui est essentiel pour les nouveaux sites ou les lancements de produits. 4. Mesure et ajustement : Vous pouvez mesurer précisément les performances de vos annonces et apporter des ajustements en temps réel pour optimiser vos campagnes. 5. Ciblage : Le SEA offre un ciblage précis en fonction de l'emplacement, de l'heure, des intérêts et d'autres critères, ce qui permet d'atteindre un public spécifique.",
        },
        {
            question: "Quel est le coût d'une campagne SEA ?",
            answer:
                "Le coût d'une campagne SEA dépend de plusieurs facteurs, notamment les mots-clés que vous ciblez, la concurrence sur ces mots-clés, votre budget quotidien et la qualité de vos annonces. Les coûts varient largement, mais il est essentiel de fixer un budget quotidien que vous êtes prêt à dépenser. Il est recommandé de commencer avec un budget modeste et d'ajuster au fur et à mesure que vous évaluez les performances de vos annonces.",
        },
    ];

    const atouts = [
        {
            title: "Gestion de campagnes ", text: "Création, configuration, et gestion complète de campagnes publicitaires sur les moteurs de recherche, notamment Google Ads.", logo: loupe, alt: "logo loupe"
        },
        {
            title: "Recherche de mots-clés", text: "Analyse approfondie des mots-clés pour déterminer les termes les plus pertinents et rentables pour cibler.", logo: content, alt: "logo appareil responsive"
        },
        {
            title: "Stratégie de ciblage", text: "Définition d'une stratégie de ciblage précise, y compris le ciblage géographique, le ciblage démographique et le ciblage par centres d'intérêt.", logo: target, alt: "logo cible"
        },
        {
            title: "Annonces textuelles", text: "Création et optimisation d'annonces textuelles percutantes, y compris les titres, les descriptions et les liens.", logo: crayon, alt: "logo crayon"
        },
        {
            title: "Audit de campagnes", text: "Évaluation et amélioration des campagnes SEA existantes pour en augmenter l'efficacité.", logo: audit, alt: "logo audit"
        },
        {
            title: "Analyse et suivi", text: "Utilisation d'outils d'analyse pour mesurer les performances des campagnes, suivre les conversions et ajuster les stratégies en conséquence.", logo: road, alt: "logo crayon"
        },
    ]


    return (
        <main>
            <Header
                title="Expert Ads freelance à Nancy"
                subtitle="Boostez votre visibilité avec le SEA avec un expert à Nancy"
                text="Explorez de nouvelles horizons en ligne avec mon expertise en publicité sur les moteurs de recherche. Le SEA (Search Engine Advertising) est la clé pour placer votre entreprise devant un public ciblé. Maximisez vos résultats grâce à ma stratégie de publicité payante sur les moteurs de recherche. Atteignez vos objectifs de croissance avec [Nom de Votre Entreprise]."
                image={picture_site}
                alt="image png developpeur web"
            />

            <div className="mt-10 mb-10">
                <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
                    Les avantages du <span className="text-emerald-600">SEA (Search Engine Advertising)</span> à Nancy
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
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={sea}
                                alt="Double Ecran illustration" />
                        </div>
                        <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8'>
                            <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-4xl text-emerald-950">
                                Boostez votre performance grâce au SEA à Nancy
                            </h2>
                            <p>
                                Découvrez comment le <span className="font-bold">SEA</span> peut propulser votre entreprise vers de nouveaux sommets de performance en ligne. En tant que développeur web freelance spécialisé en publicité sur les moteurs de recherche, je suis prêt à concevoir des stratégies de <span className='font-bold'>SEA</span> sur mesure qui mettront en avant votre marque, augmenteront votre visibilité et stimuleront la croissance de votre entreprise. Avec des campagnes ciblées et un suivi précis, je maximise chaque euro de votre budget publicitaire pour des résultats tangibles. Explorez les possibilités du SEA avec moi, Bryan Parisot, et propulsez votre entreprise sous les feux de la rampe en ligne.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col xl:flex-row mt-20 xl:h-[52vh] h-full'>
                        <div className="mb-8 flex items-center justify-center xl:order-last xl:w-1/2 w-full">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={sea_computer}
                                alt="Illustration d'un site vitrine" />
                        </div>
                        <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8 mt-0 xl:mt-5'>
                            <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-4xl text-emerald-950">
                                Créez votre landing page spécialisée
                            </h2>
                            <p>
                                En tant que développeur web freelance, je crois en l'importance d'une première impression mémorable en ligne. C'est pourquoi je propose des services de création de landing pages spécialisées conçues pour captiver instantanément vos visiteurs. Ma conception expérimentée travaille en étroite collaboration avec vous pour créer des landing pages qui reflètent l'essence de votre entreprise, mettent en avant vos produits ou services, et encouragent les conversions. Mais ce n'est pas tout. Je vais encore plus loin en vous offrant la possibilité de propulser ces landing pages grâce à mon expertise en <span className='font-bold'>SEA</span>. En combinant une landing page de haute qualité avec une stratégie publicitaire ciblée, vous pouvez maximiser l'impact de votre campagne, attirer un public pertinent et obtenir des résultats concrets. Découvrez comment mes services de landing page et de SEA peuvent travailler ensemble pour renforcer votre présence en ligne et transformer les visiteurs en clients engagés.
                            </p>
                        </div>
                    </div>



                </div>
                <CallToAction />
            </div>

            <div className="mb-10">
                <div className='bg-emerald-50 flex items-center flex-col py-5 px-5 sm:px-16 '>
                    <h2 className='mt-2 text-2xl font-bold xl:text-left md:text-4xl text-emerald-950 text-center'>
                        Nos étapes de construction d'une compagne <span className='text-emerald-600'>SEA</span>
                    </h2>

                    <div className='bg-emerald-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20 rounded-lg py-20'>
                        {
                            atouts.map((item) => (
                                <LittleCard key={item.title} title={item.title} text={item.text} logo={item.logo} alt={item.alt} />
                            ))
                        }

                    </div>
                </div>

                <BlogSection />

                <CallToActionLight />

                <Faq faq={faqs} />
            </div>

        </main>
    )
}
