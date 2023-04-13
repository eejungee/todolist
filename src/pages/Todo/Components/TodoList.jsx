import React, { useState } from "react";
import API from "../../../config/config";
import * as S from "./TodoList.style";

const TodoList = ({ todo, index, setTodos, deleteTodo }) => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [updateInput, setUpdateInput] = useState(todo.todo);

  const token = localStorage.getItem("token");

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsUpdateClicked((prev) => !prev);
    setUpdateInput(todo.todo);
  };

  const handleUpdateInput = (e) => setUpdateInput(e.target.value);

  const updateCheckBox = (id, index, e) => {
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos[index].isCompleted = e.target.checked;
      return updatedTodos;
    });

    fetch(`${API.TODO}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: todo.todo,
        isCompleted: e.target.checked,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("완료 상태가 수정됐어요!");
        } else {
          alert("완료 상태를 수정할 수 없어요!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert(`Error : ${error}`);
      });
  };

  const updateTodo = (id, index, updateInput, e) => {
    e.preventDefault();
    setIsUpdateClicked((prev) => !prev);

    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos[index].todo = updateInput;
      return updatedTodos;
    });

    fetch(`${API.TODO}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: updateInput,
        isCompleted: todo.isCompleted,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("댓글이 수정됐어요!");
        } else {
          alert("댓글을 수정할 수 없어요!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert(`Error : ${error}`);
      });
  };

  return (
    <>
      {todo && (
        <S.TodoList>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => updateCheckBox(todo.id, index, e)}
          />
          {isUpdateClicked ? (
            <S.UpdateForm>
              <S.UpdateInput
                data-testid="modify-input"
                type="text"
                value={updateInput}
                onChange={handleUpdateInput}
              />
              <S.BtnBox>
                <S.LeftBtn
                  data-testid="submit-button"
                  type="submit"
                  onClick={(e) => updateTodo(todo.id, updateInput, e)}
                >
                  제출
                </S.LeftBtn>
                <S.RightBtn
                  data-testid="cancel-button"
                  type="button"
                  onClick={handleUpdate}
                >
                  취소
                </S.RightBtn>
              </S.BtnBox>
            </S.UpdateForm>
          ) : (
            <S.ListItem>
              <S.ListInput>{updateInput}</S.ListInput>
              <S.BtnBox>
                <S.LeftBtn
                  data-testid="modify-button"
                  type="button"
                  onClick={handleUpdate}
                >
                  수정
                </S.LeftBtn>
                <S.RightBtn
                  data-testid="delete-button"
                  type="button"
                  onClick={(e) => deleteTodo(todo.id, e)}
                >
                  삭제
                </S.RightBtn>
              </S.BtnBox>
            </S.ListItem>
          )}
        </S.TodoList>
      )}
    </>
  );
};

export default TodoList;
