import { Box } from "@mui/material";
import imagePortfolio from "../assets/apresentacao_paginajpeg.jpg";
import ExtractIconsListMessage from "./extractInfoFiles/ExtractIconsListMessage";
import CenterBox from "./CenterBox";
import { useTheme } from "../context/ThemeContext";
import PresentationMainPage from "../constants/PresentationMainPage";

const MainPage = () => {
  const { language } = useTheme();
  const page = PresentationMainPage.get(language);

  return (
    <div className="page">
      <CenterBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: { sx: "100%", md: "80%" },
          }}
        >
          <Box sx={{ width: "35%" }}>
            <Box
              sx={{
                maxWidth: {
                  xs: "100%", // Full width on small screens
                  md: "70%", // 70% width on medium screens and above
                },
                borderRadius: "var(--border-radius)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                overflow: "hidden", // Ensures the border radius applies to the image
              }}
            >
              <img
                src={imagePortfolio} // Replace with your image URL
                alt="Description of the image"
                style={{
                  width: "100%", // Ensures the image takes the full width of the container
                  height: "auto", // Maintains the aspect ratio
                }}
              />
            </Box>
          </Box>
          {page && (
            <ExtractIconsListMessage
              presentation={page}
              iconsList={page.iconsList}
            />
          )}
        </Box>
      </CenterBox>
      <CenterBox>
        {page?.fullDescription?.split(".").map((lineText) => {
          return (
            <>
              <p>{lineText} .</p>
            </>
          );
        })}
      </CenterBox>
    </div>
  );
};

export default MainPage;
