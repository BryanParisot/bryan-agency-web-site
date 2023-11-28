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
import { Button } from '@/components/ui/button'
import Link from 'next/link'


//LOGOS | PICTURES
import picture_site from "../../public/pictures/site/site_page.png"
import code from "../../public/pictures/saas/code.jpg"
import screen_code from "../../public/pictures/saas/screen_code.jpg"
import loupe from "../../public/logos/integration/loupe.svg"
import personalization from "../../public/logos/saas/personalization.svg"
import optimisation from "../../public/logos/saas/optimisation.svg"
import flexible from "../../public/logos/saas/flexible.svg"
import shield from "../../public/logos/saas/shield.svg"
import integration from "../../public/logos/saas/integration.svg"
import ux from "../../public/logos/site/refonte/logo_experience.svg"
import search from "../../public/logos/saas/search.svg"
import concept from "../../public/logos/saas/concept.svg"
import program from "../../public/logos/saas/program.svg"
import test from "../../public/logos/saas/test.svg"
import stamp from "../../public/logos/saas/stamp.svg"
import start from "../../public/logos/saas/start.svg"
import education from "../../public/logos/saas/education.svg"
import tools from "../../public/logos/saas/tools.svg"

import saas from "../../public/pictures/saas/saas.jpg"

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Développeur Web Freelance | Création d\'applications web et SaaS personnalisées',
    description: "Optez pour des applications web et SaaS sur mesure avec Bryan Parisot, développeur web freelance. Transformez vos idées en solutions numériques"
}




