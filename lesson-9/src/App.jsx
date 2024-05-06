import Header from "./Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <div
      className={`w-screen min-h-screen flex flex-col ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}

export default App;
