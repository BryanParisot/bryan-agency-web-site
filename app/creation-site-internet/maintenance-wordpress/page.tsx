import Image from 'next/image'

//COMPONENTS
import Header from '@/components/Header/Header'
import CardGeneral from '@/components/Cards/CardGeneral'
import CallToAction from '@/components/CTA/CallToAction'
import SectionLogos from '@/components/Section/SectionLogos'
import BlogSection from '@/components/BlogSection/BlogSection'
import Faq from '@/components/FAQ/Faq'
import SectionEmerald from '@/components/Section/SectionEmerald'
import CallToActionLight from '@/components/CTA/CallToActionLight'
import { Button } from '@/components/ui/button'


//LOGOS | PICTURES
import picture_site from "../../../public/pictures/site/site_page.png"

import logo_securite from "../../../public/logos/site/maintenance/logo_securite.svg"
import logo_performance from "../../../public/logos/site/maintenance/logo_performance.svg"
import logo_stress from "../../../public/logos/site/maintenance/logo_stress.svg"

import wordpress_maintenance from "../../../public/pictures/site/wordpress/wordpress_maintenance.jpg"
import wordpress_maintenance_menu from "../../../public/pictures/site/wordpress/wordpress_maintenance_menu.jpg"
import maintenance_illustration from "../../../public/pictures/site/wordpress/maintenance_illustration.png"


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Développeur Web Freelance | Maintenance wordpress à Nancy',
    description: "Assurez la pérennité de votre site WordPress avec notre service de maintenance à Nancy. Bryan Parisot, développeur web freelance, veille à la performance, sécurité",
    alternates: {
        canonical: `${process.env.URL_SITE}/creation-site-internet/maintenance-wordpress`
    }
}



