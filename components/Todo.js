export class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
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
  }

  __generateCheckboxEl() {
    const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    todoCheckboxEl.checked = this._data.completed;

    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getview() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");

    todoNameEl.textContent = this._data.name;
    this.__generateCheckboxEl();
    this._setupEventListeners();

    return this._todoElement;
  }
}

export default Todo;
