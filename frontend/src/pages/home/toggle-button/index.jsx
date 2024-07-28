import React, { useState } from "react";
import Button from "../../../components/Button/index";
import { logAction } from "../../../config/apis";
import "./index.css";

const ToggleButton = ({ isSessionStarted, sessionId }) => {
  const [active, setIsActive] = useState(false);

  const handleButtonClick = async () => {
    setIsActive((prev) => !prev);
    if (isSessionStarted) {
      try {
        await logAction(sessionId, "Toggle Button");
      } catch (err) {
        console.log("error logging slider action", err);
      }
    }
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
