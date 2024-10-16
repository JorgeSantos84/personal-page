import { Box, Grid2 } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CenterBox from "./CenterBox";
import "../styles/WorkInfoBox.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { WorkDetails } from "../types/workDetails";
import { useTheme } from "../context/ThemeContext";
import WorkDetailsInformation from "../constants/WorkDetailsInformation";
import { number } from "prop-types";

interface WorkItemBoxProps {
  workItensTranslated: WorkDetails;
}

const WorkItemBox: React.FC<WorkItemBoxProps> = ({ workItensTranslated }) => {
  return (
    <>
      {workItensTranslated ? (
        <Grid2 container>
          <Grid2 size={4}>
            {workItensTranslated.beginYear} <br />
            <ArrowRightAltIcon sx={{ transform: "rotate(90deg)" }} /> <br />
            {workItensTranslated.endYear}
          </Grid2>
          <Grid2 size={8}>
            <h2>
              <Box className="work-info-title">{workItensTranslated.title}</Box>
            </h2>
            <ul>
              {workItensTranslated.details.map(
                (detail: string, index: number) => (
                  <Box key={index}>
                    <li>{detail}</li>
                  </Box>
                ),
              )}
            </ul>
          </Grid2>
        </Grid2>
      ) : (
        <p>ERROR IN PAGE</p>
      )}
    </>
  );
};

export default WorkItemBox;
