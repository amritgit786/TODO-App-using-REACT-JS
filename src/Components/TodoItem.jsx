import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";

import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { DeleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className="col-md-4 mt-3">
        <p className="lead text-center fw-bold">{todoName}</p>
      </div>
      <div className="col-md-4 mt-3">
        <p className="lead text-center fw-bold">{todoDate}</p>
      </div>
      <div className="col-md-4 d-grid gap-2 mt-3">
        <button
          type="submit"
          className="d-block btn btn-danger fs-3"
          onClick={() => DeleteItem(todoName)}
        >
          <AiFillDelete />
        </button>
      </div>
    </>
  );
};

export default TodoItem;
