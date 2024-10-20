const MenuLabels: Map<string, string[]> = new Map<string, string[]>();

//The first string is the name and the second is the link. Must be split using _
MenuLabels.set("PT", [
  "Inicio _ personal-page",
  "Experiência Laboral _ work-experience",
  "Tech Skills _ tech-skills",
  "Contactos _ contacts",
]);
MenuLabels.set("GB", [
  "Start _ personal-page",
  "Work Experience _ work-experience",
  "Tech Skills _ tech-skills",
  "Contacts _ contacts",
]);

export default MenuLabels;
