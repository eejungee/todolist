import styled from "styled-components";
import { css } from "styled-components";
import { flex } from "../../styles/mixin";

const Size = css`
  width: 328px;
  height: 50px;
`;

export const FormBox = styled.form`
  ${flex("center", "flex-start", "column")}
  gap:10px;
  padding: 20px;
`;

export const SigninInput = styled.input`
  ${Size}
  padding: 0px 10px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

export const AlertMsg = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 13px;
  color: #ff6a21;
`;

export const SubmitBtn = styled.button`
  ${Size}
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background: ${({ handleDisabled }) =>
    handleDisabled ? "#DBDBDB" : "#FF6A21"};
  color: #ffffff;
  font-weight: 700;
  font-size: 17px;
`;
