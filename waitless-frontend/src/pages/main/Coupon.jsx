import React from "react";

const Coupon = () => {
  return (
    <div className="main-root">
      <style>{`
        .main-root {
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 20px;
  background: #fff;
  font-weight: 700;
  font-size: 1.3rem;
  border-bottom: 1px solid #eee;
}

.back-btn {
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
}

.header-title {
  flex: 1;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 700;
}

.profile-circle {
  width: 40px;
  height: 40px;
  background: linear-gradient(180deg, #ad7ff5 0%, #6253d3 100%);
  border-radius: 50%;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-banner {
  background: linear-gradient(180deg, #ad7ff5 0%, #6253d3 100%);
  padding: 36px 0 32px 0;
  position: relative;
  text-align: left;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
}

.banner-logo {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 120px;
  opacity: 0.9;
}

.banner-text {
  color: #fff;
  font-size: 2.1rem;
  font-weight: 800;
  line-height: 1.25;
  margin-top: 40px;
  margin-left: 24px;
  text-align: left;
  z-index: 1;
}

.event-timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 0 0 0;
  background: #fff;
}

.event-date {
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 16px;
}

.event-clock {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 32px;
  color: #111;
}

.coupon-btn {
  width: 90%;
  max-width: 420px;
  height: 56px;
  border: none;
  border-radius: 28px;
  background: linear-gradient(90deg, #ad7ff5 0%, #6253d3 100%);
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 32px;
  display: block;
}

.ad-footer {
  width: 100%;
  background: #e5e5e5;
  color: #bbb;
  text-align: center;
  font-size: 1.2rem;
  padding: 32px 0 24px 0;
  margin-top: auto;
}
        `}</style>

      {/* 상단 헤더 */}
      <header className="main-header">
        <button className="back-btn">←</button>
        <span className="header-title">이벤트</span>
        <div className="profile-circle">H</div>
      </header>

      {/* 이벤트 배너 */}
      <section className="event-banner">
        <img
          src="/img/waitless-logo.png"
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
  );
};

export default Coupon;
