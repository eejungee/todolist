import styled from "styled-components";
import { flex } from "../../styles/mixin";

export const TodoInputBox = styled.form`
  ${flex("center", "center", null)}
  width: 360px;
  gap: 10px;
`;

export const TodoInput = styled.input`
  width: 280px;
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;

export const AddBtn = styled.button`
  width: 50px;
  padding: 10px;
  background: #ff6a21;
  border-style: none;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
`;

export const AlertMsg = styled.p`
  padding-left: 15px;
  margin-top: 10px;
  color: #ff6a21;
  font-weight: 700;
`;

export const TodoLists = styled.ul`
  ${flex(null, null, "column")}
  width: 360px;
  height: 600px;
  padding: 10px;
  margin-top: 20px;
  gap: 10px;
  background: #dbdbdb;
  overflow: scroll;
`;
