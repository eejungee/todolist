"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flex = void 0;
var styled_components_1 = require("styled-components");
var flex = function (jc, ai, fd) {
    if (jc === void 0) { jc = "center"; }
    if (ai === void 0) { ai = "center"; }
    if (fd === void 0) { fd = "row"; }
    return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n"], ["\n  display: flex;\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n"])), jc, ai, fd);
};
exports.flex = flex;
var templateObject_1;
