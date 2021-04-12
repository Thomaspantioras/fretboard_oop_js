import Element from './html-element';

export default class Checkbox extends Element {
  constructor() {
    super();
  }
  //override
  getValue(uiSelector) {
    return this.getElementByUiSelector(uiSelector).checked;
  }
}
