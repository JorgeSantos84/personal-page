import { PresentationPage } from "../types/presentationPage";

const presentationPT: PresentationPage = {
  nomePortfolio: "Jorge",
  title: "Olá, sou o ",
  subtitle:
    "Sou um Full Stack Web Developer, com maior foco no desenvolvimento backend JAVA",
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
    "Adoro transformar ideias em soluções digitais inovadoras. De momento estou a trabalhar na ITSector como JAVA Developer e focado na criação de RESTfull APIs para servir o frontend. Tenho experiência na criação de aplicações web como desenvolvedor full-stack, com especialização no desenvolvimento de backend em Java e sólidas habilidades em tecnologias frontend como REACT JS, JavaScript (vanilla e JQuery), Typescript, HTML, CSS e Bootstrap. Desenvolvi este website para poder apresentar melhor as minhas skills e experiência. Este website foi desenvolvido em REACT JS, Typescript e utilizando a biblioteca Material UI. Convido também a jogarem o Snake que desenvolvi e reviverem um pouco os jogos de outros tempos :)",
};

const presentationEN: PresentationPage = {
  nomePortfolio: "Jorge",
  title: "Hello, I'm ",
  subtitle:
    "I'm a Full Stack Web Developer, with bigger focus on backend development in JAVA",
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
    "I love transforming ideas into innovative digital solutions. At the moment im working in ITSector as a JAVA Developer and focused in creating RESTful APIs. I have experience in creating web applications as a full-stack developer with expertise in Java backend development along with strong skills in frontend technologies such as REACT JS, JavaScript (vanilla and JQuery), Typescript, HTML, CSS, and Bootstrap. I developed this website to better showcase my skills and experience. This website was built using React JS, TypeScript, and the Material UI library. I also invite you to play the Snake game I developed and relive a bit of the games from the past",
};

const PresentationMainPage: Map<string, PresentationPage> = new Map<
  string,
  PresentationPage
>();

PresentationMainPage.set("PT", presentationPT);
PresentationMainPage.set("GB", presentationEN);

export default PresentationMainPage;
