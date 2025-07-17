import React from "react";
import "../styles/common/FooterLayout.css";

const FooterLayout = ({ active = "user" }) => {
  return (
    <>
      <footer className="mypage-footer">
        <div
          className={`footer-icon home${active === "home" ? " active" : ""}`}
        ></div>
        <div
          className={`footer-icon search${
            active === "search" ? " active" : ""
          }`}
        ></div>
        <div
          className={`footer-icon user${active === "user" ? " active" : ""}`}
        ></div>
        <div
          className={`footer-icon etc${active === "etc" ? " active" : ""}`}
        ></div>
      </footer>
    </>
  );
};

export default FooterLayout;
