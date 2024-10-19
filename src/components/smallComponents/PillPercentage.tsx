import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PillPercentage: React.FC<{ pillPercentage: number }> = ({
  pillPercentage,
}) => {
  const theme = useTheme();

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
          width: pillPercentage + "%",
          height: "20px",
          background: theme.palette.primary.main,
          borderRadius: "20px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></Box>
    </Box>
  );
};

export default PillPercentage;
