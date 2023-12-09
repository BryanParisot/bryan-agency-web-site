import React from 'react'

import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Nos Réalisations - Bryan Parisot, Développeur Web Freelance',
  description: "Découvrez nos réalisations chez Bryan Parisot, développeur web freelance. Parcourez nos projets et imaginez le potentiel numérique de votre entreprise.",
  alternates: {
    canonical: `${process.env.URL_SITE}/realisation`
  }

}



export default function page() {
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <h2 className='mb-10 text-6xl font-bold text-emerald-950'>En cours de construction... </h2>
      <iframe src="https://giphy.com/embed/3oKIPnAiaMCws8nOsE" width="457" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </div>
  )
}
