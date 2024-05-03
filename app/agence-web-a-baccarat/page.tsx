//COMPONENTS
import BlogSection from "@/components/BlogSection/BlogSection"
import HomeCards from "@/components/Cards/HomeCards"
import Faq from "@/components/FAQ/Faq"
import Header from "@/components/Header/Header"
import { UserIcon } from '@heroicons/react/24/outline'
import Image from "next/image"
import Link from "next/link"


//LOGOS | PICTURES
import logo_design from "../../public/logos/nav/logo_design.svg"
import logo_creation_site from "../../public/logos/nav/logo_html.svg"
import logo_integration_maquette from "../../public/logos/nav/logo_integration.svg"
import logo_refonte_site from "../../public/logos/nav/logo_refonte.svg"
import logo_sass_web from "../../public/logos/nav/logo_sass.svg"
import logo_referencement_sea from "../../public/logos/nav/logo_sea.svg"
import logo_referencement_seo from "../../public/logos/nav/logo_seo.svg"
import first from "../../public/logos/web-nancy/first.svg"
import modifiable from "../../public/logos/web-nancy/modifiable.svg"
import performant from "../../public/logos/web-nancy/performant.svg"
import responsive from "../../public/logos/web-nancy/responsive.svg"
import speed from "../../public/logos/web-nancy/speed 1.svg"
import picture_site from "../../public/pictures/site/site_page.png"
import profil from "../../public/profil/profil_bryan.webp"


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Agence web | Création de sites et applications à baccarat',
    description: 'Bryan Parisot, développeur web freelance à baccarat spécialisé dans la création de sites internet et d\'applications web.',
    alternates: {
        canonical: `${process.env.URL_SITE}/agence-web-a-baccarat`
    }

}


