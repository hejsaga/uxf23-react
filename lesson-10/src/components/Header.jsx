import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <div className="grid grid-cols-2 mt-6 mx-10 items-center">
      <h1 className="font-bold">Global state</h1>

      <nav className="flex justify-end">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link className="mr-4" to="/about">
          About
        </Link>
        <Link to="/products">Products</Link>
        <p className="ml-5">{userName}</p>
      </nav>
    </div>
  );
};

export default Header;
