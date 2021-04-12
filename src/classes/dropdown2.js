import Element2 from './html-element2.js';

export default class Dropdown2 extends Element2 {
  constructor(elementId, options) {
    super(elementId);
    this._options = options;
    this.setupOptions = () => {
      let selectElement = Element2.getElementById(this.elementId);
      for (let option of this._options) {
        let optionElement = Element2.createChildElement('option', option);
        selectElement.appendChild(optionElement);
      }
    };

    // this.setupOptions();
  }

  get options() {
    if (this._options) return this._options;
    return;
  }
  set options(value) {
    this._options = value;
  }
}
