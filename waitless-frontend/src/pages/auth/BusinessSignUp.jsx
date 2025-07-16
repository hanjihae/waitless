import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/BusinessSignUp.css";

const BusinessSignUp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (pw !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    alert(`사업자 회원가입 시도: ${email}, ${name}`);
    // 실제 회원가입 로직 추가
  };

  return (
    <div className="mobile-root">
      <div className="business-logo-area">
        <img src="/img/waitless-logo.png" alt="로고" className="business-logo-img" />
      </div>
      <div className="center-box">
        <div className="title-row">
          <span className="title-text">사업자 회원가입</span>
          <button style={{display: "none"}}></button>
        </div>
      <form className="signup-form" onSubmit={handleSignUp}>
        <div className="input-group">
          <span className="icon user"></span>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <span className="icon mail"></span>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <span className="icon w"></span>
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <span className="icon business-register"></span>
          <input type="text" placeholder="사업자등록번호" required />
          <button type="button" className="input-right-btn">
            인증
          </button>
        </div>
        <div className="input-group">
          <span className="icon phone"></span>
          <input type="text" placeholder="전화번호" required />
          <button type="button" className="input-right-btn">
            전송
          </button>
        </div>
        <div className="input-group">
          <span className="icon certification"></span>
          <input type="text" placeholder="인증번호" required />
          <button type="button" className="input-right-btn">
            재전송
          </button>
        </div>
        <button type="submit" className="signup-btn">
          가입하기
        </button>
      </form>
      </div>
    </div>
  );
};

export default BusinessSignUp;
