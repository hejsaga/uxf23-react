import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Tic Tac Toe</h1>
      <div>
        <Link to="/">Game</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

// Styles
const headerStyle = {
  color: "#eab2a0",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const titleStyle = {
  fontSize: "2rem",
  margin: "0",
};

export default Header;
