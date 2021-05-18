import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { BsClockFill } from "react-icons/bs";

function Click({ callback }) {
  const [format, setFormat] = useState("MILITARY");
  const handleToggle = () => {
    setFormat(format === "MILITARY" ? "STANDARD" : "MILITARY");
    callback(format);
  };
  return (
    <div className="Click" onClick={handleToggle}>
      <IconButton color="#9ad6aa" aria-label="toggle format">
        <BsClockFill />
      </IconButton>
    </div>
  );
}

export default Click;
