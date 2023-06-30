"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
// import {ThemeProvider} from "styled-components";
var Router_1 = __importDefault(require("./Router"));
var GlobalStyle_1 = __importDefault(require("./styles/GlobalStyle"));
var root = (0, client_1.createRoot)(document.getElementById("root"));
root.render(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(GlobalStyle_1.default, null),
    react_1.default.createElement(Router_1.default, null)));
