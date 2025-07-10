import React from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../../components/MobileLayout";
import "../../styles/MyPageHeader.css";
import "../../styles/MyPageFooter.css";

const EditMyInfo = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <style>{`
        .edit-form {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 0 0 0;
        }
        .edit-label {
          color: #b3b3b3;
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 12px;
          margin-left: 8px;
          display: block;
        }
        .edit-input-group {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 20px;
          margin-bottom: 32px;
          padding: 0 35px 0 40px;
          height: 140px;
          border: 1.5px solid #B3B3B3;
        }
        .edit-input-group.slack .edit-input-icon {
          width: 40px;
          height: 40px;
        }
        .edit-input-group.phone .edit-input-icon {
          width: 35px;
          height: 35px;
        }
        .edit-input-icon {
          width: 50px;
          height: 50px;
          margin-right: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .edit-input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 35px;
          font-weight: 700;
          color: #b3b3b3;
          width: 100%;
        }
        .edit-save-btn {
          float: right;
          margin-top: 16px;
          margin-right: 10px;
          background: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 30px;
          font-weight: 700;
          width: 150px;
          height: 100px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .edit-save-btn:hover {
          background: linear-gradient(180deg, #AD7FF5 0%, #6253D3 100%);
        }
      `}</style>
      <header className="mypage-header">
        <button className="back-btn" onClick={() => navigate(-1)}></button>
        <span className="title">내 정보 수정</span>
      </header>

      <form className="edit-form">
        <label className="edit-label">이름</label>
        <div className="edit-input-group">
          <img
            src="/img/icon/name-icon.png"
            alt="이름"
            className="edit-input-icon"
          />
          <input className="edit-input" type="text" value="hnajeahi" disabled />
        </div>
        <label className="edit-label">이메일</label>
        <div className="edit-input-group">
          <img
            src="/img/icon/email-icon.png"
            alt="이메일"
            className="edit-input-icon"
          />
          <input
            className="edit-input"
            type="email"
            value="hnajeahi@gmail.com"
            disabled
          />
        </div>
        <label className="edit-label">슬랙 ID</label>
        <div className="edit-input-group slack">
          <img
            src="/img/icon/slack-icon.png"
            alt="슬랙"
            className="edit-input-icon"
          />
          <input
            className="edit-input"
            type="text"
            value="hnajeahi@gmail.com"
            disabled
          />
        </div>
        <label className="edit-label">전화번호</label>
        <div className="edit-input-group phone">
          <img
            src="/img/icon/phone-icon.png"
            alt="전화번호"
            className="edit-input-icon"
          />
          <input className="edit-input" type="tel" value="01033334444" />
        </div>
        <label className="edit-label">비밀번호</label>
        <div className="edit-input-group">
          <img
            src="/img/icon/pw-icon.png"
            alt="비밀번호"
            className="edit-input-icon"
          />
          <input className="edit-input" type="password" value="************" />
        </div>
        <button type="submit" className="edit-save-btn">
          저장
        </button>
      </form>

      <footer className="mypage-footer">
        <div className="footer-icon home"></div>
        <div className="footer-icon search"></div>
        <div className="footer-icon user"></div>
        <div className="footer-icon etc"></div>
      </footer>
    </MobileLayout>
  );
};

export default EditMyInfo;
