import React from "react";
import "./scroll-down.scss";

const ScrollDown = ({ renderContent }) => {
  return (
    <div className="scroll-down__container"
      style={{ bottom: `${renderContent ? "20px" : "-85px" }`}}
    >
      <div className="scroll-down-pixelart"></div>
      <div className="scroll-down-arrow"></div>
    </div>
  )
}

export default ScrollDown;