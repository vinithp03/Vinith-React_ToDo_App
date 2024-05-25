import AppName from "./components/AppName";
import ToDoAdd from "./components/ToDoAdd";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <ToDoAdd />
      <div class="items">
        <ToDoItem />
        <ToDoItem />
      </div>
    </center>
  );
}

export default App;
