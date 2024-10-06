import * as React from "react";
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
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import { useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Tooltip } from "@mui/material";

const LanguageSelect = () => {
  const [selected, setSelected] = React.useState("PT"); // Default to Portugal

  return (
    <>
      {/* Flag Select Dropdown */}
      <FlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
        countries={["PT", "GB"]} // Include Portugal and UK flags
        placeholder="PT/EN"
        customLabels={{ PT: "PT", GB: "EN" }}
        selectedSize={14}
      />
    </>
  );
};

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const lightModeIcon = <LightModeIcon sx={{ color: "orange" }} />;
  const darkModeIcon = <DarkModeIcon sx={{ color: "white" }} />;

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { theme, toggleTheme } = useTheme();
  const [themeIcon, setIconTheme] = React.useState(lightModeIcon);

  useEffect(() => {
    auth ? setIconTheme(lightModeIcon) : setIconTheme(darkModeIcon);
  }, [auth]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
    toggleTheme();
  };

  const handleMenu = (event) => {
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
        height: "80px",
      }}
    >
      <Box>
        <Avatar
          alt="Jorge Santos"
          src={myAvatar}
          sx={{ width: 50, height: 50, marginLeft: 2 }}
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
            control={
              <Switch checked={auth} onChange={handleChange} defaultChecked />
            }
            label={themeIcon}
          />
        </Tooltip>
        <LanguageSelect></LanguageSelect>
        <IconButton size="large">
          <MenuIcon
            fontSize="inherit"
            sx={{ cursor: "pointer" }}
            onClick={toggleDrawer(true)}
            className="icons-theme"
          />
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
