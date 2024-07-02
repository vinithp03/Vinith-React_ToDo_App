import ToDoItem from "./ToDoItem"
import styles from "./Items.module.css";
import { TodoItemsContext } from "../store/ToDoItemsStore";
import { useContext } from "react";

function Items() {
  const { toDoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className={styles.itemsContainer}>
        {toDoItems.map((item) => (<ToDoItem todoName={item.task} todoDate={item.date} />))}
      </div>
    </>
  )
}

export default Items