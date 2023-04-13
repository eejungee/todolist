import styled from "styled-components";
import { css } from "styled-components";
import { flex } from "../../../../styles/mixin";

const ListBox = css`
  ${flex("space-between", null, null)}
  gap: 10px;
`;

const InputBox = css`
  width: 170px;
`;

const Btn = css`
  padding: 5px 10px;
  border-style: none;
  border-radius: 8px;
  color: #ffffff;
`;

export const TodoList = styled.li`
  ${flex("space-between", "center", null)}
  width: 330px;
  padding: 5px;
  border-radius: 8px;
  background: #ffffff;
`;

export const UpdateForm = styled.form`
  ${ListBox}
`;

export const UpdateInput = styled.input`
  ${InputBox}
`;

export const BtnBox = styled.div`
  ${flex(null, null, null)}
  width: 110px;
  gap: 10px;
`;

export const LeftBtn = styled.button`
  ${Btn}
  background: #ff6a21;
`;

export const RightBtn = styled.button`
  ${Btn}
  background: #dbdbdb;
`;

export const ListItem = styled.div`
  ${ListBox}
`;

export const ListInput = styled.p`
  ${flex("flex-start", "center", null)}
  ${InputBox}
`;
