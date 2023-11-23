
//COMPONENTS
import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header/Header'

//LOGOS | PICTURES
import picture_site from "../../public/pictures/site/site_page.png"
import BlogSection from '@/components/BlogSection/BlogSection'

export const metadata: Metadata = {
  title: 'Blog Freelance : Explorez nos conseils, tendances et astuces pour le succès en ligne',
  description: "Découvrez des articles captivants et informatifs sur le blog de Bryan Parisot, développeur web freelance. Boostez vos connaissances, suivez les tendances du web design"
}


export default function page() {
  return (
    <main>
      <Header
        title="Le journal de bord de Bryan Parisot"
        subtitle="Explorez les récits, astuces et trésors numériques du monde du développement web"
        text="Bienvenue sur le pont du navire digital du Capitaine Bryan Parisot. Dans notre Journal de Bord, vous trouverez des articles croustillants, des astuces éclairantes et des trésors numériques qui vous guideront à travers les mers du développement web. Abordez avec nous les sujets les plus passionnants du monde digital. Que vous soyez novice ou pirate chevronné, ces articles sont conçus pour tous les membres de notre équipage. Mettez les voiles et plongez dans le monde fascinant du développement web avec le Capitaine Bryan Parisot !"
        image={picture_site}
        alt="image png developpeur web"
      />

      <BlogSection />

    </main>
  )
}
