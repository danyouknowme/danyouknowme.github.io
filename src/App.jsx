import { useEffect, useState } from "react";
import { Loading, Navbar } from "./components";

const App = () => {
	const [loadingPage, setLoadingPage] = useState(true);
	const [renderContent, setRenderContent] = useState(false);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	useEffect(() => {
		if (!loadingPage) {
			setTimeout(() => {
				setRenderContent(true);
			}, 1500);
		}
	}, [loadingPage]);

	return (
		<div className="App">
			{!renderContent && (
				<Loading loadingPage={loadingPage} setLoadingPage={setLoadingPage} />
			)}
			{!loadingPage && (
				<div className="body__container">
					{!renderContent && (
						<div
							className={`${
								!loadingPage
									? "flashing-page__container anim-flash"
									: "flashing-page__container"
							}`}
						></div>
					)}
					<div className="content__container">
						<Navbar renderContent={renderContent} isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
						<div className="content-top__container">
							{/* <img src="img/profile-8bit.jpg" alt="" /> */}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
