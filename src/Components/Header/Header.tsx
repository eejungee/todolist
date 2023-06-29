import React from "react";
import * as S from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const headerList = {
    signup: SIGNUP_HEADER,
    signin: SIGNIN_HEADER,
    todo: TODO_HEADER,
  };

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <S.HeaderBox>
      {headerList[type].title === "회원가입" ? (
        <S.Back alt="back" src="images/header/back.png" onClick={onClickBack} />
      ) : (
        <S.Back />
      )}
      <S.Title>{headerList[type].title}</S.Title>
      <div />
    </S.HeaderBox>
  );
};

export default Header;

const SIGNUP_HEADER = {
  title: "회원가입",
  button: true,
};

const SIGNIN_HEADER = {
  title: "로그인",
  button: true,
};

const TODO_HEADER = {
  title: "TODO LIST",
  button: false,
};
