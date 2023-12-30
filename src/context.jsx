import { useCallback, useContext, useEffect, useState } from "react";
import { createContext } from "react";
const ContextProvider = createContext();
export const useGlobal = () => useContext(ContextProvider);
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  const storedDarkMode = localStorage.getItem("darkTheme");

  if (storedDarkMode === null) {
    localStorage.setItem("darkTheme", prefersDarkMode);
    return prefersDarkMode;
  }
  return storedDarkMode === "true";
};
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");
  const toggleDarkTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme);
  });
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <ContextProvider.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
export default AppProvider;
