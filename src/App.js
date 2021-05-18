import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Click from "./Click";

function App() {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState("MILITARY");

  // Click component updates the format
  const callback = (toggleFormat) => {
    setFormat(toggleFormat);
  };

  const updateTime = () => {
    setTime(new Date());
  };
  // update the time every(surprise, surprise!) 1000ms
  useEffect(() => {
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <React.Fragment>
      <Click callback={callback}></Click>
      <Clock time={time} format={format}></Clock>
    </React.Fragment>
  );
}

export default App;
