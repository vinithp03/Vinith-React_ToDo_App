import ToDoItem from "./ToDoItem"
import styles from "./Items.module.css";

function Items({ toDoItems, onDelete }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {toDoItems.map((item) => (<ToDoItem todoName={item.task} todoDate={item.date} onDelete={onDelete} />))}

      </div>
    </>
  )
}

export default Items