import { Web } from "@mui/icons-material";
import { WorkDetails } from "../types/workDetails";

const educationInformationEN: WorkDetails[] = [
  {
    title: "Professional Qualification in Web Development",
    company: "Cinel Institute",
    companyLogo: "null",
    beginYear: "2023-02",
    endYear: "2023-08",
    details: ["Full Stack Web Development with focus on backend using JAVA"],
    fullInfo: [],
    technologies: [
      "Java 17",
      "Struts 2.5",
      "Maven",
      "SQL",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Professional qualification in Python",
    company: "Computer Science and Engineering",
    companyLogo: "null",
    beginYear: "2022-04",
    endYear: "2022-10",
    details: ["Focused on algorithms and mastering Python programmins"],
    fullInfo: [],
    technologies: ["Python"],
  },
  {
    title: "Math and Computing Science",
    company: "University of Minho",
    companyLogo: "null",
    beginYear: "2003-09",
    endYear: "2009-06",
    details: [],
    fullInfo: [],
    technologies: [],
  },
];

const educationInformationPT: WorkDetails[] = [
  {
    title: "Formação em Desenvolvimento Aplicações Web",
    company: "Cinel Institute",
    companyLogo: "null",
    beginYear: "2023-02",
    endYear: "2023-08",
    details: [
      "Desenvolvimento Web Full Stack com foco no backend utilizando JAVA",
    ],
    fullInfo: [],
    technologies: [
      "Java 17",
      "Struts 2.5",
      "Maven",
      "SQL",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Professional qualification in Python",
    company: "Computer Science and Engineering",
    companyLogo: "null",
    beginYear: "2022-04",
    endYear: "2022-10",
    details: [
      "Foco no aprendizado de algoritmos e no domínio da programação em Python.",
    ],
    fullInfo: [],
    technologies: ["Python"],
  },
  {
    title: "Matemática e Ciências da Computação",
    company: "Universidade do Minho",
    companyLogo: "null",
    beginYear: "2003-09",
    endYear: "2009-06",
    details: [],
    fullInfo: [],
    technologies: [],
  },
];

const EducationInformation: Map<string, WorkDetails[]> = new Map<
  string,
  WorkDetails[]
>();

EducationInformation.set("GB", educationInformationEN);
EducationInformation.set("PT", educationInformationPT);

export default EducationInformation;
