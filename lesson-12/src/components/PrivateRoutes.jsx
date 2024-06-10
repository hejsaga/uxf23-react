import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const PrivateRoutes = () => {
  const { userLoggedIn } = useContext(AuthContext);

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
