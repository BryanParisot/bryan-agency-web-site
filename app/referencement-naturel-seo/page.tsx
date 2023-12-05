import Image from 'next/image'

//COMPONENTS
import Header from '@/components/Header/Header'
import CardGeneral from '@/components/Cards/CardGeneral'
import CallToAction from '@/components/CTA/CallToAction'
import SectionLogos from '@/components/Section/SectionLogos'
import BlogSection from '@/components/BlogSection/BlogSection'
import Faq from '@/components/FAQ/Faq'
import CallToActionLight from '@/components/CTA/CallToActionLight'
import LittleCard from '@/components/Cards/LittleCard'


//LOGOS | PICTURES
import picture_site from "../../public/pictures/site/site_page.png"
import loupe from "../../public/logos/integration/loupe.svg"
import content from "../../public/logos/seo/content.svg"
import logo_qualite from "../../public/logos/seo/logo_qualite.svg"
import logo_tag from "../../public/logos/seo/logo_tag.svg"
import logo_visibile from "../../public/logos/seo/logo_visibile.svg"
import browser from "../../public/logos/seo/browser.svg"
import link from "../../public/logos/seo/link.svg"
import map from "../../public/logos/seo/map.svg"
import crayon from "../../public/logos/integration/crayon.svg"
import seo from "../../public/pictures/seo/seo.jpg"
import seo_score from "../../public/pictures/seo/seo_score.jpg"


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Freelance SEO expert : Optimisation et visibilité en ligne',
    description: "Boostez votre présence en ligne avec Bryan Parisot, développeur web freelance spécialisé en SEO. Maximisez votre visibilité, attirez du trafic organique",
    alternates: {
        canonical: `${process.env.URL_SITE}/referencement-naturel-seo`
    }

}



