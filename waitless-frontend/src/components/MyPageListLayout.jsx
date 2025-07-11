import React from "react";
import MobileLayout from "./MobileLayout";
import FooterLayout from "./FooterLayout";
import "../styles/MyPageHeader.css";

const MyPageListLayout = ({ reservations, title = "목록", onBack = true }) => {
  return (
    <MobileLayout>
      <style>{`
        .reservation-list-container {
          width: 100%;
          background: #fff;
          min-height: 100vh;
          box-sizing: border-box;
        }
        .reservation-list {
          margin: 40px 0 0 0;
          padding: 0 0 0 0;
        }
        .reservation-item {
          display: flex;
          align-items: center;
          padding: 40px 0;
          border-bottom: 2px solid #eee;
          margin: 0 80px;
        }
        .reservation-item:last-child {
          border-bottom: none;
        }
        .reservation-img {
          width: 120px;
          height: 140px;
          border-radius: 20px;
          object-fit: cover;
          margin-right: 45px;
        }
        .reservation-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .reservation-name {
          font-size: 45px;
          font-weight: 700;
          color: #222;
          margin-bottom: 8px;
        }
        .reservation-date {
          font-size: 35px;
          color: #444;
        }
        .reservation-arrow {
          background-image: url('/img/icon/next-arrow-icon.png');
          width: 30px;
          height: 30px;
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
    </MobileLayout>
  );
};

export default MyPageListLayout;
