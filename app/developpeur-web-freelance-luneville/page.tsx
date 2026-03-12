import Header from '@/components/Header/Header'
import Faq from '@/components/FAQ/Faq'
import { Button } from '@/components/ui/button'
import { getCanonicalUrl } from '@/lib/site-config'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Creation site internet Luneville | Freelance web',
  description:
    'Creation de site internet a Luneville pour artisans, PME et independants. Site vitrine, WordPress, SEO et maintenance.',
  alternates: {
    canonical: getCanonicalUrl('/developpeur-web-freelance-luneville'),
  },
}

const services = [
  'Creation de site vitrine pour presenter votre activite et rassurer vos prospects.',
  'Creation de site WordPress a Luneville pour garder la main sur vos contenus.',
  'Refonte de site internet existant pour moderniser votre image et mieux convertir.',
  'Optimisation SEO locale pour remonter sur Google sur Luneville et les communes voisines.',
  'Maintenance, mises a jour, sauvegardes et accompagnement dans la duree.',
]

const achievements = [
  'Sites vitrines pour independants et petites entreprises souhaitant une presence en ligne claire et professionnelle.',
  'Pages locales optimisees pour ameliorer la visibilite sur des recherches geographiques.',
  'Projets WordPress penses pour etre simples a administrer et faciles a faire evoluer.',
]

const pricing = [
  'Site vitrine simple: a partir d un budget adapte a une petite structure qui veut un site propre, rapide et convaincant.',
  'Site WordPress personnalise: budget plus complet pour un site internet professionnel Luneville avec plusieurs pages, contenus structures et options SEO.',
  'Maintenance et accompagnement: formule mensuelle ou intervention ponctuelle selon vos besoins.',
]

const faqItems = [
  {
    question: 'Combien coute la creation d un site internet ?',
    answer:
      "Le tarif depend du nombre de pages, du niveau de personnalisation, des contenus a integrer et des besoins SEO. Un devis permet de cadrer un budget coherent avec votre objectif business.",
  },
  {
    question: 'Combien de temps pour creer un site ?',
    answer:
      "Un site simple peut etre mis en ligne en quelques semaines. Un projet plus complet avec redaction, SEO et structure plus avancee demande davantage de temps, mais chaque etape est planifiee clairement.",
  },
  {
    question: 'Pourquoi choisir WordPress ?',
    answer:
      "WordPress est une solution souple, evolutive et pratique pour gerer un site professionnel. Il permet de modifier facilement les textes, les images et certaines pages sans dependre du developpeur pour chaque changement.",
  },
  {
    question: 'Un site internet peut-il apporter des clients ?',
    answer:
      "Oui, a condition d etre pense pour convertir. Un bon site attire un trafic qualifie, rassure rapidement, montre votre offre et facilite la prise de contact ou la demande de devis.",
  },
  {
    question: 'Puis-je modifier mon site moi-meme ?',
    answer:
      "Oui. Si vous choisissez une creation site WordPress Luneville, vous pourrez modifier une grande partie de votre contenu. Je peux aussi vous montrer comment le faire proprement.",
  },
]

const highlightCards = [
  {
    title: 'Positionnement local',
    text: 'Une page pensee pour la requete creation site internet Luneville, avec une structure claire et des contenus utiles pour vos prospects.',
  },
  {
    title: 'Image professionnelle',
    text: 'Un site internet professionnel Luneville doit rassurer vite, clarifier votre offre et faciliter la prise de contact.',
  },
  {
    title: 'Logique business',
    text: 'Le site n est pas la pour faire joli. Il doit soutenir votre activite, vos demandes de devis et votre visibilite locale.',
  },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-anton text-3xl tracking-[0.03em] text-slate-950 sm:text-5xl">
      {children}
    </h2>
  )
}

