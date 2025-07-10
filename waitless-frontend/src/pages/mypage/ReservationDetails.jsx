import React from "react";
import MobileLayout from "../../components/MobileLayout";
import { useNavigate } from "react-router-dom";
import "../../styles/MyPageFooter.css";

const ReservationDetails = () => {
  const navigate = useNavigate();
  const reservation = {
    restaurant: "마리스그릴",
    date: "2025.07.08(화) 오후 2시 / 2명",
    menu: [
      { name: "새우바질크림파스타 x1", price: 12900 },
      { name: "베이컨오븐토마토리조또 x1", price: 11900 },
      { name: "마르게리따 피자 x1", price: 16900 },
      { name: "펩시 제로 x2", price: 4000 },
    ],
    discount: [
      { name: "10% 할인 쿠폰", price: 4570 },
      { name: "포인트", price: 1100, isPoint: true },
    ],
    total: 40030,
  };

  return (
    <MobileLayout>
      <style>{`
        .reservation-details-outer {
          background: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%) !important;
          width: 100%;
          min-height: 100vh;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .reservation-details-container {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .reservation-details-card {
          background: #fff;
          border-radius: 100px 100px 0 0;
          margin: 40px 0 0 0;
          padding: 100px 110px 0 110px;
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .reservation-logo {
          width: 400px;
          display: block;
          margin: 0 auto 0 auto;
          padding-top: 40px;
        }
        .details-title-row {
          display: flex;
          align-items: center;
          font-size: 55px;
          font-weight: 800;
          margin-bottom: 50px;
        }
        .details-title-row .arrow {
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
        .details-row {
          display: flex;
          align-items: center;
        }
        .details-label {
          font-size: 45px;
          font-weight: 700;
          width: 160px;
          color: #111;
        }
        .details-value {
          font-size: 40px;
          color: #888;
          margin-left: 30px;
        }
        .details-section-title {
          font-size: 45px;
          font-weight: 700;
          margin: 40px 0 25px 0;
          color: #111;
        }
        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 40px;
          color: #888;
          margin-bottom: 10px;
        }
        .menu-item .price {
          color: #888;
        }
        .discount-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 40px;
          color: #888;
          margin-bottom: 10px;
        }
        .discount-item .price {
          color: #888;
        }
        .discount-item .point {
          color: #888;
        }
        .details-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 40px;
          color: #222;
          margin: 45px 0 80px 0;
        }
        .details-total-label {
          font-size: 45px;
          font-weight: 800;
          margin-right: 32px;
        }
        .details-total-value {
          font-size: 50px;
          font-weight: 800;
          color: #6253D3;
        }
        .details-list-btn-row {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 100%;
        }
        .details-list-btn {
          background: #fff;
          border: 2px solid #b3b3b3;
          border-radius: 20px;
          font-size: 40px;
          font-weight: 700;
          color: #222;
          width: 250px;
          height: 120px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .details-list-btn:hover {
          background: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%);
          color: #fff;
        }
      `}</style>
      <div className="reservation-details-outer">
        <div className="reservation-details-container">
          <img
            className="reservation-logo"
            src="/img/waitless-logo-white.png"
            alt="Waitless Logo"
          />
          <div className="reservation-details-card">
            <svg
              className="arch-svg"
              width="200"
              height="100"
              viewBox="0 0 200 100"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              <path d="M0,100 Q200,0 200,0 L200,100 Z" fill="#fff" />
            </svg>
            <div className="details-title-row">
              {reservation.restaurant}
              <span className="arrow"></span>
            </div>
            <div className="details-row">
              <span className="details-label">예약일시</span>
              <span className="details-value">{reservation.date}</span>
            </div>
            <div className="details-section-title">메뉴</div>
            <div className="menu-list">
              {reservation.menu.map((item, idx) => (
                <div className="menu-item" key={idx}>
                  <span>{item.name}</span>
                  <span className="price">{item.price.toLocaleString()} 원</span>
                </div>
              ))}
            </div>
            <div className="details-section-title">할인·적립</div>
            <div className="discount-list">
              {reservation.discount.map((item, idx) => (
                <div className="discount-item" key={idx}>
                  <span>{item.name}</span>
                  <span className={item.isPoint ? "point" : "price"}>
                    {item.isPoint
                      ? item.price.toLocaleString() + " P"
                      : item.price.toLocaleString() + " 원"}
                  </span>
                </div>
              ))}
            </div>
            <div className="details-total-row">
              <span className="details-total-label">합계</span>
              <span className="details-total-value">
                {reservation.total.toLocaleString()}원
              </span>
            </div>
            <div className="details-list-btn-row">
              <button className="details-list-btn" onClick={() => navigate(-1)}>목록</button>
            </div>
          </div>
        </div>
        <footer className="mypage-footer">
          <div className="footer-icon home"></div>
          <div className="footer-icon search"></div>
          <div className="footer-icon user"></div>
          <div className="footer-icon etc"></div>
        </footer>
      </div>
    </MobileLayout>
  );
};

export default ReservationDetails;
