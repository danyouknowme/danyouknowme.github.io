import React from "react";
import "./dropdown-menu.scss";

const DropdownMenu = ({ isOpenMenu }) => {
    return (
        <div className={`dropdown-menu__container ${isOpenMenu ? "dropdown-menu__active" : ""}`}>
            <div className="nes-container is-rounded">
                <span>Projects</span>
                <span>Experiences</span>
                <span>Contact</span>
            </div>
        </div>
    );
};

export default DropdownMenu;
