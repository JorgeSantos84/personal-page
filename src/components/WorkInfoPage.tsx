import { Box, Grid2 } from "@mui/material";
import CenterBox from "./smallComponents/CenterBox";
import "../styles/WorkInfoBox.css";
import WorkItemBox from "./smallComponents/WorkItemBox";
import { useTheme } from "../context/ThemeContext";
import WorkDetailsInformation from "../constants/WorkDetailsInformation";
import { WorkDetails } from "../types/workDetails";

import React, { useState } from "react";

const WorkInfoPage: React.FC = () => {
  const { language } = useTheme();
  const workItensListTranslated: WorkDetails[] =
    WorkDetailsInformation.get(language) || [];

  const [showDetailsWorkItem, setShowDetailsWorkItem] = useState<number | null>(
    null,
  );

  const showWorkItemBox = (showBoxNumber: number | null) => {
    console.log("numero " + showBoxNumber);
    setShowDetailsWorkItem(showBoxNumber);
  };

  return (
    <Box className="page">
      {workItensListTranslated.map((item, index) => (
        <CenterBox key={index}>
          <WorkItemBox
            workItensTranslated={item}
            numberWorkItem={index}
            showDetailsItemBox={showWorkItemBox}
            itemBoxNumberShowDetails={showDetailsWorkItem}
          />
        </CenterBox>
      ))}
    </Box>
  );
};

export default WorkInfoPage;
