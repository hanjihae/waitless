import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:19098/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pw,
        }),
        credentials: "include", // 필요 시 쿠키 포함
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
      }

      const data = await response.json(); // access token 등
      console.log("로그인 성공", data);

      // 토큰 저장 (예시)
      localStorage.setItem("accessToken", data.token);

      // 리디렉션
      window.location.href = "/main/"; // 로그인 후 이동할 경로
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className="mobile-root login">
      <div className="login-logo-area">
        <img
          src="/img/waitless-logo-white.png"
          alt="로고"
          className="login-logo-img"
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
      <div className="login-bottom-links">
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
