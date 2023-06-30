"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var config_1 = __importDefault(require("../../config/config"));
var Header_1 = __importDefault(require("../../Components/Header/Header"));
var S = __importStar(require("./Signup.style"));
var Signup = function () {
    var _a = (0, react_1.useState)({
        email: "",
        password: "",
    }), signupInfo = _a[0], setSignupInfo = _a[1];
    var email = signupInfo.email, password = signupInfo.password;
    var token = localStorage.getItem("token");
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        if (token) {
            navigate("/todo");
        }
    }, [navigate]);
    var handleEmail = function (e) {
        setSignupInfo(function (prev) { return (__assign(__assign({}, prev), { email: e.target.value })); });
    };
    var handlePassword = function (e) {
        setSignupInfo(function (prev) { return (__assign(__assign({}, prev), { password: e.target.value })); });
    };
    var checkEmail = email && email.includes("@");
    var checkPassword = password && password.length >= 8;
    var handleDisabled = !(checkEmail === true && checkPassword === true);
    var onSubmit = function (e) {
        e.preventDefault();
        fetch("".concat(config_1.default.SIGNUP), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then(function (res) {
            if (res.status === 201) {
                return navigate("/signin");
            }
            else {
                alert("회원가입 실패");
            }
        })
            .catch(function (error) {
            console.error(error);
            alert("Error : ".concat(error));
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, { type: "signup" }),
        react_1.default.createElement(S.FormBox, null,
            react_1.default.createElement(S.SignupLabel, null, "\uC774\uBA54\uC77C"),
            react_1.default.createElement(S.SignupInput, { "data-testid": "email-input", type: "text", value: email, placeholder: "@\uB97C \uD3EC\uD568\uD558\uC5EC \uC785\uB825\uD558\uC138\uC694", onChange: handleEmail }),
            email && !checkEmail && (react_1.default.createElement(S.AlertMsg, null, "@\uB97C \uD3EC\uD568\uD558\uC5EC \uC785\uB825\uD574\uC8FC\uC138\uC694")),
            react_1.default.createElement(S.SignupLabel, null, "\uBE44\uBC00\uBC88\uD638"),
            react_1.default.createElement(S.SignupInput, { "data-testid": "password-input", type: "password", value: password, placeholder: "8\uC790\uB9AC \uC774\uC0C1 \uC785\uB825\uD558\uC138\uC694", onChange: handlePassword }),
            password && !checkPassword && (react_1.default.createElement(S.AlertMsg, null, "8\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694")),
            react_1.default.createElement(S.SubmitBtn, { "data-testid": "signup-button", onClick: onSubmit, disabled: handleDisabled ? true : false, handleDisabled: handleDisabled }, "\uD68C\uC6D0\uAC00\uC785 \uC644\uB8CC"))));
};
exports.default = Signup;
