import React from "react";
import "../../styles/reservation/Waiting.css";

const Waiting = () => {
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
            <div className="waiting-title-row">
              <div className="details-title-row">
                <span>마리스그릴</span>
                <span className="arrow"></span>
              </div>
              <button className="icon-btn refresh" />
            </div>
            <p className="order-label">현재 나의 순서</p>
            <div className="order-circle">
              <span className="order-number">18</span>
              <span className="order-unit">번째</span>
            </div>
            <div className="waiting-info">
              <span>
                웨이팅 번호 <strong className="highlight">65번</strong>
              </span>
              <span className="divider">|</span>
              <span>
                웨이팅 예상시간 <strong className="highlight">약 180분</strong>
              </span>
            </div>
            <p className="timestamp">2025.07.02 12:42 등록</p>

            <div className="waiting-detail-box">
              <div className="waiting-row">
                <span>이용 방식</span>
                <span>홀 2인석</span>
              </div>
              <div className="divider-line" />
              <div className="waiting-row">
                <span>총 입장인원</span>
                <span>2명</span>
              </div>
            </div>

            <div className="waiting-actions">
              <button className="action-btn">목록</button>
              <button className="action-btn cancel">웨이팅 취소</button>
              <button className="action-btn">미루기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
