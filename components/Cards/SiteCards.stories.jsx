import SiteCards from './SiteCards';
import logo_creation_site from '../../public/logos/nav/logo_html.svg';

export default {
  title: 'Components/SiteCards',
  component: SiteCards,
};

export const SiteCard = () => (
  <div className='w-[395px]'>
    <SiteCards
      title='Création de Sites Internet'
      text='Notre équipe expérimentée concevra un site web unique et optimisé, représentant votre entreprise de manière professionnelle en ligne. Nous intégrons vos besoins et votre identité dans chaque aspect du site pour offrir une expérience utilisateur exceptionnelle'
      image={logo_creation_site}
      alt='Logo création de sites internet'
      link='/'
    />
  </div>
);
