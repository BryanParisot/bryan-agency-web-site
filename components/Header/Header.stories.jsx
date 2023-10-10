import Header from "./Header";
import picture_home from "../../public/pictures/header/picture_home_page.svg";

export default {
  title: "Components/Sectionheader",
  component: Header,
};

export const SectionHeader = () => (
  <Header
    title="Agence web Nancy"
    subtitle="Hissez les voiles vers votre succès digital à Nancy avec un capitaine du web expérimenté."
    text="Cap sur la réussite digitale à Nancy ! Votre agence web experte en création de sites, refonte et applications. Naviguez vers le succès avec nous"
    image={picture_home}
    alt="image png developpeur web"
  />
);
