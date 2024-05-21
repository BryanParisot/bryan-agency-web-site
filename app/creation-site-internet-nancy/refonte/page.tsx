import Image from 'next/image'
import Link from 'next/link'

//COMPONENTS
import BlogSection from '@/components/BlogSection/BlogSection'
import CallToAction from '@/components/CTA/CallToAction'
import CallToActionLight from '@/components/CTA/CallToActionLight'
import CardGeneral from '@/components/Cards/CardGeneral'
import Faq from '@/components/FAQ/Faq'
import Header from '@/components/Header/Header'
import SectionEmerald from '@/components/Section/SectionEmerald'
import SectionLogos from '@/components/Section/SectionLogos'
import { Button } from '@/components/ui/button'


//LOGOS | PICTURES

import logo_experience from "../../../public/logos/site/refonte/logo_experience.svg"
import logo_market from "../../../public/logos/site/refonte/logo_market.svg"
import logo_seo from "../../../public/logos/site/refonte/logo_seo.svg"
import refonte from "../../../public/pictures/site/refonte/refonte.jpg"
import refonte_1 from "../../../public/pictures/site/refonte/refonte1.jpg"
import maintenance_illustration from "../../../public/pictures/site/wordpress/maintenance_illustration.png"


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Développeur Web Freelance | Refonte de site web et application à Nancy',
    description: "Donnez une nouvelle vie à votre site web avec notre service de refonte web. Bryan Parisot, développeur web freelance.",
    alternates: {
        canonical: `${process.env.URL_SITE}/creation-site-internet-nancy/refonte`
    }
}



