import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="container">
      <h1 className="page-title">🌗 Theme Switcher 🌗</h1>
      <h3 className="page-subtitle">Toggle between Light and Dark Mode!</h3>
      <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
