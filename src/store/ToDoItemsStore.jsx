import { createContext, useReducer, useEffect } from "react";

export const TodoItemsContext = createContext({
  toDoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

const toDoReducer = (currentItems, action) => {
  let updatedItems = currentItems;

  if (action.type === "NEW_ITEM") {
    updatedItems = [
      ...currentItems,
      { task: action.payload.itemName, date: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    updatedItems = currentItems.filter(
      (item) => item.task !== action.payload.itemName
    );
  }

  // Persist updated items in localStorage
  localStorage.setItem("toDoItems", JSON.stringify(updatedItems));
  return updatedItems;
};

const TodoItemsContextProvider = ({ children }) => {
  // Retrieve initial state from localStorage
  const initialItems = JSON.parse(localStorage.getItem("toDoItems")) || [];
  const [toDoItems, dispatch] = useReducer(toDoReducer, initialItems);

  const addNewItem = (itemName, dueDate) => {
    dispatch({
      type: "NEW_ITEM",
      payload: { itemName, dueDate },
    });
  };

  const deleteItem = (itemName) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { itemName },
    });
  };

  // Ensure localStorage is updated when `toDoItems` changes
  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  }, [toDoItems]);

  return (
    <TodoItemsContext.Provider value={{ toDoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
