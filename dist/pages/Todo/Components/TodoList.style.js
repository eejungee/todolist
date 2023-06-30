"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInput = exports.ListItem = exports.RightBtn = exports.LeftBtn = exports.BtnBox = exports.UpdateInput = exports.UpdateForm = exports.TodoList = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var styled_components_2 = require("styled-components");
var mixin_1 = require("../../../styles/mixin");
var ListBox = (0, styled_components_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  gap: 10px;\n"], ["\n  ", "\n  gap: 10px;\n"])), (0, mixin_1.flex)("space-between", "center", "row"));
var InputBox = (0, styled_components_2.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 170px;\n"], ["\n  width: 170px;\n"])));
var Btn = (0, styled_components_2.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 5px 10px;\n  border-style: none;\n  border-radius: 8px;\n  color: #ffffff;\n"], ["\n  padding: 5px 10px;\n  border-style: none;\n  border-radius: 8px;\n  color: #ffffff;\n"])));
exports.TodoList = styled_components_1.default.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  width: 330px;\n  padding: 5px;\n  border-radius: 8px;\n  background: #ffffff;\n"], ["\n  ", "\n  width: 330px;\n  padding: 5px;\n  border-radius: 8px;\n  background: #ffffff;\n"])), (0, mixin_1.flex)("space-between", "center", "row"));
exports.UpdateForm = styled_components_1.default.form(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), ListBox);
exports.UpdateInput = styled_components_1.default.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), InputBox);
exports.BtnBox = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n  width: 110px;\n  gap: 10px;\n"], ["\n  ", "\n  width: 110px;\n  gap: 10px;\n"])), (0, mixin_1.flex)());
exports.LeftBtn = styled_components_1.default.button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n  background: #ff6a21;\n"], ["\n  ", "\n  background: #ff6a21;\n"])), Btn);
exports.RightBtn = styled_components_1.default.button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", "\n  background: #dbdbdb;\n"], ["\n  ", "\n  background: #dbdbdb;\n"])), Btn);
exports.ListItem = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), ListBox);
exports.ListInput = styled_components_1.default.p(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), (0, mixin_1.flex)("flex-start", "center", "row"), InputBox);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
