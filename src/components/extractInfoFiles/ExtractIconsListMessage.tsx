import React from "react";
import { IconItem, PresentationPage } from "../../types/presentationPage";
import { Box } from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";

/*
this component is only used to extract info from the PT/EN text for main page
*/

// Define props interface for presentation and iconsList
interface ExtractIconsListMessageProps {
  presentation: PresentationPage;
  iconsList: IconItem[];
}

const ExtractIconsListMessage: React.FC<ExtractIconsListMessageProps> = ({
  presentation,
  iconsList,
}) => {
  const iconsMapList: Record<string, React.ReactNode> = {
    HomeIcon: (
      <HomeIcon
        sx={{
          color: "var(--font-color-main)",
        }}
      />
    ),
    CoffeeIcon: (
      <CoffeeIcon
        sx={{
          color: "var(--font-color-main)",
        }}
      />
    ),
    WorkIcon: (
      <WorkIcon
        sx={{
          color: "var(--font-color-main)",
        }}
      />
    ),
  };

  return (
    <Box sx={{ marginLeft: { xs: "2px", md: 2 } }}>
      <article>
        <header>
          <h1 style={{ fontWeight: "bold" }}>
            {presentation?.title}
            <span className="gradient-text">{presentation?.nomePortfolio}</span>
          </h1>
          <p style={{ fontWeight: "bold" }}>{presentation?.subtitle}</p>
        </header>
        <section>
          {iconsList.map((icon, index) => {
            const iconComponent: React.ReactNode = iconsMapList[icon.icon];
            const iconMessage: string = icon.message;
            return iconComponent ? (
              <p key={index}>
                {iconComponent} - {iconMessage}
              </p>
            ) : null;
          })}
        </section>
      </article>
    </Box>
  );
};

export default ExtractIconsListMessage;
