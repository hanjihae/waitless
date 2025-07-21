import React from "react";
import "../../styles/main/Coupon.css";

const Coupon = () => {
  return (
    <div className="mobile-root">
      <div className="coupon-container">
        {/* 상단 헤더 */}
        <header className="main-header">
          <button className="back-btn"></button>
          <span className="title">이벤트</span>
          <div className="profile-circle">H</div>
        </header>
        {/* 이벤트 배너 */}
        <section className="event-banner">
          <img
            src="/img/waitless-logo-white.png"
            alt="Waitless"
            className="banner-logo"
          />
          <div className="banner-text">
            매주 화요일 12시,
            <br />
            선착순 할인 쿠폰을
            <br />
            받아가세요!
          </div>
        </section>

        {/* 타이머 영역 */}
        <section className="event-timer">
          <div className="event-date">2025.07.08 (화)</div>
          <div className="event-clock">11:54:32</div>
          <button className="coupon-btn">쿠폰 받기</button>
        </section>

        {/* 하단 광고 */}
        <footer className="ad-footer">광고ㅎㅎ</footer>
      </div>
    </div>
  );
};

export default Coupon;
