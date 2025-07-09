import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditMyInfo = () => {
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scaleW = vw / 1080;
      const scaleH = vh / 1920;
      const scale = Math.min(scaleW, scaleH, 1);
      setScale(scale);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="aspect-outer">
      <div className="aspect-inner">
        <div
          className="inner-content"
          style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          <style>{`
            
            .inner-content {
              width: 1080px;
              height: 1920px;
              position: absolute;
              left: 0;
              top: 0;
              transform-origin: top left;
            }
            .mypage-header {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              padding: 40px 48px 40px 32px;
              background: #fff;
              font-weight: 700;
              font-size: 40px;
              border-bottom: 10px solid #f5f5f5;
              height: 180px;
            }
            .back-btn {
              background: none;
              border: none;
              padding: 0;
              margin: 0;
              width: 44px;
              height: 44px;
              display: inline-block;
              background-image: url('/img/icon/back-icon.png');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              margin-left: 30px;
              cursor: pointer;
            }
            .back-btn:focus {
              outline: none;
            }
            .title {
              font-size: 50px;
              font-weight: 800;
              margin-left: 50px;
            }
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
            .mypage-footer {
              position: absolute;
              left: 0;
              bottom: 0; 
              width: 100%;
              height: 180px;
              background: #fff;
              display: flex;
              align-items: center;
              justify-content: space-around;
              border-top: 2px solid #F5F5F5;
              z-index: 10;
            }
            .footer-icon {
              width: 56px;
              height: 56px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              transition: opacity 0.2s, background 0.2s;
            }
            .footer-icon.home {
              background-image: url('/img/icon/home-icon.png');
            }
            .footer-icon.search {
              background-image: url('/img/icon/search-icon.png');
            }
            .footer-icon.user {
              background-image: url('/img/icon/user-icon.png');
            }
            .footer-icon.etc {
              background-image: url('/img/icon/etc-icon.png');
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
              <input
                className="edit-input"
                type="text"
                value="hnajeahi"
                disabled
              />
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
              <input
                className="edit-input"
                type="password"
                value="************"
              />
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
        </div>
      </div>
    </div>
  );
};

export default EditMyInfo;
