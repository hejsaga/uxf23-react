import Header from "./Header";
import { useState } from "react";
import LandingPage from "./LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`w-screen min-h-screen flex flex-col ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <LandingPage />
    </div>
  );
}

export default App;
