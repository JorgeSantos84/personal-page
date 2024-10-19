import CenterBox from "./smallComponents/CenterBox";
import Page from "./smallComponents/Page";
import { useTheme } from "../context/ThemeContext";
import PresentationMainPage from "../constants/PresentationMainPage";
import { Button, Grid2 } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const linkedInLink = "https://www.linkedin.com/in/jorge-mosantos/";

const openEmailClient = () => {
  const email = "jorgesantos84@gmail.com";
  const subject = "Pedido de contacto";
  const body =
    "Olá, gostaria de te apresentar uma oportunidade para a qual achamos que és a pessoa ideal. Obrigado";
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactsPage = () => {
  const { language } = useTheme();

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Page>
      <CenterBox>
        <h1 style={{ fontWeight: "bold" }}>
          {language && language === "PT" ? "Contactos" : "Contacts"}
        </h1>
        <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
          <Grid2 container>
            <Grid2 size={{ xs: 2, md: 1 }}>
              <SmartphoneIcon />
            </Grid2>
            <Grid2 sx={{ marginTop: "6px" }} size={{ xs: 10, md: 11 }}>
              <a
                href={`tel:${935687502}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                935 687 502
              </a>
            </Grid2>
            <Grid2
              container
              size={{ xs: 12, md: 12 }}
              sx={{ marginTop: "15px" }}
            >
              <Grid2 size={{ xs: 2, md: 1 }}>
                <ContactMailIcon sx={{ marginRight: 2 }} />
              </Grid2>
              <Grid2 size={{ xs: 10, md: 11 }}>
                <Box
                  sx={{ color: "inherit", padding: "none", cursor: "pointer" }}
                  onClick={() => {
                    openEmailClient();
                  }}
                >
                  jorgesantos84@gmail.com
                </Box>
              </Grid2>
            </Grid2>
            <Grid2
              container
              size={{ xs: 12, md: 12 }}
              sx={{ marginTop: "15px" }}
            >
              <Grid2 size={{ xs: 2, md: 1 }}>
                <LinkedInIcon sx={{ marginRight: 2 }} />
              </Grid2>
              <Grid2 size={{ xs: 10, md: 11 }}>
                <Box
                  sx={{ color: "inherit", padding: "none", cursor: "pointer" }}
                  onClick={() => {
                    openInNewTab(linkedInLink);
                  }}
                >
                  https://www.linkedin.com/in/jorge-mosantos/
                </Box>
              </Grid2>
            </Grid2>
            <Grid2
              container
              size={{ xs: 12, md: 12 }}
              sx={{ marginTop: "15px" }}
            >
              <Grid2 size={{ xs: 2, md: 1 }}>
                <LocationOnIcon sx={{ marginRight: 2 }} />
              </Grid2>
              <Grid2 size={{ xs: 10, md: 11 }}>Braga, Portugal</Grid2>
            </Grid2>
          </Grid2>
        </Box>
      </CenterBox>
    </Page>
  );
};

export default ContactsPage;
