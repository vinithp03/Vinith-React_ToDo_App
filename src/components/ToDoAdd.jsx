import React, { useState } from "react";
import styles from "./ToDoAdd.module.css"

const ToDoAdd = ({ onNewItem }) => {

  const [toDoTask, setTask] = useState();
  const [toDoDate, setDate] = useState();

  const handleNewTask = (event) => {
    setTask(event.target.value);
  }

  const handleNewDate = (event) => {
    setDate(event.target.value);
  }

  const addNewItem = () => {
    onNewItem(toDoTask, toDoDate);
    setTask("");
    setDate("");
  }

  return (
    <div className={styles.toDoPlace}>
      <div className="row new-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={toDoTask} onChange={handleNewTask} />
        </div>
        <div className="col-4">
          <input type="date" value={toDoDate} onChange={handleNewDate} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success new-button" onClick={addNewItem}>
            Add
          </button>
        </div>
      </div>
    </div >
  );
};

export default ToDoAdd;