export default function page() {

    const vitrineData = [
        {
            title: 'Personnalisation totale', text: 'Les applications web sur mesure sont conçues pour répondre précisément aux besoins et aux objectifs de votre entreprise. Vous avez un contrôle total sur les fonctionnalités, l\'apparence et l\'expérience utilisateur.', image: personalization, alt: 'Logo personnalisation totale'
        },
        {
            title: 'Optimisation de l\'éfficacité', text: 'Une application web sur mesure est conçue pour automatiser les processus métier spécifiques à votre entreprise, ce qui peut entraîner une augmentation significative de l\'efficacité opérationnelle.', image: optimisation, alt: 'Logo optimisation'
        },
        {
            title: 'Scalabilité', text: 'Vous pouvez faire évoluer une application web sur mesure à mesure que votre entreprise se développe. Cela signifie que l\'application peut s\'adapter à de nouvelles exigences sans nécessiter de refonte majeure.', image: flexible, alt: 'logo tags'
        },
        {
            title: 'Sécurité renforcée', text: 'La sécurité est une préoccupation majeure pour de nombreuses entreprises. Les applications web sur mesure permettent de mettre en place des mesures de sécurité spécifiques pour protéger vos données et vos processus.', image: shield, alt: 'logo protection'
        },
        {
            title: 'Intégration Facile', text: 'Vous pouvez intégrer votre application web sur mesure avec d\'autres systèmes et applications que votre entreprise utilise déjà, améliorant ainsi la cohérence et la facilité d\'utilisation.', image: integration, alt: 'logo d\'intégration'
        },
        {
            title: 'Meilleure éxpérience client', text: 'En développant une application web qui répond aux besoins de vos clients, vous améliorez leur expérience. Cela peut se traduire par une satisfaction client accrue et une fidélité plus forte.', image: ux, alt: 'logo expérience utilisateurs'
        },
    ]

    const faqs = [
        {
            question: "Comment puis-je bénéficier d'une application web ou d'un SaaS ?",
            answer:
                "Pour bénéficier d'une application web ou d'un SaaS, vous devez suivre ces étapes : Définir vos besoins : Identifiez clairement ce que vous attendez de l'application, quelles fonctionnalités vous souhaitez, et les problèmes qu'elle doit résoudre.  Recherchez des développeurs : Cherchez des développeurs d'applications web expérimentés ou des entreprises spécialisées dans le développement de SaaS. Obtenez des recommandations si possible.  Consultez les experts : Discutez de vos besoins avec des experts en développement web. Ils vous aideront à choisir la meilleure solution pour votre projet.  Concevez l'application : Travaillez avec les développeurs pour concevoir l'application ou le SaaS, en vous assurant que les fonctionnalités répondent à vos besoins.  Développez et testez : Une fois la conception terminée, l'application est développée et testée pour s'assurer qu'elle fonctionne correctement.  Lancez et formez : Lorsque l'application est prête, elle est lancée et vous recevez une formation sur son utilisation.  Support et maintenance : Assurez-vous d'obtenir un support et une maintenance continus pour l'application afin qu'elle reste performante et sécurisée.",
        },
        {
            question: "Quels sont les avantages des applications web et SaaS ?",
            answer:
                "Les applications web et les SaaS offrent de nombreux avantages, notamment : Accessibilité : Vous pouvez accéder à l'application depuis n'importe quel appareil avec une connexion Internet.  Mises à jour automatiques : Les mises à jour sont gérées par les développeurs, ce qui garantit que vous disposez toujours de la dernière version de l'application.  Évolutivité : Les SaaS peuvent évoluer pour répondre à la croissance de votre entreprise.  Économie de coûts : Pas besoin d'investir dans l'infrastructure, les mises à jour matérielles, etc.  Collaboration : Les SaaS permettent une collaboration en temps réel avec des collègues et des clients.  Sécurité : Les SaaS sont généralement sécurisés et sauvegardés automatiquement.  Support technique : Vous bénéficiez généralement d'un support technique pour résoudre les problèmes rapidement.",
        },
        {
            question: "Qui contacter pour créer une application web ?",
            answer:
                "Pour créer une application web, vous pouvez contacter des développeurs web indépendants, des entreprises de développement web ou des agences spécialisées dans le développement d'applications. Il est essentiel de choisir des professionnels expérimentés et de vérifier leurs antécédents et leurs réalisations. Discutez de vos besoins spécifiques avec eux pour obtenir des devis et des recommandations adaptés à votre projet.",
        },
        {
            question: "Quel est le coût d'une application web ?",
            answer:
                "Le coût d'une application web varie en fonction de nombreux facteurs, notamment la complexité, les fonctionnalités, les technologies utilisées, le temps de développement et les besoins spécifiques du projet. Il est recommandé de demander des devis à plusieurs développeurs ou agences pour obtenir une idée précise du coût. Les applications web simples peuvent coûter quelques milliers d'euros, tandis que des projets plus complexes peuvent atteindre plusieurs dizaines de milliers d'euros ou plus.",
        },
    ];


    const atouts = [
        {
            title: "Etude de votre projet", text: "Création, configuration, et gestion complète de campagnes publicitaires sur les moteurs de recherche, notamment Google Ads.", logo: loupe, alt: "logo loupe"
        },
        {
            title: "Analyse des besoins", text: "Comprendre en profondeur les besoins de l'entreprise et des utilisateurs finaux. Il s'agit de recueillir des informations sur les fonctionnalités requises, les objectifs commerciaux, les contraintes budgétaires.", logo: search, alt: "logo appareil responsive"
        },
        {
            title: "Conception & design", text: "Sur la base des informations recueillies, les concepteurs et les développeurs travaillent ensemble pour créer une conception initiale de l'application. Cela comprend généralement la création de wireframes, de maquettes et d'une architecture de base.", logo: concept, alt: "logo cible"
        },
        {
            title: "Développement", text: "Une fois la conception approuvée, les développeurs commencent à coder l'application. Ils créent la structure de base, développent les fonctionnalités principales et intègrent les bases de données nécessaires.", logo: program, alt: "logo crayon"
        },
        {
            title: "Tests et Débogage", text: "L'application est soumise à des tests rigoureux pour identifier et corriger les erreurs, les bogues et les problèmes de performance. Des tests fonctionnels, de sécurité et de convivialité sont effectués à cette étape.", logo: test, alt: "logo audit"
        },
        {
            title: "Validation", text: "L'application est présentée aux parties prenantes pour validation. Les commentaires des utilisateurs et des clients sont pris en compte, et des ajustements sont apportés si nécessaire.", logo: stamp, alt: "logo crayon"
        },
        {
            title: "Déploiement", text: "Une fois que l'application a été validée et testée avec succès, elle est déployée sur les serveurs en production. Les utilisateurs peuvent maintenant accéder à l'application.", logo: start, alt: "logo crayon"
        },
        {
            title: "Formation", text: "Si nécessaire, une formation est dispensée aux utilisateurs finaux et aux administrateurs de l'application pour s'assurer qu'ils savent comment l'utiliser correctement.", logo: education, alt: "logo crayon"
        },
        {
            title: "Maintenance et Support", text: "Après le déploiement, l'application nécessite une maintenance continue pour assurer sa sécurité, sa stabilité et son évolutivité. Les éventuels problèmes sont résolus, et de nouvelles fonctionnalités peuvent être ajoutées au fil du temps.", logo: tools, alt: "logo crayon"
        },
    ]


    return (
        <main>
            <Header
                title="Solutions Web & SaaS sur-mesure"
                subtitle="Transformez vos idées en réalité digitale"
                text="Bienvenue dans l'univers des applications web et SaaS sur-mesure. En tant que développeur web freelance, je fais de la technologie un catalyseur pour la réalisation de vos ambitions. Travaillons ensemble pour créer des solutions web innovantes et des logiciels SaaS parfaitement adaptés à vos besoins. Ensemble, nous transformerons vos idées en réalité digitale, en fournissant des outils puissants qui stimuleront la croissance de votre entreprise. Explorez ma gamme de services et découvrez comment je peux façonner le futur de votre entreprise."
                image={picture_site}
                alt="Image PNG développeur web"
            />
            <div className='sm:px-20 px-5'>

                <div className="mt-10 mb-10">

                    <div className='flex flex-col sm:flex-row'>
                        <div className='w-full md:w-6/12 sm:w-3/6 sm:p-10 p-0 relative sm:mb-20 mb-10'>
                            <div className='w-[500px] hidden sm:block'>
                                <Image
                                    className='w-full h-full rounded'
                                    src={code}
                                    alt="Freelance developpeur sass" />
                            </div>
                            <div className='w-full h-full sm:w-[500px] sm:absolute top-40 right-1 flex items-center'>
                                <Image
                                    className='w-full h-full sm:rounded rounded-xl'
                                    src={screen_code}
                                    alt="Capture d'écran code" />
                            </div>
                        </div>
                        <div className='w-full sm:w-3/6 space-y-6 sm:p-10 p-0 px-0  sm:px-8'>
                            <h2 className='text-2xl sm:text-4xl text-emerald-950 font-bold'>
                                Développeur <span className='text-emerald-600'>d'application web</span> sur mesure
                            </h2>
                            <p>
                                En tant que <span className='font-bold'>développeur web freelance</span>  sur mesure de premier plan, je m'engage à créer des solutions numériques qui répondent précisément à vos besoins. Je ne crois pas en l'approche
                                taille unique. Au contraire, ma mission en tant que développeur freelance est de travailler en étroite collaboration avec vous pour concevoir des <span className='font-bold'>applications web</span>  totalement personnalisées. Que vous recherchiez une  <span className='font-bold'>applications web</span> pour automatiser des processus métier, fournir une expérience client exceptionnelle ou optimiser la productivité de votre équipe,
                                je suis là pour transformer vos idées en réalité. Découvrez comment mon expertise en développement sur mesure peut propulser votre entreprise vers de nouveaux sommets.
                            </p>
                            <div>
                                <Link href="/contact">
                                    <Button size="lg" variant="primary">Lancez-vous avec notre équipe</Button>
                                </Link>
                            </div>

                        </div>
                    </div>


                    <div className='flex flex-col sm:flex-row mt-36 sm:mt-44 sm:h-[50vh] h-full'>
                        <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
                            <Image
                                className="rounded-xl shadow-xl shadow-emerald-900/20 h-full"
                                src={saas}
                                alt="Double Ecran illustration" />
                        </div>
                        <div className='w-full sm:w-3/6 space-y-6 px-0 sm:px-8'>
                            <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                                Qu'est-ce qu'une <span className='text-emerald-600'> application Web ?</span>
                            </h2>
                            <p>
                                Une<span className='font-bold'>application web</span>, souvent appelée simplement '<span className='font-bold'>web app</span>', est une application logicielle accessible via un navigateur web. Contrairement aux applications traditionnelles installées localement, les <span className='font-bold'>applications web</span>  ne nécessitent pas de téléchargement ni d'installation sur l'appareil de l'utilisateur. Elles sont hébergées sur des serveurs distants et accessibles en ligne.                        </p>
                            <p>
                                Les <span className='font-bold'>applications web</span>  offrent de nombreux avantages, notamment leur accessibilité depuis n'importe quel appareil connecté à Internet, qu'il s'agisse d'un ordinateur de bureau, d'une tablette ou d'un smartphone. Elles éliminent également les contraintes de compatibilité et de mises à jour, car les utilisateurs accèdent toujours à la version la plus récente de l'application.                        </p>
                        </div>
                    </div>

                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-0 sm:px-20">
                        {
                            vitrineData.map((item) => (
                                <CardGeneral key={item.title} title={item.title} text={item.text} image={item.image} alt={item.alt} />
                            ))
                        }
                    </div>



                </div>
                <CallToAction />
            </div>

            <div className="mb-10">
                <div className='bg-emerald-50 flex items-center flex-col py-5 "px-5 sm:px-16'>
                    <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950 text-center'>
                        Nos étapes de réalisation d’une <span className='text-emerald-600'>application web</span> sur mesure
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-0 sm:px-20 rounded-lg py-12'>

                        {
                            atouts.map((item) => (
                                <LittleCard key={item.title} title={item.title} text={item.text} logo={item.logo} alt={item.alt} />
                            ))
                        }

                    </div>

                </div>

                <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre site Wordpress personnalisé" />

                <BlogSection />

                <CallToActionLight />

                <Faq faq={faqs} />
            </div>

        </main>
    )
}
