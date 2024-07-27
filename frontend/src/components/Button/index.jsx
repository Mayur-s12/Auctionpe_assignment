import React from "react";
import "./index.css";

const Button = ({ className, children, ...rest }) => {
  return (
    <button className={`${"button-class"} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
