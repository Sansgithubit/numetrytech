import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Notes from "./components/Notes";
import Pagination from "./components/Pagination";
import "./styles.css";

const App = () => {
  return (
    <div>
      <h1> 👉 Today's Task 👈</h1>
      <ThemeSwitcher />
      <Notes />
      <Pagination />
    </div>
  );
};

export default App;
