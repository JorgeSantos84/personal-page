import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide, { SlideProps } from "@mui/material/Slide";
import { useTheme } from "../../context/ThemeContext";
import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const Transition = React.forwardRef<HTMLDivElement, SlideProps>(
  function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  },
);

// Define the props type for the component
interface AlertDialogSlideProps {
  finalResult: number; // Assuming finalResult is a number
}

export default function AlertDialogSlide({
  finalResult,
}: AlertDialogSlideProps) {
  const { language } = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle className="dialog-game-over">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {language === "PT" ? "Jogo Terminou" : "Game Over"}
          </Box>
        </DialogTitle>
        <DialogContent className="dialog-game-over">
          <Box
            sx={{ color: "var(--font-color-main)" }}
            id="alert-dialog-slide-description"
          >
            <EmojiEventsIcon
              sx={{
                color: "#bdb40d",
                fontSize: 50,
                width: "100%",
                marginBottom: "10px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginBottom: "10px",
              }}
            >
              SCORE: {finalResult}
            </Box>
            {language === "PT"
              ? "Obrigado por ter jogado!!"
              : "Thanks for playing!!"}
            <InsertEmoticonIcon sx={{ color: "#bdb40d" }} />
          </Box>
        </DialogContent>
        <DialogActions className="dialog-game-over">
          <Button onClick={handleClose}>
            {language === "PT" ? "Fechar" : "Close"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
