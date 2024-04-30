import React, { useRef } from "react";

function ScrollToTop() {
  const topRef = useRef(null);

  const scrollToTop = () => {
    if (topRef.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <button onClick={scrollToTop}>Scroll to Top</button>
      <div ref={topRef} />
    </div>
  );
}

export default ScrollToTop;
