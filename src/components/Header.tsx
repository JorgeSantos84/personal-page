import React, { ChangeEvent, useContext, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import myAvatar from "../assets/avatar_jorge.jpg";
import FlagsSelect from "react-flags-select";
import { useTheme } from "../context/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Tooltip } from "@mui/material";
import MenuLabels from "../constants/MenuLabels";
import { text } from "stream/consumers";
import { useNavigate } from "react-router-dom";
import MainPage from "./MainPage";

const LanguageSelect: React.FC = () => {
  const [selected, setSelected] = React.useState("PT"); // Default to Portugal
  const { language, toggleLanguage } = useTheme();

  const handleSelect = (code: string) => {
    setSelected(code);
    toggleLanguage(code);
  };

  return (
    <>
      {/* Flag Select Dropdown */}
      <FlagsSelect
        selected={selected}
        onSelect={handleSelect}
        countries={["PT", "GB"]} // Include Portugal and UK flags
        customLabels={{ PT: "PT", GB: "EN" }}
        selectedSize={14}
        className="flagselect"
      />
    </>
  );
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const lightModeIcon = <LightModeIcon sx={{ color: "orange" }} />;
  const darkModeIcon = <DarkModeIcon sx={{ color: "white" }} />;

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { theme, toggleTheme, language } = useTheme();
  const [themeIcon, setIconTheme] = React.useState(lightModeIcon);
  const menuLabels = MenuLabels.get(language);

  const DrawerList = (
    <Box
      className="drawer-list"
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menuLabels?.map((text, index) => {
          const nameMenu: string = text.split("_")[0].trim();
          const linkMenu: string =
            text.split("_").length > 1
              ? text.split("_")[1].trim()
              : "notFoundPage";
          return (
            <ListItem className="item-drawer" key={nameMenu} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={nameMenu}
                  onClick={() => navigate(linkMenu)}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      {/* <Divider /> */}
    </Box>
  );

  useEffect(() => {
    auth ? setIconTheme(lightModeIcon) : setIconTheme(darkModeIcon);
  }, [auth]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
    toggleTheme();
  };

  const handleMenu = (event: ChangeEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "65px",
        width: "100%",
        position: "fixed",
        backgroundColor: "var(--header-bk-color)",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--font-color-main)",
          height: 55,
          width: 55,
          borderRadius: "50%",
          marginLeft: 2,
          cursor: "pointer",
        }}
        onClick={() => navigate("/personal-page")}
      >
        <Avatar
          alt="Jorge Santos"
          src={myAvatar}
          sx={{ width: 50, height: 50 }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginRight: 2,
        }}
      >
        <Tooltip title="Mudar Tema" arrow>
          <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} />}
            label={themeIcon}
          />
        </Tooltip>
        <LanguageSelect></LanguageSelect>
        <IconButton size="large" onClick={toggleDrawer(true)}>
          <MenuIcon
            fontSize="inherit"
            sx={{ cursor: "pointer" }}
            className="icons-theme"
          />
        </IconButton>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
