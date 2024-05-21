
//COMPONENTS
import ArticlesPost from '@/components/BlogSection/ArticlesPost'
import Header from '@/components/Header/Header'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Metadata } from 'next'

//LOGOS | PICTURES

export const metadata: Metadata = {
  title: 'Blog Freelance : Explorez nos conseils, tendances et astuces pour le succès en ligne',
  description: "Découvrez des articles captivants et informatifs sur le blog de Bryan Parisot, développeur web freelance. Boostez vos connaissances, suivez les tendances du web design",
  alternates: {
    canonical: `${process.env.URL_SITE}/blog`
  }
}

export default function page() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main>
      <Header
        title="Le journal de bord de Bryan Parisot"
        subtitle="Astuces et trésors numériques du monde du développement web"
        text="Bienvenue sur le pont du navire digital du Capitaine Bryan Parisot. Dans notre Journal de Bord, vous trouverez des articles croustillants, des astuces éclairantes et des trésors numériques qui vous guideront à travers les mers du développement web. Abordez avec nous les sujets les plus passionnants du monde digital. Que vous soyez novice ou pirate chevronné, ces articles sont conçus pour tous les membres de notre équipage."
      />

      <div className="bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, idx) => (
              <ArticlesPost key={idx} {...post} />
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}
