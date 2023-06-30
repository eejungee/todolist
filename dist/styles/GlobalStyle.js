"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_reset_1 = __importDefault(require("styled-reset"));
var mixin_1 = require("./mixin");
var GlobalStyle = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Noto Sans KR', sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  li {\n    list-style: none;\n  }\n  \n  input:focus {\n    outline: none;\n  }\n\n  html,\n  body,\n  #root {\n    ", "\n    width: 360px;\n    height: 800px;\n  }\n"], ["\n  ", "\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Noto Sans KR', sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  li {\n    list-style: none;\n  }\n  \n  input:focus {\n    outline: none;\n  }\n\n  html,\n  body,\n  #root {\n    ", "\n    width: 360px;\n    height: 800px;\n  }\n"])), styled_reset_1.default, (0, mixin_1.flex)("center", "", ""));
exports.default = GlobalStyle;
var templateObject_1;
