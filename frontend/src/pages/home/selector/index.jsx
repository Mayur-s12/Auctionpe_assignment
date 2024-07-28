import React from "react";
import "./index.css";
import { logAction } from "../../../config/apis";

const Selector = ({ isSessionStarted, sessionId }) => {
  const handleChange = async (e) => {
    if (isSessionStarted) {
      try {
        await logAction(sessionId, "Select Input Options");
      } catch (err) {
        console.log("error logging select action", err);
      }
    }
  };

  return (
    <select
      disabled={!isSessionStarted}
      onChange={handleChange}
      className={isSessionStarted ? "active-selector" : "inactive-selector"}
    >
      <option value=''>Select an option</option>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </select>
  );
};

export default Selector;
