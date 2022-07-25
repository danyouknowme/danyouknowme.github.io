import React, { useState, useEffect } from "react";
import "./loading.scss";

const Loading = ({ loadingPage, setLoadingPage }) => {
	const [valueProgress, setValueProgress] = useState(0);
	const valueList = [25, 30, 75, 90, 100];

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			if (i >= valueList.length - 1) {
				setValueProgress(100);
				clearInterval(interval);
				setTimeout(() => {
					setLoadingPage(false);
				}, 800);
			} else {
				setValueProgress(valueList[i]);
				i++;
			}
		}, 700);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={`loading ${!loadingPage ? "hiding-progress" : ""}`}>
			<span>LOADING...</span>
			<progress
				className="nes-progress"
				value={valueProgress}
				max="100"
			></progress>
		</div>
	);
};

export default Loading;
