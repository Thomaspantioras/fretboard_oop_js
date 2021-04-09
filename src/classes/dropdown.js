import Element from './html-element.js';

export default class Dropdown extends Element {
  constructor(elementId, options) {
    super(elementId);
    this.options = options;
    this.setupOptions = () => {
      let selectElement = Element.getElementById(this.elementId);
      for (let option of options) {
        let optionElement = Element.createChildElement('option', option);
        selectElement.appendChild(optionElement);
      }
    };

    this.setupOptions();
  }
}
