import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface CenterBoxProps {
  children: ReactNode;
}

const CenterBox: React.FC<CenterBoxProps> = ({ children }) => {
  return (
    <Box
      className="presentation-article"
      sx={{ width: { xs: "100%", md: "80%" } }}
    >
      {children}
    </Box>
  );
};

export default CenterBox;
