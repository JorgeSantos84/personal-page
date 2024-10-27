import CenterBox from "./smallComponents/CenterBox";
import Page from "./smallComponents/Page";
import { Box, Button } from "@mui/material";
import SnakeGame from "./snakeGame/SnakeGame";
import { useState } from "react";
import DefaultCanvasSnakeGame from "./snakeGame/DefaultCanvasSnakeGame";
import AlertDialogSlide from "./smallComponents/ModalGameOver";

const SnakePage = () => {
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

export default SnakePage;
