import React from "react";
import Input from "../../../components/Input";
import { logAction } from "../../../config/apis";
import "./index.css";

const Slider = ({ isSessionStarted, sessionId }) => {
  const handleSearch = async (e) => {
    if (isSessionStarted) {
      try {
        await logAction(sessionId, "Slider");
      } catch (err) {
        console.log("error logging slider action", err);
      }
    }
  };

  return (
    <div className='search-action-container'>
      <Input
        type='range'
        placeholder='Type here...'
        onChange={handleSearch}
        disabled={!isSessionStarted}
        className={isSessionStarted ? "" : "inactive-input"}
      />
    </div>
  );
};

export default Slider;
