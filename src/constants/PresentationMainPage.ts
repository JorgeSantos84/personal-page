import { PresentationPage } from "../types/presentationPage";

const presentationPT: PresentationPage = {
  nomePortfolio: "Jorge",
  title: "Olá, sou o ",
  subtitle: "sou um Full Stack Web Developer.",
  iconsList: [
    { icon: "CoffeeIcon", message: "Movimentado a café" },
    {
      icon: "HomeIcon",
      message: "Residente em Braga",
    },
    {
      icon: "WorkIcon",
      message: "ItSector - Java Developer",
    },
  ],
  fullDescription:
    "Adoro transformar ideias em soluções digitais inovadoras. Tenho experiência na criação de aplicações web como desenvolvedor full-stack, com especialização no desenvolvimento de backend em Java e sólidas habilidades em tecnologias frontend como JavaScript (vanilla e JQuery), HTML, CSS e Bootstrap. Tenho experiência em desenvolver aplicações web robustas desde o conceito até à implementação",
};

const presentationEN: PresentationPage = {
  nomePortfolio: "Jorge",
  title: "Hello, I'm ",
  subtitle: "I'm a Full Stack Web Developer.",
  iconsList: [
    { icon: "CoffeeIcon", message: "Powered by Coffee" },
    {
      icon: "HomeIcon",
      message: "Resident in Braga",
    },
    {
      icon: "WorkIcon",
      message: "ItSector - Java Developer",
    },
  ],
  fullDescription:
    "I love transforming ideas into innovative digital solutions. I have experience in creating web applications as a full-stack developer with expertise in Java backend development along with strong skills in frontend technologies such as JavaScript (vanilla and JQuery), HTML, CSS, and Bootstrap. Im experienced in building robust web applications from concept to deployment",
};

const PresentationMainPage: Map<string, PresentationPage> = new Map<
  string,
  PresentationPage
>();

PresentationMainPage.set("PT", presentationPT);
PresentationMainPage.set("GB", presentationEN);

export default PresentationMainPage;
