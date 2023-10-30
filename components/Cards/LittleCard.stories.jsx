import LittleCard from './LittleCard';
import logo_creation_site from '../../public/logos/nav/logo_html.svg';

export default {
  title: 'Components/LittleCard',
  component: LittleCard,
};

export const LittleCarde = () => (
  <div className='w-[395px]'>
    <LittleCard
      title='Création de Sites Internet'
      text='Notre équipe expérimentée concevra un site web unique et optimisé, représentant votre entreprise de manière professionnelle en ligne. Nous intégrons vos besoins et votre identité dans chaque aspect du site pour offrir une expérience utilisateur exceptionnelle'
      logo={logo_creation_site}
      alt='Logo création de sites internet'
    />
  </div>
);
