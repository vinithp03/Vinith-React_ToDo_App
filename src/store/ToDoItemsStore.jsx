import { createContext, useReducer } from 'react'
export const TodoItemsContext = createContext(
  {
    toDoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
  }
);

const toDoReducer = (currentItems, action) => {

  let updateItem = currentItems;
  if (action.type === "NEW_ITEM") {
    updateItem = [...currentItems, { task: action.payload.itemName, date: action.payload.dueDate }];

  }
  else if (action.type === "DELETE_ITEM") {
    updateItem = currentItems.filter(item => item.task !== action.payload.itemName);
  }
  return updateItem;
}

const TodoItemsContextProvider = ({ children }) => {
  const [toDoItems, dispatch] = useReducer(toDoReducer, []);

  const addNewItem = (itemName, dueDate) => {
    const setNewItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        dueDate,
      }
    };
    dispatch(setNewItem);

  }

  const deleteItem = (itemName) => {
    const deleteItemRequest = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      }
    };
    dispatch(deleteItemRequest);
  }

  return (
    <TodoItemsContext.Provider
      value={
        {
          toDoItems,
          addNewItem,
          deleteItem
        }
      }
    >
      {children}
    </TodoItemsContext.Provider>
  );

}

export default TodoItemsContextProvider;

