import AppName from "./components/AppName";
import ToDoAdd from "./components/ToDoAdd";
import Items from "./components/Items";
import EmptyMesage from "./components/EmptyMesage";
import TodoItemsContextProvider from "./store/ToDoItemsStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <ToDoAdd />
        <Items />
        <EmptyMesage />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
