const ToDoItem = ({ todoDate, todoName, onDelete }) => {

  return (
    <div>
      <div class="row new-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger new-button"
            onClick={() => onDelete(todoName)} >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
