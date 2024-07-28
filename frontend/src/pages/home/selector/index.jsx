import React from "react";
import "./index.css";

const Selector = ({ isSessionStarted }) => {
  const handleChange = (e) => {};

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
