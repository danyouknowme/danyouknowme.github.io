import React from "react";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="experience__section" id="experience">
      <div className="experience__title">
        <span>Experience</span>
      </div>
      <div className="experience__list" data-aos="fade-up">
        <div className="experience__logo">
          <img src="https://www.eternityx.com/wp-content/uploads/2021/09/Agoda-Logo.png" alt="agoda" />
        </div>
        <div className="experience__description">
          <span className="experience__description-title">QA Engineer, Frontend Team</span>
          <div className="experience__description-middle">
            <span>Agoda • Internship</span>
            <span>May 2022 - July 2022</span>
          </div>
          <div className="experience__tech-stack__list">
            <div style={{ backgroundColor: "#DB7432" }}>SQL</div>
            <div style={{ backgroundColor: "#5C2C91", color: "#f5f5f5" }}>.NET</div>
            <div style={{ backgroundColor: "#FFFF00" }}>Hadoop</div>
            <div style={{ backgroundColor: "#509EE2" }}>Metabase</div>
          </div>
        </div>
      </div>
      <div className="experience__list" data-aos="fade-up">
        <div className="experience__logo">
          <img src="/img/afu-logo.png" alt="afu" />
        </div>
        <div className="experience__description">
          <span className="experience__description-title">Frontend Developer</span>
          <div className="experience__description-middle">
            <span>Awayfromus • Part Time</span>
            <span>April 2022 - Present</span>
          </div>
          <div className="experience__tech-stack__list">
            <div style={{ backgroundColor: "#FE6D01" }}>HTML</div>
            <div style={{ backgroundColor: "#2793CC" }}>CSS</div>
            <div style={{ backgroundColor: "#F7E017" }}>Javascript</div>
            <div style={{ backgroundColor: "#3FB883", color: "#33485E" }}>Vue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
