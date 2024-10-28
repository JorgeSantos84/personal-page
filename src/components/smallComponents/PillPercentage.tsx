import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";

const PillPercentage: React.FC<{ pillPercentage: number }> = ({
  pillPercentage,
}) => {
  const theme = useTheme();
  const prev = useRef(0);
  const [pillPercentageUpdate, setPillPercentageUpdate] = useState(0);

  useEffect(() => {
    // Gradually increase the pill percentage
    const interval = setInterval(() => {
      setPillPercentageUpdate(() => {
        if (prev.current < pillPercentage) {
          prev.current += 5;
          return prev.current;
        } else {
          clearInterval(interval); // Clear the interval once the target is reached
          return prev.current;
        }
      });
    }, 30); // Adjust the speed of the animation

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [pillPercentage]);

  return (
    <Box
      sx={{
        width: "150px",
        height: "20px",
        borderRadius: "20px",
        position: "relative",
        marginBottom: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%", // Full width
          height: "100%", // Full height
          backgroundColor: "var(--bk-color)", // Color for the empty portion
          borderRadius: "20px",
        }}
      ></Box>
      <Box
        sx={{
          width: pillPercentageUpdate + "%",
          height: "20px",
          background: theme.palette.primary.main,
          borderRadius: "20px",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "width 1s ease-in-out",
        }}
      ></Box>
    </Box>
  );
};

export default PillPercentage;
