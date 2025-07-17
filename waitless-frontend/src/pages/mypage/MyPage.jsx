import React from "react";
import { useNavigate } from "react-router-dom";
import FooterLayout from "../../components/FooterLayout";
import "../../styles/MyPage.css";
import "../../styles/MyPageHeader.css";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-root">
      <header className="mypage-header">
        <button className="back-btn"></button>
        <span className="title">마이페이지</span>
        <div className="alarm-icon">
          <div className="bell"></div>
          <span className="dot" />
        </div>
      </header>
      <div className="center-box">
        <section className="mypage-profile">
          <div className="profile-avatar">
            <span className="avatar-initial">H</span>
          </div>
          <div className="profile-welcome">
            <span className="profile-id">hnajeahi</span> 님, 환영합니다!
          </div>
          <button className="log-out">로그아웃</button>
        </section>
        <section className="mypage-stats">
          <div className="stat-card">
            <div className="stat-title">포인트</div>
            <div className="stat-value">1,100 P</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">쿠폰</div>
            <div className="stat-value">1개</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">리뷰</div>
            <div className="stat-value">14건</div>
          </div>
        </section>

        <nav className="mypage-menu">
          <ul>
            <li
              onClick={() => navigate("/mypage/reservation-list")}
              style={{ cursor: "pointer" }}
            >
              <span>예약 내역</span>
              <span className="arrow"></span>
            </li>
            <li
              onClick={() => navigate("/mypage/waiting-list")}
              style={{ cursor: "pointer" }}
            >
              <span>웨이팅 내역</span>
              <span className="arrow"></span>
            </li>
            <li
              onClick={() => navigate("/mypage/favorite-list")}
              style={{ cursor: "pointer" }}
            >
              <span>즐겨찾기</span>
              <span className="arrow"></span>
            </li>
            <li
              onClick={() => navigate("/mypage/edit-myinfo")}
              style={{ cursor: "pointer" }}
            >
              <span>내 정보 수정</span>
              <span className="arrow"></span>
            </li>
            <li>
              <span>회원탈퇴</span>
              <span className="arrow"></span>
            </li>
          </ul>
        </nav>
      </div>
      <FooterLayout active="user" />
    </div>
  );
};

export default MyPage;
