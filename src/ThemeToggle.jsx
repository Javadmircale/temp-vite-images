import React, { memo } from "react";
import { useGlobal } from "./context";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobal();
  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle">
        {isDarkTheme ? (
          <FaMoon className="toggle-icon  " color="white" />
        ) : (
          <FaSun className="toggle-icon " />
        )}
      </button>
    </section>
  );
};

export default memo(ThemeToggle);
