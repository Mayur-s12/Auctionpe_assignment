import React from "react";
import "./index.css";

const Input = ({ label, children, className, ...rest }) => {
  return (
    <div className='input-container'>
      <label>{label}</label>
      <input className={`${"input-class"} ${className}`} {...rest} />
    </div>
  );
};

export default Input;
