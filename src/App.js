import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";

function App() {
  const [time, setTime] = useState(new Date());
  const updateTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <React.Fragment>
      <Clock time={time}></Clock>
    </React.Fragment>
  );
}

export default App;
