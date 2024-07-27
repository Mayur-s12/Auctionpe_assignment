import React from "react";
import "./index.css";

const Text = ({ className, children, ...rest }) => {
  return <span className={`text-class ${className || ""}`}>{children}</span>;
};

export default Text;
