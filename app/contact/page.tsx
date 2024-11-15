import { Metadata } from 'next'

//COMPONENTS
import Header from '@/components/Header/Header'
import { BuildingOffice2Icon, PhoneIcon } from '@heroicons/react/24/outline'

//LOGOS | PICTURES
import Form from '@/components/Form/Form'


export const metadata: Metadata = {
    title: 'Contact - Bryan Parisot, Développeur Web Freelance à Nancy',
    description: "Besoin d'un coup de pouce ? Contactez Bryan Parisot, votre développeur web freelance. Ensemble, naviguons vers le succès de votre présence en ligne.",
    alternates: {
        canonical: `${process.env.URL_SITE}/contact`
    }
}

export default function integration() {
    return (
        <main>
            <Header
                title="Développeur web freelance - page contact"
                subtitle="Contactez Bryan Parisot, Développeur Web Freelance"
                text="Vous avez des questions, des projets à discuter ou simplement envie de dire bonjour ? N'hésitez pas à me contacter. Je suis là pour vous aider à concrétiser vos idées numériques. Remplissez le formulaire ci-dessous, et je vous répondrai dans les plus brefs délais. Ensemble, créons une présence en ligne qui vous démarque !"
            />
            
            <div className="relative isolate bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                            width={200}
                                            height={200}
                                            x="100%"
                                            y={-1}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                    </svg>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-emerald-900">Contactez Bryan Parisot, Développeur Web Freelance</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Vous souhaitez discuter de votre projet, avoir des conseils ou simplement échanger sur les possibilités qui s'offrent à vous ? N'hésitez pas à me contacter ! Remplissez le formulaire ci-dessous, et je me ferai un plaisir de vous répondre dans les plus brefs délais. Ensemble, donnons vie à votre présence en ligne
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        France
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                                            07 50 96 65 22
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </main>
    )
}
