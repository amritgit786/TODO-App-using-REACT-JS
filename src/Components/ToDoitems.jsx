import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
// import { AiFillDelete } from "react-icons/ai";

const ToDoitems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const { todoItems } = useContext(TodoItemsContext);

  // console.log(todoItemFromcontext);

  return (
    <>
      <div className="row">
        {todoItems.map((item, i) => {
          return (
            <TodoItem key={i} todoName={item.name} todoDate={item.dueDate} />
          );
        })}
      </div>
    </>
  );
};

export default ToDoitems;
