import React from "react";
import "./navbar.scss";

const Navbar = ({ renderContent }) => {
	return (
		<>
			<div
				className="navbar__container nes-container is-rounded is-primary"
				style={{ top: `${renderContent ? "0" : "-104px"}` }}
			>
				{/* <h1>Thanathip S.</h1> */}
				<div></div>
				<ul>
					<li>Experience</li>
					<li>Project</li>
					<li>
						<a
							href="img/Thanathip_Suwannakhot.pdf"
							target="_blank"
							rel="noreferrer"
						>
							<button type="button" className="nes-btn is-error">
								RESUME
							</button>
						</a>
					</li>
				</ul>
			</div>
			<div
				className="navbar-bg__container"
				style={{ top: `${renderContent ? "0" : "-104px"}` }}
			></div>
		</>
	);
};

export default Navbar;
