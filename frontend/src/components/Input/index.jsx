import React from "react";
import "./index.css";

const Input = ({ label, children, onChange, value, className, ...rest }) => {
  return (
    <div className='input-container'>
      <label>{label}</label>
      <input
        className={`${"input-class"} ${className}`}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
