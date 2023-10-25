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


//LOGOS | PICTURES
import picture_site from "../../../public/pictures/site/site_page.png"

import logo_growth from "../../../public/logos/site/wordpress/logo_growth.svg"
import logo_responsive from "../../../public/logos/site/wordpress/logo_responsive.svg"
import logo_security from "../../../public/logos/site/wordpress/logo_security.svg"

import double_screen from "../../../public/pictures/site/vitrine/double_screen.png"
import vitrine_site from "../../../public/pictures/site/vitrine/vitrine_site.png"
import maintenance from "../../../public/pictures/site/wordpress/maintenance.png"
import CallToActionLight from '@/components/CTA/CallToActionLight'



export default function page() {

    const vitrineData = [
        {
            title: 'Adaptation à votre entreprise', text: 'Les landing pages sont conçues pour une seule action ou objectif, ce qui les rend hautement efficaces pour convaincre les visiteurs d\'effectuer cette action spécifique.Une landing page bien conçue est optimisée pour maximiser les conversions.', image: logo_responsive, alt: 'Logo responsive'
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
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Quelles sont les étapes clés pour créer un site web WordPress personnalisé ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Quels sont les coûts associés à la création d'un site WordPress ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Quelle est la différence entre une landing page et une page d'accueil ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
    ]


    return (
        <main>
            <Header
                title="Agence de création de site wordpress personnalisé"
                subtitle="Création d'un site wordpress personnalisé"
                text="Chez [Nom de Votre Entreprise], nous sommes convaincus que chaque visiteur de votre site web est une opportunité précieuse. C'est pourquoi nous nous sommes spécialisés dans la création de sites WordPress personnalisés qui captivent, convainquent et transforment ces visiteurs en clients fidèles."
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

                <div className='flex flex-col sm:flex-row mt-20 sm:max-h-[500px]  h-full'>
                    <div className="flex items-center sm:order-first sm:w-1/2 md:w-6/12">
                        <Image className="w-full h-full" src={double_screen} alt="Double Ecran illustration" />
                    </div>
                    <div className='w-full sm:w-3/6 space-y-4 px-8'>
                        <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                            Votre vision, notre expertise : Créez un site WordPress professionnel
                        </h2>
                        <p>
                            Chez [Nom de Votre Entreprise], nous comprenons que votre site web doit être une véritable extension de votre entreprise et de votre vision. C'est pourquoi nous nous spécialisons dans la création de sites WordPress personnalisés qui vous permettent de concrétiser vos idées en ligne.                        </p>
                        <p>
                            Que vous recherchiez une présence en ligne professionnelle, un blog percutant, une boutique e-commerce ou une solution complexe, notre équipe d'experts en développement WordPress est là pour vous. Nous collaborons étroitement avec vous pour comprendre vos objectifs, vos besoins et votre identité de marque, puis nous personnalisons chaque détail de votre site pour qu'il corresponde parfaitement à votre vision.                        </p>
                        <p>
                            Avec WordPress comme toile, nous donnons vie à vos idées avec des designs uniques, des fonctionnalités puissantes et une performance optimale. Découvrez comment nous pouvons transformer votre vision en réalité en créant un site WordPress personnalisé qui excelle en ligne.                        </p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:max-h-[500px] h-full mt-10 sm:mt-0'>
                    <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
                        <Image className="w-full h-full" src={vitrine_site} alt="Illustration d'un site vitrine" />
                    </div>
                    <div className='w-full sm:w-3/6 space-y-4 px-8 mt-5'>
                        <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                            Un Site WordPress Personnalisé à Votre Image
                        </h2>
                        <p>
                            Votre landing page est bien plus qu'une simple page web. C'est votre première impression en ligne, une opportunité de captiver vos visiteurs et de les inciter à prendre des mesures. Chez [Nom de Votre Entreprise], nous comprenons l'importance de créer une landing page qui reflète votre identité de marque, votre message unique et vos objectifs spécifiques.                        </p>
                        <p>
                            Notre équipe de designers et de développeurs travaille en étroite collaboration avec vous pour capturer l'essence de votre entreprise et la traduire en un design web exceptionnel. Nous croyons que chaque entreprise est unique, et votre site web devrait l'être aussi.
                        </p>
                        <p>
                            Faites confiance à notre expertise pour créer une landing page qui vous ressemble, une page qui communique avec succès votre histoire, vos valeurs et votre proposition de valeur. Découvrez comment nous pouvons vous aider à optimiser votre présence en ligne et à inciter vos visiteurs à passer à l'action.                        </p>
                    </div>
                </div>


            </div>
            <div className='sm:px-20 px-5'>
                <CallToAction />
            </div>

            <div className="px-5 sm:px-16 mb-10">

                <SectionEmerald image={maintenance} alt="représentation maintenance wordpress">
                    <div className='space-y-6'>
                        <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950'>
                            Garantissez la performance de votre site avec notre Service de maintenance WordPress                        </h2>
                        <p>
                            La maintenance régulière de votre site WordPress est essentielle pour assurer sa performance, sa sécurité et sa fiabilité. Chez [Nom de Votre Entreprise], nous proposons un service de maintenance WordPress complet qui vous permet de vous concentrer sur votre entreprise, en laissant notre équipe d'experts prendre soin de votre site.                        </p>
                        <p>
                            Notre service de maintenance comprend des mises à jour régulières, des sauvegardes sécurisées, une surveillance de la sécurité, la résolution des problèmes techniques et bien plus encore. Nous vous offrons la tranquillité d'esprit en veillant à ce que votre site WordPress fonctionne de manière optimale à tout moment.                        </p>
                        <p>
                            Découvrez comment notre service de maintenance WordPress peut vous aider à éviter les interruptions inattendues et à maintenir la qualité de votre présence en ligne.                        </p>
                        <div>
                            <Link href="/site/maintenance-wordpress">
                                <Button variant="primary">
                                    Découvrez nos services de maintenance WordPress ici.
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
