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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var config_1 = __importDefault(require("../../../config/config"));
var S = __importStar(require("./TodoList.style"));
var TodoList = function (_a) {
    var todo = _a.todo, index = _a.index, setTodos = _a.setTodos, deleteTodo = _a.deleteTodo;
    var _b = (0, react_1.useState)(false), isUpdateClicked = _b[0], setIsUpdateClicked = _b[1];
    var _c = (0, react_1.useState)(todo.todo), updateInput = _c[0], setUpdateInput = _c[1];
    var token = localStorage.getItem("token");
    var handleUpdate = function (e) {
        e.preventDefault();
        setIsUpdateClicked(function (prev) { return !prev; });
        setUpdateInput(todo.todo);
    };
    var handleUpdateInput = function (e) { return setUpdateInput(e.target.value); };
    var updateCheckBox = function (id, index, e) {
        setTodos(function (prev) {
            var updatedTodos = __spreadArray([], prev, true);
            updatedTodos[index].isCompleted = e.target.checked;
            return updatedTodos;
        });
        fetch("".concat(config_1.default.TODO, "/").concat(id), {
            method: "PUT",
            headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                todo: todo.todo,
                isCompleted: e.target.checked,
            }),
        })
            .then(function (res) {
            if (res.status === 200) {
                alert("완료 상태가 수정됐어요!");
            }
            else {
                alert("완료 상태를 수정할 수 없어요!");
            }
        })
            .catch(function (error) {
            console.error(error);
            alert("Error : ".concat(error));
        });
    };
    var updateTodo = function (id, index, updateInput, e) {
        e.preventDefault();
        setIsUpdateClicked(function (prev) { return !prev; });
        setTodos(function (prev) {
            var updatedTodos = __spreadArray([], prev, true);
            updatedTodos[index].todo = updateInput;
            return updatedTodos;
        });
        fetch("".concat(config_1.default.TODO, "/").concat(id), {
            method: "PUT",
            headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                todo: updateInput,
                isCompleted: todo.isCompleted,
            }),
        })
            .then(function (res) {
            if (res.status === 200) {
                alert("댓글이 수정됐어요!");
            }
            else {
                alert("댓글을 수정할 수 없어요!");
            }
        })
            .catch(function (error) {
            console.error(error);
            alert("Error : ".concat(error));
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, todo && (react_1.default.createElement(S.TodoList, null,
        react_1.default.createElement("input", { type: "checkbox", checked: todo.isCompleted, onChange: function (e) { return updateCheckBox(todo.id, index, e); } }),
        isUpdateClicked ? (react_1.default.createElement(S.UpdateForm, null,
            react_1.default.createElement(S.UpdateInput, { "data-testid": "modify-input", type: "text", value: updateInput, onChange: handleUpdateInput }),
            react_1.default.createElement(S.BtnBox, null,
                react_1.default.createElement(S.LeftBtn, { "data-testid": "submit-button", type: "submit", onClick: function (e) { return updateTodo(todo.id, index, updateInput, e); } }, "\uC81C\uCD9C"),
                react_1.default.createElement(S.RightBtn, { "data-testid": "cancel-button", type: "button", onClick: handleUpdate }, "\uCDE8\uC18C")))) : (react_1.default.createElement(S.ListItem, null,
            react_1.default.createElement(S.ListInput, null, updateInput),
            react_1.default.createElement(S.BtnBox, null,
                react_1.default.createElement(S.LeftBtn, { "data-testid": "modify-button", type: "button", onClick: handleUpdate }, "\uC218\uC815"),
                react_1.default.createElement(S.RightBtn, { "data-testid": "delete-button", type: "button", onClick: function (e) { return deleteTodo(todo.id, e); } }, "\uC0AD\uC81C"))))))));
};
exports.default = TodoList;
