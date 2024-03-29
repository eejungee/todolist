"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var S = __importStar(require("./Header.style"));
var react_router_dom_1 = require("react-router-dom");
var Header = function (_a) {
    var type = _a.type;
    var headerList = {
        signup: SIGNUP_HEADER,
        signin: SIGNIN_HEADER,
        todo: TODO_HEADER,
    };
    var navigate = (0, react_router_dom_1.useNavigate)();
    var onClickBack = function () {
        navigate("/");
    };
    return (react_1.default.createElement(S.HeaderBox, null,
        headerList[type].title === "회원가입" ? (react_1.default.createElement(S.Back, { alt: "back", src: "images/header/back.png", onClick: onClickBack })) : (react_1.default.createElement(S.Back, null)),
        react_1.default.createElement(S.Title, null, headerList[type].title),
        react_1.default.createElement("div", null)));
};
exports.default = Header;
var SIGNUP_HEADER = {
    title: "회원가입",
    button: true,
};
var SIGNIN_HEADER = {
    title: "로그인",
    button: true,
};
var TODO_HEADER = {
    title: "TODO LIST",
    button: false,
};
