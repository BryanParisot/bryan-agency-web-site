import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function CallToActionFooter() {
    return (
        <div className='bg-emerald-800 h-96 rounded-xl flex flex-row justify-center items-center'>
            <div className='aboslute mr-10'>
                <div className='relative right-10 bg-emerald-50 shadow rounded-lg h-72 w-72'></div>
            </div>
            <div className='space-y-5 pr-96'>
                <h2 className='text-4xl font-bold text-emerald-50 '>Découvrez Comment Nous Pouvons Booster Votre Présence en Ligne</h2>
                <p className='text-emerald-50 text-lg'>Contactez-nous dès aujourd'hui pour discuter de vos besoins en développement web, référencement, applications web et plus encore. Notre équipe est prête à vous aider à naviguer vers le succès numérique</p>
                <Link href="/contact"> <Button className='mt-10' variant="primary" size="lg" >Contactez-nous</Button></Link>
            </div>
        </div>
    )
}

export default CallToActionFooter