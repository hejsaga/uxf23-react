import { createContext, useState } from "react";

// Skapa en ny kontext
export const UserContext = createContext();

// Skapa en komponent som innehåller state du vill dela
export const UserProvider = (props) => {
  const [userName, setUserName] = useState("John Doe");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserContext.Provider value={{ userName, setUserName, isLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};
