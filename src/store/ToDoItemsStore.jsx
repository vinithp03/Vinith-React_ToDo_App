import { createContext, useReducer, useEffect } from "react";
import Dexie from "dexie";

// Initialize Dexie.js database
const db = new Dexie("ToDoDatabase");
db.version(1).stores({
  toDoItems: "++id, task, date", // Define schema with auto-incrementing id
});

// Create context
export const TodoItemsContext = createContext({
  toDoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

// Reducer function
const toDoReducer = (currentItems, action) => {
  switch (action.type) {
    case "INITIALIZE_ITEMS":
      return action.payload.items; // Set state with initial items
    case "NEW_ITEM":
      return [...currentItems, action.payload.item]; // Add new item to state
    case "DELETE_ITEM":
      return currentItems.filter(
        (item) => item.task !== action.payload.itemName
      );
    default:
      return currentItems;
  }
};

// Context Provider Component
const TodoItemsContextProvider = ({ children }) => {
  const [toDoItems, dispatch] = useReducer(toDoReducer, []);

  const addNewItem = async (itemName, dueDate) => {
    // Add item to Dexie
    const id = await db.toDoItems.add({ task: itemName, date: dueDate });

    // Fetch the newly added item from Dexie and update state
    const newItem = await db.toDoItems.get(id);
    dispatch({ type: "NEW_ITEM", payload: { item: newItem } });
  };

  const deleteItem = async (itemName) => {
    // Delete item from Dexie
    await db.toDoItems.where("task").equals(itemName).delete();
    // Update state
    dispatch({ type: "DELETE_ITEM", payload: { itemName } });
  };

  // Fetch initial items from Dexie and initialize state
  useEffect(() => {
    const fetchData = async () => {
      const items = await db.toDoItems.toArray();
      dispatch({ type: "INITIALIZE_ITEMS", payload: { items } });
    };
    fetchData();
  }, []);

  return (
    <TodoItemsContext.Provider value={{ toDoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
