import React, { useState } from "react";

// && means if true, then render the element on the right
// || means if false, then render the element on the right
// Ternary operator: condition ? true : false
const Login = () => {
  const isLoggedIn = false; // Assume this value comes from some authentication logic
  const showHeadline = false;
  const showProfile = true;
  const loading = false;
  const [showText, setShowText] = useState(true);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in to continue.</p>}
      {showHeadline && <h1>Here's a conditional headline</h1>}
      {showProfile || <p>Please log in to view your profile.</p>}

      {/* The following will create a p-element but with or without text. We should
      either render the element, or not at all. */}
      <p className={showHeadline ? "red-text" : "green-text"}>
        {showText && "Min text"}
      </p>
    </div>
  );
};

export default Login;
