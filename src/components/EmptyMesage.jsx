import { useContext } from 'react';
import styles from './EmptyMesage.module.css';
import { TodoItemsContext } from '../store/ToDoItemsStore';

const EmptyMesage = () => {

  const { toDoItems } = useContext(TodoItemsContext); {/*use context (common shared storage) */ }

  return (
    toDoItems.length === 0 && <h2 className={styles.empty}>Enjoy your day</h2>
  )
}

export default EmptyMesage