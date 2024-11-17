import React, { useContext, useRef, useState } from "react";
import styles from "./ToDoAdd.module.css";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { TodoItemsContext } from "../store/ToDoItemsStore";

const ToDoAdd = () => {
  const { addNewItem } = useContext(TodoItemsContext);

  const taskName = useRef("");
  const [scheduleType, setScheduleType] = useState("Time");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [DateDate, setDateDate] = useState("");

  const handleNewItem = (event) => {
    event.preventDefault();

    const toDoTask = taskName.current.value;
    let toDoDate = "";

    if (scheduleType === "Time") {
      toDoDate = `${timeFrom} to ${timeTo}`;
    } else if (scheduleType === "Date") {
      toDoDate = DateDate;
    }

    addNewItem(toDoTask, toDoDate);
    taskName.current.value = "";
    setTimeFrom("");
    setTimeTo("");
    setDateDate("");
  };

  const handleScheduleTypeChange = (event) => {
    setScheduleType(event.target.value);
    setTimeFrom("");
    setTimeTo("");
    setDateDate("");
  };

  return (
    <div className={styles.toDoPlace}>
      <form className="row new-row" onSubmit={handleNewItem}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={taskName}
            required
          />
        </div>

        <div className="col-4">
          <select
            value={scheduleType}
            onChange={handleScheduleTypeChange}
            className={`form-select ${styles.selectType}`}>
            <option value="Time">Time</option>
            <option value="Date">Date</option>
          </select>

          {scheduleType === "Time" ? (
            <div className="mt-2">
              <label>
                From:
                <input
                  type="time"
                  value={timeFrom}
                  onChange={(e) => setTimeFrom(e.target.value)}
                  className="form-control"
                  required
                />
              </label>
              <label className="mt-2">
                To:
                <input
                  type="time"
                  value={timeTo}
                  onChange={(e) => setTimeTo(e.target.value)}
                  className="form-control"
                  required
                />
              </label>
            </div>
          ) : (
            <input
              type="date"
              value={DateDate}
              onChange={(e) => setDateDate(e.target.value)}
              className="form-control mt-2"
              required
            />
          )}
        </div>

        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success new-button ${styles.toDoBtn}`}
          >
            <BsDatabaseFillAdd size={25} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ToDoAdd;
