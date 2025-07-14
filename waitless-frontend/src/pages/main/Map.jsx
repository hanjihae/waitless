import React from "react";
import MobileLayout from "../../components/MobileLayout";

const Map = () => {
  return (
    <MobileLayout>
      <style>{`
        .map-page {
          background: #fff;
          font-family: 'Pretendard', sans-serif;
          min-height: 100vh;
          padding-bottom: 80px;
        }
        .map-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 70px 60px 40px 80px;
          background: #fff;
          font-weight: 700;
          font-size: 40px;
          height: 180px;
        }
        .profile-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #AD7FF5 0%, #6253D3 100%);
          border-radius: 50%;
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          position: relative;
        }
        .first-name {
          display: inline-block;
          font-size: 80px;
          font-weight: bold;
          color: #fff;
          line-height: 1;
          text-align: center;
          vertical-align: middle;
          position: relative;
          top: 5px;
        }
        .search-bar {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 560px;
          min-width: 300px;
          background: #F5F5F5;
          border-radius: 100px;
          padding: 0 24px;
          height: 110px;
          flex-shrink: 0;
          margin-left: 30px;
        }
        .search-bar-icon {
          width: 50px;
          height: 50px;
          background-image: url('/img/icon/search-icon-gray.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          margin: 0 18px;
        }
        .search-bar-input {
          border: none;
          outline: none;
          font-size: 32px;
          font-weight: 800;
          flex: 1;
          background: transparent;
        }
        .search-bar-input::placeholder {
          color: #B3B3B3;
          opacity: 1;
          font-weight: 800;
        }
        .header-icons {
          display: flex;
          align-items: center;
          margin-left: auto;
          gap: 25px;
        }
        .icon.header-bookmark {
          background-image: url('/img/icon/bookmark-icon-black.png');
          width: 80px;
          height: 70px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: inline-block;
        }
        .alarm-icon {
          position: relative;
          font-size: 44px;
          color: #222;
          width: 80px;
          height: 85px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .alarm-icon .bell {
          width: 80px;
          height: 85px;
          display: inline-block;
          background-image: url('/img/icon/bell-icon.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          margin-right: 5px;
        }
        .alarm-icon .dot {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          background: #6253D3;
          border-radius: 50%;
        }
        .location-row {
          align-items: center;
          display: flex;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0 16px 10px 16px;
        }
        .location-row .icon {
          margin-right: 6px;
        }
        .map-area {
          background: #f7f7fa;
          border-radius: 16px;
          height: 260px;
          margin-bottom: 10px;
          position: relative;
        }
        .fake-map {
          background: #e0e0e0;
          height: 100%;
          position: relative;
          width: 100%;
        }
        .map-marker {
          background: #a084f7;
          border: 3px solid #fff;
          border-radius: 50%;
          height: 24px;
          position: absolute;
          width: 24px;
        }
        .search-area-btn {
          background: #fff;
          border: none;
          border-radius: 20px;
          bottom: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          font-size: 1.1rem;
          font-weight: 500;
          left: 50%;
          padding: 10px 24px;
          position: absolute;
          transform: translateX(-50%);
        }
        .restaurant-card {
          align-items: flex-start;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          display: flex;
          margin: 16px;
          padding: 16px;
          position: relative;
        }
        .restaurant-img {
          border-radius: 12px;   
          height: 80px;
          margin-right: 16px;
          object-fit: cover;
          width: 80px;
        }
        .restaurant-info {
          flex: 1;
        }
        .restaurant-title-row {
          align-items: center;
          display: flex;
          justify-content: space-between;
        }
        .restaurant-title {
          font-size: 1.2rem;
          font-weight: bold;
        }
        .restaurant-desc {
          color: #888;
          font-size: 0.95rem;
          margin: 4px 0;
        }
        .restaurant-rating {
          color: #a084f7;
          font-weight: bold;
          margin: 2px 0;
        }
        .restaurant-rating .star {
          color: #f7b801;
        }
        .restaurant-category {
          color: #a084f7;
          font-size: 0.95rem;
        }
        .reserve-btn {
          background: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%);
          border: none;
          border-radius: 20px;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          margin-left: 16px;
          padding: 10px 24px;
        }
        .map-footer {
          align-items: center;
          background: #fff;
          bottom: 0;
          box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
          display: flex;
          height: 60px;
          justify-content: space-around;
          left: 0;
          position: fixed;
          right: 0;
        }
        .map-footer .icon {
          background: #eee;
          border-radius: 50%;
          height: 28px;
          width: 28px;
        }
        .location-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 40px 50px 40px 70px;
          background: #fff;
        }
        .location-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .icon.location {
          width: 60px;
          height: 60px;
          background-image: url('/img/icon/pin-icon-gray.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: inline-block;
        }
        .location-text {
          font-size: 40px;
          font-weight: 800;
          color: #222;
        }
        .icon.arrow {
          width: 25px;
          height: 25px;
          background-image: url('/img/icon/next-arrow-icon.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: inline-block;
          transform: rotate(90deg);
        }
        .coupon {
          width: 60px;  
          height: 60px;
          background-image: url('/img/icon/coupon-icon.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: inline-block;
        }
        .map-footer {
          position: absolute;
          left: 0;
          bottom: 0; 
          width: 100%;
          height: 220px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: space-around;
          z-index: 10;
        }
        .map-footer .reserve-btn {
          width: 100%;
          max-width: 550px;
          height: 140px;
          border-radius: 100px;
          background-color: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%);
          font-size: 40px;
          font-weight: 800;
        }
        .icon {
          width: 60px;
          height: 60px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        
      `}</style>
      <div className="map-page">
        {/* 상단바 */}
        <header className="map-header">
          <div className="profile-circle">
            <span className="first-name">H</span>
          </div>
          <div className="search-bar">
            <span className="search-bar-icon"></span>
            <input
              className="search-bar-input"
              placeholder="지역, 음식, 매장명 검색"
            />
          </div>
          <div className="header-icons">
            <span className="icon header-bookmark" />
            <div className="alarm-icon">
              <div className="bell"></div>
              <span className="dot" />
            </div>
          </div>
        </header>

        {/* 헤더 아래 위치/필터 바 */}
        <div className="location-bar">
          <div className="location-left">
            <span className="icon location" />
            <span className="location-text">서울</span>
            <span className="icon arrow" />
          </div>
          <span className="coupon"></span>
        </div>

        {/* 지도 영역 */}
        <div className="map-area">
          {/* 실제 지도 대신 배경 + 마커 */}
          <div className="fake-map">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="map-marker"
                style={{ left: 30 + i * 30, top: 40 + (i % 3) * 30 }}
              />
            ))}
          </div>
          <button className="search-area-btn">이 지역 검색하기</button>
          <span className="icon gps" />
        </div>

        {/* 음식점 카드 */}
        <div className="restaurant-card">
          <img
            className="restaurant-img"
            src="/public/img/sample/restaurant1.png"
            alt="마리스그릴"
          />
          <div className="restaurant-info">
            <div className="restaurant-title-row">
              <span className="restaurant-title">마리스그릴</span>
              <span className="icon bookmark" />
            </div>
            <div className="restaurant-desc">
              망원동 시장 근처 맛있고 분위기 좋은..
            </div>
            <div className="restaurant-rating">
              <span className="star">★</span>
              <span className="score">4.3</span>
              <span className="count">(1,028)</span>
            </div>
            <div className="restaurant-category">이탈리아 음식</div>
          </div>
          <button className="reserve-btn">예약하기</button>
        </div>

        {/* 하단 메뉴 */}
        <footer className="map-footer">
          <span className="icon back">
            <img src="/img/icon/back-icon.png" alt="뒤로가기" />
          </span>
          <span className="icon list">
            <img src="/img/icon/etc-icon.png" alt="리스트" />
          </span>
          <span className="icon filter">
            <img src="/img/icon/filter-icon.png" alt="필터" />
          </span>
          <button className="reserve-btn">예약하기</button>
        </footer>
      </div>
    </MobileLayout>
  );
};

export default Map;
