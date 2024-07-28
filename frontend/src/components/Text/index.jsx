import React from "react";
import "./index.css";

const Text = ({ className, children, onClick, ...rest }) => {
  return (
    <span
      className={`text-class ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </span>
  );
};

export default Text;
