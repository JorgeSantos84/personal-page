import CenterBox from "./smallComponents/CenterBox";
import Page from "./smallComponents/Page";
import { Box } from "@mui/material";
import Canvas from "./snakeGame/Canvas";

const SnakePage = () => {
  return (
    <Page>
      <CenterBox>
        <h1>Snake Game</h1>
        <Canvas />
      </CenterBox>
    </Page>
  );
};

export default SnakePage;
