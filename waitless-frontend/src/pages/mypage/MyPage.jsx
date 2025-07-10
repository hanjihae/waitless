import React from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../../components/MobileLayout";
import "../../styles/MyPageHeader.css";
import "../../styles/MyPageFooter.css";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <style>{`
        .mypage-profile {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin: 80px 0 65px 0;
          gap: 35px;
        }
        .profile-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: linear-gradient(180deg, #AD7FF5 0%, #6253D3 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          font-weight: 600;
          color: #fff;
          margin-left: 90px;
          margin-bottom: 0;
        }
        .profile-welcome {
          font-size: 43px;
          font-weight: 800;
          color: #222;
          margin-left: 0;
        }
        .log-out {
          background: #fff;
          color: #6253D3;
          border: 2px solid #6253D3;
          border-radius: 30px;
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          width: 120px;
          height: 50px;
          min-width: 60px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .log-out:hover {
          background: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%);
          color: #fff;
        }
        .mypage-stats {
          display: flex;
          justify-content: center;
          gap: 32px;
          padding-bottom: 50px;
          border-bottom: 10px solid #f5f5f5;
        }
        .stat-card {
          background: #fff;
          border: 1.5px solid #B3B3B3;
          border-radius: 24px;
          width: 270px;
          height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
        .stat-title {
          font-size: 29px;
          color: #222;
          margin-bottom: 8px;
        }
        .stat-value {
          font-size: 29px;
          color: #6253D3;
        }
        .mypage-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .mypage-menu li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 41px;
          color: #222;
          padding: 60px 80px;
          border-bottom: 2px solid #f5f5f5;
          cursor: pointer;
          transition: background 0.2s;
        }
        .mypage-menu li:last-child {
          border-bottom: none;
        }
        .mypage-menu .arrow {
          background-image: url('/img/icon/next-arrow-icon.png');
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }
      `}</style>
      <header className="mypage-header">
        <button className="back-btn"></button>
        <span className="title">마이페이지</span>
        <div className="alarm-icon">
          <div className="bell"></div>
          <span className="dot" />
        </div>
      </header>

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
            onClick={() => navigate("/mypage/reservation")}
            style={{ cursor: "pointer" }}
          >
            <span>예약 내역</span>
            <span className="arrow"></span>
          </li>
          <li>
            <span>웨이팅 내역</span>
            <span className="arrow"></span>
          </li>
          <li>
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

      <footer className="mypage-footer">
        <div className="footer-icon home"></div>
        <div className="footer-icon search"></div>
        <div className="footer-icon user"></div>
        <div className="footer-icon etc"></div>
      </footer>
    </MobileLayout>
  );
};

export default MyPage;
