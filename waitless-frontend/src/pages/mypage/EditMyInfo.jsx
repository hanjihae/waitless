import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterLayout from "../../components/FooterLayout";
import "../../styles/MyPageHeader.css";
import "../../styles/EditMyInfo.css";

const EditMyInfo = () => {
  const navigate = useNavigate();

  // 예시: 서버에서 받아온 사용자 정보
  const userInfo = {
    name: "hnajeahi",
    email: "hnajeahi@gmail.com",
    slack: "hnajeahi@gmail.com",
    phone: "01033334444",
    password: "************"
  };

  // 각 필드별 상태
  const [name, setName] = useState(userInfo.name);
  const [nameFocused, setNameFocused] = useState(false);
  const [email, setEmail] = useState(userInfo.email);
  const [emailFocused, setEmailFocused] = useState(false);
  const [slack, setSlack] = useState(userInfo.slack);
  const [slackFocused, setSlackFocused] = useState(false);
  const [phone, setPhone] = useState(userInfo.phone);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [password, setPassword] = useState(userInfo.password);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <div className="mobile-root">
      <header className="mypage-header">
        <button className="back-btn" onClick={() => navigate(-1)}></button>
        <span className="title">내 정보 수정</span>
      </header>

      <form className="edit-form">
        <label className="edit-label">이름</label>
        <div className="edit-input-group">
          <img src="/img/icon/name-icon.png" alt="이름" className="edit-input-icon" />
          <input
            className="edit-input"
            type="text"
            value={nameFocused ? name : userInfo.name}
            onFocus={() => {
              setNameFocused(true);
              setName("");
            }}
            onBlur={() => {
              if (name === "") {
                setName(userInfo.name);
                setNameFocused(false);
              }
            }}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <label className="edit-label">이메일</label>
        <div className="edit-input-group">
          <img src="/img/icon/email-icon.png" alt="이메일" className="edit-input-icon" />
          <input
            className="edit-input"
            type="email"
            value={emailFocused ? email : userInfo.email}
            onFocus={() => {
              setEmailFocused(true);
              setEmail("");
            }}
            onBlur={() => {
              if (email === "") {
                setEmail(userInfo.email);
                setEmailFocused(false);
              }
            }}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <label className="edit-label">슬랙 ID</label>
        <div className="edit-input-group slack">
          <img src="/img/icon/slack-icon.png" alt="슬랙" className="edit-input-icon" />
          <input
            className="edit-input"
            type="text"
            value={slackFocused ? slack : userInfo.slack}
            onFocus={() => {
              setSlackFocused(true);
              setSlack("");
            }}
            onBlur={() => {
              if (slack === "") {
                setSlack(userInfo.slack);
                setSlackFocused(false);
              }
            }}
            onChange={e => setSlack(e.target.value)}
          />
        </div>
        <label className="edit-label">전화번호</label>
        <div className="edit-input-group phone">
          <img src="/img/icon/phone-icon.png" alt="전화번호" className="edit-input-icon" />
          <input
            className="edit-input"
            type="tel"
            value={phoneFocused ? phone : userInfo.phone}
            onFocus={() => {
              setPhoneFocused(true);
              setPhone("");
            }}
            onBlur={() => {
              if (phone === "") {
                setPhone(userInfo.phone);
                setPhoneFocused(false);
              }
            }}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <label className="edit-label">비밀번호</label>
        <div className="edit-input-group">
          <img src="/img/icon/pw-icon.png" alt="비밀번호" className="edit-input-icon" />
          <input
            className="edit-input"
            type="password"
            value={passwordFocused ? password : userInfo.password}
            onFocus={() => {
              setPasswordFocused(true);
              setPassword("");
            }}
            onBlur={() => {
              if (password === "") {
                setPassword(userInfo.password);
                setPasswordFocused(false);
              }
            }}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="edit-save-btn">
          저장
        </button>
      </form>
      <FooterLayout active="user" />
    </div>
  );
};

export default EditMyInfo;
