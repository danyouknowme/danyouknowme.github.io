import React from "react";
import "./project.scss";

const Project = () => {
  return (
    <div className="project__section" id="project">
      <div className="project__title">
        <span>Project</span>
      </div>
      <div className="project__list">
        <div className="nes-container with-title is-rounded is-centered" data-aos="fade-right">
          <p className="title" style={{ backgroundColor: "#f5f5f5" }}>
            Ecommhuay
          </p>
          <img
            src="https://user-images.githubusercontent.com/78087668/166332924-4c67da10-a58b-4184-8d00-67129de068c7.png"
            alt=""
            style={{ width: "260px" }}
          />
          <div className="project__tech-stack__list">
            <div style={{ backgroundColor: "#61DBFB", color: "#363636" }}>React Native</div>
            <div style={{ backgroundColor: "#764abc", color: "#ffffff" }}>Redux</div>
            <div style={{ backgroundColor: "#29beb0", color: "#ffffff" }}>Golang</div>
            <div style={{ backgroundColor: "#0090D1", color: "#f5f5f5" }}>Fiber</div>
            <div style={{ backgroundColor: "#E78E00", color: "#f5f5f5" }}>MySQL</div>
          </div>
          <a href="https://github.com/danyouknowme/ecommhuay-rn" target="_blank" rel="noreferrer">
            <div className="project-gitub__block">
              <i className="nes-icon github"></i>
              <span>Github</span>
            </div>
          </a>
        </div>
        <div className="project-desktop__list">
          <div className="nes-container with-title is-rounded" data-aos="fade-left">
            <p className="title" style={{ backgroundColor: "#f5f5f5" }}>
              Kanban
            </p>
            <img
              src="https://user-images.githubusercontent.com/78087668/186903754-fed0ad83-9634-47a9-b026-90d9491fb46f.png"
              alt=""
              style={{ width: "100%" }}
            />
            <div className="project__tech-stack__list">
              <div style={{ backgroundColor: "#61DBFB", color: "#363636" }}>React</div>
              <div style={{ backgroundColor: "#764abc", color: "#ffffff" }}>Redux</div>
              <div style={{ backgroundColor: "#29beb0", color: "#ffffff" }}>Golang</div>
              <div style={{ backgroundColor: "#0090D1", color: "#f5f5f5" }}>Gin</div>
              <div style={{ backgroundColor: "#4DB33D", color: "#ffffff" }}>MongoDB</div>
            </div>
            <a href="https://github.com/danyouknowme/kanban" target="_blank" rel="noreferrer">
              <div className="project-gitub__block">
                <i className="nes-icon github"></i>
                <span>Github</span>
              </div>
            </a>
          </div>
          <a href="https://todokub.web.app" target="_blank" rel="noreferrer">
            <div className="nes-container with-title is-rounded" data-aos="fade-left">
              <p className="title" style={{ backgroundColor: "#f5f5f5", textDecoration: "underline" }}>
                Todokub
              </p>
              <img
                src="https://user-images.githubusercontent.com/78087668/187740997-db741e1c-6c72-4d8d-8943-8045a2bc4106.png"
                alt=""
                style={{ width: "100%" }}
              />
              <div className="project__tech-stack__list">
                <div style={{ backgroundColor: "#61DBFB", color: "#363636" }}>React</div>
                <div style={{ backgroundColor: "#764abc", color: "#ffffff" }}>Redux</div>
                <div style={{ backgroundColor: "#8CC401", color: "#ffffff" }}>NodeJS</div>
                <div style={{ backgroundColor: "#F7E017", color: "#363636" }}>ExpressJS</div>
                <div style={{ backgroundColor: "#4DB33D", color: "#ffffff" }}>MongoDB</div>
                <div style={{ backgroundColor: "#FFCB2B", color: "#363636" }}>Firebase</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
