import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MenuIntroduction from "./MenuIntroduction";
import myAvatar from "../assets/avatar_jorge.jpg";
import FlagsSelect from "react-flags-select";
import { useTheme } from "../context/ThemeContext";

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
        selectedSize={12}
      />
    </>
  );
};

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { theme, toggleTheme } = useTheme();

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
    <Box>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        {/* Right-aligned Switch */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 1,
            height: "10px",
            marginTop: "7px",
          }}
        >
          <FormControlLabel
            style={{ color: "black" }}
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={
              <Box
                sx={{
                  display: "inline-flex", // Use inline-flex for label
                  alignItems: "center", // Center the text vertically
                  justifyContent: "center", // Center the text horizontally
                  backgroundColor: "black",
                  borderRadius: "20px", // Round background
                  padding: "1px 5px", // Padding for some space around text
                  color: "white", // Text color
                  marginLeft: "8px", // Space between switch and label
                }}
              >
                {auth ? "Claro" : "Escuro"}
              </Box>
            }
          />
        </Box>

        {/* Toolbar Section */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Avatar on the left */}
          <Box>
            <Avatar
              alt="Jorge Santos"
              src={myAvatar}
              sx={{ width: 50, height: 50, marginTop: "5px" }}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ marginRight: 2 }}>
              <LanguageSelect></LanguageSelect>
            </Box>
            <MenuIntroduction /> {/* Use marginLeft instead of marginRight */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
