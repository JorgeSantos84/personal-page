import { Box, Button } from "@mui/material";
import imagePortfolio from "../assets/apresentacao_paginajpeg.jpg";
import ExtractIconsListMessage from "./extractInfoFiles/ExtractIconsListMessage";
import CenterBox from "./smallComponents/CenterBox";
import { useTheme } from "../context/ThemeContext";
import PresentationMainPage from "../constants/PresentationMainPage";
import Page from "./smallComponents/Page";
import { useState } from "react";
import SnakeGame from "./snakeGame/SnakeGame";
import DefaultCanvasSnakeGame from "./snakeGame/DefaultCanvasSnakeGame";
import AlertDialogSlide from "./smallComponents/ModalGameOver";

const MainPage = () => {
  const { language } = useTheme();
  const page = PresentationMainPage.get(language);
  const [starGame, setStartGame] = useState(false);
  const [finalResult, setFinalResult] = useState(0);
  const [showSchoreModal, setShowScoreModal] = useState(false);

  const handleGameOver = (statusGameOver: boolean, finalResult: number) => {
    setStartGame(statusGameOver);
    setFinalResult(finalResult);
    setShowScoreModal(true);
  };

  return (
    <Page>
      <CenterBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: { sx: "100%", md: "80%" },
          }}
        >
          <Box sx={{ width: "35%" }}>
            <Box
              sx={{
                maxWidth: {
                  xs: "100%", // Full width on small screens
                  md: "70%", // 70% width on medium screens and above
                },
                borderRadius: "var(--border-radius)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                overflow: "hidden", // Ensures the border radius applies to the image
              }}
            >
              <img
                src={imagePortfolio} // Replace with your image URL
                alt="Description of the image"
                style={{
                  width: "100%", // Ensures the image takes the full width of the container
                  height: "auto", // Maintains the aspect ratio //
                }}
              />
            </Box>
          </Box>
          {page && (
            <ExtractIconsListMessage
              presentation={page}
              iconsList={page.iconsList}
            />
          )}
        </Box>
      </CenterBox>
      <CenterBox>
        {page?.fullDescription?.split(".").map((lineText, index) => {
          return (
            <Box key={index}>
              <p>{lineText} .</p>
            </Box>
          );
        })}
      </CenterBox>
      <CenterBox>
        <h1>Snake Game</h1>
        {starGame && (
          <>
            <SnakeGame gameOver={handleGameOver} />
          </>
        )}
        {!starGame && (
          <>
            <DefaultCanvasSnakeGame />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button variant="outlined" onClick={() => setStartGame(true)}>
                Start
              </Button>
              {showSchoreModal && (
                <AlertDialogSlide finalResult={finalResult} />
              )}
            </Box>
          </>
        )}
      </CenterBox>
    </Page>
  );
};

export default MainPage;
