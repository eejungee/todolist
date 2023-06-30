"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupBtn = exports.SubmitBtn = exports.AlertMsg = exports.SigninInput = exports.FormBox = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var styled_components_2 = require("styled-components");
var mixin_1 = require("../../styles/mixin");
var Size = (0, styled_components_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 328px;\n  height: 50px;\n"], ["\n  width: 328px;\n  height: 50px;\n"])));
exports.FormBox = styled_components_1.default.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  gap:10px;\n  padding: 20px;\n"], ["\n  ", "\n  gap:10px;\n  padding: 20px;\n"])), (0, mixin_1.flex)("center", "flex-start", "column"));
exports.SigninInput = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  padding: 0px 10px;\n  background: #ffffff;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n"], ["\n  ", "\n  padding: 0px 10px;\n  background: #ffffff;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n"])), Size);
exports.AlertMsg = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 13px;\n  color: #ff6a21;\n"], ["\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 13px;\n  color: #ff6a21;\n"])));
exports.SubmitBtn = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  margin-top: 30px;\n  background: #ffffff;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n  background: ", ";\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 17px;\n"], ["\n  ", "\n  margin-top: 30px;\n  background: #ffffff;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n  background: ", ";\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 17px;\n"])), Size, function (_a) {
    var handleDisabled = _a.handleDisabled;
    return handleDisabled ? "#DBDBDB" : "#FF6A21";
});
exports.SignupBtn = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  background: #ffffff;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #ff6a21;\n  font-weight: 700;\n  font-size: 17px;\n"], ["\n  ", "\n  background: #ffffff;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #ff6a21;\n  font-weight: 700;\n  font-size: 17px;\n"])), Size);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
