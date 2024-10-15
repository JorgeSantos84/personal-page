import React from "react";
import { Box, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Footer = () => {
  const presentYear = new Date().getFullYear();
  const linkedInLink = "https://www.linkedin.com/in/jorge-mosantos/";

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openEmailClient = () => {
    const email = "jorgesantos84@gmail.com";
    const subject = "Pedido de contacto";
    const body =
      "Olá, gostaria de te apresentar uma oportunidade para a qual achamos que és a pessoa ideal. Obrigado";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Box className="footer">
        © {presentYear} Jorge Santos
        <Box>
          <Tooltip title="Enviar Email" arrow>
            <ContactMailIcon
              sx={{ cursor: "pointer", marginRight: 2 }}
              onClick={() => {
                openEmailClient();
              }}
            />
          </Tooltip>
          <Tooltip title="LinkedIn Perfil" arrow>
            <LinkedInIcon
              sx={{ cursor: "pointer" }}
              onClick={() => {
                openInNewTab(linkedInLink);
              }}
            />
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
