import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth/SignUp.css";

const SignUp = () => {
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
    alert(`회원가입 시도: ${email}, ${name}`);
    // 실제 회원가입 로직 추가
  };

  return (
    <div className="mobile-root">
      <div className="signup-logo-area">
        <img src="/img/waitless-logo.png" alt="로고" className="signup-logo-img" />
      </div>
      <div className="center-box">
        <div className="title-row">
          <div className="title-text">회원가입</div>
          <button
            className="business-signup-btn"
            onClick={() => navigate("/signup-business")}
            type="button"
          >
            사업자이신가요?
          </button>
        </div>
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="input-group">
            <span className="icon user"></span>
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
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
              autoComplete="username"
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
              autoComplete="new-password"
              required
            />
          </div>
          <div className="input-group">
            <span className="icon phone"></span>
            <input
              type="password"
              placeholder="전화번호"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
              autoComplete="new-password"
              required
            />
            <button type="button" className="input-right-btn">
              전송
            </button>
          </div>
          <div className="input-group">
            <span className="icon certification"></span>
            <input
              type="password"
              placeholder="인증번호 입력"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
              autoComplete="new-password"
              required
            />
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

export default SignUp;
