import CenterBox from "./smallComponents/CenterBox";
import Page from "./smallComponents/Page";
import PillPercentage from "./smallComponents/PillPercentage";
import TechSkillsInfo from "../constants/TechSkillsInfo";
import { TypeTech } from "../constants/TechSkillsInfo";
import { TechSkillsInfoProps } from "../constants/TechSkillsInfo";
import { Grid2 } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const TechSkillsPage = () => {
  const { language } = useTheme();
  const techTypes = Object.values(TypeTech);

  const techNameFromGBtoPT = (techName: string) => {
    switch (techName) {
      case TypeTech.Library:
        return "Bibliotecas";
      case TypeTech.ProgrammingLanguage:
        return "Linguagem Programação";
      case TypeTech.BuildTool:
        return "Ferramenta Construção";
      case TypeTech.CICDTool:
        return "Ferramenta CI/CD";
      case TypeTech.Methodology:
        return "Metodologia";
      case TypeTech.ProjectManagement:
        return "Gestão Projecto";
      case TypeTech.Framework:
        return "Framework";
      case TypeTech.StructureStyling:
        return "Estrutura/Estilo";
      case TypeTech.TestingTool:
        return "Ferramentas Teste";
      default:
        return "Invalid Name";
    }
  };

  return (
    <Page>
      <CenterBox>
        <h1 style={{ fontWeight: "bold" }}>Tech Skills</h1>
        {language && language === "PT" ? (
          <p>
            Aqui apresento as principais tecnologias com que trabalhei nos
            últimos três anos e com que me sinto mais à vontade atualmente.
          </p>
        ) : (
          <p>
            Here i present the main technologies i worked in the last three
            years and what i feel most comfortable with today.
          </p>
        )}
      </CenterBox>
      {techTypes.map((nameTech) => {
        const techTypeListFromSkills: TechSkillsInfoProps[] =
          TechSkillsInfo.filter((value) => value.typeTech === nameTech);

        if (techTypeListFromSkills.length > 0) {
          return (
            <CenterBox key={nameTech}>
              <Box sx={{ marginBottom: "15px" }}>
                <h4>
                  {language === "PT" ? (
                    <h4>{techNameFromGBtoPT(nameTech)}</h4>
                  ) : (
                    <h4>{nameTech}</h4>
                  )}
                </h4>
              </Box>
              {techTypeListFromSkills.map((valueSkill, index) => {
                return (
                  <Grid2 container key={valueSkill.nameTech + index}>
                    <Grid2 size={{ xs: 5, md: 3 }}>{valueSkill.nameTech}</Grid2>
                    <Grid2 size={{ xs: 7, md: 9 }}>
                      <PillPercentage
                        pillPercentage={valueSkill.percentageSkill}
                      />
                    </Grid2>
                  </Grid2>
                );
              })}
            </CenterBox>
          );
        }
        return null;
      })}
    </Page>
  );
};

export default TechSkillsPage;
