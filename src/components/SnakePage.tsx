import CenterBox from "./smallComponents/CenterBox";
import Page from "./smallComponents/Page";
import { Box, Button } from "@mui/material";
import SnakeGame from "./snakeGame/SnakeGame";
import { useState } from "react";
import DefaultCanvasSnakeGame from "./snakeGame/DefaultCanvasSnakeGame";

const SnakePage = () => {
  const [starGame, setStartGame] = useState(false);

  const handleGameOver = (data: boolean) => {
    setStartGame(data);
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
            </Box>
          </>
        )}
      </CenterBox>
    </Page>
  );
};

export default SnakePage;
