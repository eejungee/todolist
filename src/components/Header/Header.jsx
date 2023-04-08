import React from "react";
import * as S from "./Header.style";

const Header = ({ type, onClickBack }) => {
  const headerList = {
    signup: SIGNUP_HEADER,
    signin: SIGNIN_HEADER,
    todo: TODO_HEADER,
  };

  return (
    <S.HeaderBox>
      <S.Back alt="back" src="images/header/back.png" onClick={onClickBack} />
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
  title: "전단등록",
  button: false,
};
