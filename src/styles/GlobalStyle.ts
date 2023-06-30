import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { flex } from "./mixin";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }
  
  input:focus {
    outline: none;
  }

  html,
  body,
  #root {
    ${flex("center", "", "")}
    width: 360px;
    height: 800px;
  }

  @media (max-width: 768px) {
  html,
  body,
  #root {
    ${flex("center", "center", "column")}
    width: 100vw;
    height: 100vh;
  }
}
`;

export default GlobalStyle;