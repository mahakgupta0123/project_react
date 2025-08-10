import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  // Apply theme to HTML element whenever themeMode changes
  useEffect(() => {
    const html = document.documentElement; // Use documentElement instead of querySelector
    
    // Remove both classes first
    html.classList.remove('light', 'dark');
    
    // Add the current theme class
    html.classList.add(themeMode);
    
    // Debug: Log to console
    console.log(`Theme changed to: ${themeMode}`);
    console.log(`HTML classes: ${html.className}`);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, darkMode, lightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}