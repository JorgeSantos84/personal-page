import { Box, Button } from "@mui/material";
import React, { useRef, useEffect, useMemo, useState } from "react";

// Board size and configuration
const blockSize = 15;
const rows = 30;
const cols = 20;
const boardWidth = cols * blockSize;
const boardHeight = rows * blockSize;
const defaultCanvasColor = "#1f3811";

interface SnakePosition {
  snakeMember: string;
  direction: string;
  snakeX: number;
  snakeY: number;
  newDirection?: NewDirection[];
}

type NewDirection = {
  direction: string;
  snakeX: number;
  snakeY: number;
};
// Default snake positions
const defaultSnakeElementsPosition: SnakePosition[] = [
  {
    snakeMember: "head",
    direction: "right",
    snakeX: 5 * blockSize,
    snakeY: 5 * blockSize,
  },
  {
    snakeMember: "body",
    direction: "right",
    snakeX: 4 * blockSize,
    snakeY: 5 * blockSize,
  },
  {
    snakeMember: "tail",
    direction: "right",
    snakeX: 3 * blockSize,
    snakeY: 5 * blockSize,
  },
];

const DefaultCanvasSnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elementsSnake, setElementsSnake] = useState<SnakePosition[]>(
    defaultSnakeElementsPosition,
  );
  const startDefaultCanvasGame = (images: any) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = defaultCanvasColor;
        context.fillRect(0, 0, boardWidth, boardHeight); // Clear the board

        //Show the snake
        elementsSnake.forEach((element) => {
          switch (element.snakeMember) {
            // case "head":
            //   context.drawImage(
            //     images.headSnakePosition.right,
            //     element.snakeX,
            //     element.snakeY,
            //     blockSize,
            //     blockSize,
            //   );
            //   break;
            case "body":
              context.fillStyle = "#5b7bf9";
              context.fillRect(
                element.snakeX,
                element.snakeY,
                blockSize,
                blockSize,
              );
              break;
            case "tail":
              context.fillStyle = "#5b7bf9";
              context.fillRect(
                element.snakeX,
                element.snakeY,
                blockSize,
                blockSize,
              );
              break;
            default:
              console.log("Invalid Snake Member type");
          }
        });
      }
    }
  };

  useEffect(() => {
    startDefaultCanvasGame({});
  }, []);
  return (
    <>
      <h4>
        <Box>Score: 0 </Box>
      </h4>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <canvas
          ref={canvasRef}
          width={boardWidth}
          height={boardHeight}
        ></canvas>
      </Box>
    </>
  );
};

export default DefaultCanvasSnakeGame;
