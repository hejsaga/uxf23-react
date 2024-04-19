import { useState } from "react";

// This file was used to practise more examples with useState
export default function Component() {
  const [number, setNumber] = useState(0);
  const [showNumber, setShowNumber] = useState(false);

  console.log("Show number?", showNumber);

  function handleClick() {
    setNumber(number + 1);

    if (number === 5) {
      setShowNumber(true);
    }
  }

  return (
    <div className="margin-top">
      <button onClick={handleClick}>Klicka här för att öka siffran</button>
      <p>{number}</p>
    </div>
  );
}
