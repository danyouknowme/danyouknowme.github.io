import React from "react";
import "./scroll-up.scss";

const ScrollUp = ({ isActive }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button className={`nes-btn is-error scroll-up-btn ${isActive ? "active" : ""}`} onClick={scrollToTop}>
      <span>{"<"}</span>
    </button>
  );
};

export default ScrollUp;
