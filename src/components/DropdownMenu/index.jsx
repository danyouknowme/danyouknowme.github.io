import React from "react";
import "./dropdown-menu.scss";

const DropdownMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <div className={`dropdown-menu__container ${isOpenMenu ? "dropdown-menu__active" : ""}`}>
      <div className="nes-container is-rounded">
        <span>
          <a href="#experience" onClick={() => setIsOpenMenu(false)}>
            Experiences
          </a>
        </span>
        <span>
          <a href="#project" onClick={() => setIsOpenMenu(false)}>
            Projects
          </a>
        </span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default DropdownMenu;
