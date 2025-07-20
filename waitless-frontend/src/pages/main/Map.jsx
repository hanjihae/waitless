import React from "react";
import "../../styles/main/Map.css";

const Map = () => {
  return (
    <div className="mobile-root">
      <div className="map-page">
        {/* 상단바 */}
        <header className="map-header">
          <div className="profile-circle">
            <span className="first-name">H</span>
          </div>
          <div className="map-search-bar">
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
        <div className="map-container">
          {/* 헤더 아래 위치/필터 바 */}
          <div className="location-bar">
            <div className="location-left">
              <span className="map-icon location" />
              <span className="location-text">서울</span>
              <span className="map-icon arrow" />
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
                  style={{ left: 100 + i * 40, top: 60 + (i % 3) * 30 }}
                />
              ))}
            </div>
            <div className="map-area-actions">
              <button className="search-area-btn">이 지역 검색하기</button>
              <div className="gps-fab">
                <span className="map-icon gps" />
              </div>
            </div>
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
                <span className="map-icon bookmark" />
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
            <span className="map-icon bookmark-gray">
              <img src="/img/icon/bookmark-icon-gray.png" alt="북마크" />
            </span>
          </div>
        </div>

        {/* 하단 메뉴 */}
        <footer className="map-footer">
          <span className="map-icon back">
            <img src="/img/icon/back-icon.png" alt="뒤로가기" />
          </span>
          <span className="map-icon list">
            <img src="/img/icon/list-icon.png" alt="리스트" />
          </span>
          <span className="map-icon filter">
            <img src="/img/icon/filter-icon.png" alt="필터" />
          </span>
          <button className="reserve-btn">예약하기</button>
        </footer>
      </div>
    </div>
  );
};

export default Map;
