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
    ${flex("center", null, null)}
    width: 360px;
    height: 800px;
  }
`;

export default GlobalStyle;
