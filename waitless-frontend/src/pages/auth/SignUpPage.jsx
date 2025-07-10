import { useState} from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../../components/MobileLayout";

const SignUpPage = () => {
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
    <MobileLayout>
      <style>{`
        .logo-area {
          position: absolute;
          left: 215px;
          top: 200px;
          width: 650px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-img {
          width: 70%;
          height: auto;
        }
        .welcome-row {
          display: flex;
          align-items: center;
          gap: 24px;
          position: absolute;
          left: 137px;
          top: 555px;
          width: auto;
        }
        .welcome-text {
          color: #222;
          font-size: 47px;
          font-weight: 800;
          text-align: left;
          margin: 0;
          display: block;
        }
        .signup-form {
          position: absolute;
          top: 650px;
          left: 123px;
          width: 834px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
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
          padding: 0 47px;
          font-size: 32px;
          border: 1.5px solid #B3B3B3;
        }
        .input-group .icon.phone {
          background-image: url('/img/icon/phone-icon.png');
          width: 35px;
          height: 35px;
        }
        .input-group .icon {
          display: inline-block;
          width: 50px;
          height:50px;
          margin-right: 24px;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .input-group .user {
          background-image: url('/img/icon/name-icon.png');
        }
        .input-group .mail {
          background-image: url('/img/icon/email-icon.png');
        }
        .input-group .w {
          background-image: url('/img/icon/pw-icon.png');
        }
        .input-group .certification {
          background-image: url('/img/icon/certification-icon.png');
        }
        .input-group input::placeholder {
            color: #B3B3B3;
        }
        .input-group input {
          border: none;
          outline: none;
          font-size: 32px;
          font-weight: 800;
          flex: 1;
          background: transparent;
        }
        .input-right-btn {
          background: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%);
          color: #fff; 
          border: none;
          border-radius: 40px;
          font-size: 28px;
          font-weight: 800;
          padding: 8px 20px;
          margin-left: 12px;
          cursor: pointer;
          transition: background 0.2s;
          width: 150px;
          height: 80px;
          min-width: 60px;
          white-space: nowrap;
        }
        .input-right-btn:hover {
          background: linear-gradient(180deg, #AD7FF5 0%, #6253D3 100%);
        }
        .signup-btn {
          width: 834px;
          height: 139px;
          background: linear-gradient(90deg, #AD7FF5 0%, #6253D3 100%);
          color: #fff;
          border: none;
          border-radius: 100px;
          font-size: 37px;
          font-weight: 800;
          cursor: pointer;
          transition: background 0.2s;
        }
        .signup-btn:hover {
          background: linear-gradient(180deg, #AD7FF5 0%, #6253D3 100%);
        }
        .bottom-links {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 300px;
          margin-left: auto;
          margin-right: auto;
          width: 600px;
          display: flex;
          justify-content: space-between;
          color: #888;
          font-size: 24px;
          font-weight: 500;
        }
        .bottom-links a {
          color: #888;
          text-decoration: underline;
          font-weight: 500;
        }
        .bottom-links span {
          color: #888;
        }
        .business-signup-btn {
          background: none;
          border: none;
          color: #B3B3B3;
          font-size: 30px;
          font-weight: 700;
          cursor: pointer;
          margin-top: 10px;
          padding: 0 8px;
          transition: color 0.2s;
        }
        .business-signup-btn:hover {
          color: #6253d3;
        }
      `}</style>
      <div className="logo-area">
        <img src="/img/waitless-logo.png" alt="로고" className="logo-img" />
      </div>
      <div className="welcome-row">
        <div className="welcome-text">회원가입</div>
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
    </MobileLayout>
  );
};

export default SignUpPage;
