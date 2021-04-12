import Element2 from './html-element2.js';

export default class Checkbox2 extends Element2 {
  constructor(elementId, className) {
    super(elementId, className);
  }

  isChecked() {
    return this.getElement().checked;
  }
}
