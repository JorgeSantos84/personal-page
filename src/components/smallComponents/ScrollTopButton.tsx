import { Box, Fab } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Draggable, { DraggableCore } from "react-draggable";
import { log } from "console";
import { type } from "os";

const ScrollTopButton = () => {
  const [showButtonUp, setShowButtonUp] = useState(false);
  const pressStartTime = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButtonUp(true);
      } else {
        setShowButtonUp(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    const pressDuratioin = Date.now() - pressStartTime.current;
    if (pressDuratioin > 20000) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    pressStartTime.current = 0;
  };

  const handleMouseDown = () => {
    pressStartTime.current = Date.now();
  };

  return (
    <>
      {showButtonUp && (
        <Box sx={{ position: "fixed", bottom: 50, right: 16 }}>
          <Draggable onDrag={handleMouseDown} onStop={scrollTop}>
            <Fab size="small" color="primary" aria-label="scroll to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </Draggable>
        </Box>
      )}
    </>
  );
};

export default ScrollTopButton;
