import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

const AddToDoItem = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [todoName, settodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (e) => {
  //   settodoName(e.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handelDateChange = (e) => {
  //   setDueDate(e.target.value);
  //   console.log(`no of updates ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (e) => {
    e.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // console.log(`${todoName} dueon: ${dueDate}`);
    addNewItem(todoName, dueDate);
    // settodoName("");
    // setDueDate("");
  };
  return (
    <form
      className="row justify-content-center"
      onSubmit={handleAddButtonClicked}
    >
      <div className="col-md-4">
        <div className="form-group">
          <input
            type="text"
            name="item"
            ref={todoNameElement}
            className="form-control p-3"
          />
          {/* value={todoName}
            onChange={(e) => handleNameChange(e)} */}
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
          <input
            type="date"
            name="date"
            ref={dueDateElement}
            id=""
            className="form-control p-3"
          />
          {/* value={dueDate}
          onChange={(e) => handelDateChange(e)} */}
        </div>
      </div>
      <div className="col-md-4 d-grid gap-2">
        <button
          type="submit"
          value="Add"
          className="d-block btn btn-success fs-3"
        >
          <BiSolidMessageAltAdd />
        </button>
      </div>
    </form>
  );
};

export default AddToDoItem;
