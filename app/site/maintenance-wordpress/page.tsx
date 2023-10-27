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

import logo_securite from "../../../public/logos/site/maintenance/logo_securite.svg"
import logo_performance from "../../../public/logos/site/maintenance/logo_performance.svg"
import logo_stress from "../../../public/logos/site/maintenance/logo_stress.svg"

import double_screen from "../../../public/pictures/site/vitrine/double_screen.png"
import vitrine_site from "../../../public/pictures/site/vitrine/vitrine_site.png"
import maintenance from "../../../public/pictures/site/wordpress/maintenance.png"
import CallToActionLight from '@/components/CTA/CallToActionLight'



export default function page() {

    const vitrineData = [
        {
            title: 'Sécurité renforcée', text: 'Laissez-nous prendre en charge la sécurité de votre site WordPress. Notre équipe met en place des mesures de sécurité avancées pour protéger votre site contre les menaces en ligne. Nous surveillons en temps réel et réagissons rapidement en cas de problème, ce qui vous évite les soucis liés aux failles de sécurité potentielles.', image: logo_securite, alt: 'Logo experience utilisateur'
        },
        {
            title: 'Performance optimisée', text: 'Votre site doit fonctionner rapidement et sans accroc pour offrir la meilleure expérience utilisateur possible. Nous sommes experts en optimisation des performances WordPress. Nous effectuons des ajustements pour garantir une vitesse de chargement optimale, ce qui peut avoir un impact direct sur la satisfaction de vos visiteurs et sur le classement de votre site dans les moteurs de recherche.', image: logo_performance, alt: 'Logo référencement naturel'
        },
        {
            title: 'Economie de temps et de stress', text: 'En nous confiant la maintenance de votre site WordPress, vous gagnez du temps et évitez le stress lié à la gestion des mises à jour, des sauvegardes et des problèmes techniques. Vous pouvez vous concentrer sur le développement de votre entreprise, sachant que votre site est entre de bonnes mains.', image: logo_stress, alt: 'logo  market'
        }
    ]

    const faqs = [
        {
            question: "Pourquoi la maintenance de site WordPress est-elle importante ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "À quelle fréquence devrais-je effectuer la maintenance de mon site WordPress ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Comment choisir un service de maintenance WordPress ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Combien coûte la maintenance de site WordPress en moyenne ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
    ]


    return (
        <main>
            <Header
                title="Agence de maintenance Wordpress"
                subtitle="Services de maintenance de site WordPress : Votre garantie de performances optimal"
                text="Chez [Nom de Votre Entreprise], nous comprenons l'importance de maintenir votre site WordPress en parfait état de fonctionnement. Notre équipe dédiée de professionnels WordPress est là pour vous offrir des services de maintenance complets et rigoureux, afin de garantir que votre site fonctionne à son meilleur, à tout moment.
"
                image={picture_site}
                alt="image png developpeur web"
            />

            <div className="mt-10 mb-10">
                <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
                    Les avantages de nous laisser <span className="text-emerald-600">le service de maintenance</span>
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
                    <div className='w-full sm:w-3/6 space-y-6 px-8'>
                        <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                            Liste des services de maintenance
                        </h2>
                        <p>
                            Chez [Nom de Votre Entreprise], nous comprenons que la maintenance de votre site web est une décision importante, et nous sommes prêts à vous montrer pourquoi nous sommes le choix idéal pour cette tâche cruciale.
                        </p>
                        <div className='flex flex-row'>
                            <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>1</div>
                            <div className='w-5/6'>
                                <p>
                                    <span className='font-extrabold'>Mises à jour régulières :  </span> Nous assurons une gestion proactive des mises à jour pour maintenir la compatibilité et la sécurité de votre site.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>2</div>
                            <div className='w-5/6'>
                                <p>
                                    <span className='font-extrabold'>Sécurité renforcée : </span> Notre équipe de sécurité surveille en permanence votre site pour prévenir les menaces et réagir rapidement en cas d'incident.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:max-h-[500px] h-full mt-10 sm:mt-0'>
                    <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
                        <Image className="w-full h-full" src={vitrine_site} alt="Illustration d'un site vitrine" />
                    </div>
                    <div className='w-full sm:w-3/6 space-y-6 px-8 mt-5 flex flex-col justify-center'>
                        <div className='flex flex-row mt-2'>
                            <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>3</div>
                            <div className='w-5/6'>
                                <p>
                                    <span className='font-extrabold'>Sauvegardes Automatisées : </span> Vos données sont précieuses. Nous les protégeons grâce à des sauvegardes régulières.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row mt-2'>
                            <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>4</div>
                            <div className='w-5/6'>
                                <p>
                                    <span className='font-extrabold'>Optimisation des performances : </span> Nous améliorons constamment la vitesse et la réactivité de votre site pour offrir une expérience utilisateur exceptionnelle.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row mt-2'>
                            <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>5</div>
                            <div className='w-5/6'>
                                <p>
                                    <span className='font-extrabold'>Support technique réactif  : </span> En cas de problème, notre équipe est prête à intervenir rapidement pour résoudre tout souci technique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='sm:px-20 px-5'>
                <CallToAction />
            </div>

            <div className="px-5 sm:px-16 mb-10">

                <SectionEmerald image={maintenance} alt="représentation maintenance wordpress">
                    <div className='space-y-6 flex-col flex justify-center'>
                        <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950'>
                            Pourquoi la maintenance d’un site WordPress est indispensable ?
                        </h2>
                        <p>
                            La maintenance d'un site WordPress est bien plus qu'une simple tâche technique, c'est la clé pour assurer la sécurité, la performance et la fiabilité de votre présence en ligne. Notre équipe d'experts veille constamment sur votre site, appliquant des mises à jour cruciales, effectuant des sauvegardes régulières et surveillant les menaces potentielles. Grâce à notre service de maintenance, votre site reste en parfait état de fonctionnement, laissant une impression positive sur vos visiteurs et renforçant votre crédibilité en ligne.                        </p>
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
