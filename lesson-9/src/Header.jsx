import SunIcon from "./assets/SunIcon.jsx";
import MoonIcon from "./assets/MoonIcon.jsx";

const Header = (props) => {
  return (
    <div className="grid grid-cols-2 mx-3 my-2 lg:mx-14 lg:my-6 items-center">
      <h1 className="font-bold">Local storage</h1>
      <div className="flex justify-self-end">
        <button onClick={props.toggleDarkMode}>
          {props.darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
