export enum TypeTech {
  ProgrammingLanguage = "Programming Language",
  BuildTool = "BuildTool",
  TestingTool = "TestingTool",
  CICDTool = "CI/CD Tool",
  Methodology = "Methodology",
  StructureStyling = "Structure/Styling",
  ProjectManagement = "Project Management",
  Library = "Library",
  Framework = "Framework",
}

export interface TechSkillsInfoProps {
  typeTech: TypeTech;
  nameTech: string;
  percentageSkill: number;
}

const TechSkillsInfo: TechSkillsInfoProps[] = [
  {
    typeTech: TypeTech.ProgrammingLanguage,
    nameTech: "Java 17",
    percentageSkill: 90,
  },
  {
    typeTech: TypeTech.ProgrammingLanguage,
    nameTech: "Javascript",
    percentageSkill: 90,
  },
  {
    typeTech: TypeTech.ProgrammingLanguage,
    nameTech: "TypeScript",
    percentageSkill: 80,
  },
  {
    typeTech: TypeTech.Library,
    nameTech: "REACT JS",
    percentageSkill: 60,
  },
  {
    typeTech: TypeTech.Library,
    nameTech: "Material UI",
    percentageSkill: 60,
  },
  {
    typeTech: TypeTech.ProgrammingLanguage,
    nameTech: "SQL",
    percentageSkill: 80,
  },
  {
    typeTech: TypeTech.Framework,
    nameTech: "Spring",
    percentageSkill: 70,
  },
  {
    typeTech: TypeTech.Framework,
    nameTech: "Struts 2.5",
    percentageSkill: 70,
  },
  {
    typeTech: TypeTech.StructureStyling,
    nameTech: "HTML5, CSS3",
    percentageSkill: 90,
  },
  {
    typeTech: TypeTech.Framework,
    nameTech: "Bootstrap",
    percentageSkill: 90,
  },
  {
    typeTech: TypeTech.CICDTool,
    nameTech: "Azure Pipelines",
    percentageSkill: 60,
  },
  {
    typeTech: TypeTech.ProjectManagement,
    nameTech: "Azure DevOps",
    percentageSkill: 80,
  },
  {
    typeTech: TypeTech.ProjectManagement,
    nameTech: "Jira",
    percentageSkill: 70,
  },
  {
    typeTech: TypeTech.Methodology,
    nameTech: "Agile",
    percentageSkill: 70,
  },
  {
    typeTech: TypeTech.TestingTool,
    nameTech: "JUnit",
    percentageSkill: 70,
  },
  {
    typeTech: TypeTech.TestingTool,
    nameTech: "Mockito",
    percentageSkill: 70,
  },
  {
    typeTech: TypeTech.BuildTool,
    nameTech: "Maven",
    percentageSkill: 60,
  },
  {
    typeTech: TypeTech.BuildTool,
    nameTech: "NPM",
    percentageSkill: 60,
  },
];

export default TechSkillsInfo;
