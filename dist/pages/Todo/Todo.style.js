"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoLists = exports.AlertMsg = exports.AddBtn = exports.TodoInput = exports.TodoInputBox = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var mixin_1 = require("../../styles/mixin");
exports.TodoInputBox = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  width: 360px;\n  gap: 10px;\n"], ["\n  ", "\n  width: 360px;\n  gap: 10px;\n"])), (0, mixin_1.flex)("center", "center", "center"));
exports.TodoInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 280px;\n  padding: 10px;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n"], ["\n  width: 280px;\n  padding: 10px;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n"])));
exports.AddBtn = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 50px;\n  padding: 10px;\n  background: #ff6a21;\n  border-style: none;\n  border-radius: 8px;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 15px;\n"], ["\n  width: 50px;\n  padding: 10px;\n  background: #ff6a21;\n  border-style: none;\n  border-radius: 8px;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 15px;\n"])));
exports.AlertMsg = styled_components_1.default.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-left: 15px;\n  margin-top: 10px;\n  color: #ff6a21;\n  font-weight: 700;\n"], ["\n  padding-left: 15px;\n  margin-top: 10px;\n  color: #ff6a21;\n  font-weight: 700;\n"])));
exports.TodoLists = styled_components_1.default.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n  width: 360px;\n  height: 600px;\n  padding: 10px;\n  margin-top: 20px;\n  gap: 10px;\n  background: #dbdbdb;\n  overflow: scroll;\n"], ["\n  ", "\n  width: 360px;\n  height: 600px;\n  padding: 10px;\n  margin-top: 20px;\n  gap: 10px;\n  background: #dbdbdb;\n  overflow: scroll;\n"])), (0, mixin_1.flex)("", "center", "column"));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
