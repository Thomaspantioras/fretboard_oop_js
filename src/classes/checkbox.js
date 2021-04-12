import Element from './html-element';

export default class Checkbox extends Element {
  constructor() {
    super();
  }

  isChecked() {
    return this.getElement().checked;
  }
}