const page = () => {

    const faqs = [
        {
            question: "Mon site sera-t-il adapté aux écrans mobiles et tablettes ?",
            answer:
                "Absolument. En tant que développeur web, je m'assure que votre site est entièrement compatible avec les écrans mobiles, tablettes et ordinateurs pour offrir une expérience utilisateur cohérente sur tous les appareils."
        },
        {
            question: "Combien coûte la création d'un site internet ?",
            answer:
                "Le coût varie en fonction de plusieurs facteurs tels que la complexité du site, les fonctionnalités requises et le niveau de personnalisation. Je propose des tarifs compétitifs et des solutions adaptées à différents budgets."
        },
        {
            question: "Combien de temps faut-il pour réaliser mon site internet ?",
            answer:
                "Le délai de réalisation dépend de la portée du projet. Pour des sites vitrines simples, le délai peut être relativement court, tandis que des projets plus complexes peuvent nécessiter plus de temps. Nous pouvons discuter des délais spécifiques lors de notre consultation."
        },
        {
            question: "Puis-je modifier moi-même le contenu de mon site après sa création ?",
            answer:
                " Oui, je propose généralement des solutions basées sur des CMS (systèmes de gestion de contenu) tels que WordPress, qui vous permettent de mettre à jour facilement le contenu de votre site sans nécessiter de compétences techniques avancées. Je fournirai également une formation si nécessaire."
        },
        {
            question: "Comment puis-je assurer la maintenance de mon site après sa création ?",
            answer:
                "Je propose des services de maintenance pour garantir que votre site fonctionne de manière optimale. Cela inclut les mises à jour, la sauvegarde régulière et la résolution des problèmes éventuels. Nous pouvons discuter d'un plan de maintenance adapté à vos besoins."
        },
    ];

    const advantage = [
        {
            title: "Visibilité sur Google à Baccarat", text: 'Améliorez votre positionnement sur les résultats de recherche locaux grâce à des techniques de référencement naturel ciblées.'
        },
        {
            title: "Vitrine ou boutique disponible 24/7", text: 'Offrez à votre entreprise une présence en ligne constante pour attirer de nouveaux clients à tout moment.'
        },
        {
            title: "Gagner de nouveaux clients", text: 'Optimisez votre site pour la conversion, attirant ainsi de nouveaux clients à Baccarat et au-delà.'
        },
        {
            title: "Gagner en crédibilité", text: 'Une présence en ligne professionnelle renforce la crédibilité de votre entreprise.'
        },
        {
            title: "Faciliter la communication", text: ' Utilisez des landing pages stratégiques pour faciliter la communication et l\'interaction avec votre public.'
        },
        {
            title: "Augmenter votre chiffre d'affaires", text: 'Exploitez le potentiel de l\'e- commerce pour stimuler votre croissance financière.'
        },
    ]

    const contentCards = [
        { title: "Création de sites internet à Baccarat", text: 'En tant que développeur web freelance à Baccarat, je m\'engage à être votre partenaire local pour la conception d\'un site internet unique et performant. Chaque site que je construis est une représentation professionnelle en ligne de votre entreprise, adaptée à vos besoins et à votre identité, offrant une expérience utilisateur exceptionnelle.', icon: logo_creation_site, link: '/creation-site-internet', bg: 'bg-amber-200', alt: "Icône création de site internet" },
        { title: "Refonte de site web à Baccarat", text: 'Offrez une nouvelle jeunesse à votre site web existant grâce à mon expertise en tant que développeur web indépendant à Baccarat. Je propose une modernisation complète, améliorant le design et l\'efficacité pour maintenir votre compétitivité locale.Découvrez comment je peux revitaliser votre présence en ligne.', icon: logo_refonte_site, link: '/creation-site-internet/refonte', bg: 'bg-blue-200', alt: "Icône refonte de site internet" },
        { title: "Applications web / SaaS à Baccarat", text: 'En qualité de développeur web freelance à Baccarat, je crée des applications web sur mesure et des logiciels en tant que service (SaaS) pour répondre à vos besoins professionnels locaux. Transformez vos idées en réalité numérique avec mon expertise en développement d\'applications web freelance basé à Baccarat.', icon: logo_sass_web, link: '/saas', bg: 'bg-green-200', alt: "Icône application web/saas" },
        { title: "Intégration de vos maquettes à Baccarat", text: 'Mon savoir-faire en tant que développeur web freelance à Baccarat assure une intégration parfaite de vos designs dans des solutions web fonctionnelles et esthétiques. Transformez vos idées visuelles en sites web et applications web interactifs grâce à mon expertise en intégration.', icon: logo_integration_maquette, link: '/integration', bg: 'bg-amber-200', alt: "Icône intégration de design" },
        { title: "Référencement Naturel - SEO à Baccarat", text: 'Optimisez votre visibilité en ligne à Baccarat grâce à mon expertise en référencement naturel (SEO). J\'optimise votre site web pour les moteurs de recherche, garantissant ainsi une meilleure visibilité, plus de trafic organique et des résultats durables.', icon: logo_referencement_seo, link: '/referencement-naturel-seo', bg: 'bg-blue-200', alt: "Icône optimisation pour les moteurs de recherche - SEO" },
        { title: "Référencement Sponsorisé - SEA à Baccarat", text: 'Boostez instantanément votre visibilité à Baccarat grâce à mon expertise en publicité en ligne (SEA). Je crée et gère des campagnes publicitaires ciblées pour maximiser votre présence sur les moteurs de recherche.', icon: logo_referencement_sea, link: '/referencement-sponsorise-sea', bg: 'bg-green-200', alt: "Icône publicité en ligne - SEA" },
        { title: "Web Design à Baccarat", text: 'Mon talent en tant que développeur web freelance à Baccarat est dédié à la création d\'expériences en ligne inoubliables. Je crois que le design va bien au-delà de l\'esthétique ; c\'est l\'art de créer des sites web qui suscitent l\'émotion, renforcent la crédibilité et génèrent des résultats tangibles.', icon: logo_design, link: '/web-design', bg: 'bg-amber-200', alt: "Icône conception web" },
    ];

    return (
        <main>
            <Header
                title="Agence web à Baccarat"
                subtitle="Agence web à Baccarat"
                text="En tant que développeur web freelance basé à Baccarat, je suis votre partenaire local pour la création de sites web uniques et performants. Avec une approche personnalisée, je m'engage à représenter votre entreprise de manière professionnelle en ligne, en intégrant soigneusement vos besoins et votre identité visuelle dans chaque aspect du site. Explorez mes services et découvrez comment nous pouvons façonner ensemble votre présence digitale."
                image={picture_site}
                alt="image png developpeur web"
            />
            <div className="sm:mt-20 sm:mb-20 mt-14 mb-14 px-5 sm:px-16">
                <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
                    Création de  <span className="text-emerald-600">sites internet et application</span> sur mesure à Baccarat
                </h2>

                <div className="sm:mt-20 mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 gap-5 justify-items-center">
                    {contentCards.map((card) => (
                        <HomeCards key={card.title} title={card.title} text={card.text} image={card.icon} alt={card.alt} link={card.link} bg={card.bg} />
                    ))}

                </div>
            </div>


            <div className="bg-emerald-900 w-full text-white mt-20 py-12 flex flex-col items-center ">
                <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-center"> Votre <span className="text-emerald-300 font-bold">site internet</span> clé-en-main à Baccarat qui fait la différence</h2>

                <div className="max-w-7xl space-y-10 sm:px-0 px-5">

                    <div className="flex flex-col-reverse items-center sm:flex-row w-full">
                        <div className="sm:w-2/3 space-y-4 flex flex-col justify-center w-full items-center sm:items-start" >
                            <h3 className="text-3xl font-bold">Site optimisé</h3>
                            <p>En choisissant mes services de développement web à Baccarat, votre site sera soigneusement optimisé pour garantir une performance maximale. De l'optimisation du code à la gestion des images, je m'assure que chaque détail est pris en compte pour une expérience utilisateur fluide.</p>
                        </div>
                        <div className="flex items-center justify-center w-1/3 sm:mb-0 mb-10 ">
                            <Image alt="optimisation" src={speed} />
                        </div>
                    </div>

                    <div className="flex flex-col-reverse items-center sm:flex-row-reverse w-full">
                        <div className="sm:w-2/3 space-y-4 flex flex-col justify-center w-full items-center sm:items-start" >
                            <h3 className="text-3xl font-bold">Site performant</h3>
                            <p>Votre site ne sera pas seulement une vitrine, mais une plateforme performante qui attire et retient les visiteurs. Avec des techniques de développement avancées, je m'efforce de créer des sites web rapides, réactifs et offrant une navigation intuitive.</p>
                        </div>
                        <div className="flex items-center justify-center w-1/3 sm:mb-0 mb-10 ">
                            <Image alt="optimisation" src={performant} />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse items-center sm:flex-row w-full">
                        <div className="sm:w-2/3 space-y-4 flex flex-col justify-center w-full items-center sm:items-start" >
                            <h3 className="text-3xl font-bold">Site responsive design</h3>
                            <p>La conception responsive design est une priorité absolue. Votre site s'ajustera automatiquement à tous les écrans, qu'il s'agisse d'ordinateurs de bureau, de tablettes ou de smartphones. Cela garantit une expérience utilisateur optimale, quel que soit l'appareil utilisé.</p>
                        </div>
                        <div className="flex items-center justify-center w-1/3 sm:mb-0 mb-10 ">
                            <Image alt="optimisation" src={responsive} />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse items-center sm:flex-row-reverse w-full">
                        <div className="sm:w-2/3 space-y-4 flex flex-col justify-center w-full items-center sm:items-start" >
                            <h3 className="text-3xl font-bold">Site modifiable</h3>
                            <p>Grâce à l'utilisation de systèmes de gestion de contenu (CMS) comme WordPress, vous pouvez facilement modifier et mettre à jour le contenu de votre site sans nécessiter de compétences techniques avancées. Je vous fournirai également une formation pour vous familiariser avec le processus.</p>
                        </div>
                        <div className="flex items-center justify-center w-1/3 sm:mb-0 mb-10 ">
                            <Image alt="optimisation" src={modifiable} />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse items-center sm:flex-row w-full">
                        <div className="sm:w-2/3 space-y-4 flex flex-col justify-center w-full items-center sm:items-start" >
                            <h3 className="text-3xl font-bold sm:text-left text-center">Site dans le top classement Google</h3>
                            <p>Mon approche inclut des techniques avancées de référencement naturel (SEO) pour maximiser la visibilité de votre site dans les résultats de recherche. Ensemble, visons le sommet du classement pour des termes clés tels que "création de site Baccarat", "création de site internet Baccarat", "site vitrine Baccarat" et "développeur web Baccarat"</p>
                        </div>
                        <div className="flex items-center justify-center w-1/3 sm:mb-0 mb-10 ">
                            <Image alt="optimisation" src={first} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-emerald-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Donnez vie à votre vision avec votre agence web à Baccarat
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        Cliquez ci-dessous pour commencer votre projet dès maintenant. Ensemble, nous pouvons créer une expérience web exceptionnelle qui captivera votre audience et propulsera votre activité vers de nouveaux sommets.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="https://calendly.com/bryanparisot-rdv/30min?month=2024-02"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Discuton de votre projet 30 min
                        </Link>
                        <Link href="/creation-site-internet" className="text-sm font-semibold leading-6 text-white">
                            Nos Services <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>


            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                            <div className="px-4 flex-auto">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center bg-emerald-100 py-10 rounded">
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <UserIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-3xl mb-2 font-semibold leading-normal">
                            A propos de moi
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                            Fort d'une expérience de 2 ans dans le domaine du développement web, je suis spécialiste dans l'écosystème JavaScript, avec une expertise approfondie dans les frameworks React/Next et Vue.js, ainsi que dans l'utilisation de Node.js. En tant qu'expert WordPress, je suis capable de créer des sites dynamiques et personnalisés. Ma flexibilité s'étend également à d'autres CMS selon vos préférences. Mon approche du développement est marquée par une passion pour la création, la résolution de problèmes et un engagement continu pour rester à la pointe des technologies émergentes.
                        </p>
                        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                            Ancien militaire, je porte les valeurs d'engagement, de rigueur et de discipline dans mon travail de développeur web. Mon expérience militaire m'a appris l'importance de la précision et de la méthodologie, des qualités que je mets en œuvre dans chaque projet. Cette approche rigoureuse se reflète aujourd'hui dans la qualité de mon travail. En tant que professionnel, je m'efforce d'apporter une attention méticuleuse aux détails, assurant ainsi des résultats fiables et performants pour mes clients.
                        </p>
                    </div>
                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                        <div className="relative flex flex-col min-w-0 break-words  w-full mb-2 shadow-lg rounded-lg bg-emerald-500">
                            <div className="w-full h-full">
                                <Image alt="..." src={profil} className="w-full align-middle rounded-t-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 space-y-5 px-5">
                <h2 className="text-2xl sm:text-4xl text-emerald-950 font-bold" >Pourquoi avoir un <span className="text-emerald-600">un site internet</span></h2>
                <p>Que vous cherchiez à renforcer votre visibilité sur Google à Baccarat ou à dynamiser votre présence en ligne, mes services de développement web sont conçus pour vous offrir des solutions sur mesure. En tant que développeur web chevronné basé à Baccarat, je vous propose une expertise complète, du développement de sites vitrines et boutiques en ligne à la création de landing pages percutantes.</p>
                <p className="text-lg font-semibold" >Optimisez votre visibilité sur Google à Baccarat <Link href="referencement-naturel-seo" className="underline text-emerald-600 font-bold">En savoir plus</Link></p>
                <p>Augmentez votre visibilité sur le moteur de recherche le plus utilisé avec des techniques de référencement naturel (SEO) adaptées à Baccarat. En collaborant avec moi, vous bénéficierez d'une meilleure position sur les résultats de recherche locaux, maximisant ainsi votre exposition en ligne.</p>
                <p className="text-lg font-semibold" >Propulsez votre entreprise avec une vitrine 24/7 <Link href="creation-site-internet/site-vitrine" className="underline text-emerald-600 font-bold">En savoir plus</Link></p>
                <p>Offrez à votre entreprise une vitrine en ligne accessible 24/7. Avec mes compétences en développement web, je crée des sites vitrines attrayants, assurant une présence constante pour attirer de nouveaux clients, renforcer votre crédibilité et augmenter votre chiffre d'affaires.</p>
                <p className="text-lg font-semibold" >Expérience E-commerce pour gagner de nouveaux clients <Link href="creation-site-internet/e-commerce" className="underline text-emerald-600 font-bold">En savoir plus</Link></p>
                <p>Explorez le potentiel de l'e-commerce avec des boutiques en ligne puissantes. Grâce à mes compétences en développement, je crée des boutiques en ligne optimisées pour la conversion, vous permettant de gagner de nouveaux clients, d'augmenter votre ca et de faire prospérer votre activité à Baccarat.</p>
                <p className="text-lg font-semibold" >Landing pages stratégiques pour une communication efficace <Link href="creation-site-internet/landing-page" className="underline text-emerald-600 font-bold">En savoir plus</Link></p>
                <p>Mes services incluent la création de landing pages stratégiques. Ces pages sont conçues pour convertir les visiteurs en clients potentiels, facilitant ainsi la communication et l'interaction avec votre audience cible.</p>
                <p className="text-lg font-semibold" >Optimisation et refonte pour un impact durable <Link href="creation-site-internet/refonte" className="underline text-emerald-600 font-bold">En savoir plus</Link></p>
                <p>En plus de la création, je propose également des services d'optimisation et de refonte pour maintenir votre site web à la pointe. Cette approche proactive garantit une expérience utilisateur optimale, renforçant ainsi votre crédibilité en ligne.</p>

                <div className="mt-5">
                    <h2 className="text-xl font-bold ">Les avantages d'avoir un <span className="text-emerald-600">site internet</span> </h2>
                    <div className="sm:mt-10 mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-10 gap-5 justify-items-center">
                        {
                            advantage.map((item, index) => (
                                <div key={index} className="space-y-4">
                                    <h3> <span className="text-white bg-emerald-600 px-3 py-2 font-bold text-lg rounded">{item.title}</span></h3>
                                    <p>{item.text}</p>
                                </div>

                            ))
                        }
                    </div>

                </div>

            </div>

            <Faq faq={faqs} />

            <BlogSection />

        </main>
    )
}

export default page