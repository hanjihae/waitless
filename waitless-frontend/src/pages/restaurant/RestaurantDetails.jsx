import React, { useState } from "react";
import "../../styles/restaurant/RestaurantDetails.css";

const RestaurantDetails = () => {
  const [tab, setTab] = useState("예약");
  const [showDateModal, setShowDateModal] = useState(false);

  return (
    <div className="restaurant-details-root">
      {/* 상단 이미지 및 정보 */}
      <div className="restaurant-header">
        <div className="restaurant-imgs">
          <img src="/img/sample/restaurant3.png" alt="마리스그릴" />
        </div>
        <div className="restaurant-header-icons">
          <button className="icon-btn back"></button>
          <button className="icon-btn share"></button>
        </div>
        <div className="restaurant-details-info">
          <div className="restaurant-details-category">이탈리아 음식</div>
          <div className="restaurant-details-title">마리스그릴</div>
          <div className="restaurant-details-desc">
            망원동 시장 근처 맛있고 분위기 좋은 이탈리안 레스토랑
          </div>
          <div className="restaurant-rating-row">
            <span className="star">★</span>
            <span className="score">4.3</span>
            <span className="review">리뷰 1,029개</span>
            <span className="icon-btn small-arrow"></span>
          </div>
          <div className="restaurant-actions">
            <button className="action-btn">
              <span className="icon-btn call"></span>전화하기
            </button>
            <button className="action-btn">
              <span className="icon-btn location"></span>위치보기
            </button>
          </div>
        </div>
      </div>

      {/* 탭 */}
      <div className="tab-row">
        <button
          className={tab === "예약" ? "tab active" : "tab"}
          onClick={() => setTab("예약")}
        >
          예약
        </button>
        <button
          className={tab === "웨이팅" ? "tab active" : "tab"}
          onClick={() => setTab("웨이팅")}
        >
          웨이팅
        </button>
      </div>

      {/* 탭 내용 */}
      <div className="tab-content">
        {tab === "예약" ? (
          <div className="reservation-form">
            <div className="form-label">예약 일시</div>
            <div className="form-row">
              <div
                className="form-select"
                onClick={() => setShowDateModal(true)}
              >
                <span className="icon-btn calendar"></span>
                <span className="form-select-label">내일 (월) / 2명</span>
                <span className="icon-btn arrow"></span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-select time">
                <span className="icon clock"></span>
                오후 5:00
              </div>
              <button className="notify-btn">
                <span className="icon-btn bell"></span>
                빈자리 알림신청
              </button>
            </div>
          </div>
        ) : (
          <div className="waiting-form">
            <div className="form-label">
              대기인원 <span className="waiting-count">25팀</span>
            </div>
            <div className="form-row">
              <div className="form-label">인원 선택</div>
              <div className="form-select">
                <span className="icon user"></span>
                2명
                <span className="icon arrow"></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {showDateModal && (
        <div className="date-modal-backdrop" onClick={() => setShowDateModal(false)}>
          <div className="date-modal" onClick={e => e.stopPropagation()}>
            {/* 인원 선택 */}
            <div className="modal-section">
              <label>인원 선택</label>
              <select>
                <option>1명</option>
                <option>2명</option>
                <option>3명</option>
                {/* ... */}
              </select>
            </div>
            {/* 날짜(캘린더) 선택 */}
            <div className="modal-section">
              <label>날짜 선택</label>
              {/* 캘린더 라이브러리 또는 직접 구현 */}
              <div className="calendar">
                {/* 예시: 가능한 요일만 활성화 */}
                <button className="day enabled">일</button>
                <button className="day enabled">월</button>
                <button className="day disabled" disabled>화</button>
                <button className="day enabled">수</button>
                <button className="day enabled">목</button>
                <button className="day disabled" disabled>금</button>
                <button className="day enabled">토</button>
              </div>
            </div>
            {/* 시간대 선택 */}
            <div className="modal-section">
              <label>시간 선택</label>
              <div className="time-list">
                <button className="time enabled">17:00</button>
                <button className="time enabled">18:00</button>
                <button className="time disabled" disabled>19:00</button>
                {/* ... */}
              </div>
            </div>
            <button className="modal-close" onClick={() => setShowDateModal(false)}>닫기</button>
          </div>
        </div>
      )}

      <footer className="restaurant-footer">
        <button
          className={
            tab === "예약"
              ? "restaurant-reserve-btn"
              : "restaurant-reserve-btn waiting"
          }
        >
          {tab === "예약" ? "예약하기" : "웨이팅 등록하기"}
        </button>
        <div className="restaurant-icon bookmark">
          <img src="/img/icon/bookmark-icon-purple.png" alt="북마크" />
          <span>3,345</span>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantDetails;
