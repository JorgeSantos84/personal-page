import { Box } from "@mui/material";

interface ButtonWorkLanguagesProps {
  technology: string;
}

const ButtonWorkLanguages: React.FC<ButtonWorkLanguagesProps> = ({
  technology,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(45,212,191,.15)",
        borderRadius: "9999px",
        paddingTop: ".25rem",
        paddingBottom: ".25rem",
        paddingLeft: ".75rem",
        paddingRight: ".75rem",
        marginTop: "5px",
        marginRight: "5px",
        fontSize: "0.75rem",
        fontWeight: "800",
        lineHeight: "1.25rem",
        color: "#2dd4bf",
        "@media (max-width: 500px)": {
          fontWeight: "700",
          paddingLeft: ".65rem",
          paddingRight: ".65rem",
        },
      }}
    >
      {technology}
    </Box>
  );
};

export default ButtonWorkLanguages;
