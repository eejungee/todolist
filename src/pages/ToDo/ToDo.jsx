import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import TodoList from "./TodoComponents/TodoList/TodoList";
import * as S from "./Todo.style";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [todos, setTodos] = useState([]);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    } else {
      fetch("https://www.pre-onboarding-selection-task.shop/todos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }
  }, []);

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (todoInput === "") {
      setIsEmpty(true);
    } else {
      fetch("https://www.pre-onboarding-selection-task.shop/todos", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo: todoInput }),
      })
        .then((res) => res.json())
        .then(({ id, todo, isCompleted, userId }) => {
          setTodos((prev) => [
            ...prev,
            {
              id: id,
              todo: todo,
              isCompleted: isCompleted,
              userId: userId,
            },
          ]);
          setTodoInput("");
          setIsEmpty(false);
        })
        .catch((error) => {
          console.error(error);
          alert(`Error : ${error}`);
        });
    }
  };

  console.log("todos", todos);

  return (
    <div>
      <Header type="todo" />
      <div onSubmit={(e) => addTodo(e)}>
        <S.TodoInputBox>
          <S.TodoInput
            type="text"
            value={todoInput}
            data-testid="new-todos-input"
            placeholder="할 일을 입력하세요!"
            onChange={handleTodoInput}
          />
          <S.AddBtn type="submit" data-testid="new-todos-add-button">
            추가
          </S.AddBtn>
        </S.TodoInputBox>
        {isEmpty && <p>내용을 입력하세요</p>}
        <S.TodoLists>
          {todos.length >= 1 &&
            todos.map((todo, index) => (
              <TodoList
                key={todo.id}
                todo={todo}
                index={index}
                setTodos={setTodos}
                todoInput={todoInput}
                handleTodoInput={handleTodoInput}
              />
            ))}
        </S.TodoLists>
      </div>
    </div>
  );
};

export default Todo;
