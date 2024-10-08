import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/ToDoItemsStore";

const ToDoItem = ({ todoDate, todoName, onDelete }) => {

  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div>
      <div className="row new-row">
        <div className="col-6" style={{ backgroundColor: "lightblue", width: "auto" }}>{todoName}</div>
        <div className="col-4" style={{ backgroundColor: "skyblue", width: "auto" }}>{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger new-button"
            onClick={() => deleteItem(todoName)} >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