export default function page() {

    const vitrineData = [
        {
            title: 'Amélioration de l\'expérience utilisateur', text: 'La refonte de site permet d\'améliorer l\'expérience globale des visiteurs. Vous pouvez moderniser le design, simplifier la navigation, rendre le site plus convivial sur les appareils mobiles, et optimiser la vitesse de chargement. Cela contribue à réduire le taux de rebond, à augmenter le temps passé sur le site, et à fidéliser les visiteurs.', image: logo_experience, alt: 'Logo experience utilisateur'
        },
        {
            title: 'Optimisation pour les moteurs de recherche', text: 'Une refonte bien planifiée offre l\'opportunité d\'optimiser votre site pour les moteurs de recherche. Vous pouvez mettre à jour les balises meta, les mots-clés, le contenu et la structure des liens pour améliorer la visibilité de votre site dans les résultats de recherche. Cela peut entraîner une augmentation du trafic organique et de la visibilité.', image: logo_seo, alt: 'Logo référencement naturel'
        },
        {
            title: 'Alignement sur les tendances actuels', text: 'Les objectifs et les tendances en ligne évoluent avec le temps. Une refonte vous permet de vous aligner sur les objectifs actuels de votre entreprise et sur les attentes de votre public. Vous pouvez intégrer de nouvelles fonctionnalités, mettre en avant des produits ou des services spécifiques.', image: logo_market, alt: 'logo  market'
        }
    ]

    const faqs = [
        {
            question: "Quand faut-il envisager une refonte de site web ?",
            answer:
                "Une refonte de site web est envisagée lorsque votre site actuel ne répond plus à vos besoins, n'est pas à jour sur le plan du design ou de la technologie, ou ne parvient pas à atteindre ses objectifs. Cela peut être dû à des changements dans votre entreprise, à l'évolution des attentes de vos clients, ou à des problèmes de performance. Il est essentiel de considérer une refonte lorsque vous souhaitez améliorer l'expérience des utilisateurs, augmenter la visibilité de votre site, ou renforcer votre image de marque.",
        },
        {
            question: "Quel est le coût moyen d'une refonte de site web ?",
            answer:
                "Le coût moyen d'une refonte de site web peut varier considérablement en fonction de la taille et de la complexité du projet. Les coûts peuvent inclure la conception, le développement, la migration de contenu, le référencement, etc. Pour avoir une idée plus précise des coûts, il est recommandé de demander des devis personnalisés à des agences ou des développeurs web qualifiés. Le coût dépendra également de la portée de la refonte et des fonctionnalités souhaitées.",
        },
        {
            question: "Combien de temps prend une refonte de site web ?",
            answer:
                "La durée d'une refonte de site web dépend de plusieurs facteurs, notamment la complexité du projet, la taille du site, et la disponibilité des ressources. Une refonte peut prendre de quelques semaines à plusieurs mois. Il est essentiel de planifier soigneusement chaque étape du processus, de la conception à la mise en ligne, pour minimiser les retards. La communication avec l'équipe de développement est également cruciale pour respecter les délais.",
        },
        {
            question: "Comment choisir une agence de refonte de site web ?",
            answer:
                "Le choix d'une agence de refonte de site web doit se baser sur divers facteurs. Il est essentiel de vérifier les antécédents de l'agence, d'examiner ses précédents travaux, et de demander des références. Assurez-vous que l'agence comprend bien vos besoins et objectifs, et qu'elle propose des solutions sur mesure. Les compétences en conception, développement, référencement et expérience utilisateur sont également des critères importants. Enfin, établissez un budget réaliste pour votre projet et assurez-vous que l'agence peut respecter vos contraintes financières.",
        },
    ];


    return (
        <main>
            <Header
                title="Développeur web freelance - refonte de site web à Nancy"
                subtitle="Donnez un nouveau souffle à votre site ou application web à Nancy "
                text="En tant que développeur web freelance basé à Nancy, je suis convaincu que chaque visiteur de votre site web est une opportunité précieuse. C'est pourquoi je me suis spécialisé dans la refonte de sites web qui réinvente l'expérience en ligne."
            />

            <div className="mt-10 mb-10">
                <h2 className="text-center text-3xl sm:text-5xl text-gray-950 font-bold font-anton line tracking-wider sm:px-0 px-4" >
                    Pourquoi mettre en place <span className="text-primary">la refonte de son site web</span>
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
                        <div className="mb-8 flex items-center justify-center xl:order-first xl:w-1/2 ">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={refonte}
                                alt="Double Ecran illustration" />
                        </div>
                        <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8'>
                            <h2 className="mt-2 text-2xl font-bold xl:text-left md:text-5xl text-gray-950 font-anton line tracking-wider">
                                Pourquoi me confier la <span className="text-primary">refonte de votre site web ?</span>
                            </h2>
                            <p>
                                En tant que développeur web freelance, je comprends que la refonte de votre site web est une décision importante, et je suis prêt à vous montrer pourquoi je suis le choix idéal pour cette tâche cruciale.
                            </p>
                            <div className='flex flex-row'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>1</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Expertise Complète :</span> En tant que développeur web freelance, je mets à votre disposition une expertise complète en conception, développement web et marketing numérique. Fort de ma vaste expérience, je maîtrise les dernières technologies et tendances pour vous offrir un site à la pointe de l'industrie.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>2</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Approche personnalisée :</span> En tant que développeur web freelance, je rejette l'approche unique pour tous. Chaque entreprise étant unique, je personnalise chaque refonte en fonction de vos besoins spécifiques. Votre site sera conçu pour refléter votre identité de marque et atteindre vos objectifs commerciaux.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col xl:flex-row mt-20 xl:h-[52vh] h-full'>
                        <div className="mb-8 flex items-center justify-center xl:order-last xl:w-1/2 w-full">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={refonte_1}
                                alt="Illustration d'un site vitrine" />
                        </div>
                        <div className='w-full xl:w-3/6 space-y-4 px-0 xl:px-8 mt-0 xl:mt-5'>
                            <div className='flex flex-row mt-2'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>3</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Optimisation pour les résultats :</span> Mon objectif ultime en tant que développeur web freelance est de vous aider à obtenir des résultats tangibles. J'optimise chaque aspect de votre site pour améliorer la conversion, le référencement et la performance, vous permettant ainsi d'atteindre vos objectifs en ligne.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>4</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Engagement envers la qualité :</span> En tant que développeur web freelance, je crois en la qualité à chaque étape du processus. De la planification à la mise en œuvre, je vise l'excellence pour vous offrir un site web qui fait impression et fonctionne sans faille.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row mt-2'>
                                <div className='h-10 w-10 bg-emerald-200 rounded-full flex items-center justify-center mr-4'>5</div>
                                <div className='w-5/6'>
                                    <p>
                                        <span className='font-extrabold'>Soutien continu :</span> Mon engagement envers votre succès va au-delà de la refonte. Je vous assure un soutien continu, des mises à jour de sécurité régulières et des services de maintenance pour garantir la pérennité et la performance optimale de votre site web.
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
                    <div className='space-y-6'>
                        <h2 className='mt-2 text-4xl font-bold sm:text-left md:text-5xl text-gray-950 font-anton line tracking-wider'>
                            Nouveau <span className="text-primary">site ou refonte de site internet :</span> quel est le meilleur choix pour votre entreprise ?
                        </h2>
                        <p>
                            <Link href="/creation-site-internet-nancy" className='font-extrabold underline'>Création d'un nouveau site :</Link> Si vous lancez une nouvelle entreprise, la création d'un nouveau site web est souvent la meilleure option. Cela vous permet de partir d'une feuille blanche pour construire une présence en ligne qui reflète parfaitement votre vision et vos objectifs. En tant que développeur web freelance, je suis spécialisé dans la conception et le développement de sites entièrement personnalisés pour répondre à vos besoins.
                        </p>
                        <p>
                            <Link href="/creation-site-internet-nancy/refonte" className='font-extrabold underline'>Refonte de site existant :</Link> Si vous possédez déjà un site web, une refonte peut être la solution idéale pour le moderniser, l'optimiser et le rendre plus performant. Elle peut également s'avérer nécessaire si votre site actuel ne respecte pas les normes actuelles en matière de design, de convivialité ou de référencement. En tant que développeur web freelance, je travaille sur chaque détail pour améliorer l'expérience utilisateur et atteindre vos objectifs en ligne.
                        </p>
                        <div>
                            <Link href="/creation-site-internet-nancy">
                                <Button variant="primary">
                                    Services de création de site internet
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SectionEmerald>

                <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre refonte de site internet" />

                <BlogSection />

                <CallToActionLight />

                <Faq faq={faqs} />
            </div>

        </main>
    )
}
