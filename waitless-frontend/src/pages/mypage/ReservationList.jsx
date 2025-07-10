import React from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../../components/MobileLayout";
import "../../styles/MyPageHeader.css";
import "../../styles/MyPageFooter.css";

const reservations = [
  {
    id: 1,
    image: "/img/sample/restaurant1.png", // 실제 이미지 경로로 교체 필요
    name: "마리스그릴",
    date: "2025.07.08(화) 오후 2시 / 2명",
  },
  {
    id: 2,
    image: "/img/sample/restaurant2.png", // 실제 이미지 경로로 교체 필요
    name: "닭밥전문점 희(熙)",
    date: "2025.06.18(수) 오후 12시 / 5명",
  },
];

const ReservationList = () => {
  const navigate = useNavigate();

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
          margin-right: 32px;
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
        <button className="back-btn" onClick={() => navigate(-1)}></button>
        <span className="title">예약 내역</span>
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
      <footer className="mypage-footer">
        <div className="footer-icon home"></div>
        <div className="footer-icon search"></div>
        <div className="footer-icon user"></div>
        <div className="footer-icon etc"></div>
      </footer>
    </MobileLayout>
  );
};

export default ReservationList;
