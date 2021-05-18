import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { FiClock } from "react-icons/fi";

// callback - callback function in the App component
function Click({ callback }) {
  const [format, setFormat] = useState("MILITARY");
  // on click - update format state here and
  // in the App component
  const handleToggle = () => {
    setFormat(format === "MILITARY" ? "STANDARD" : "MILITARY");
    callback(format);
  };
  return (
    <div className="Click" onClick={handleToggle}>
      <IconButton color="#9ad6aa" aria-label="toggle format">
        <FiClock />
      </IconButton>
    </div>
  );
}

export default Click;
