import HomeCards from './HomeCards';
import logo_creation_site from '../../public/logos/nav/logo_html.svg';

export default {
  title: 'Components/HomeCards',
  component: HomeCards,
};

export const SectionHeader = () => (
  <HomeCards
    title='Création de Sites Internet'
    text='Notre équipe expérimentée concevra un site web unique et optimisé, représentant votre entreprise de manière professionnelle en ligne. Nous intégrons vos besoins et votre identité dans chaque aspect du site pour offrir une expérience utilisateur exceptionnelle'
    image={logo_creation_site}
    alt='Logo création de sites internet'
    bg='bg-amber-200'
    link='/'
  />
);
