import React from "react";
import "./custom-button.scss";

const CustomButton = ({ children, inverted, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogle ? "google" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
