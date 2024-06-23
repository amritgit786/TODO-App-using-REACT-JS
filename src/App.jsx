import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddToDoItem from "./Components/AddToDoItem";
import ToDoitems from "./Components/ToDoitems";
// import { useReducer, useState } from "react";
import TodoCompleteMessage from "./Components/TodoCompleteMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <div className="todo-container">
          <div className="container mt-5">
            <AppName />
            <AddToDoItem />
            <TodoCompleteMessage />

            <ToDoitems />
          </div>
        </div>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
