import React from "react";
import "./dropdown-menu.scss";

const DropdownMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <div className={`dropdown-menu__container ${isOpenMenu ? "dropdown-menu__active" : ""}`}>
      <div className="nes-container is-rounded">
        <span>
          <a href="#experience" onClick={() => setIsOpenMenu(false)}>
            Experience
          </a>
        </span>
        <span>
          <a href="#project" onClick={() => setIsOpenMenu(false)}>
            Project
          </a>
        </span>
        <span>
          <a href="#contact" onClick={() => setIsOpenMenu(false)}>
            Contact
          </a>
        </span>
      </div>
    </div>
  );
};

export default DropdownMenu;
