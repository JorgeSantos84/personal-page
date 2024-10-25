import React, { useRef, useEffect, useMemo, useState } from "react";
import { Box, Button } from "@mui/material";
import { env } from "process";
import { log } from "console";

interface SnakePosition {
  snakeMember: string;
  direction: string;
  snakeX: number;
  snakeY: number;
}

type SnakeTurnedPosition = {
  x: number;
  y: number;
  previousDirection: string | null;
};

// Board size and configuration
const blockSize = 25;
const rows = 20;
const cols = 20;
const boardWidth = cols * blockSize;
const boardHeight = rows * blockSize;
const defaultCanvasColor = "#1f3811";
const extraPointsDefault = 50;

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

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [elementsSnake, setElementsSnake] = useState<SnakePosition[]>(
    defaultSnakeElementsPosition,
  );

  const snakePositionRef = useRef<SnakePosition[]>(
    defaultSnakeElementsPosition,
  );

  const directionMovingSnakeRef = useRef<string | null>(null);

  const canChange = useRef(false);

  //TODO: MUDAR ISTO PARA UM REF?!?
  const [extraPoints, setExtraPoints] = useState(extraPointsDefault);
  const extraPointsRef = useRef(extraPointsDefault);

  //snake velocity
  const [velocityX, setVelocityX] = useState(0);
  const [velocityY, setVelocityY] = useState(0);
  //need to save last direction
  const lastDirection = useRef({ x: 0, y: 0 });

  //need to know when snake turned to draw sprite
  const snakeTurnedPosition = useRef<SnakeTurnedPosition>({
    x: 0,
    y: 0,
    previousDirection: null,
  });
  //food position
  const [foodPosition, setFoodPosition] = useState({ foodX: 0, foodY: 0 });

  const appleImg = new Image();
  appleImg.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/apple.png`;

  const [activeIntervalId, setActiveIntervalId] =
    useState<NodeJS.Timeout | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Memoize the image loading and ensure all images are loaded before drawing
  const images = useMemo(async () => {
    const headSnakePosition: { [key: string]: HTMLImageElement } = {
      up: new Image(),
      down: new Image(),
      right: new Image(),
      left: new Image(),
    };

    const bodySnakePosition: { [key: string]: HTMLImageElement } = {
      vertical: new Image(),
      bottomRight: new Image(),
      bottomLeft: new Image(),
      topLeft: new Image(),
      topRight: new Image(),
      horizontal: new Image(),
    };

    const tailSnakePosition: { [key: string]: HTMLImageElement } = {
      up: new Image(),
      down: new Image(),
      right: new Image(),
      left: new Image(),
    };

    // Set image sources
    headSnakePosition.up.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/head_up.png`;
    headSnakePosition.down.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/head_down.png`;
    headSnakePosition.right.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/head_right.png`;
    headSnakePosition.left.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/head_left.png`;

    bodySnakePosition.vertical.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/body_vertical.png`;
    bodySnakePosition.bottomRight.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/body_bottomright.png`;
    bodySnakePosition.bottomLeft.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/body_bottomleft.png`;
    bodySnakePosition.topLeft.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/body_topleft.png`;
    bodySnakePosition.topRight.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/body_topright.png`;
    bodySnakePosition.horizontal.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/body_horizontal.png`;

    tailSnakePosition.up.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/tail_up.png`;
    tailSnakePosition.down.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/tail_down.png`;
    tailSnakePosition.left.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/tail_left.png`;
    tailSnakePosition.right.src = `${process.env.PUBLIC_URL}/SnakeGameGraphics/tail_right.png`;

    // Create a function to load images and return a promise
    const loadImage = (img: HTMLImageElement) => {
      return new Promise<HTMLImageElement>((resolve) => {
        img.onload = () => resolve(img);
      });
    };

    // Load all images and return a promise that resolves when all are loaded
    await Promise.all([
      loadImage(headSnakePosition.up),
      loadImage(headSnakePosition.down),
      loadImage(headSnakePosition.right),
      loadImage(headSnakePosition.left),
      loadImage(bodySnakePosition.vertical),
      loadImage(bodySnakePosition.bottomRight),
      loadImage(bodySnakePosition.bottomLeft),
      loadImage(bodySnakePosition.topLeft),
      loadImage(bodySnakePosition.topRight),
      loadImage(bodySnakePosition.horizontal),
      loadImage(tailSnakePosition.up),
      loadImage(tailSnakePosition.down),
      loadImage(tailSnakePosition.right),
      loadImage(tailSnakePosition.left),
    ]);
    return {
      headSnakePosition,
      bodySnakePosition,
      tailSnakePosition,
    };
  }, []); // Empty dependency array means it runs only once

  const placeFood = () => {
    const foodX = Math.floor(Math.random() * cols) * blockSize;
    const foodY = Math.floor(Math.random() * rows) * blockSize;
    return { foodX, foodY };
  };

  useEffect(() => {
    setFoodPosition(placeFood());
  }, []);

  //add elemento to snake when catches food
  const addElementSnake = (newElement: SnakePosition) => {
    let newElementsSnake = [...elementsSnake];
    newElementsSnake[newElementsSnake.length - 1].snakeMember = "body";
    newElementsSnake = [...elementsSnake, newElement];
    setElementsSnake(newElementsSnake);
  };

  // Function to draw the default canvas
  const startDefaultCanvasGame = (images: any) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = defaultCanvasColor;
        context.fillRect(0, 0, boardWidth, boardHeight); // Clear the board

        // Show the snake
        elementsSnake.forEach((element) => {
          switch (element.snakeMember) {
            case "head":
              context.drawImage(
                images.headSnakePosition.right,
                element.snakeX,
                element.snakeY,
                blockSize,
                blockSize,
              );
              break;
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

  const snakeCollide = (snakePosition: SnakePosition[]) => {
    const sizeCanvasRows = rows * blockSize;
    const snakeHead = snakePosition[0];
    const snakeBody = snakePosition.slice(1);

    if (
      snakeHead.snakeX > sizeCanvasRows ||
      snakeHead.snakeX < 0 ||
      snakeHead.snakeY > sizeCanvasRows ||
      snakeHead.snakeY < 0
    ) {
      return true;
    }
    for (const element of snakeBody) {
      if (
        element.snakeX === snakeHead.snakeX &&
        element.snakeY === snakeHead.snakeY
      ) {
        return true;
      }
    }

    return false;
  };

  //sum the total score plus the bonus score to total score
  const sumTotalPlusBonusPoints = () => {
    const totalPlusBonus = totalScore + 10 + extraPointsRef.current;
    setTotalScore(totalPlusBonus);
  };

  //calculate bonus points
  const calcBonusPoints = () => {
    // Will decrement 10 points for each second passed
    const pointDecrease = 10;
    const interval = 500; // Time in milliseconds to execute
    // setExtraPoints(extraPointsDefault);
    extraPointsRef.current = extraPointsDefault;

    // Clear any existing interval before starting a new one
    if (activeIntervalId !== null) {
      clearInterval(activeIntervalId);
    }

    const newIntervalId = setInterval(() => {
      extraPointsRef.current = extraPointsRef.current - pointDecrease;

      if (extraPointsRef.current <= 0) {
        clearInterval(newIntervalId); // Clear the interval when points reach zero
        return 0; // Reset to default points
      }
    }, interval);

    setActiveIntervalId(newIntervalId); // Set the interval ID to state
  };

  //run game
  const runGame = () => {
    let newElementsSnake = [...elementsSnake];

    if (lastDirection.current.x !== 0 || lastDirection.current.y !== 0) {
      // Move the snake head first
      const snakeHeadCurrent = { ...snakePositionRef.current[0] };

      snakeHeadCurrent.snakeX += lastDirection.current.x;
      snakeHeadCurrent.snakeY += lastDirection.current.y;

      // Save the new head position
      const newSnakePosition = [snakeHeadCurrent];

      // Move the body of the snake (shift each element to the previous one's position)
      for (let i = 1; i < snakePositionRef.current.length; i++) {
        const newSnakeMember: SnakePosition = {
          snakeMember: snakePositionRef.current[i].snakeMember,
          direction: snakePositionRef.current[i].direction,
          snakeX: snakePositionRef.current[i - 1].snakeX,
          snakeY: snakePositionRef.current[i - 1].snakeY,
        };
        newSnakePosition[i] = newSnakeMember; // Shift each body part to the previous one's position
      }

      // Update the snakePositionRef with the new positions (head + body)
      snakePositionRef.current = newSnakePosition;
      newElementsSnake = snakePositionRef.current;
    }

    if (snakeCollide(newElementsSnake)) {
      images.then(startDefaultCanvasGame);
      setGameStarted(false);
      return;
    }

    // Check if the snake catches the food and update score and food location
    if (
      foodPosition.foodX === newElementsSnake[0].snakeX &&
      foodPosition.foodY === newElementsSnake[0].snakeY
    ) {
      sumTotalPlusBonusPoints();
      calcBonusPoints();
      setFoodPosition(placeFood()); // Place new food
      // Add a new segment to the snake (to the tail)
      addElementSnake({
        snakeMember: "tail",
        direction: newElementsSnake[newElementsSnake.length - 1].direction,
        snakeX: newElementsSnake[newElementsSnake.length - 1].snakeX,
        snakeY: newElementsSnake[newElementsSnake.length - 1].snakeY,
      });
      newElementsSnake[newElementsSnake.length - 1].snakeMember = "body";
      newElementsSnake.push({
        snakeMember: "tail",
        direction: newElementsSnake[newElementsSnake.length - 1].direction,
        snakeX: newElementsSnake[newElementsSnake.length - 1].snakeX,
        snakeY: newElementsSnake[newElementsSnake.length - 1].snakeY,
      });
    }

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = defaultCanvasColor;
        context.fillRect(0, 0, boardWidth, boardHeight); // Clear the board

        context.drawImage(
          appleImg,
          foodPosition.foodX,
          foodPosition.foodY,
          blockSize,
          blockSize,
        );

        images.then((images) => drawSnake(newElementsSnake, images, context));
      }
    }
  };

  //draw snake
  const drawSnake = (snake: SnakePosition[], images: any, context: any) => {
    // Show the snake
    let imageDirection: any = null;
    snake.forEach((element) => {
      switch (element.snakeMember) {
        case "head":
          switch (directionMovingSnakeRef.current) {
            case "right":
              imageDirection = images.headSnakePosition.right;
              break;
            case null:
              imageDirection = images.headSnakePosition.right;
              break;
            case "up":
              imageDirection = images.headSnakePosition.up;
              break;
            case "down":
              imageDirection = images.headSnakePosition.down;
              break;
            case "left":
              imageDirection = images.headSnakePosition.left;
              break;
            default:
              console.log("invalido");
              break;
          }
          if (imageDirection) {
            context.drawImage(
              imageDirection,
              element.snakeX,
              element.snakeY,
              blockSize,
              blockSize,
            );
          }
          break;
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
  };

  //set direction
  const ChangeDirectionSnake = (event: KeyboardEvent) => {
    switch (event.key) {
      case "ArrowUp":
        if (lastDirection.current.y != 25) {
          setVelocityX(0);
          setVelocityY(-1 * blockSize);
          lastDirection.current = { x: 0, y: -1 * blockSize };
          //set position where snake changed direction
          snakeTurnedPosition.current.x = snakePositionRef.current[0].snakeX;
          snakeTurnedPosition.current.y = snakePositionRef.current[0].snakeY;
          snakeTurnedPosition.current.previousDirection =
            directionMovingSnakeRef.current;
          directionMovingSnakeRef.current = "up";
        }
        break;
      case "ArrowDown":
        if (lastDirection.current.y != -25) {
          setVelocityX(0);
          setVelocityY(1 * blockSize);
          lastDirection.current = { x: 0, y: 1 * blockSize };
          //set position where snake changed direction
          snakeTurnedPosition.current.x = snakePositionRef.current[0].snakeX;
          snakeTurnedPosition.current.y = snakePositionRef.current[0].snakeY;
          snakeTurnedPosition.current.previousDirection =
            directionMovingSnakeRef.current;
          directionMovingSnakeRef.current = "down";
        }
        break;
      case "ArrowLeft":
        if (lastDirection.current.x != 25) {
          setVelocityX(-1 * blockSize);
          setVelocityY(0);
          lastDirection.current = { x: -1 * blockSize, y: 0 };
          //set position where snake changed direction
          snakeTurnedPosition.current.x = snakePositionRef.current[0].snakeX;
          snakeTurnedPosition.current.y = snakePositionRef.current[0].snakeY;
          snakeTurnedPosition.current.previousDirection =
            directionMovingSnakeRef.current;
          directionMovingSnakeRef.current = "left";
        }

        break;
      case "ArrowRight":
        if (lastDirection.current.x != -25) {
          setVelocityX(1 * blockSize);
          setVelocityY(0);
          lastDirection.current = { x: 1 * blockSize, y: 0 };
          //set position where snake changed direction
          snakeTurnedPosition.current.x = snakePositionRef.current[0].snakeX;
          snakeTurnedPosition.current.y = snakePositionRef.current[0].snakeY;
          snakeTurnedPosition.current.previousDirection =
            directionMovingSnakeRef.current;
          directionMovingSnakeRef.current = "right";
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (gameStarted) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key) {
          ChangeDirectionSnake(event);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      const intervalRender = setInterval(runGame, 1000 / 10); // Increased frequency for smoother updates
      return () => {
        clearInterval(intervalRender);
      };
    } else {
      images.then(startDefaultCanvasGame);
    }
  }, [gameStarted, elementsSnake]); // Run this effect when images promise resolves

  return (
    <>
      <h4>
        <Box>Score: {totalScore}</Box>
      </h4>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <canvas
          ref={canvasRef}
          width={boardWidth}
          height={boardHeight}
        ></canvas>
      </Box>
      <Button variant="outlined" onClick={() => setGameStarted(true)}>
        Start
      </Button>
    </>
  );
};

export default Canvas;
