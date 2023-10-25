import CardGeneral from './CardGeneral';
import logo_creation_site from '../../public/logos/nav/logo_html.svg';

export default {
  title: 'Components/CardGeneral',
  component: CardGeneral,
};


export const CardBasic = () => (
  <div className='w-[395px]'>
    <CardGeneral
      title='Création de Sites Internet'
      text='Notre équipe expérimentée concevra un site web unique et optimisé, représentant votre entreprise de manière professionnelle en ligne. Nous intégrons vos besoins et votre identité dans chaque aspect du site pour offrir une expérience utilisateur exceptionnelle'
      image={logo_creation_site}
      alt='Logo création de sites internet'
    />
  </div>
);
