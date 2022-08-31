import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "./index.scss";
import "./nes-icon.scss";
import "nes.css/css/nes.min.css";
import "nes.icons/css/nes-icons.min.css";
import "aos/dist/aos.css";

AOS.init({
  delay: 200,
  duration: 1500,
  once: false,
  mirror: false,
  disable: "mobile",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
