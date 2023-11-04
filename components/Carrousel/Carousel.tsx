"use client"

import React, { RefObject, useEffect, useRef, useState } from 'react';
import HomeCards from '../Cards/HomeCards';
import { motion } from 'framer-motion';


import logo_creation_site from "../../public/logos/nav/logo_html.svg"
import logo_refonte_site from "../../public/logos/nav/logo_refonte.svg"
import logo_sass_web from "../../public/logos/nav/logo_sass.svg"
import logo_integration_maquette from "../../public/logos/nav/logo_intégration.svg"
import logo_referencement_seo from "../../public/logos/nav/logo_seo.svg"
import logo_referencement_sea from "../../public/logos/nav/logo_sea.svg"
import logo_design from "../../public/logos/nav/logo_design.svg"


const Carousel = () => {

    const data = [
        { title: "Création de Sites Internet", text: 'Notre équipe expérimentée concevra un site web unique et optimisé, représentant votre entreprise de manière professionnelle en ligne. Nous intégrons vos besoins et votre identité dans chaque aspect du site pour offrir une expérience utilisateur exceptionnelle', icon: logo_creation_site, link: '/site', bg: 'bg-amber-200', alt: "Icone création de site internet" },
        { title: "Refonte de Site Web", text: 'Donnez une nouvelle vie à votre site web existant. Notre équipe de professionnels de la refonte web travaillera pour moderniser votre site, améliorer son design et son efficacité, et vous aider à rester compétitif en ligne. Découvrez comment nous pouvons revitaliser votre présence sur le web', icon: logo_refonte_site, link: '/site/refonte', bg: 'bg-blue-200', alt: "Icone refonte de site internet" },
        { title: "Applications Web / SaaS", text: 'Notre équipe crée des applications web sur mesure et des logiciels en tant que service (SaaS) pour répondre à vos besoins professionnels. Transformez vos idées en réalité numérique avec notre expertise en développement d\'applications web.', icon: logo_sass_web, link: '/sass', bg: 'bg-green-200', alt: "Icone application web/sass" },
        { title: "Intégration de Vos Maquettes", text: 'Notre équipe experte assure une parfaite intégration de vos maquettes dans des solutions web fonctionnelles et esthétiques. Transformez vos idées visuelles en sites web et applications web interactifs grâce à notre savoir-faire en intégration.', icon: logo_integration_maquette, link: '/integration', bg: 'bg-amber-200', alt: "Icone intégration de maquette" },
        { title: "Référencement Naturel - SEO", text: 'Maximisez votre visibilité en ligne avec notre expertise en référencement naturel (SEO). Nous optimisons votre site web pour les moteurs de recherche, ce qui signifie une meilleure visibilité, plus de trafic organique et des résultats durables.', icon: logo_referencement_seo, link: '/referencement-naturel-seo', bg: 'bg-blue-200', alt: "Icone référencement naturel SEO" },
        { title: "Référencement Sponsorisé - SEA", text: 'Boostez votre visibilité instantanément grâce à notre expertise en référencement sponsorisé (SEA). Nous créons et gérons des campagnes publicitaires ciblées pour maximiser votre présence sur les moteurs de recherche.', icon: logo_referencement_sea, link: '/referencement-sponsorise-sea', bg: 'bg-green-200', alt: "Icone référencement Sponsorisé - SEA", },
        { title: "Web Design ", text: 'Notre équipe de web designers talentueux se consacre à la création d\'expériences en ligne inoubliables. Nous croyons que le design va bien au-delà de l\'esthétique ; c\'est l\'art de créer des sites web qui suscitent l\'émotion, renforcent la crédibilité et génèrent des résultats tangibles.', icon: logo_design, link: '/web-design', bg: 'bg-amber-200', alt: "Icone web design", },
    ]

    const carousel = useRef<HTMLDivElement | null>(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0);
    }, [])

    return (
        <div className='relative mt-12' >
            <h2 className='text-center sm:text-4xl font-bold text-emerald-950 mb-12 text-2xl'>Découvrez nos <span className='text-emerald-600'>solutions web</span>  sur mesure</h2>
            <motion.div ref={carousel} className="cursor-grab overflow-auto sm:overflow-hidden h-full" whileTap={{ cursor: 'grabbing' }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className='sm:flex grid grid-cols-1 justify-items-center gap-10 h-auto sm:gap-5'
                >
                    {data.map((item: any, index: any) => (
                        <motion.div
                            key={index}
                            className='sm:min-w-[440px] sm:h-[400px] carousel-slide'
                        >
                            <HomeCards
                                title={item.title}
                                text={item.text}
                                image={item.icon}
                                alt={item.alt}
                                link={item.link}
                                bg={item.bg}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div >
    );
};

export default Carousel;
