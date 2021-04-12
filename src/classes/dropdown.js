import Element from './html-element';

export default class Dropdown extends Element {
  constructor() {
    super();
    this._options = [];
  }

  get options() {
    if (this._options) return this._options;
    return;
  }
  set options(value) {
    this._options = value;
  }

  setupOptions = () => {
    let selectElement = this.getElementByUiSelector(this.uiSelector);
    for (let option of this._options) {
      let optionElement = this.createChildElement('option', option);
      selectElement.appendChild(optionElement);
    }
  };
}
