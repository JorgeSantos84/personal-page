import CoffeeIcon from "@mui/icons-material/Coffee";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import { Box } from "@mui/material";
import imagePortfolio from "../assets/apresentacao_paginajpeg.jpg";

const MainPage = () => {
  return (
    <div className="page">
      <div className="page-article">
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
          <Box sx={{ marginLeft: { xs: "2px", md: 4 } }}>
            <article>
              <header>
                <h1 style={{ fontWeight: "bold" }}>
                  Olá, sou o <span className="gradient-text">Jorge</span>{" "}
                </h1>
                <p style={{ fontWeight: "bold" }}>
                  sou um Full Stack Web Developer.
                </p>
              </header>
              <section>
                <p>
                  <CoffeeIcon sx={{ color: "#db5856" }} /> Movimentado a café
                </p>
                <p>
                  <HomeIcon sx={{ color: "#9cd69f" }} /> Residente em Braga
                </p>
                <p>
                  <WorkIcon sx={{ color: "#4e79e6" }} /> ItSector - Java
                  Developer
                </p>
              </section>
            </article>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default MainPage;
