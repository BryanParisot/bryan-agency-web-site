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
import CallToActionLight from '@/components/CTA/CallToActionLight'


//LOGOS | PICTURES
import picture_site from "../../../public/pictures/site/site_page.png"
import logo_growth from "../../../public/logos/site/wordpress/logo_growth.svg"
import logo_responsive from "../../../public/logos/site/wordpress/logo_responsive.svg"
import logo_security from "../../../public/logos/site/wordpress/logo_security.svg"
import maintenance_illustration from "../../../public/pictures/site/wordpress/maintenance_illustration.png"
import wp from "../../../public/pictures/site/wordpress/wp.jpg"
import wp_illu from "../../../public/pictures/site/wordpress/wp_il.jpg"



import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Développeur Web Freelance | Création de site wordpress - Pret à lever l\'ancre',
    description: "Découvrez l'univers unique de votre site WordPress avec Bryan Parisot, développeur web freelance. Créez une présence en ligne, naviguez vers le succès"
}


export default function page() {

    const vitrineData = [
        {
            title: 'Adaptation à votre entreprise', text: 'Un site web personnalisé est conçu spécifiquement pour répondre aux besoins uniques de votre entreprise. Il peut refléter votre identité de marque, s\'aligner sur vos objectifs commerciaux et intégrer les fonctionnalités spécifiques dont vous avez besoin.', image: logo_responsive, alt: 'Logo responsive'
        },
        {
            title: 'Performance et rapidité', text: 'Un site web personnalisé peut être optimisé pour la performance, la vitesse de chargement et la convivialité. Cela garantit une meilleure expérience utilisateur, ce qui peut influencer positivement le référencement, les taux de conversion et la fidélisation de la clientèle.', image: logo_growth, alt: 'Logo performance et rapidité'
        },
        {
            title: 'Contrôle total', text: 'Avec un site web personnalisé, vous avez un contrôle total sur votre site et son contenu. Vous n\'êtes pas dépendant des limitations imposées par les plates- formes de création de sites web.Vous pouvez également gérer la sécurité de votre site de manière proactive.', image: logo_security, alt: 'logo controle total'
        }
    ]

    const faqs = [
        {
            question: "Pourquoi devrais-je choisir WordPress pour la création de mon site web ?",
            answer:
                "WordPress est l'une des plateformes de gestion de contenu les plus populaires et polyvalentes, offrant de nombreux avantages. Il est convivial, ce qui signifie que vous pouvez facilement gérer le contenu de votre site. Il est hautement personnalisable, vous permettant de créer un site web unique. De plus, il propose une grande variété de thèmes et de plugins pour étendre les fonctionnalités de votre site. Enfin, WordPress est bien pris en charge avec une communauté active et des mises à jour régulières pour des performances optimales.",
        },
        {
            question: "Quelles sont les étapes clés pour créer un site web WordPress personnalisé ?",
            answer:
                "La création d'un site web WordPress personnalisé implique plusieurs étapes clés. Tout d'abord, vous devez définir vos objectifs et besoins spécifiques. Ensuite, choisissez un nom de domaine et un hébergeur web. Installez WordPress et sélectionnez un thème adapté à votre entreprise. Personnalisez le thème en fonction de vos préférences de design. Ajoutez des plugins pour ajouter des fonctionnalités supplémentaires. Enfin, créez et organisez votre contenu et assurez-vous que votre site est convivial.",
        },
        {
            question: "Quels sont les coûts associés à la création d'un site WordPress ?",
            answer:
                "Les coûts de création d'un site WordPress peuvent varier en fonction de vos besoins. Les éléments à prendre en compte comprennent le coût de l'hébergement, le nom de domaine, les thèmes ou plugins premium, les services de développement ou de conception, et les coûts de maintenance. Il est essentiel de planifier votre budget en fonction de ces éléments et de choisir des options en fonction de vos priorités et de vos ressources financières.",
        },
        {
            question: "Quelle est la différence entre une landing page et une page d'accueil ?",
            answer:
                "Une page d'accueil est la page principale de votre site web et agit comme une introduction globale à votre entreprise. Elle présente souvent un aperçu de l'ensemble de votre site. En revanche, une landing page est une page spécifiquement conçue pour une campagne marketing ou publicitaire. Elle a un objectif précis, tel que la capture de leads ou la promotion d'un produit. Les landing pages sont souvent épurées et axées sur l'appel à l'action pour encourager les visiteurs à effectuer une action spécifique.",
        },
    ];


    return (
        <main>
            <Header
                title="Développeur web freelance créateur de site wordpress personnalisé"
                subtitle="Création d'un site wordpress personnalisé"
                text="  En tant que développeur web freelance, je suis convaincu que chaque visiteur de votre site web est une opportunité précieuse. C'est pourquoi je me spécialise dans la création de sites WordPress personnalisés qui captivent, convainquent et transforment ces visiteurs en clients fidèles."
                image={picture_site}
                alt="image png developpeur web"
            />

            <div className="mt-10 mb-10">
                <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
                    Les avantages de créer <span className="text-emerald-600">un site wordpress professionnel</span>
                </h2>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
                    {
                        vitrineData.map((item) => (
                            <CardGeneral key={item.title} title={item.title} text={item.text} image={item.image} alt={item.alt} />
                        ))
                    }
                </div>
                <div className='sm:px-20 px-5'>

                    <div className='flex flex-col sm:flex-row mt-20 sm:h-[50vh] h-full'>
                        <div className="mb-8 flex items-center sm:order-first sm:w-1/2 md:w-6/12">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={wp}
                                alt="Freelance créateur de site wordpress" />
                        </div>
                        <div className='w-full sm:w-3/6 space-y-4 px-0 sm:px-8'>
                            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                                Votre vision, mon expertise : Créez un site <span className='text-emerald-600'>WordPress professionnel</span>
                            </h2>
                            <p>
                                En tant que développeur web freelance, je comprends que votre site web doit être une véritable extension de votre entreprise et de votre vision. C'est pourquoi je me spécialise dans la création de  <span className="font-bold">sites WordPress personnalisés</span> qui vous permettent de concrétiser vos idées en ligne.
                            </p>
                            <p>
                                Que vous recherchiez une présence en ligne professionnelle, un blog percutant, une boutique e-commerce ou une solution complexe, je suis là pour vous. Je collabore étroitement avec vous pour comprendre vos objectifs, vos besoins et votre identité de marque, puis je personnalise chaque détail de votre site pour qu'il corresponde parfaitement à votre vision.
                            </p>
                            <p>
                                Avec <span className="font-bold"> WordPress </span> comme toile, je donne vie à vos idées avec des designs uniques, des fonctionnalités puissantes et une performance optimale. Découvrez comment je peux transformer votre vision en réalité en créant un <span className="font-bold"> site WordPress personnalisé </span> qui excelle en ligne.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row mt-20 sm:h-[52vh] h-full'>
                        <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={wp_illu}
                                alt="Illustration d'un site vitrine" />
                        </div>
                        <div className='w-full sm:w-3/6 space-y-4 px-0 sm:px-8 mt-0 sm:mt-5'>
                            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                                Un site <span className='text-emerald-600' >WordPress personnalisé</span> à votre image
                            </h2>
                            <p>
                                En tant que développeur web freelance, je crois en la création de sites WordPress qui sont fidèles à votre vision et à votre identité en ligne.
                            </p>
                            <p>
                                Que vous cherchiez à transmettre un message professionnel, à partager vos idées créatives, à vendre des produits ou à présenter une plateforme unique, je suis là pour personnaliser chaque aspect de votre site <span className="font-bold">WordPress</span>. Nous collaborons étroitement pour capturer l'essence de votre entreprise, en intégrant des éléments de design, des fonctionnalités et un contenu qui reflètent parfaitement qui vous êtes.
                            </p>
                            <p>
                                Mon objectif est de créer un site  <span className="font-bold">WordPress</span>  personnalisé qui vous ressemble, qui parle à votre public cible et qui vous aide à atteindre vos objectifs en ligne. Découvrez comment je peux transformer votre vision en réalité et créer une présence en ligne qui vous distingue.
                            </p>
                        </div>
                    </div>
                </div>
                <CallToAction />
            </div>

            <div className="mb-10">

                <SectionEmerald image={maintenance_illustration} alt="représentation maintenance wordpress">
                    <div className='space-y-6'>
                        <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950'>
                            Garantissez la performance de votre site avec mon service de maintenance WordPress
                        </h2>
                        <p>
                            La <span className='font-bold'>maintenance</span> régulière de votre site web est essentielle pour assurer sa performance, sa sécurité et sa fiabilité. En tant que développeur web freelance, je propose un service complet de <span className='font-bold'>maintenance WordPress</span>  qui vous permet de vous concentrer sur votre entreprise, en laissant mon expertise prendre soin de votre site.
                        </p>
                        <p>
                            Mon service de <span className='font-bold'>maintenance</span> comprend des mises à jour régulières, des sauvegardes sécurisées, la surveillance de la sécurité, la résolution des problèmes techniques et bien plus encore. Je vous offre la tranquillité d'esprit en veillant à ce que votre site WordPress fonctionne de manière optimale à tout moment.
                        </p>
                        <p>
                            Découvrez comment mon service de <span className='font-bold'>maintenance WordPress</span>  peut vous aider à éviter les interruptions inattendues et à maintenir la qualité de votre présence en ligne.
                        </p>
                        <div>
                            <Link href="/creation-site-internet/maintenance-wordpress">
                                <Button variant="primary">
                                    Découvrez notre de maintenance WordPress.
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SectionEmerald>
                <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre site Wordpress personnalisé" />
                <BlogSection />

                <CallToActionLight />

                <Faq faq={faqs} />
            </div>

            

        </main>
    )
}
