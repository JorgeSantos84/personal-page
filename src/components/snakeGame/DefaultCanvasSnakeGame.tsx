import { Box } from "@mui/material";
import React, { useRef, useEffect } from "react";

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
}

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

// Utility function to load an image as a Promise
const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
  });
};

const DefaultCanvasSnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Load the snake head image and draw the snake
  useEffect(() => {
    const drawGame = async () => {
      const snakeHeadImage = await loadImage(
        `${process.env.PUBLIC_URL}/SnakeGameGraphics/head_right.png`,
      );

      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
          context.fillStyle = defaultCanvasColor;
          context.fillRect(0, 0, boardWidth, boardHeight); // Clear the board

          // Show the snake on the board
          defaultSnakeElementsPosition.forEach((element) => {
            switch (element.snakeMember) {
              case "head":
                context.drawImage(
                  snakeHeadImage,
                  element.snakeX,
                  element.snakeY,
                  blockSize,
                  blockSize,
                );
                break;
              case "body":
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
                console.error("Invalid snake member type");
            }
          });
        }
      }
    };

    drawGame().catch((error) =>
      console.error("Failed to draw the game", error),
    );
  }, []); // Empty dependency array ensures this runs only once

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
