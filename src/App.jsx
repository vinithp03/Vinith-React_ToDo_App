import AppName from "./components/AppName";
import ToDoAdd from "./components/ToDoAdd";
import Items from "./components/Items";
import EmptyMesage from "./components/EmptyMesage";
import { useState } from "react";
import "./App.css";

function App() {

  const [toItems, setItems] = useState([]);

  const handleNewItem = (itemName, dueDate) => {
    const initialItem = [...toItems, { task: itemName, date: dueDate }];
    setItems(initialItem);
  }

  const handleDeleteItem = (itemName) => {
    const afterDelete = toItems.filter(item => item.task !== itemName);
    setItems(afterDelete);
  }

  return (
    <center className="todo-container">
      <AppName />
      <ToDoAdd onNewItem={handleNewItem} />
      <Items toDoItems={toItems} onDelete={handleDeleteItem} />
      {toItems.length === 0 && <EmptyMesage />}
    </center>
  );
}

export default App;
