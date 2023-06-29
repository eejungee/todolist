import React from "react";
import { createRoot } from "react-dom/client";
// import {ThemeProvider} from "styled-components";
import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <GlobalStyle />
    <Router />
  </>
);
