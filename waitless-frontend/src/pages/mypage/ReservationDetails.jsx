import React from "react";
import { useNavigate } from "react-router-dom";
import FooterLayout from "../../components/FooterLayout";
import "../../styles/ReservationDetails.css";

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
    <div className="mobile-root">
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
      </div>
      <FooterLayout active="user" />
    </div>
  );
};

export default ReservationDetails;
