export default class Element {
  constructor() {
    this._uiSelector = '';
  }

  get uiSelector() {
    if (this._uiSelector) return this._uiSelector;
    return;
  }
  set uiSelector(value) {
    this._uiSelector = value;
  }

  getElementByUiSelector(uiSelector) {
    return uiSelector ? document.querySelector(uiSelector) : null;
  }

  createChildElement(element, content) {
    element = document.createElement(element);
    if (arguments.length > 1) {
      element.innerHTML = content;
    }
    return element;
  }

  getValue(uiSelector) {
    return this.getElementByUiSelector(uiSelector).value;
  }

  addEventListenerOn(uiSelector, typeOfEvent, callFunction) {
    const element = this.getElementByUiSelector(uiSelector);
    element.addEventListener(typeOfEvent, callFunction);
  }
}
