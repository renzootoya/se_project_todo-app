class TodoCounter {
  constructor(todos, selector, handleCheck, handleDelete) {
    this._element = document.querySelector(selector);
    this._completed = 0;
    this._total = todos.length;
    this._completed = todos.filter(todo => todo.completed).length;

    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
    this._updateText();
  }
  
  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
    updateCompleted = (increment) => {
        if (increment) {
            this._completed += 1;
        } else {
            this._completed -= 1;
        }
    // if increment is true, add 1 to this._completed. Otherwise,
    // subtract 1. In either case, call the method to update
    // the text content.
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is   
  // created via the form. 
  updateTotal = (increment) => {
    if (increment) {
        this._total += 1;
    } else {
        this._total -= 1;
    }
    // if increment is true, add 1 to this._total. Otherwise,
    // subtract 1. In either case, call the method to update the
    // text content.
    this._updateText();
  };

  // Call the method to update the text content
  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
    // Sets the text content of corresponding text element.
    // Call this in the constructor, and whenever the counts get updated.
  }
}

export default TodoCounter;