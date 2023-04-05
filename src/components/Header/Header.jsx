import React from "react";
import * as S from "./Header.style";

const Header = ({ type, onClickBack }) => {
  const headerList = {
    signup: SIGNUP_HEADER,
    login: LOGIN_HEADER,
    todo: TODO_HEADER,
  };

  return (
    <S.HeaderBox>
      <S.Back alt="arrow" src="images/signup/arrow.png" onClick={onClickBack} />
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

const LOGIN_HEADER = {
  title: "로그인",
  button: true,
};

const TODO_HEADER = {
  title: "전단등록",
  button: false,
};
