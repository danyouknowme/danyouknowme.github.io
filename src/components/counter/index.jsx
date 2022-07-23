import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./counter.scss";

const letterAnimation = {
	hidden: { y: "100%" },
	show: { y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const heroTextAnimation = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.2 } },
};

const AnimatedText = ({ text }) => {
	return (
		<motion.span className="animated-text">
			{text.split("").map((letter, index) => (
				<motion.span key={index} variants={letterAnimation}>
					{letter}
				</motion.span>
			))}
		</motion.span>
	);
};

const Counter = () => {
	const [counterFirstValue, setCounterFirstValue] = useState(0);
	const [counterSecondValue, setCounterSecondValue] = useState(0);
	const [loadingPage, setLoadingPage] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			if (counterFirstValue === 9 && counterSecondValue === 9) {
				clearInterval(interval);
				setLoadingPage(false);
			} else {
				if (counterSecondValue === 9) {
					setCounterFirstValue(counterFirstValue + 1);
					setCounterSecondValue(0);
				} else {
					setCounterSecondValue(counterSecondValue + 1);
				}
			}
		}, 30);
		return () => clearInterval(interval);
	}, [setLoadingPage, counterFirstValue, counterSecondValue]);

	return (
		<div className="counter">
			<motion.div
				className="window-frame"
				initial="hidden"
				animate="show"
				style={{ transform: `translateX(${!loadingPage ? "-100" : "0"}%)` }}
			>
				<motion.h1 className="hide" variants={heroTextAnimation}>
					<AnimatedText text={`${counterFirstValue}`} />
				</motion.h1>
			</motion.div>
			<motion.div
				className="window-frame"
				initial="hidden"
				animate="show"
				style={{ transform: `translateX(${!loadingPage ? "100" : "0"}%)` }}
			>
				<motion.h1 className="hide" variants={heroTextAnimation}>
					<AnimatedText text={`${counterSecondValue}`} />
				</motion.h1>
			</motion.div>
		</div>
	);
};

export default Counter;
