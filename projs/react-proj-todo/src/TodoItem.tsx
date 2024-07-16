import React, { useState } from "react";
import { ITodoItem, ITodoItemHandler } from "./model";

export interface ITodoItemProps extends ITodoItem,ITodoItemHandler {
 
}
export const TodoItem: React.FC<ITodoItemProps> = ({
  id,
  text,
  completed,
  deleteTodoItemHandler,
  editTodoItemHandler,
}) => {
  const [isEdited, setEdit] = useState(false);
  const [itemTxt, setItemTxt] = useState(text);

  const editHandler = () => {
    editTodoItemHandler({ id, completed, text: itemTxt });
    setEdit(!isEdited);
  };

  const toggleHandler = () => {
    editTodoItemHandler({ id, completed: !completed, text });
  };
  return (
    <li className={completed ? "done" : ""}>
      {!isEdited && <span onClick={toggleHandler}>{text}</span>}
      {isEdited && (
        <input
          onChange={(e) => {
            setItemTxt(e.target.value);
          }}
          type="text"
          value={itemTxt}
        />
      )}
      {!isEdited && (
        <button onClick={() => deleteTodoItemHandler(id)}>Delete</button>
      )}
      <button onClick={editHandler}>{isEdited ? "save" : "edit"}</button>
    </li>
  );
};
