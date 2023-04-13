import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Signin.style";
import Header from "../../Components/Header/Header";

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signinInfo;

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  const handleEmail = (e) => {
    setSigninInfo((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePassword = (e) => {
    setSigninInfo((prev) => ({ ...prev, password: e.target.value }));
  };

  const checkEmail = email && email.includes("@");

  const checkPassword = password && password.length >= 8;

  const handleDisabled = !(checkEmail === true && checkPassword === true);

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("https://www.pre-onboarding-selection-task.shop/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.access_token);
        navigate("/todo");
      })
      .catch((error) => {
        console.error(error);
        alert(`Error : ${error}`);
      });
  };

  return (
    <div>
      <Header type="signin" />
      <S.FormBox>
        <S.SigninInput
          data-testid="email-input"
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="이메일을 입력해주세요"
        />
        {email && !checkEmail && (
          <S.AlertMsg>@를 포함하여 입력해주세요</S.AlertMsg>
        )}
        <S.SigninInput
          data-testid="password-input"
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="비밀번호를 입력해주세요"
        />
        {password && !checkPassword && (
          <S.AlertMsg>8자 이상 입력해주세요</S.AlertMsg>
        )}
        <S.SubmitBtn
          data-testid="signin-button"
          onClick={onSubmit}
          disabled={handleDisabled ? true : false}
          handleDisabled={handleDisabled}
        >
          로그인
        </S.SubmitBtn>
      </S.FormBox>
    </div>
  );
};

export default Signin;
