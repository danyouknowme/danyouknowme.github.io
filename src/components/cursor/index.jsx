import React from "react";
import "./cursor.scss";

const Cursor = ({ cursorState }) => {
	const { isShowing, position } = cursorState;
	return (
		<div
			className="cursor"
			style={{
				display: `${isShowing ? "block" : "none"}`,
				transform: `translate(${position.x}px, ${position.y}px)`,
			}}
		></div>
	);
};

export default Cursor;
