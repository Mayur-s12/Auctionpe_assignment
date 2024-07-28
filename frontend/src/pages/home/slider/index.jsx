import React from "react";
import Input from "../../../components/Input";
import "./index.css";

const Slider = ({ isSessionStarted }) => {
  const handleSearch = () => {};

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
