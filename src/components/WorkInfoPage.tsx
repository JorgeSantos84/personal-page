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
import WorkItemBox from "./WorkItemBox";
import { useTheme } from "../context/ThemeContext";
import WorkDetailsInformation from "../constants/WorkDetailsInformation";
import { WorkDetails } from "../types/workDetails";

const WorkInfoPage: React.FC = () => {
  const { language } = useTheme();
  const workItensListTranslated: WorkDetails[] =
    WorkDetailsInformation.get(language) || [];

  return (
    <Box className="page">
      {workItensListTranslated.map((item, index) => (
        <CenterBox key={index}>
          <WorkItemBox workItensTranslated={item} />
        </CenterBox>
      ))}
    </Box>
  );
};

export default WorkInfoPage;
