import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home__section">
      <div className="home-top__container">
        <div className="profile-image__container">
          <img className="profile" src="img/rpfggina.png" alt="" />
        </div>
        <div className="nes-balloon from-left">
          <h2>Thanathip Suwannakhot</h2>
          <p>Software Engineering Student</p>
        </div>
        <div className="nes-container is-rounded">
          <h2>Thanathip Suwannakhot</h2>
          <p>Software Engineering Student</p>
        </div>
      </div>
    </div>
  );
};

export default Home;