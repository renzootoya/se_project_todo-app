import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");

const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".todo-counter", handleCheck, handleDelete);


const renderTodo = (itemData) => {
  const todoElement = new Todo(itemData, "#todo-template", handleCheck, handleDelete).getview();
  todosList.append(todoElement);
};

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    const id = uuidv4();
    const newTodo = { ...values, id };
    section.addItem(newTodo);
    renderTodo(newTodo);
    addTodoPopup.close();
  }
});

const section = new Section({
  item: [initialTodos],
  renderer:()=>{
    initialTodos.forEach((item) => {
  renderTodo(item);
   });
  },
  containerSelector: ".todos__list"
});
section.renderItems();



const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

function handleCheck(completed){
  todoCounter.updateCompleted(completed);
}

const handleDelete = (completed) => {
  if (completed) {
    todoCounter.updateTotal(false);
  }
}

function handleEscapeForm(evt) {
  if (evt.key === "Escape") {
    addTodoPopup.close();
  }
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
  document.addEventListener("keyup", handleEscapeForm);
});

addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});

  addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  section.addItem(values);

  renderTodo(values);
  newTodoValidator.resetValidation();
  closeModal(addTodoPopupEl);
});

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();