export default function Page() {
  return (
    <main>
      <Header
        title="Creation site internet Luneville"
        subtitle="Creation de site internet a Luneville"
        text="Site vitrine, WordPress, SEO local et maintenance pour artisans, PME, commerçants et independants a Luneville."
      />

      <div className="px-5 pb-20 pt-10 sm:px-10 xl:px-16">
        <div className="mx-auto max-w-6xl">
          <section className="grid gap-6 lg:grid-cols-[1.25fr_0.7fr]">
            <div className="rounded-[2rem] border border-black/8 bg-white/95 p-8 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.28)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Creation site internet Luneville
              </p>
              <h1 className="mt-4 font-anton text-4xl tracking-[0.03em] text-slate-950 sm:text-6xl">
                Cr&eacute;ation de site internet &agrave; Lun&eacute;ville
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-700">
                Vous cherchez un professionnel pour la <strong>cr&eacute;ation site internet Lun&eacute;ville</strong> ?
                Je vous accompagne pour concevoir un site clair, rapide et pens&eacute; pour g&eacute;n&eacute;rer des
                demandes de contact. Que vous soyez artisan, commer&ccedil;ant, PME ou ind&eacute;pendant, l enjeu n est pas
                seulement d avoir un site en ligne. L enjeu est d avoir un
                <strong> site internet professionnel Lun&eacute;ville</strong> capable de rassurer, d expliquer votre offre et
                d attirer de nouveaux clients. Mon approche est simple&nbsp;: une structure lisible, un design
                propre, des contenus orient&eacute;s business et une base SEO solide pour vous aider &agrave; exister
                localement face &agrave; la concurrence. Si vous recherchez une solution plus humaine, plus souple et
                plus directe qu une grosse structure, je vous propose une <strong>cr&eacute;ation site web Lun&eacute;ville</strong>
                sur mesure, adapt&eacute;e &agrave; vos objectifs et &agrave; votre budget.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Demandez votre devis gratuit pour la cr&eacute;ation de votre site internet &agrave; Lun&eacute;ville.
                  </Button>
                </Link>
                <Link href="/creation-site-internet-nancy">
                  <Button size="lg" variant="outline">
                    Voir mes services web
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-slate-950 p-8 text-white shadow-[0_30px_80px_-52px_rgba(15,23,42,0.55)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary/70">
                Ce que vous obtenez
              </p>
              <ul className="mt-6 space-y-5">
                {highlightCards.map((card) => (
                  <li key={card.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <h2 className="text-xl font-semibold text-white">{card.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-secondary/70 p-8 shadow-sm sm:p-10">
            <SectionTitle>
              Pourquoi cr&eacute;er un site internet pour son entreprise &agrave; Lun&eacute;ville
            </SectionTitle>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5 text-base leading-8 text-slate-700">
                <p>
                  A Lun&eacute;ville, beaucoup d entreprises fonctionnent encore principalement par bouche-&agrave;-oreille.
                  Cela peut suffire un temps, mais cela limite aussi votre capacit&eacute; &agrave; etre trouv&eacute; par de
                  nouveaux prospects. Lorsqu un client cherche un artisan, un prestataire ou un commerce local, il
                  passe d abord par Google. Sans site, vous laissez la place &agrave; vos concurrents.
                </p>
                <p>
                  Une <strong>cr&eacute;ation site internet Lun&eacute;ville</strong> bien pens&eacute;e ne sert pas seulement &agrave; etre
                  pr&eacute;sent en ligne. Elle sert &agrave; structurer votre communication, centraliser vos informations,
                  rassurer vos prospects et vous rendre plus visible localement. C est aussi un outil de travail qui
                  peut vous faire gagner du temps.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6">
                <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                  <li>Vous gagnez en cr&eacute;dibilit&eacute; face &agrave; vos concurrents locaux.</li>
                  <li>Vous devenez visible sur les recherches Google li&eacute;es &agrave; votre activit&eacute;.</li>
                  <li>Vous pouvez pr&eacute;senter clairement vos services, vos prix ou votre zone d intervention.</li>
                  <li>Vous facilitez la prise de contact pour les habitants de Lun&eacute;ville et des alentours.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>
                Cr&eacute;ation de site internet professionnel &agrave; Lun&eacute;ville
              </SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Un <strong>site internet professionnel Lun&eacute;ville</strong> doit aller au-del&agrave; d une simple carte de
                  visite. Il doit traduire votre positionnement, mettre en avant votre expertise et simplifier le
                  parcours du visiteur.
                </p>
                <p>
                  Je travaille chaque projet avec une logique business&nbsp;: un message clair d&egrave;s les premiers
                  &eacute;crans, des pages faciles &agrave; lire, des appels &agrave; l action visibles et une structure pens&eacute;e pour
                  rassurer. En pratique, cela veut dire un site rapide, responsive, bien hi&eacute;rarchis&eacute; et simple &agrave;
                  utiliser sur mobile comme sur ordinateur.
                </p>
                <p>
                  Si vous h&eacute;sitez entre un freelance local et une <strong>agence web Lun&eacute;ville</strong>, l enjeu est
                  souvent le meme&nbsp;: trouver quelqu un capable d allier qualit&eacute; technique, vision strat&eacute;gique et
                  relation simple.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-primary/5 p-8 shadow-sm sm:p-10">
              <SectionTitle>
                Cr&eacute;ation de site WordPress &agrave; Lun&eacute;ville
              </SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  La <strong>cr&eacute;ation site WordPress Lun&eacute;ville</strong> est souvent le meilleur choix pour une petite
                  entreprise qui veut un site solide, &eacute;volutif et simple &agrave; administrer.
                </p>
                <p>
                  Je con&ccedil;ois des sites WordPress sur mesure pour &eacute;viter l effet mod&egrave;le standard. L id&eacute;e est de
                  construire une base propre qui vous ressemble, r&eacute;ponde &agrave; vos objectifs et reste simple &agrave; faire
                  &eacute;voluer.
                </p>
                <ul className="list-disc space-y-3 pl-6">
                  <li>Gestion simple des textes, images et pages.</li>
                  <li>Bonne base pour le SEO local et la cr&eacute;ation de contenu.</li>
                  <li>Solution adapt&eacute;e &agrave; une croissance progressive de votre activit&eacute;.</li>
                  <li>Maintenance possible pour garder un site sain et &agrave; jour.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>
              Cr&eacute;ation de site internet pour artisans et PME
            </SectionTitle>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Les artisans, commer&ccedil;ants, professions lib&eacute;rales et petites entreprises locales n ont pas besoin
                d un site compliqu&eacute;. Ils ont besoin d un site utile. Une page d accueil claire, une pr&eacute;sentation
                des services, des preuves de confiance, une zone d intervention, un moyen simple de vous
                contacter et un bon positionnement local suffisent souvent &agrave; faire la diff&eacute;rence.
              </p>
              <p>
                Dans le cadre d une <strong>cr&eacute;ation site internet Lun&eacute;ville</strong>, je m adapte &agrave; votre r&eacute;alit&eacute; de
                terrain. Votre site doit soutenir votre activit&eacute;, pas devenir une contrainte suppl&eacute;mentaire.
              </p>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>
                R&eacute;f&eacute;rencement SEO pour entreprises de Lun&eacute;ville
              </SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
                <p>
                  Un site sans visibilit&eacute; locale peut avoir du mal &agrave; produire des r&eacute;sultats. C est pourquoi la
                  <strong> cr&eacute;ation site web Lun&eacute;ville</strong> doit etre li&eacute;e &agrave; une vraie logique SEO.
                </p>
                <p>
                  Le but est d aider votre entreprise &agrave; se positionner sur les recherches li&eacute;es &agrave; votre activit&eacute;
                  et &agrave; votre zone g&eacute;ographique&nbsp;: Lun&eacute;ville, Nancy, Baccarat, Saint-Nicolas-de-Port et plus
                  largement la Meurthe-et-Moselle.
                </p>
                <p>
                  Cette logique peut aussi s articuler avec des pages connexes comme
                  <strong> cr&eacute;ation site internet Nancy</strong> ou
                  <strong> cr&eacute;ation site internet Meurthe-et-Moselle</strong>, afin de renforcer votre couverture locale.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-slate-950 p-8 text-white shadow-[0_28px_70px_-46px_rgba(15,23,42,0.55)] sm:p-10">
              <SectionTitle>
                Pourquoi choisir un freelance plut&ocirc;t qu une agence web
              </SectionTitle>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Beaucoup de dirigeants h&eacute;sitent entre un freelance et une <strong>agence web Lun&eacute;ville</strong>.
                  Une agence peut convenir sur certains projets, mais un freelance local offre souvent une relation
                  plus simple et plus directe.
                </p>
                <p>
                  Vous b&eacute;n&eacute;ficiez d un interlocuteur unique, d une meilleure compr&eacute;hension de votre activit&eacute; et
                  d une solution plus adapt&eacute;e &agrave; votre contexte local.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-secondary/55 p-8 shadow-sm sm:p-10">
            <SectionTitle>
              Mes services de cr&eacute;ation de site internet &agrave; Lun&eacute;ville
            </SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-700">
              J accompagne les entreprises locales sur tout le cycle du projet, du cadrage initial &agrave; la mise en
              ligne puis &agrave; la maintenance. Cela me permet de proposer une prestation coh&eacute;rente, pens&eacute;e pour
              durer et pour soutenir votre activit&eacute; sur le long terme.
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 text-base leading-8 text-slate-700">
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>Mes r&eacute;alisations</SectionTitle>
              <p className="mt-6 text-base leading-8 text-slate-700">
                Mon travail repose sur une logique simple&nbsp;: des sites clairs, convaincants et orient&eacute;s
                r&eacute;sultat. Je con&ccedil;ois des projets pour des structures qui ont besoin d un site professionnel sans
                lourdeur inutile.
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
              <SectionTitle>Tarif cr&eacute;ation site internet Lun&eacute;ville</SectionTitle>
              <p className="mt-6 text-base leading-8 text-slate-700">
                Le prix d une <strong>cr&eacute;ation site internet Lun&eacute;ville</strong> varie selon le type de site, le
                volume de contenu, les besoins SEO et les fonctionnalit&eacute;s attendues.
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-slate-700">
                {pricing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Demandez votre devis gratuit pour la cr&eacute;ation de votre site internet &agrave; Lun&eacute;ville.
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-white p-8 shadow-sm sm:p-10">
            <SectionTitle>Zone d intervention</SectionTitle>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Je propose la cr&eacute;ation de site internet &agrave; Lun&eacute;ville, Nancy, Baccarat, Saint-Nicolas-de-Port et
                dans toute la Meurthe-et-Moselle.
              </p>
              <p>
                Cette proximit&eacute; me permet d accompagner des entreprises locales avec une meilleure compr&eacute;hension
                de leur march&eacute;, de leur concurrence et des recherches g&eacute;ographiques pertinentes.
              </p>
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-black/8 bg-slate-950 px-8 py-10 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)] sm:px-10">
            <SectionTitle>Pr&ecirc;t &agrave; lancer votre projet web ?</SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-300">
              Si vous voulez un site plus clair, plus cr&eacute;dible et plus visible localement, je peux vous aider.
              Mon objectif est de vous proposer une <strong>cr&eacute;ation site internet Lun&eacute;ville</strong> utile,
              durable et orient&eacute;e vers vos demandes entrantes.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Demandez votre devis gratuit pour la cr&eacute;ation de votre site internet &agrave; Lun&eacute;ville.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Demander un devis gratuit
                </Button>
              </Link>
              <Link href="/referencement-naturel-seo">
                <Button size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                  Voir aussi mes services SEO
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Faq faq={faqItems} />
    </main>
  )
}
