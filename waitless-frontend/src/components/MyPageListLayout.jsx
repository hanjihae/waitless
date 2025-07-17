import React from "react";
import FooterLayout from "./FooterLayout";
import "../styles/mypage/MyPageHeader.css";
import "../styles/mypage/MyPageListLayout.css";

const MyPageListLayout = ({ reservations, title = "목록", onBack = true }) => {
  return (
    <div className="mobile-root">
      <header className="mypage-header">
        <button className="back-btn" onClick={onBack}></button>
        <span className="title">{title}</span>
      </header>
      <div className="reservation-list-container">
        <div className="reservation-list">
          {reservations.map((r) => (
            <div className="reservation-item" key={r.id}>
              <img className="reservation-img" src={r.image} alt={r.name} />
              <div className="reservation-info">
                <div className="reservation-name">{r.name}</div>
                <div className="reservation-date">{r.date}</div>
              </div>
              <span className="reservation-arrow"></span>
            </div>
          ))}
        </div>
      </div>
      <FooterLayout active="user" />
    </div>
  );
};

export default MyPageListLayout;
