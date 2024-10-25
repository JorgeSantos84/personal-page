import { Avatar, Box, Container, Grid2 } from "@mui/material";
import "../../styles/WorkInfoBox.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { WorkDetails } from "../../types/workDetails";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import WorkDetail from "./WorkDetail";
import ButtonWorkLanguages from "./ButtonWorkLanguages";
import { number } from "prop-types";

interface WorkItemBoxProps {
  workItensTranslated: WorkDetails;
  numberWorkItem: number;
  showDetailsItemBox: (value: number | null) => void;
  itemBoxNumberShowDetails: number | null;
}

const WorkItemBox: React.FC<WorkItemBoxProps> = ({
  workItensTranslated,
  numberWorkItem,
  showDetailsItemBox,
  itemBoxNumberShowDetails,
}) => {
  const handleToggle = (index: number) => {
    if (index === itemBoxNumberShowDetails) {
      showDetailsItemBox(null);
    } else {
      showDetailsItemBox(index);
    }
  };

  return (
    <>
      {workItensTranslated ? (
        <Grid2 container>
          <Grid2
            size={{
              xs: 12,
              sm: 4,
              md: 4,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              "@media(max-width: 599px)": {
                marginBottom: "10px",
                flexDirection: "row",
              },
            }}
          >
            {workItensTranslated.beginYear}
            <ArrowRightAltIcon
              sx={{
                transform: "rotate(90deg)",
                "@media(max-width: 599px)": {
                  transform: "rotate(0deg)",
                },
              }}
            />
            {workItensTranslated.endYear}
          </Grid2>
          <Grid2 size={{ sm: 8, md: 8 }}>
            <h2>
              <Box className="work-info-title">{workItensTranslated.title}</Box>
            </h2>
            <Box sx={{ marginBottom: "10px", marginTop: "10px" }}>
              <Grid2 container>
                <Grid2 size={{ xs: 3, md: 1 }}>
                  <Avatar
                    variant="square"
                    alt="Caso LDA"
                    src={workItensTranslated.companyLogo}
                  />
                </Grid2>
                <Grid2 size={{ xs: 9, md: 11 }}>
                  <h4>
                    <Box className="work-company-title">
                      {workItensTranslated.company}
                    </Box>
                  </h4>
                </Grid2>
              </Grid2>
            </Box>
            <ul style={{ marginBottom: 0 }}>
              {workItensTranslated.details.map(
                (detail: string, index: number) => (
                  <Box key={index}>
                    <li>{detail}</li>
                  </Box>
                ),
              )}
            </ul>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              {workItensTranslated.technologies?.map(
                (technology: string, index: number) => {
                  return (
                    <ButtonWorkLanguages key={index} technology={technology} />
                  );
                },
              )}
            </Box>
            {workItensTranslated.fullInfo &&
              workItensTranslated.fullInfo.length > 0 && (
                <>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleToggle(numberWorkItem)}
                    >
                      Info
                      {itemBoxNumberShowDetails === numberWorkItem ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </Button>
                  </Box>

                  {itemBoxNumberShowDetails === numberWorkItem &&
                    workItensTranslated.fullInfo &&
                    workItensTranslated.fullInfo.map(
                      (detail: string, index: number) => {
                        return <WorkDetail detail={detail} key={index} />;
                      },
                    )}
                </>
              )}
          </Grid2>
        </Grid2>
      ) : (
        <p>ERROR IN PAGE</p>
      )}
    </>
  );
};

export default WorkItemBox;
