import "./index.css";
import Clock from "./Clock";
import { useState, useEffect } from "react";

const ClockParent = () => {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <Clock time={time} />
    </div>
  );
};

export default ClockParent;
