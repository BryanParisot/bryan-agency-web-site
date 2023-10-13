import SectionWithPictures from './SectionWithPictures';
import illustration_web from '../../public/pictures/home/illustration_web.jpg';

export default {
  title: 'Components/SectionWithPictures',
  component: SectionWithPictures,
};

export const SectionHeader = () => (
  <SectionWithPictures
    title={`Pourquoi choisir <span className="bg-red-500"> une agence web ?</span>`}
    description="Pourquoi choisir une agence web ? Parce que nous sommes les navigateurs de l'univers numérique. Avec notre expertise en développement web, design, référencement et stratégie numérique, nous vous aidons à hisser les voiles vers le succès en ligne. Notre équipe technique assure une conception professionnelle, une visibilité accrue dans les moteurs de recherche et un site web optimisé. Gagnez du temps, restez à la pointe de la technologie et concentrez-vous sur votre entreprise pendant que nous donnons vie à votre présence en ligne. Contactez-nous aujourd'hui pour commencer votre voyage vers la réussite digitale."
    image={illustration_web}
    alt='Illustration web'
  />
);
