import Element from './html-element.js';

export default class Checkbox extends Element {
  constructor(elementId, className) {
    super(elementId, className);
  }

  isChecked() {
    return this.getElement().checked;
  }
}