export default function page() {

    const vitrineData = [
        {
            title: 'Amélioration de la visibilité en ligne', text: 'Le SEO vise à améliorer le classement de votre site web dans les résultats des moteurs de recherche. Lorsque votre site apparaît en haut des résultats de recherche, il bénéficie d\'une visibilité accrue, ce qui signifie que plus de gens le verront lorsqu\'ils effectueront des recherches liées à votre domaine d\'activité.', image: logo_visibile, alt: 'Logo meilleure visibilité'
        },
        {
            title: 'Trafic organique de qualité', text: 'Le SEO cible des mots-clés spécifiques liés à votre entreprise, produits ou services. Cela signifie que le trafic que vous recevez grâce au SEO est souvent hautement ciblé et qualifié. Les visiteurs sont plus susceptibles d\'être intéressés par ce que vous offrez, ce qui augmente les chances de conversion.', image: logo_qualite, alt: 'Logo qualité'
        },
        {
            title: 'Coût-effectivité à long terme', text: 'Contrairement à la publicité payante, le SEO est une stratégie à long terme. Une fois que vous avez atteint un bon classement dans les SERP, vous pouvez maintenir ce classement avec une gestion appropriée. Cela signifie que vous pouvez générer du trafic organique de manière continue sans avoir à payer pour chaque clic.', image: logo_tag, alt: 'logo tags'
        }
    ]

    const faqs = [
        {
            question: "Qu'est-ce que le SEO ?",
            answer:
                "Le SEO, ou Search Engine Optimization, est un ensemble de techniques visant à améliorer la visibilité d'un site web dans les résultats organiques (non payants) des moteurs de recherche comme Google. Le SEO implique l'optimisation de divers éléments, tels que les mots-clés, la structure du site, le contenu et les liens, afin de favoriser un classement plus élevé dans les résultats de recherche et d'attirer un trafic organique de qualité.",
        },
        {
            question: "À quoi sert le SEO ?",
            answer:
                "Le SEO est essentiel pour permettre à un site web d'apparaître en tête des résultats de recherche, ce qui augmente sa visibilité en ligne. Cela peut entraîner une augmentation du trafic organique, de la notoriété de la marque et des conversions. En investissant dans le SEO, les entreprises peuvent atteindre un public plus large et rivaliser efficacement dans le paysage numérique.",
        },
        {
            question: "Quelle est la différence entre le SEO et le SEA ?",
            answer:
                "Le SEO (Search Engine Optimization) et le SEA (Search Engine Advertising) sont deux stratégies de marketing en ligne distinctes. Le SEO vise à améliorer la visibilité d'un site web dans les résultats de recherche organiques, tandis que le SEA consiste à diffuser des annonces payantes sur les moteurs de recherche. La principale différence réside dans le fait que le SEO repose sur des efforts d'optimisation non payants, tandis que le SEA implique un coût par clic (CPC) pour diffuser des annonces payantes.",
        },
        {
            question: "Combien de temps faut-il pour voir des résultats avec le SEO ?",
            answer:
                "Le délai nécessaire pour voir des résultats avec le SEO peut varier en fonction de nombreux facteurs, tels que la concurrence, l'âge du site, la qualité du contenu et les pratiques d'optimisation. En général, il faut souvent plusieurs semaines, voire plusieurs mois, pour commencer à observer des améliorations significatives. Le SEO est un effort à long terme, et la patience est souvent nécessaire pour obtenir des résultats durables.",
        },
    ];

    const atouts = [
        {
            title: "Audit SEO", text: "Une analyse approfondie de votre site web pour identifier les problèmes techniques, les lacunes en matière de contenu, les erreurs de référencement, et les opportunités d'amélioration.", logo: loupe, alt: "logo loupe"
        },
        {
            title: "Recherche de mots-clés", text: "L'identification de mots-clés pertinents pour votre secteur d'activité et l'intégration stratégique de ces mots-clés dans votre contenu.", logo: content, alt: "logo appareil responsive"
        },
        {
            title: "Optimisation on-page", text: "L'identification de mots-clés pertinents pour votre secteur d'activité et l'intégration stratégique de ces mots-clés dans votre contenu.", logo: browser, alt: "logo conversion"
        },
        {
            title: "Création de contenu", text: " La production de contenu de qualité, tel que des articles de blog, des guides, des vidéos, ou des infographies, pour attirer des visiteurs et renforcer votre autorité dans votre domaine.", logo: crayon, alt: "logo crayon"
        },
        {
            title: "Stratégie de backlinks", text: "L'acquisition de liens de qualité provenant d'autres sites web, ce qui peut augmenter l'autorité de votre site aux yeux des moteurs de recherche.", logo: link, alt: "logo personnes"
        },
        {
            title: "SEO local", text: "L'optimisation pour les recherches locales, si vous avez une entreprise physique, afin d'apparaître dans les résultats locaux.", logo: map, alt: "logo crayon"
        },
    ]


    return (
        <main>
            <Header
                title="Développeur web freelance - SEO "
                subtitle="Améliorez votre référencement naturel avec mon expertise en SEO"
                text="Bienvenue dans mon univers chez Bryan Parisot, votre partenaire de confiance pour le référencement SEO. En tant que développeur web freelance, je suis déterminé à propulser votre site web vers les sommets des résultats de recherche. Grâce à mon expertise, je conçois des stratégies SEO sur mesure qui maximisent votre visibilité en ligne et génèrent un trafic qualifié."
                image={picture_site}
                alt="image png developpeur web"
            />

            <div className="mt-10 mb-10">
                <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
                    Les avantages du <span className="text-emerald-600">référencement naturel (SEO)</span>
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
                                src={seo}
                                alt="Double Ecran illustration" />
                        </div>
                        <div className='w-full sm:w-3/6 space-y-6 px-0 sm:px-8'>
                            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                                Pourquoi le SEO est indispensable ?
                            </h2>
                            <p>
                                Le  <span className="font-bold">SEO</span>, ou Search Engine Optimization, est une stratégie essentielle pour toute entreprise cherchant à prospérer en ligne. Il offre de nombreux avantages clés qui contribuent à la croissance et à la réussite à long terme.                        </p>
                            <p>
                                Tout d'abord, le <span className="font-bold">SEO</span> améliore la visibilité en ligne de votre site web. En optimisant votre contenu et votre structure, vous augmentez vos chances d'apparaître en haut des résultats des moteurs de recherche, ce qui signifie que plus de personnes peuvent découvrir votre entreprise.                        </p>
                            <p>
                                De plus, le trafic organique généré par le <span className="font-bold">SEO</span> est de haute qualité. Les visiteurs arrivent sur votre site parce qu'ils recherchent activement des informations ou des produits liés à votre secteur. Cela augmente considérablement les chances de conversion en clients ou en prospects.                        </p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row mt-20 sm:h-[52vh] h-full'>
                        <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={seo_score}
                                alt="Illustration d'un site vitrine" />
                        </div>
                        <div className='w-full sm:w-3/6 space-y-4 px-0 sm:px-8 mt-0 sm:mt-5 flex flex-col justify-center'>
                            <p>
                                Le <span className="font-bold">SEO</span> est également rentable à long terme. Contrairement à la publicité payante qui nécessite un budget continu, le <span className="font-bold">SEO</span> continue de produire des résultats après avoir investi du temps et des efforts initiaux.                        </p>
                            <p>
                                En outre, il renforce la crédibilité de votre entreprise. Les sites bien classés dans les moteurs de recherche sont souvent perçus comme des autorités dans leur domaine.                        </p>
                            <p>
                                Enfin, le <span className="font-bold">SEO</span> vous aide à rester compétitif en ligne. Si vos concurrents investissent dans le <span className="font-bold">SEO</span> et que vous ne le faites pas, vous risquez de perdre des parts de marché.                        </p>
                            <p>
                                En conclusion, le <span className="font-bold">SEO</span> est bien plus qu'une stratégie de marketing ; il est devenu une nécessité pour toute entreprise cherchant à prospérer dans le paysage numérique d'aujourd'hui. C'est un investissement qui porte ses fruits à long terme en augmentant la visibilité, en attirant un trafic de qualité et en renforçant la crédibilité.                        </p>
                        </div>
                    </div>
                </div>
                <CallToAction />
            </div>
            <div className=" mb-10">
                <div className='bg-emerald-50 flex items-center flex-col py-5 px-5 sm:px-16'>
                    <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950 text-center'>
                        Les services de <span className='text-emerald-600'>referecement naturel</span>
                    </h2>

                    <div className='bg-emerald-50 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20 rounded-lg py-20'>
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
