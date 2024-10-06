import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create the Theme Context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      prevTheme === "light" ? "dark" : "light";
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // Set CSS variables based on the current theme

      document.documentElement.setAttribute(
        "data-theme",
        theme === "dark" ? "light" : "dark",
      );

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// PropTypes validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};
