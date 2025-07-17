import React from "react";
import FooterLayout from "./FooterLayout";
import "../styles/MyPageHeader.css";

const MyPageListLayout = ({ reservations, title = "목록", onBack = true }) => {
  return (
    <div className="mobile-root">
      <style>{`
        .reservation-list-container {
          width: 100%;
          background: #fff;
          min-height: 72vh;
          box-sizing: border-box;
          overflow-y: auto;
        }
        .reservation-list {
          padding: 0 0 0 0;
        }
        .reservation-item {
          display: flex;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
          margin: 0 40px;
        }
        .reservation-item:last-child {
          border-bottom: none;
        }
        .reservation-img {
          width: 42px;
          height: 48px;
          border-radius: 10px;
          object-fit: cover;
          margin-right: 10px;
        }
        .reservation-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .reservation-name {
          font-size: 1rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 3px;
        }
        .reservation-date {
          font-size: 0.8rem;
          color: #444;
        }
        .reservation-arrow {
          background-image: url('/img/icon/next-arrow-icon.png');
          width: 10px;
          height: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          margin-left: 24px;
        }
      `}</style>
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
