import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Click from "./Click";

function App() {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState("MILITARY");
  const updateFormat = (toggleFormat) => {
    setFormat(toggleFormat);
  };
  const updateTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <React.Fragment>
      <Click callback={updateFormat}></Click>
      <Clock time={time} format={format}></Clock>
    </React.Fragment>
  );
}

export default App;
