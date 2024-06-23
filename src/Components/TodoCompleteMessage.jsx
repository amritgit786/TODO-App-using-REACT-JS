import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoCompleteMessage = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className="lead fw-bold text-center mt-3 fs-3">Enjoy Your Day</p>
    )
  );
};

export default TodoCompleteMessage;
