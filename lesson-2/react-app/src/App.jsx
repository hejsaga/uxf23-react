import "./index.css";
import React, { useState, useEffect } from "react";

export const App = () => {
  const [heading, setHeading] = useState("Hello World");

  const sayHiToPerson = (person) => setHeading(`Hello ${person}!`);
  const resetHeading = () => setHeading("Hello World");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeading("Delayed Hello!");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>{heading}</h1>
        <button className="hi-button" onClick={() => sayHiToPerson("UXF23")}>
          Say hi to class
        </button>
        <button className="reset-button" onClick={resetHeading}>
          Reset
        </button>
      </header>
    </div>
  );
};
