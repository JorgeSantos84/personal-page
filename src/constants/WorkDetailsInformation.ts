import { WorkDetails } from "../types/workDetails";
import fnacLogo from "../assets/workLogos/fnacLogo.png";
import itSectorLogo from "../assets/workLogos/itsectorLogo.png";
import casoLogo from "../assets/workLogos/casoLogo.png";
import { on } from "events";
import { platform } from "os";
import { features } from "process";

const workInformationEN: WorkDetails[] = [
  {
    title: "Java Developer - Web Application",
    company: "ITSector",
    companyLogo: itSectorLogo,
    beginYear: "2024-07",
    endYear: "Present Date",
    details: [
      "Web Application Developer",
      "Languages: Java/JavaScript (Vanilla and JQuery)/SQL",
      "Frameworks: Struts 2.5, Spring (including Spring JPA and Spring REST)",
      "HTML/CSS/BootStrap/Flexbox",
    ],
    fullInfo: ["A PREENCHER MAIS TARDE"],
    technologies: [
      "Java 17",
      "SpringBoot",
      "Lombok",
      "Azure",
      "Git",
      "Swagger",
    ],
  },
  {
    title: "Full Stack Web Developer - Web Application",
    company: "CASO LDA",
    companyLogo: casoLogo,
    beginYear: "2023-03",
    endYear: "2024-07",
    details: [
      "Web Application Developer",
      "Languages: Java/JavaScript (Vanilla and JQuery)/SQL",
      "Frameworks: Struts 2.5, Spring (including Spring JPA and Spring REST)",
      "HTML/CSS/BootStrap/Flexbox",
    ],
    technologies: [
      "Java 8",
      "JavaScript",
      "JQuery",
      "SpringBoot",
      "Struts",
      "JPA",
      "Hibernate",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Web Developer/Content",
    company: "Sublimeboutique",
    companyLogo: "no_logo",
    beginYear: "2021",
    endYear: "2023",
    details: [
      "Worked on the development of two web apps focused on e-commerce",
      "Managed the front and back end of these websites for two years",
      "Worked with: Javascript/HTML/CSS and Java 8",
    ],
    fullInfo: [
      "Spearheaded the development of a ground-up web application tailored for e-commerce, with initial focus on frontend development to craft a responsive user interface optimized for mobile devices. I then transitioned to backend development, contributing to the creation of robust functionalities",
      "Worked on the adaptation of a core application framework for two distinct e-commerce websites, customizing frontend components and functionalities to meet unique requirements of each platform",
      "Provided ongoing support over a two-year period, resolving bugs and implementing new features in alignment with client specifications and evolving market trends",
      "Leveraged Java and Spring framework for backend development, ensuring scalability, performance, and security of the web applications. Employed JavaScript, Bootstrap, HTML, and CSS for frontend development, maintaining high standards of design and user experience",
    ],
    technologies: ["Java 8", "JavaScript", "JQuery", "Spring", "HTMl", "CSS"],
  },
  {
    title: "IT Specialist",
    company: "Fnac Portugal",
    companyLogo: fnacLogo,
    beginYear: "2009",
    endYear: "2023",
    details: [
      "Installation and configuration of hardware and software",
      "Diagnosis and resolution of issues related to hardware",
      "Management of team in the sales and services process",
      "Content Creator for the Fnac Expert platform (from 2017 to 2018)",
    ],
    fullInfo: ["A PREENCHER MAIS TARDE"],
  },
];

const workInformationPT: WorkDetails[] = [
  {
    title: "Java Developer - Web Application",
    company: "ITSector",
    companyLogo: itSectorLogo,
    beginYear: "2024-07",
    endYear: "Presente Data",
    details: [
      "Web Application Desenvolvedor",
      "Linguagens: Java/JavaScript/SQL",
      "Frameworks: Struts 2.5, Spring (incluindo Spring JPA and Spring REST)",
      "HTML/CSS/BootStrap/Flexbox",
    ],
    fullInfo: ["A PREENCHER MAIS TARDE"],
    technologies: [
      "Java 17",
      "SpringBoot",
      "Lombok",
      "Azure",
      "Git",
      "Swagger",
    ],
  },
  {
    title: "Desenvolvimento de Aplicações Web Full Stack",
    company: "CASO LDA",
    companyLogo: casoLogo,
    beginYear: "2023-03",
    endYear: "2024-07",
    details: [
      "Web Application Desenvolvedor",
      "Linguagens: Java/JavaScript/SQL",
      "Frameworks: Struts 2.5, Spring (incluindo Spring JPA and Spring REST)",
      "HTML/CSS/BootStrap/Flexbox",
    ],
    fullInfo: [
      "Desenvolvi microserviços utilizando Java, Spring e MySQL, incluindo APIs RESTful para processamento de pagamentos (por exemplo, MbWay, Multibanco, cartão de crédito)",
      "Projetei e implementei uma aplicação web de balcão virtual, abrangendo tanto o desenvolvimento frontend (JavaScript, Bootstrap, HTML, CSS) quanto o backend",
      "Contribuí para o desenvolvimento inicial de uma aplicação web para gerenciamento de faturas digitais assinadas em formato PDF, lidando com o design frontend e as tarefas de backend",
      "Liderei o desenvolvimento de uma Progressive Web App (PWA) com funcionalidades independentes, garantindo experiências contínuas online e offline utilizando o framework Workbox da Google para gerenciamento de service workers",
      "Projetei e implementei componentes frontend e backend da PWA, aproveitando o Spring para o desenvolvimento de backend e o Spring Data JPA para acesso e gerenciamento de banco de dados",
    ],
    technologies: [
      "Java 8",
      "JavaScript",
      "JQuery",
      "SpringBoot",
      "Struts",
      "JPA",
      "Hibernate",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Programador Web/Gestor Conteúdo",
    company: "Sublimeboutique",
    companyLogo: "no_logo",
    beginYear: "2021",
    endYear: "2023",
    details: [
      "Trabalhei no desenvolvimento de dois websites focados em webcommerce",
      "Geri o front end e back end desses websites durante 2 anos.",
      "Trabalhei com: Javascript/HTML/CSS, JAVA 8",
    ],
    fullInfo: [
      "Encabecei o desenvolvimento de uma aplicação web do zero, personalizada para o comércio eletrônico, com foco inicial no desenvolvimento frontend para criar uma interface de usuário responsiva otimizada para dispositivos móveis. Transitioned seamlessly to backend development, contributing to the creation of robust functionalities",
      "Forneci suporte contínuo ao longo de um período de dois anos, resolvendo bugs e implementando novos recursos alinhados com as especificações do cliente e as tendências de mercado em constante evolução",
      "Utilizei Java e o framework Spring para o desenvolvimento backend, garantindo escalabilidade, desempenho e segurança das aplicações web. Empreguei JavaScript, Bootstrap, HTML e CSS para o desenvolvimento frontend, mantendo altos padrões de design e experiência do usuário",
    ],
    technologies: ["Java 8", "JavaScript", "JQuery", "Spring", "HTMl", "CSS"],
  },
  {
    title: "Especialista em TI na Fnac Portugal",
    company: "Fnac Portugal",
    companyLogo: fnacLogo,
    beginYear: "2009",
    endYear: "2023",
    details: [
      "Instalação e configuração de hardware e software",
      "Diagnóstico e resolução problemas em desktop e laptop",
      "Gestão equipa processo vendas de serviços",
      "Criador Conteúdos plataforma Fnac Expert (de 2017 a 2018)",
    ],
    fullInfo: ["A PREENCHER MAIS TARDE"],
  },
];

const WorkDetailsInformation: Map<string, WorkDetails[]> = new Map<
  string,
  WorkDetails[]
>();

WorkDetailsInformation.set("GB", workInformationEN);
WorkDetailsInformation.set("PT", workInformationPT);

export default WorkDetailsInformation;
