import styled from "styled-components";
import { flex } from "../../styles/mixin";

export const FormBox = styled.form`
  ${flex("center", "flex-start", "column")}
  gap:10px;
  padding: 20px;
`;

export const SignUpLabel = styled.label``;

export const SignUpInput = styled.input``;

export const AlertMsg = styled.p``;

export const SubmitBtn = styled.button`
  margin-top: 30px;
  background: ${({ handleDisabled }) =>
    handleDisabled ? "#DBDBDB" : "#FF6A21"};
`;
