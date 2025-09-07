import Popup from "./Popup.js";
class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super({popupSelector});
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
       this._inputList = this._popupElement.querySelectorAll(".popup__input");
       const values = {};
       this._inputList.forEach((input) => {
           values[input.name] = input.value;
       });
       return values;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const formData = this._getInputValues();
            this._handleFormSubmit(formData);
        });
    }

}

export default PopupWithForm;