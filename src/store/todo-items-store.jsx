import { createContext, useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  DeleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newtodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newtodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newtodoItems = currTodoItems.filter(
      (itemData) => action.payload.itemName !== itemData.name
    );
  }
  return newtodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  // const initaltodoItems = [
  //   {
  //     name: "Go to gym",
  //     dueDate: "10/4/2024",
  //   },
  //   {
  //     name: "Go to Clg",
  //     dueDate: "10/4/2024",
  //   },
  // ];

  // const [todoItems, setToDoItems] = useState([]);
  const [todoItems, dispatchtodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // console.log(`Data is provide buy ${itemName} ${itemDueDate}`);

    // Using spread operator
    // const newtodoItems = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     dueDate: itemDueDate,
    //   },
    // ];
    // setToDoItems(newtodoItems);

    // Using Functional Updates
    // setToDoItems((prevData) => {
    //   const newtodoItems = [
    //     ...prevData,
    //     {
    //       name: itemName,
    //       dueDate: itemDueDate,
    //     },
    //   ];
    //   return newtodoItems;
    // });

    // Another way to write function Updates
    /*setToDoItems((prevData) => [
      ...prevData,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);*/
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchtodoItems(newItemAction);
  };

  const DeleteItem = (itemName) => {
    // console.log(`Item Deleted ${itemName}`);

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchtodoItems(deleteItemAction);
  };
  // const handleAddButton = () => {
  //   console.log("Add Button clicked");
  // };
  // const defaultTodoItems = [{ name: "Buy Ghee", dueDate: "today" }];
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        DeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
