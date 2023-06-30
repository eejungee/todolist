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
var react_router_dom_1 = require("react-router-dom");
var config_1 = __importDefault(require("../../config/config"));
var Header_1 = __importDefault(require("../../Components/Header/Header"));
var TodoList_1 = __importDefault(require("./Components/TodoList"));
var S = __importStar(require("./Todo.style"));
var Todo = function () {
    var _a = (0, react_1.useState)(""), todoInput = _a[0], setTodoInput = _a[1];
    var _b = (0, react_1.useState)(false), isEmpty = _b[0], setIsEmpty = _b[1];
    var _c = (0, react_1.useState)([]), todos = _c[0], setTodos = _c[1];
    var token = localStorage.getItem("token");
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        if (!token) {
            navigate("/signin");
        }
        else {
            fetch("".concat(config_1.default.TODO), {
                method: "GET",
                headers: {
                    Authorization: "Bearer ".concat(token),
                },
            })
                .then(function (res) { return res.json(); })
                .then(function (data) { return setTodos(data); });
        }
    }, [navigate]);
    var handleTodoInput = function (e) {
        setTodoInput(e.target.value);
    };
    var addTodo = function (e) {
        e.preventDefault();
        if (todoInput === "") {
            setIsEmpty(true);
        }
        else {
            fetch("".concat(config_1.default.TODO), {
                method: "POST",
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ todo: todoInput }),
            })
                .then(function (res) { return res.json(); })
                .then(function (_a) {
                var id = _a.id, todo = _a.todo, isCompleted = _a.isCompleted, userId = _a.userId;
                setTodos(function (prev) { return __spreadArray(__spreadArray([], prev, true), [
                    {
                        id: id,
                        todo: todo,
                        isCompleted: isCompleted,
                        userId: userId,
                    },
                ], false); });
                setTodoInput("");
                setIsEmpty(false);
            })
                .catch(function (error) {
                console.error(error);
                alert("Error : ".concat(error));
            });
        }
    };
    var deleteTodo = function (id, e) {
        e.preventDefault();
        fetch("".concat(config_1.default.TODO, "/").concat(id), {
            method: "DELETE",
            headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json",
            },
        })
            .then(function (res) {
            if (res.status === 204) {
                setTodos(todos.filter(function (todo) { return todo.id !== id; }));
                alert("댓글이 삭제됐어요!");
            }
            else {
                alert("댓글을 삭제할 수 없어요!");
            }
        })
            .catch(function (error) {
            console.error(error);
            alert("Error : ".concat(error));
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, { type: "todo" }),
        react_1.default.createElement(S.TodoInputBox, { onSubmit: function (e) { return addTodo(e); } },
            react_1.default.createElement(S.TodoInput, { "data-testid": "new-todo-input", type: "text", value: todoInput, placeholder: "\uD560 \uC77C\uC744 \uC785\uB825\uD558\uC138\uC694", onChange: handleTodoInput }),
            react_1.default.createElement(S.AddBtn, { "data-testid": "new-todo-add-button", type: "submit" }, "\uCD94\uAC00")),
        isEmpty && react_1.default.createElement(S.AlertMsg, null, "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694"),
        react_1.default.createElement(S.TodoLists, null, todos.length >= 1 &&
            todos.map(function (todo, index) { return (react_1.default.createElement(TodoList_1.default, { key: todo.id, todo: todo, index: index, setTodos: setTodos, deleteTodo: deleteTodo })); }))));
};
exports.default = Todo;
