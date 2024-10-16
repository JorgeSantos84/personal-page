import { WorkDetails } from "../types/workDetails";

const workInformationEN: WorkDetails[] = [
  {
    title: "Java Developer - Web Application at CASO LDA",
    beginYear: "2023-03",
    endYear: "2024-07",
    details: [
      "Web Application Developer",
      "Languages: Java/JavaScript (Vanilla and JQuery)/SQL",
      "Frameworks: Struts 2.5, Spring (including Spring JPA and Spring REST)",
      "HTML/CSS/BootStrap/Flexbox",
    ],
  },
  {
    title: "Web Developer/Content at Sublimeboutique",
    beginYear: "2021",
    endYear: "2023",
    details: [
      "Worked on the development of two web apps focused on e-commerce",
      "Managed the front and back end of these websites for two years",
      "Worked with: Javascript/HTML/CSS and Java 8",
    ],
  },
  {
    title: "IT Specialist at Fnac Portugal",
    beginYear: "2009",
    endYear: "2023",
    details: [
      "Installation and configuration of hardware and software",
      "Diagnosis and resolution of issues related to hardware",
      "Management of team in the sales and services process",
      "Content Creator for the Fnac Expert platform (from 2017 to 2018)",
    ],
  },
];

const workInformationPT: WorkDetails[] = [
  {
    title: "Desenvolvimento de Aplicações Web na CASO LDA",
    beginYear: "2023-03",
    endYear: "2024-07",
    details: [
      "Web Application Desenvolvedor",
      "Linguagens: Java/JavaScript/SQL",
      "Frameworks: Struts 2.5, Spring (incluindo Spring JPA and Spring REST)",
      "HTML/CSS/BootStrap/Flexbox",
    ],
  },
  {
    title: "Programador Web/Gestor Conteúdo na Sublimeboutique",
    beginYear: "2021",
    endYear: "2023",
    details: [
      "Trabalhei no desenvolvimento de dois websites focados em webcommerce",
      "Geri o front end e back end desses websites durante 2 anos.",
      "Trabalhei com: Javascript/HTML/CSS, JAVA 8",
    ],
  },
  {
    title: "Especialista em TI na Fnac Portugal",
    beginYear: "2009",
    endYear: "2023",
    details: [
      "Instalação e configuração de hardware e software",
      "Diagnóstico e resolução problemas em desktop e laptop",
      "Gestão equipa processo vendas de serviços",
      "Criador Conteúdos plataforma Fnac Expert (de 2017 a 2018)",
    ],
  },
];

const WorkDetailsInformation: Map<string, WorkDetails[]> = new Map<
  string,
  WorkDetails[]
>();

WorkDetailsInformation.set("GB", workInformationEN);
WorkDetailsInformation.set("PT", workInformationPT);

export default WorkDetailsInformation;
