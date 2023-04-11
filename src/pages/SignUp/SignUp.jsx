import React, { useState } from "react";
import Header from "../../components/Header/Header";
import * as S from "./Signup.style";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signupInfo;

  const handleEmail = (e) => {
    setSignupInfo((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePassword = (e) => {
    setSignupInfo((prev) => ({ ...prev, password: e.target.value }));
  };

  const checkEmail = email && email.includes("@");

  const checkPassword = password && password.length >= 8;

  const handleDisabled = !(checkEmail === true && checkPassword === true);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("https://www.pre-onboarding-selection-task.shop/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          return navigate("/signin");
        } else {
          alert("회원가입 실패");
        }
      })
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Header type="signup" />
      <S.FormBox>
        <S.SignUpLabel>이메일</S.SignUpLabel>
        <S.SignUpInput
          data-testid="email-input"
          type="text"
          value={email}
          onChange={handleEmail}
        />
        {email && !checkEmail && (
          <S.AlertMsg>@를 포함하여 입력해주세요</S.AlertMsg>
        )}
        <S.SignUpLabel>비밀번호</S.SignUpLabel>
        <S.SignUpInput
          data-testid="password-input"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        {password && !checkPassword && (
          <S.AlertMsg>8자 이상 입력해주세요</S.AlertMsg>
        )}
        <S.SubmitBtn
          data-testid="signup-button"
          onClick={onSubmit}
          disabled={handleDisabled ? true : false}
          handleDisabled={handleDisabled}
        >
          회원가입 완료
        </S.SubmitBtn>
      </S.FormBox>
    </div>
  );
};

export default Signup;
