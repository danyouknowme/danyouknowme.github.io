import React from "react";
import "./scroll-down.scss";

const ScrollDown = ({ renderContent, isScrolled }) => {
  return (
    <div
      className="scroll-down__container"
      style={{
        bottom: `${renderContent ? "20px" : "-85px"}`,
        opacity: `${isScrolled ? "0" : "1"}`,
      }}
    >
      <div className="scroll-down-pixelart"></div>
      <div className="scroll-down-arrow"></div>
    </div>
  );
};

export default ScrollDown;
