import { useEffect, useState } from "react";
import { DropdownMenu, Loading, Navbar, ScrollDown, Home, Experience } from "./components";
import AOS from "aos";

const App = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [renderContent, setRenderContent] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let scrollRef = 0;

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    return () => window.onscroll === null;
  };

  useEffect(() => {
    if (!loadingPage) {
      setTimeout(() => {
        setRenderContent(true);
      }, 1500);
    }
  }, [loadingPage]);

  return (
    <div className="App">
      {!renderContent && <Loading loadingPage={loadingPage} setLoadingPage={setLoadingPage} />}
      {!loadingPage && (
        <div className="body__container">
          {!renderContent && <div className={`${!loadingPage ? "flashing-page__container anim-flash" : "flashing-page__container"}`}></div>}
          <div className="content__container">
            <Navbar renderContent={renderContent} isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
            <DropdownMenu isOpenMenu={isOpenMenu} />
            <ScrollDown renderContent={renderContent} isScrolled={isScrolled} />
            <div className="content-top__container">
              <Home />
              <Experience />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
