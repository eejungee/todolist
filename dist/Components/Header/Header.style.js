"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Back = exports.HeaderBox = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var mixin_1 = require("../../styles/mixin");
exports.HeaderBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  width: 360px;\n  height: 56px;\n  padding: 15px;\n  margin-bottom: 20px;\n  background: #ffffff;\n  border-bottom: 1px solid #ececec;\n"], ["\n  ", "\n  width: 360px;\n  height: 56px;\n  padding: 15px;\n  margin-bottom: 20px;\n  background: #ffffff;\n  border-bottom: 1px solid #ececec;\n"])), (0, mixin_1.flex)("space-between", "center", null));
exports.Back = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
exports.Title = styled_components_1.default.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: 700;\n  font-size: 18px;\n  color: #252525;\n"], ["\n  font-weight: 700;\n  font-size: 18px;\n  color: #252525;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
