import CoffeeIcon from "@mui/icons-material/Coffee";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import { Box } from "@mui/material";
import imagePortfolio from "../assets/apresentacao_paginajpeg.jpg";

const MainPage = () => {
  return (
    <div className="page">
      <div className="page-article">
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "35%" }}>
            {" "}
            <img
              src={imagePortfolio} // Replace with your image URL
              alt="Description of the image"
              style={{
                maxWidth: "70%", // Responsive image
                borderRadius: "var(--border-radius)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
          <Box sx={{ marginLeft: 4 }}>
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
