import Element from './html-element';

export default class Dropdown extends Element {
  constructor() {
    super();
    this._options = [];
    // this.setupOptions(this._options);
  }

  get options() {
    if (this._options) return this._options;
    return;
  }
  set options(value) {
    this._options = value;
  }

  setupOptions = (uiSelector) => {
    console.log(super.getElementByUiSelector(uiSelector));
    // let selectElement = Element.getElementByUiSelector();
    // for (let option of this._options) {
    //   let optionElement = Element.createChildElement('option', option);
    //   selectElement.appendChild(optionElement);
    // }
  };
}
