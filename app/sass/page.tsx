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


//LOGOS | PICTURES
import picture_site from "../../public/pictures/site/site_page.png"
import code from "../../public/pictures/saas/code.jpg"
import screen_code from "../../public/pictures/saas/screen_code.jpg"
import loupe from "../../public/logos/integration/loupe.svg"
import double_screen from "../../public/pictures/site/vitrine/double_screen.png"
import vitrine_site from "../../public/pictures/site/vitrine/vitrine_site.png"
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
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Quels sont les avantages des applications web et SaaS ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Qui contacter pour créer une application web ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Quel est le coût d'une application web ?",
            answer:
                "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
    ]


    const atouts = [
        {
            title: "Etude de votre projet", text: "Création, configuration, et gestion complète de campagnes publicitaires sur les moteurs de recherche, notamment Google Ads et Bing Ads.", logo: loupe, alt: "logo loupe"
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
                title="Solutions web & SaaS sur-mesure"
                subtitle="Transformez vos idées en réalité digitale"
                text="Bienvenue dans l'univers des applications web et SaaS sur-mesure. Chez [Nom de Votre Entreprise], nous faisons de la technologie un catalyseur pour la réalisation de vos ambitions. Nos équipes d'experts travaillent en étroite collaboration avec vous pour créer des solutions web innovantes et des logiciels SaaS parfaitement adaptés à vos besoins. Ensemble, nous transformons vos idées en réalité digitale, en fournissant des outils puissants qui stimulent la croissance de votre entreprise. Explorez notre gamme de services et découvrez comment nous pouvons façonner le futur de votre entreprise."
                image={picture_site}
                alt="image png developpeur web"
            />

            <div className="mt-10 mb-10">

                <div className='flex flex-row'>
                    <div className='w-3/6 p-10 relative mb-20'>
                        <div className='w-[500px]'>
                            <Image className='w-full h-full rounded' src={code} alt="Image de code" height={100} width={100} />
                        </div>
                        <div className='w-[500px] absolute top-40 right-1'>
                            <Image className='w-full h-full rounded' src={screen_code} alt="Capture d'écran code" height={100} width={100} />
                        </div>
                    </div>
                    <div className='w-3/6 space-y-6 p-10'>
                        <h2 className='text-2xl sm:text-4xl text-emerald-950 font-bold'>
                            Développeur <span className='text-emerald-600'>d'application web</span> sur mesure
                        </h2>
                        <p>
                            En tant que développeur d'application web sur mesure de premier plan, [Nom de Votre Entreprise] s'engage à créer des solutions numériques qui répondent précisément à vos besoins. Nous ne croyons pas en l'approche taille unique. Au contraire, notre équipe talentueuse de développeurs, de concepteurs et d'experts en technologie travaille en étroite collaboration avec vous pour concevoir des applications web totalement personnalisées. Que vous recherchiez une application web pour automatiser des processus métier, fournir une expérience client exceptionnelle ou optimiser la productivité de votre équipe, nous sommes là pour transformer vos idées en réalité. Découvrez comment notre expertise en développement sur mesure peut propulser votre entreprise vers de nouveaux sommets.
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-center my-10'>
                    <Button size="lg" variant="primary">Lancez-vous avec notre équipe</Button>
                </div>


                <div className='flex flex-col sm:flex-row mt-20 sm:max-h-[500px]  h-full'>
                    <div className="flex items-center sm:order-first sm:w-1/2 md:w-6/12">
                        <Image className="w-full h-full" src={double_screen} alt="Double Ecran illustration" />
                    </div>
                    <div className='w-full sm:w-3/6 space-y-6 px-8'>
                        <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                            Qu'est-ce qu'une <span className='text-emerald-600'> application Web ?</span>
                        </h2>
                        <p>
                            Une application web, souvent appelée simplement 'web app', est une application logicielle accessible via un navigateur web. Contrairement aux applications traditionnelles installées localement, les applications web ne nécessitent pas de téléchargement ni d'installation sur l'appareil de l'utilisateur. Elles sont hébergées sur des serveurs distants et accessibles en ligne.                        </p>
                        <p>
                            Les applications web offrent de nombreux avantages, notamment leur accessibilité depuis n'importe quel appareil connecté à Internet, qu'il s'agisse d'un ordinateur de bureau, d'une tablette ou d'un smartphone. Elles éliminent également les contraintes de compatibilité et de mises à jour, car les utilisateurs accèdent toujours à la version la plus récente de l'application.                        </p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:max-h-[500px] h-full mt-10 sm:mt-0'>
                    <div className="mb-8 flex items-center sm:order-last sm:w-1/2 md:w-6/12">
                        <Image className="w-full h-full" src={vitrine_site} alt="Illustration d'un site vitrine" />
                    </div>
                    <div className='w-full sm:w-3/6 space-y-4 px-8 mt-5 flex flex-col justify-center'>
                        <h2 className="mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950">
                            Une innovation au service de votre entreprise
                        </h2>
                        <p>
                            Chez [Nom de Votre Entreprise], nous croyons en l'importance d'une première impression mémorable en ligne. C'est pourquoi nous proposons des services de création de landing pages spécialisées conçues pour captiver instantanément vos visiteurs. Nos équipes de conception expérimentées travaillent en étroite collaboration avec vous pour créer des landing pages qui reflètent l'essence de votre entreprise, mettent en avant vos produits ou services, et encouragent les conversions. Mais ce n'est pas tout. Nous allons encore plus loin en vous offrant la possibilité de propulser ces landing pages grâce à notre expertise en SEA. En combinant une landing page de haute qualité avec une stratégie publicitaire ciblée, vous pouvez maximiser l'impact de votre campagne, attirer un public pertinent et obtenir des résultats concrets. Découvrez comment nos services de landing page et de SEA peuvent travailler ensemble pour renforcer votre présence en ligne et transformer les visiteurs en clients engagés.                        </p>

                        <div className='flex items-start justify-start'>
                            <Button size="lg" variant="primary" >Découvrir Nos Landing Pages</Button>
                        </div>
                    </div>
                </div>


                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20">
                    {
                        vitrineData.map((item) => (
                            <CardGeneral key={item.title} title={item.title} text={item.text} image={item.image} alt={item.alt} />
                        ))
                    }
                </div>



            </div>
            <div className='sm:px-20 px-5'>
                <CallToAction />
            </div>

            <div className="px-5 sm:px-16 mb-10">
                <h2 className='mt-2 text-2xl font-bold sm:text-left md:text-4xl text-emerald-950'>Nos étapes de réalisation d’une <span className='text-emerald-600'>application web</span> sur mesure</h2>

                <div className='bg-emerald-50 grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center px-5 sm:px-20 rounded-lg py-20'>

                    {
                        atouts.map((item) => (
                            <LittleCard key={item.title} title={item.title} text={item.text} logo={item.logo} alt={item.alt} />
                        ))
                    }

                </div>


                <SectionLogos title="Exemple de fonctionnalités que vous pouvez ajouter à votre site Wordpress personnalisé" />
                <BlogSection />

                <CallToActionLight />

                <Faq faq={faqs} />
            </div>

        </main>
    )
}
