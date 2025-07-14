import { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("로그인 시도: " + email);
  };

  return (
    <div className="mobile-root">
      <div className="logo-area">
        <img
          src="/img/waitless-logo-white.png"
          alt="로고"
          className="logo-img"
        />
      </div>
      <div className="welcome-text">환영합니다!</div>
      <form className="login-form" onSubmit={handleLogin}>
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
            autoComplete="current-password"
            required
          />
        </div>
        <button type="submit" className="login-btn">
          로그인
        </button>
      </form>
      <div className="bottom-links">
        <a href="#">아이디 찾기</a>
        <span>|</span>
        <a href="#">비밀번호 찾기</a>
        <span>|</span>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
