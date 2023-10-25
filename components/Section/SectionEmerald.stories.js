import SectionEmerald from './SectionEmerald';
import { Button } from '../ui/button';
import score_site from '../../public/pictures/site/vitrine/score_site.png';

export default {
  title: 'Components/SectionEmerald',
  component: SectionEmerald,
};

export const Emerald = () => (
  <SectionEmerald image={score_site} alt='représentation du score du site'>
    <div className='space-y-6'>
      <h2 className='mt-2 text-2xl font-bold text-emerald-950 sm:text-left md:text-4xl'>
        Optimisez votre présence en ligne avec notre service de refonte de site
      </h2>
      <p>
        La refonte de site est une étape essentielle pour maintenir la
        pertinence en ligne de votre entreprise. Chez [Nom de Votre Entreprise],
        nous offrons un service de refonte de site complet qui vous permet de
        moderniser votre présence en ligne, d'améliorer l'expérience utilisateur
        et d'optimiser la performance.
      </p>
      <p>
        Notre équipe de designers, de développeurs et de spécialistes du
        marketing collabore pour donner une nouvelle vie à votre site web. Nous
        nous efforçons également d'obtenir un score élevé sur PageSpeed Insight
        de Google, ce qui améliore la vitesse de chargement de votre site, le
        rendant plus convivial pour vos visiteurs.
      </p>
      <p>
        Découvrez comment notre service de refonte de site peut vous aider à
        rester compétitif en ligne et à offrir une expérience utilisateur
        exceptionnelle.
      </p>
      <Button variant='primary'>
        En savoir plus sur nos services de refonte de site ici
      </Button>
    </div>
  </SectionEmerald>
);
