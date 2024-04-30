import React, { useState, useEffect, useRef } from "react";
import ScrollToTop from "./ScrollToTop";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [buttonIsValid, setButtonIsValid] = useState(false);
  const imgRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.log("Text changed: ", text);
    if (text.length >= 3) {
      console.log("Button is valid");
      setButtonIsValid(true);
    }
  }, [text]);

  useEffect(() => {
    inputRef.current.focus(); // Fokusera på input-elementet när komponenten monteras
  }, []);

  const shrink = () => {
    imgRef.current.style.width = "50px";
  };

  const enlarge = () => {
    imgRef.current.style.width = "200px";
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <input onChange={(e) => setText(e.target.value)}></input>
        <button disabled={!buttonIsValid}>Submit</button>
      </div>
      <button onClick={shrink}>Shrink</button>
      <button onClick={enlarge}>Enlarge</button>
      <div>
        <img
          src="/vite.svg"
          ref={imgRef}
          alt="Vite Logo"
          style={{ width: "100px", transition: "width 0.5s ease" }}
        />
      </div>
      <input ref={inputRef} />
      <div style={{ marginTop: "600px" }}>
        <ScrollToTop />
      </div>
    </>
  );
};

export default FunctionalComponent;
