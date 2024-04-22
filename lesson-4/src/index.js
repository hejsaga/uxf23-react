import React from "react";
import ReactDOM from "react-dom/client";
import ClockParent from "./ClockParent";
import Gallery from "./Gallery";
import Clock from "./Clock";
import Login from "./Login";
import App from "./App";

// When your app starts, you need to trigger the initial render.
// Frameworks and sandboxes sometimes hide this code, but it’s done by calling createRoot with the target DOM node,
// and then calling its render method with your component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
