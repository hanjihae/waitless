import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessSignUpPage = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [name, setName] = useState('');
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
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (pw !== pwCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert(`사업자 회원가입 시도: ${email}, ${name}`);
    // 실제 회원가입 로직 추가
  };

  return (
    <div className="aspect-outer">
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          background: #fff;
        }
        .aspect-outer {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          overflow: hidden;
        }
        .aspect-inner {
          position: relative;
          width: 100vw;
          height: calc(100vw * 16 / 9);
          max-width: 1080px;
          max-height: 1920px;
          aspect-ratio: 9 / 16;
          background: #fff;
          box-shadow: 0 0 40px #F5F5F5;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transform-origin: top left;
        }
        @media (min-aspect-ratio: 9/16) {
          .aspect-inner {
            height: 100vh;
            width: calc(100vh * 9 / 16);
          }
        }
        .inner-content {
          width: 1080px;
          height: 1920px;
          position: absolute;
          left: 0;
          top: 0;
          transform-origin: top left;
          background: #fff;
        }
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
        .input-group .icon.business-register {
          background-image: url('/img/icon/image-icon.png');
          width: 37px;
          height: 37px;
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
      <div className="aspect-inner">
        <div className="inner-content" style={{ transform: `scale(${scale})` }}>
          <div className="logo-area">
            <img src="/img/waitless-logo.png" alt="로고" className="logo-img" />
          </div>
          <div className="welcome-row">
            <div className="welcome-text">사업자 회원가입</div>
          </div>
          <form className="signup-form" onSubmit={handleSignUp}>
            <div className="input-group">
              <span className="icon user"></span>
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <span className="icon mail"></span>
              <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <span className="icon w"></span>
              <input
                type="password"
                placeholder="비밀번호"
                value={pw}
                onChange={e => setPw(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <span className="icon business-register"></span>
              <input
                type="text"
                placeholder="사업자등록번호"
                required
              />
              <button type="button" className="input-right-btn">인증</button>
            </div>
            <div className="input-group">
              <span className="icon phone"></span>
              <input
                type="text"
                placeholder="전화번호"
                required
              />
              <button type="button" className="input-right-btn">전송</button>
            </div>
            <div className="input-group">
              <span className="icon certification"></span>
              <input
                type="text"
                placeholder="인증번호"
                required
              />
              <button type="button" className="input-right-btn">재전송</button>
            </div>
            <button type="submit" className="signup-btn">가입하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignUpPage;