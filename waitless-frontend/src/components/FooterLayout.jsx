import React from "react";

const FooterLayout = ({ active = "user" }) => {
  return (
    <>
      <style>{`
        .mypage-footer {
            position: absolute;
            left: 0;
            bottom: 0; 
            width: 100%;
            height: 180px;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-top: 2px solid #F5F5F5;
            z-index: 10;
        }
        .footer-icon {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            transition: opacity 0.2s, background 0.2s;
        }
        .footer-icon.home {
            background-image: url('/img/icon/home-icon.png');
        }
        .footer-icon.search {
            background-image: url('/img/icon/search-icon.png');
        }
        .footer-icon.user {
            background-image: url('/img/icon/user-icon.png');
        }
        .footer-icon.etc {
            background-image: url('/img/icon/etc-icon.png');
        }
        .footer-icon.search.active {
            background-image: url('/img/icon/search-active-icon.png');
        }
        .footer-icon.user.active {
            background-image: url('/img/icon/user-active-icon.png');
        }
    `}</style>
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
