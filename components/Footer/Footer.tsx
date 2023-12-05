import React from 'react'
import Link from 'next/link'

//COMPONENTS
import CallToActionFooter from '../CTA/CallToActionFooter'

const navigation = {
    contact: [
        { name: '07 50 96 65 22', href: 'tel:07 50 96 65 22' },
        { name: 'contact@bryanparisot.com', href: 'mailto:contact@bryanparisot.com' },
    ],
    plan_site: [
        { name: 'Création de sites internet', href: '/creation-site-internet' },
        { name: 'Refonte de site web', href: '/creation-site-internet/refonte' },
        { name: 'Applications web / SaaS', href: '/sass' },
        { name: 'Intégration de vos maquettes', href: '/integration' },
        { name: 'Référencement naturel - SEO', href: '/referencement-naturel-seo' },
        { name: 'Référencement sponsorisé - SEA', href: '/referencement-sponsorise-sea' },
        { name: 'Web design', href: '/web-design' },
    ],
    legal: [
        { name: 'Mentions-légales', href: '/legal/mentions-legales' },
        { name: 'Politique de confidentialité', href: '/legal/conditions-generales' },
    ],
    social: [
        {
            name: 'Linkedin',
            href: 'https://www.linkedin.com/in/bryan-parisot-a99b0a1b1/',
            icon: (props: any) => (
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
                    <path
                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/BryanParisot',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 25 25" width="25px" height="25px" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg >
            ),
        },
    ],
}


function Footer() {
    return (
        <footer className='bg-emerald-500 px-8 sm:px-20 pt-10'>
            <CallToActionFooter />
            <div className="mx-auto max-w-7xl px-0 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-20">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <h3 className="font-bold leading-6 text-white text-lg">Restons connecté</h3>
                        <p className="sm:text-base text-sm leading-6 text-emerald-50 pr-4">
                            Suivez-moi sur les réseaux sociaux pour rester informés des dernières tendances en développement web, référencement et bien plus encore. Rejoignez ma communauté en ligne et découvrez comment je peux vous aider à réussir sur le web en tant que développeur web freelance.
                        </p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <Link target='_blank' key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-3 sm:gap-9 gap-5 xl:col-span-2 xl:mt-0">
                        <div>
                            <h3 className="font-bold leading-6 text-white text-lg">Contact</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.contact.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold leading-6 text-white text-lg">Plan du site</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.plan_site.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold leading-6 text-white text-lg">Legal</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-emerald-100">&copy; 2023 tous droits reservé</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer