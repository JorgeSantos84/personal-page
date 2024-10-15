import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: (lang: string) => void;
}

// Create the Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the props for the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode; // Type for children
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light"); // Default theme
  const [language, setLanguage] = useState<string>("PT"); // Default language

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      // Set CSS variables based on the current theme
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  const toggleLanguage = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, language, toggleLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
