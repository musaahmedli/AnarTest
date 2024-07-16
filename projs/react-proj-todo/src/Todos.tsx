import { TodoItem } from "./TodoItem";
import { ITodoItem, ITodoItemHandler } from "./model";

interface ITodosProps extends ITodoItemHandler {
  list: ITodoItem[];
}

export const Todos = ({ list, deleteTodoItemHandler, editTodoItemHandler } :ITodosProps) => {
  return (
    <ul>
      {list.map((item) => (
        <TodoItem
          deleteTodoItemHandler={deleteTodoItemHandler}
          editTodoItemHandler={editTodoItemHandler}
          key={item.id}
          {...item}
        />
      ))}
    </ul>
  );
};
