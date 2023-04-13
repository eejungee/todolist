import React, { useState } from "react";
import API from "../../../../config/config";
import * as S from "./TodoList.style";

<<<<<<< HEAD
const TodoList = ({ todo, index, setTodos, deleteTodo }) => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [updateInput, setUpdateInput] = useState(todo.todo);
=======
const TodoList = ({ todo, index, setTodos, todoInput, handleTodoInput }) => {
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);
  const [updateInput, setUpdateInput] = useState(todo.todo);
  const [isDeleted, setIsDeleted] = useState(false);
>>>>>>> 8f02702 (ADD: todo 기능 및 디자인)

  const token = localStorage.getItem("token");

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsUpdateClicked((prev) => !prev);
  };

  const handleUpdateInput = (e) => setUpdateInput(e.target.value);

<<<<<<< HEAD
  const updateCheckBox = (id, index, e) => {
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos[index].isCompleted = e.target.checked;
      return updatedTodos;
    });

    fetch(`${API.TODO}/${id}`, {
=======
  // 댓글 삭제
  const deleteTodo = (id) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 204) {
          setIsDeleted(true);
          alert("댓글이 삭제됐어요!");
        } else {
          alert("댓글을 삭제할 수 없어요!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert(`Error : ${error}`);
      });
  };

  // 체크 수정
  const updateCheckBox = (id, index, e) => {
    setTodos((prev) => {
      const updatedTodos = [...prev];
      updatedTodos[index].isCompleted = e.target.checked;
      return updatedTodos;
    });

    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
>>>>>>> 8f02702 (ADD: todo 기능 및 디자인)
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
<<<<<<< HEAD
      .then((res) => {
        if (res.status === 200) {
          alert("완료 상태가 수정됐어요!");
        } else {
          alert("완료 상태를 수정할 수 없어요!");
        }
      })
=======
      .then((res) => res.json())
>>>>>>> 8f02702 (ADD: todo 기능 및 디자인)
      .catch((error) => {
        console.error(error);
        alert(`Error : ${error}`);
      });
    console.log("업데이트됐니?", todo);
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
<<<<<<< HEAD
      {todo && (
=======
      {todo && !isDeleted && (
>>>>>>> 8f02702 (ADD: todo 기능 및 디자인)
        <S.TodoList>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={(e) => updateCheckBox(todo.id, index, e)}
          />
          {isUpdateClicked ? (
            <S.UpdateForm>
              <S.UpdateInput
                type="text"
                value={updateInput}
                data-testid="modify-input"
                onChange={handleUpdateInput}
              />
              <S.BtnBox>
                <S.LeftBtn
                  type="submit"
                  data-testid="submit-button"
                  onClick={(e) => updateTodo(todo.id, updateInput, e)}
                >
                  제출
                </S.LeftBtn>
                <S.RightBtn
                  type="button"
                  data-testid="cancel-button"
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
                  type="button"
                  data-testid="modify-button"
                  onClick={handleUpdate}
                >
                  수정
                </S.LeftBtn>
                <S.RightBtn
                  type="button"
                  data-testid="delete-button"
<<<<<<< HEAD
                  onClick={(e) => deleteTodo(todo.id, e)}
=======
                  onClick={() => deleteTodo(todo.id)}
>>>>>>> 8f02702 (ADD: todo 기능 및 디자인)
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
