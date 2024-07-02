import React, { useContext, useRef } from "react";
import styles from "./ToDoAdd.module.css"
import { BsDatabaseFillAdd } from "react-icons/bs";
import { TodoItemsContext } from "../store/ToDoItemsStore";

const ToDoAdd = () => {
  const { toDoItems, addNewItem } = useContext(TodoItemsContext);

  const taskName = useRef("");
  const dueDate = useRef("");

  const handleNewItem = (event) => {
    const toDoTask = taskName.current.value;
    const toDoDate = dueDate.current.value;
    event.preventDefault();
    addNewItem(toDoTask, toDoDate);
    taskName.current.value = "";
    dueDate.current.value = "";
  }


  return (
    <div className={styles.toDoPlace}>
      <form className="row new-row" onSubmit={handleNewItem}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"
            ref={taskName} />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success new-button">
            <BsDatabaseFillAdd />
          </button>
        </div>
      </form>
    </div >
  );
};

export default ToDoAdd;
