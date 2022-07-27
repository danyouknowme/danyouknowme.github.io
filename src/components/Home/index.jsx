import React from "react";
import "./home.scss";

const Home = () => {
	return (
		<div className="home__section">
			<div className="home-top__container">
				<div className="profile-image__container">
					<img className="profile" src="img/dan.jpg" alt="" />
					<img className="frame" src="img/profile-frame.png" alt="" />
				</div>
				<div className="nes-balloon from-left">
					<h2>Thanathip Suwannakhot</h2>
					<p>Software Engineering Student</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
