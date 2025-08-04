import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/auth/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [certCode, setCertCode] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (pw !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!phone || !certCode) {
      alert("전화번호와 인증번호를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:19091/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pw,
          name: name,
          phone: phone,
          role: "USER", // 고정
        }),
      });

      if (!response.ok) {
        throw new Error("회원가입 실패");
      }

      const data = await response.json();
      console.log("회원가입 성공:", data);

      alert("회원가입이 완료되었습니다.");
      navigate("/"); // 회원가입 완료 후 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
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
            <span className="icon w"></span>
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <div className="input-group">
            <span className="icon phone"></span>
            <input
              type="tel"
              placeholder="전화번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button type="button" className="input-right-btn">
              전송
            </button>
          </div>
          <div className="input-group">
            <span className="icon certification"></span>
            <input
              type="text"
              placeholder="인증번호 입력"
              value={certCode}
              onChange={(e) => setCertCode(e.target.value)}
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