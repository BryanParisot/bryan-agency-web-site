"use client"

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import logo_creation_site from "../../public/logos/nav/logo_html.svg"
import logo_refonte_site from "../../public/logos/nav/logo_refonte.svg"
import logo_sass_web from "../../public/logos/nav/logo_sass.svg"
import logo_integration_maquette from "../../public/logos/nav/logo_intégration.svg"
import logo_referencement_seo from "../../public/logos/nav/logo_seo.svg"
import logo_referencement_sea from "../../public/logos/nav/logo_sea.svg"




const solutions = [
    { name: 'Création de site internet', description: 'Transformez votre vision en réalité en ligne', href: '/site', icon: logo_creation_site, alt: "Icone création de site internet", bg: 'bg-amber-200' },
    { name: 'Refonte site web', description: 'Modernisez et optimisez votre présence en ligne', href: '/site/refonte', icon: logo_refonte_site, alt: "Icone refonte de site internet", bg: 'bg-amber-200' },
    { name: 'Application Web/Sass', description: "Des solutions web sur mesure pour votre entreprise", href: '/sass', icon: logo_sass_web, alt: "Icone application web/sass", bg: 'bg-green-200' },
    { name: 'Integration de vos maquettes', description: 'Donnez vie à vos conceptions avec notre expertise en intégration', href: '/integration', icon: logo_integration_maquette, alt: "Icone intégration de maquette", bg: 'bg-green-200' },
    { name: 'Référencement Naturel - SEO', description: 'Optimisez votre visibilité en ligne grâce à notre expertise en SEO.', href: '/referencement-naturel-seo', icon: logo_referencement_seo, alt: "Icone référencement naturel SEO", bg: 'bg-blue-200' },
    { name: 'Référencement Sponsorisé - SEA', description: 'Augmentez votre visibilité instantanément avec notre stratégie SEA', href: '/referencement-sponsorise-sea', icon: logo_referencement_sea, alt: "Icone référencement Sponsorisé - SEA", bg: 'bg-blue-200' },
]

export default function Menu() {
    return (
        <Popover className="relative">
            <div className="flex justify-between font-semibold leading-6 text-emerald-900 hover:text-emerald-700">
                <Popover.Button className="inline-flex items-center gap-x-1 ">
                    <span>Nos services</span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                </Popover.Button>
                <Link href="/blog" > <span>Ressources</span> </Link>
                <Link href="/realisation" > <span>Réalisation</span> </Link>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                            {solutions.map((item) => (
                                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                    <div className={`${item.bg} mt-1 px-1 py-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg`}>
                                        {/* <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" /> */}
                                        <Image src={item.icon} height={100} width={100} alt={item.alt} />
                                    </div>
                                    <div>
                                        <Link href={item.href} className="font-semibold text-gray-900 focus-visible:outline">
                                            <span> {item.name}</span>
                                            <span className="absolute inset-0" />
                                        </Link>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 px-8 py-6">
                            <div className="flex items-center gap-x-3">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Bry-Agency</h3>
                                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">New</p>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                N'hesitez pas à prendre contact pour embarquer dans le navire.
                            </p>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover >
    )
}
