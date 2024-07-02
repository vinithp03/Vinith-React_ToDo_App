import AppName from "./components/AppName";
import ToDoAdd from "./components/ToDoAdd";
import Items from "./components/Items";
import EmptyMesage from "./components/EmptyMesage";
import { useState } from "react";
import "./App.css";
import { TodoItemsContext } from "./store/ToDoItemsStore";

function App() {

  const [toDoItems, setItems] = useState([]);

  const addNewItem = (itemName, dueDate) => {
    setItems((currentValue) =>
      [...currentValue, { task: itemName, date: dueDate }]
    );
  }

  const deleteItem = (itemName) => {

    const afterDelete = toDoItems.filter(item => item.task !== itemName);
    setItems(afterDelete);
  }

  return (
    <TodoItemsContext.Provider value={
      {
        toDoItems,
        addNewItem,
        deleteItem
      }}
    >
      <center className="todo-container">
        <AppName />
        <ToDoAdd />
        <Items />
        <EmptyMesage />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
