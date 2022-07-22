import { useState } from "react";
import { Cursor } from "./components";

const App = () => {
	const [cursorState, setCursorState] = useState({
		isShowing: true,
		position: { x: 0, y: 0 },
	});

	const GetCursorPosition = (event) => {
		setCursorState({
			isShowing: true,
			position: { x: event.clientX, y: event.clientY },
		});
	};

	const CheckMouseLeave = (event) => {
		setCursorState({
			isShowing: false,
			position: { x: event.clientX, y: event.clientY },
		});
	};

	return (
		<div
			className="App"
			onMouseMove={(event) => GetCursorPosition(event)}
			onMouseLeave={(event) => CheckMouseLeave(event)}
		>
			<Cursor cursorState={cursorState} />
		</div>
	);
};

export default App;
