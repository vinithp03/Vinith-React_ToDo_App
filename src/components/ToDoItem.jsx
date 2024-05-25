const ToDoItem = () => {
  let item = "Buy Milk";
  let item2 = "Go to college";
  return (
    <div>
      <div class="row new-row">
        <div class="col-6">{item}</div>
        <div class="col-4">03/02/2024</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger new-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
