import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CallToActionLight = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-20 space-y-5'>
            <h3 className='text-4xl font-bold text-emerald-800'>
                N’hésitez plus contactez-nous
            </h3>
            <p className='text-center'>
                Chez [Nom de Votre Entreprise], nous croyons que l'expérience en ligne peut être une aventure familiale. Explorez notre gamme de services, des sites web personnalisés aux landing pages persuasives, et découvrez comment toute la famille peut se joindre à l'excitation de la présence en ligne.
            </p>
            <Link href="/contact">
                <Button size="lg" variant="primary">
                    Commencez votre aventure
                </Button>
            </Link>
        </div>
    )
}

export default CallToActionLight