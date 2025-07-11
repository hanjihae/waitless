import { useState} from "react";
import { Link } from "react-router-dom";
import MobileLayout from "../../components/MobileLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("로그인 시도: " + email);
  };

  return (
    <MobileLayout>
      <style>{`
        .aspect-inner {
          background: linear-gradient(180deg, #AD7FF5 0%, #6253D3 100%) !important;
          background-size: cover !important;
        }

        .logo-area {
          position: absolute;
          left: 215px;
          top: 500px;
          width: 600px;
          height: 193px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-img {
          width: 100%;
          height: auto;
        }
        .welcome-text {
          position: relative;
          color: #fff;
          font-size: 37px;
          font-weight: 800;
          text-align: center;
          width: 100%;
          margin: 800px auto 60px auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-form {
          position: absolute;
          top: 650px;
          left: 123px;
          width: 834px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .input-group:first-child {
          margin-top: 300px;
        }
        .input-group {
          width: 834px;
          height: 139px;
          background: #fff;
          border-radius: 100px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          box-sizing: border-box;
          padding: 0 40px;
          font-size: 37px;
        }
        .input-group .icon {
          display: inline-block;
          width: 51px;
          height: 53px;
          margin-right: 32px;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .input-group .mail {
          background-image: url('/img/icon/email-icon.png');
        }
        .input-group .w {
          background-image: url('/img/icon/pw-icon.png');
          width: 47px;
          height: 56px;
        }
        .input-group input {
          border: none;
          outline: none;
          font-size: 37px;
          font-weight: 800;
          flex: 1;
          background: transparent;
          color: #333;
        }
        .login-btn {
          width: 834px;
          height: 139px;
          background: #AD7FF5;
          color: #fff;
          border: none;
          border-radius: 100px;
          font-size: 37px;
          font-weight: 800;
          margin-top: 46px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .login-btn:hover {
          background: #6253D3;
        }
        .bottom-links {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 400px;
          margin-left: auto;
          margin-right: auto;
          width: 600px;
          display: flex;
          justify-content: space-between;
          color: #fff;
          font-size: 27px;
          font-weight: 600;
        }
        .bottom-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }
        .bottom-links span {
          color: #fff;
        }
      `}</style>
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
    </MobileLayout>
  );
};

export default Login;
