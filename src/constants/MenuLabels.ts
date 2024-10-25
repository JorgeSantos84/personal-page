const MenuLabels: Map<string, string[]> = new Map<string, string[]>();

//The first string is the name and the second is the link. Must be split using _
MenuLabels.set("PT", [
  "Inicio _ personal-page",
  "Experiência Laboral _ work-experience",
  "Tech Skills _ tech-skills",
  "Formação Académica _ education",
  "Contactos _ contacts",
  "Jogo Cobra _ snake-game",
]);
MenuLabels.set("GB", [
  "Start _ personal-page",
  "Work Experience _ work-experience",
  "Tech Skills _ tech-skills",
  "Education _ education",
  "Contacts _ contacts",
  "Snake Game _ snake-game",
]);

export default MenuLabels;