export default function page() {

    const vitrineData = [
        {
            title: "Sécurité Renforcée",
            text: "Confiez-moi la sécurité de votre site WordPress. En tant que développeur web freelance, je mets en place des mesures de sécurité avancées pour protéger votre site contre les menaces en ligne. J'assure une surveillance en temps réel et réagis rapidement en cas de problème, vous évitant ainsi les soucis liés aux failles de sécurité potentielles.",
            image: logo_securite,
            alt: "Logo expérience utilisateur",
        },
        {
            title: "Performance Optimisée",
            text: "Votre site doit fonctionner rapidement et sans accroc pour offrir la meilleure expérience utilisateur possible. En tant que développeur web freelance, j'excelle dans l'optimisation des performances WordPress. J'effectue des ajustements pour garantir une vitesse de chargement optimale, ce qui peut avoir un impact direct sur la satisfaction de vos visiteurs.",
            image: logo_performance,
            alt: "Logo référencement naturel",
        },
        {
            title: "Économie de Temps et de Stress",
            text: "En me confiant la maintenance de votre site WordPress, vous gagnez du temps et évitez le stress lié à la gestion des mises à jour, des sauvegardes et des problèmes techniques. En tant que développeur web freelance, je vous permet de vous concentrer sur le développement de votre entreprise, sachant que votre site est entre de bonnes mains.",
            image: logo_stress,
            alt: "Logo marketing",
        },
    ]

    const faqs = [
        {
            question: "Pourquoi la maintenance de site WordPress est-elle importante ?",
            answer:
                "La maintenance de site WordPress est essentielle pour assurer le bon fonctionnement de votre site, la sécurité, et la performance. Elle permet de corriger les erreurs, de mettre à jour les plugins, de surveiller la sécurité, et de sauvegarder les données. En maintenant votre site à jour, vous évitez les vulnérabilités potentielles et garantissez une expérience utilisateur optimale. Une maintenance régulière contribue également à prévenir les pannes et à assurer la conformité avec les dernières normes du web.",
        },
        {
            question: "À quelle fréquence devrais-je effectuer la maintenance de mon site WordPress ?",
            answer:
                "La fréquence de la maintenance dépend des besoins spécifiques de votre site. En général, il est recommandé de procéder à des mises à jour de sécurité, de plugins et de thèmes dès qu'elles sont disponibles. Les sauvegardes devraient être effectuées régulièrement, par exemple, une fois par semaine. La surveillance de la sécurité devrait être continue. Certaines tâches peuvent être automatisées, tandis que d'autres nécessitent une vérification manuelle. Il est préférable de mettre en place un plan de maintenance pour suivre les activités régulières.",
        },
        {
            question: "Comment choisir un service de maintenance WordPress ?",
            answer:
                "Le choix d'un service de maintenance WordPress doit se baser sur plusieurs critères. Recherchez des fournisseurs de services de maintenance réputés avec une expérience avérée dans la gestion de sites WordPress. Vérifiez leurs offres de services, y compris la fréquence des mises à jour, les protocoles de sécurité, et le support client. Assurez-vous qu'ils sont en mesure de personnaliser leurs services en fonction de vos besoins spécifiques. Demandez des références et lisez les avis d'autres clients. Enfin, comparez les tarifs pour trouver le meilleur rapport qualité-prix.",
        },
        {
            question: "Combien coûte la maintenance de site WordPress en moyenne ?",
            answer:
                "Les coûts de maintenance de site WordPress peuvent varier en fonction de la complexité de votre site et des services inclus. Les prix peuvent aller de quelques dizaines de dollars par mois à plusieurs centaines de dollars par mois. Les forfaits de maintenance comprennent généralement des mises à jour de sécurité, des sauvegardes régulières, une surveillance de la sécurité, et un support en cas de problème. Le coût peut également varier en fonction de la fréquence des mises à jour et du niveau de personnalisation. Il est important de trouver un service de maintenance qui correspond à vos besoins et à votre budget.",
        },
    ];


    return (
        <main>
            <Header
                title="Développeur web freelance - Maintenance Wordpress à Nancy"
                subtitle="Services de maintenance pour votre site WordPress : Votre garantie de performances optimales"
                text="En tant que développeur web freelance spécialisé dans WordPress, je comprends l'importance de maintenir votre site en parfait état de fonctionnement. Je m'engage à vous offrir des services de maintenance complets et rigoureux pour garantir que votre site fonctionne à son meilleur, à tout moment."
                image={picture_site}
                alt="image png developpeur web"
            />

            <div className="mt-10 mb-10">
                <h2 className="text-center text-2xl sm:text-4xl text-emerald-950 font-bold" >
                    Les avantages de me laisser <span className="text-emerald-600">le service de maintenance</span>
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
                                src={wordpress_maintenance}
                                alt="Freelance wordpress" />
                        </div>
                        <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8'>
                            <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-4xl text-emerald-950">
                                Liste des  <span className="text-emerald-600" >services de maintenance</span>
                            </h2>
                            <p>
                                En tant que développeur web freelance, je comprends que la maintenance de votre site web est une décision cruciale. Je suis prêt à vous montrer pourquoi choisir mes services est la meilleure option pour assurer la performance, la sécurité et la fiabilité continues de votre site.                            </p>
                            <div className='flex flex-row'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>1</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Mises à jour régulières :  </span> En tant que développeur web freelance, j'assure une gestion proactive des mises à jour pour maintenir la compatibilité et la sécurité de votre site.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>2</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Sécurité renforcée : </span> En tant que développeur web freelance, je surveille en permanence votre site pour prévenir les menaces et réagir rapidement en cas d'incident.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col xl:flex-row mt-20 xl:h-[52vh] h-full'>
                        <div className="mb-8 flex items-center justify-center xl:order-last xl:w-1/2 w-full">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={wordpress_maintenance_menu}
                                alt="Freelance wordpress" />
                        </div>
                        <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8 mt-0 xl:mt-5'>
                            <div className='flex flex-row mt-2'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>3</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Sauvegardes Automatisées : </span> En tant que développeur web freelance, je protège vos données grâce à des sauvegardes régulières.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>4</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Optimisation des performances : </span> En tant que développeur web freelance, j'améliore constamment la vitesse et la réactivité de votre site pour offrir une expérience utilisateur exceptionnelle.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>5</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Support technique réactif : </span> En tant que développeur web freelance, je suis prêt à intervenir rapidement en cas de problème pour résoudre tout souci technique sur votre site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <CallToAction />
            </div>

            <div className="mb-10">

                <SectionEmerald image={maintenance_illustration} alt="représentation maintenance wordpress">
                    <div className='space-y-6 flex-col flex justify-evenly '>
                        <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950'>
                            Pourquoi la maintenance d’un site WordPress est indispensable ?
                        </h2>
                        <p>
                            La maintenance d'un site WordPress est bien plus qu 'une simple tâche technique, c'est la clé pour assurer la sécurité, la performance et la fiabilité de votre présence en ligne. Notre équipe d'experts veille constamment sur votre site, appliquant des mises à jour cruciales, effectuant des sauvegardes régulières et surveillant les menaces potentielles. Grâce à notre service de maintenance, votre site reste en parfait état de fonctionnement, laissant une impression positive sur vos visiteurs et renforçant votre crédibilité en ligne.
                        </p>
                        <Button variant="primary">Contactez-moi</Button>
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
