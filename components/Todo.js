export class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setupEventListeners() {
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");

    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      console.log(this._data.completed);
    });

    todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });
    this._handleCheck(this._data.completed);
    this._handleDelete(this._data.completed);
  }

  __generateCheckboxEl() {
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    todoCheckboxEl.checked = this._data.completed;

    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _formatDate(dateValue) {
    
    if (!dateValue || isNaN(new Date(dateValue))) {
      return "No date set";
    }
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateValue).toLocaleDateString('en-US', options); 
  }

  getview() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDateEl = this._todoElement.querySelector(".todo__date"); 
    
    todoNameEl.textContent = this._data.name;

    
    todoDateEl.textContent = this._formatDate(this._data.date);

    this.__generateCheckboxEl();
    this._setupEventListeners();

    return this._todoElement;
  }
}

export default Todo;

