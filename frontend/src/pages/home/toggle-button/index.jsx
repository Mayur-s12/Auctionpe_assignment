import React, { useState } from "react";
import Button from "../../../components/Button/index";
import "./index.css";

const ToggleButton = ({ isSessionStarted }) => {
  const [active, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Button
      onClick={handleButtonClick}
      disabled={!isSessionStarted}
      className={isSessionStarted ? "active-button" : "inactive-button"}
    >
      {!active ? "Active" : "Inactive"}
    </Button>
  );
};

export default ToggleButton;
