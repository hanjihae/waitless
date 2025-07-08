import { useState, useEffect } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [scale, setScale] = useState(1)

  const handleLogin = (e) => {
    e.preventDefault()
    alert('로그인 시도: ' + email)
  }

  useEffect(() => {
    function handleResize() {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const scaleW = vw / 1080
      const scaleH = vh / 1920
      const scale = Math.min(scaleW, scaleH, 1)
      setScale(scale)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="aspect-outer">
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          background: #222;
        }

        .aspect-outer {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F5F5F5;
          overflow: hidden;
        }

        .aspect-inner {
          position: relative;
          width: 100vw;
          height: calc(100vw * 16 / 9);
          max-width: 1080px;
          max-height: 1920px;
          aspect-ratio: 9 / 16;
          background: linear-gradient(180deg, #ad7ff5 0%, #6253d3 100%);
          box-shadow: 0 0 40px rgba(0,0,0,0.2);
          overflow: hidden;
          /* 내부 컨텐츠 스케일 조정용 */
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

        /* 내부 컨텐츠를 1080x1920 기준으로 스케일 */
        .inner-content {
          width: 1080px;
          height: 1920px;
          position: absolute;
          left: 0;
          top: 0;
          transform-origin: top left;
        }

        /* 내부 요소는 피그마 px값 그대로 (1080x1920 기준) */
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
          background-image: url('/img/email-icon.png');
        }
        .input-group .w {
          background-image: url('/img/pw-icon.png');
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
          background: #ad7ff5;
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
          background: #6253d3;
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
      <div className="aspect-inner">
        <div className="inner-content" style={{ transform: `scale(${scale})` }}>
          <div className="logo-area">
            <img src="/img/waitless-logo-white.png" alt="로고" className="logo-img" />
          </div>
          <div className="welcome-text">환영합니다!</div>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <span className="icon mail"></span>
              <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPw(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit" className="login-btn">로그인</button>
          </form>
          <div className="bottom-links">
            <a href="#">아이디 찾기</a>
            <span>|</span>
            <a href="#">비밀번호 찾기</a>
            <span>|</span>
            <a href="#">회원가입</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage