import { useState } from "react";
import Component from "./Component";

function Square() {
  const [value, setValue] = useState(null);
  const [isClicked, setIsClicked] = useState();

  console.log("isClicked?", isClicked);

  function handleClick() {
    setValue("X");
    setIsClicked(true);
  }

  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <Component />
    </>
  );
}
