import React from "react";
import "./navbar.scss";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = ({ renderContent, isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <div className="navbar__container nes-container is-rounded is-primary" style={{ top: `${renderContent ? "0" : "-104px"}` }}>
        <h3>Thanathip S.</h3>
        <div className="hamburger-menu__container" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {!isOpenMenu ? <CgMenuRight size="24" /> : <CgClose size="24" />}
        </div>
        <ul>
          <li className="nes-pointer">
            <a href="#experience">Experience</a>
          </li>
          <li className="nes-pointer">
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="img/Thanathip_Suwannakhot.pdf" target="_blank" rel="noreferrer">
              <button type="button" className="nes-btn is-primary">
                RESUME
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-bg__container" style={{ top: `${renderContent ? "0" : "-104px"}` }}></div>
    </>
  );
};

export default Navbar;
