"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Signup_1 = __importDefault(require("./pages/Signup/Signup"));
var Signin_1 = __importDefault(require("./pages/Signin/Signin"));
var Todo_1 = __importDefault(require("./pages/Todo/Todo"));
var Router = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Signin_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/signup", element: react_1.default.createElement(Signup_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/signin", element: react_1.default.createElement(Signin_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/todo", element: react_1.default.createElement(Todo_1.default, null) }))));
};
exports.default = Router;
