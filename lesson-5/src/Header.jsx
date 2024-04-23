import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Tic Tac Toe</h1>
      <div>
        <a href="#">Spel</a>
        <a href="#">Länkar</a>
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
