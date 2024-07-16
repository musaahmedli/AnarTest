export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}
export interface ITodoItemHandler {
  deleteTodoItemHandler: (id: number) => void;
  editTodoItemHandler(data: ITodoItem): void;
}
