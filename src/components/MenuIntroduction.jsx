import * as React from "react";
import PropTypes from "prop-types";
import { Menu } from "@mui/base/Menu";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { MenuButton } from "@mui/base/MenuButton";
import { Dropdown } from "@mui/base/Dropdown";
import { useTheme } from "../context/ThemeContext";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function MenuIntroduction() {
  const navigate = useNavigate();

  const createHandleMenuClick = (menuItem) => {
    return () => {
      navigate(menuItem);
    };
  };

  return (
    <Dropdown>
      <MenuButton className="TriggerButtonIntroduction">
        <MenuIcon />
      </MenuButton>

      <Menu
        className="CustomMenuIntroduction"
        slots={{
          listbox: Listbox,
        }}
        slotProps={{
          listbox: { className: "CustomMenuIntroduction--listbox" },
        }}
        style={{ left: "10px" }}
      >
        <MenuItem
          className="CustomMenuIntroduction--item"
          onClick={createHandleMenuClick("/mainPage")}
        >
          Main Page
        </MenuItem>
        <MenuItem
          className="CustomMenuIntroduction--item"
          onClick={createHandleMenuClick("/notFoundPage")}
        >
          Language settings
        </MenuItem>
        <MenuItem
          className="CustomMenuIntroduction--item"
          onClick={createHandleMenuClick("Log out")}
        >
          Log out
        </MenuItem>
      </Menu>
      <Styles />
    </Dropdown>
  );
}

const Listbox = React.forwardRef(function Listbox(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      "The `Listbox` component cannot be rendered outside a `Popup` component",
    );
  }

  const verticalPlacement = popupContext.placement.split("-")[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <ul {...other} ref={ref} />
    </CssTransition>
  );
});

Listbox.propTypes = {
  ownerState: PropTypes.object.isRequired,
};

const cyan = {
  50: "#E9F8FC",
  100: "#BDEBF4",
  200: "#99D8E5",
  300: "#66BACC",
  400: "#1F94AD",
  500: "#0D5463",
  600: "#094855",
  700: "#063C47",
  800: "#043039",
  900: "#022127",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

function useIsDarkMode() {
  const { theme } = useTheme();
  return theme === "light";
}

function Styles() {
  // Replace this with your app logic for determining dark mode
  const isDarkMode = useIsDarkMode();

  return (
    <style>{`
    .CustomMenuIntroduction--listbox {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      padding: 6px;
      margin: 0px 20px 0px 0px;
      min-width: 200px;
      border-radius: 12px;
      overflow: auto;
      outline: 0;
      // background: ${isDarkMode ? grey[900] : "#fff"};
      // border: 1px solid ${isDarkMode ? grey[700] : grey[200]};
      color: ${isDarkMode ? grey[300] : grey[900]};
      //box-shadow: 0px 4px 30px ${isDarkMode ? grey[900] : grey[200]};

      .closed & {
        opacity: 0;
        transform: scale(0.95, 0.8);
        transition: opacity 200ms ease-in, transform 200ms ease-in;
      }

      .open & {
        opacity: 1;
        transform: scale(1, 1);
        transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
      }

      .placement-top & {
        transform-origin: bottom;
      }

      .placement-bottom & {
        transform-origin: top;
      }
    }

    .CustomMenuIntroduction--item {
      list-style: none;
      padding: 10px;
      margin: 10px;
      border-radius: 12px;
      background: ${isDarkMode ? grey[900] : "#fff"};
      border: 1px solid ${isDarkMode ? grey[700] : grey[200]};
      box-shadow: 0px 0px 4px ${isDarkMode ? grey[900] : grey[200]};
      cursor: default;
      user-select: none;
    }

    .CustomMenuIntroduction--item:last-of-type {
      border-bottom: none;
    }

    .CustomMenuIntroduction--item:focus {
      outline: 3px solid ${isDarkMode ? cyan[600] : cyan[200]};
      background-color: ${isDarkMode ? grey[800] : grey[100]};
      color: ${isDarkMode ? grey[300] : grey[900]};
    }

    .CustomMenuIntroduction--item.${menuItemClasses.disabled} {
      color: ${isDarkMode ? grey[700] : grey[400]};
    }

    .TriggerButtonIntroduction {
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 8px 16px;
      border-radius: 8px;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${isDarkMode ? "#121212" : "#fff"};
      background-image: var(--Paper-overlay);
      border: none;
      color: ${isDarkMode ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

      &:hover {
        background: ${isDarkMode ? grey[800] : grey[50]};
        border-color: ${isDarkMode ? grey[600] : grey[300]};
      }

      &:active {
        background: ${isDarkMode ? grey[700] : grey[100]};
      }

      &:focus-visible {
        box-shadow: 0 0 0 4px ${isDarkMode ? cyan[300] : cyan[200]};
        outline: none;
      }
    }

    .CustomMenuIntroduction {
      z-index: 1;
    }
    `}</style>
  );
}
