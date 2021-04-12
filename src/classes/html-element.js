export default class Element {
  // static getElementByUiSelector(selector) {
  //   return document.querySelector(`${selector}`);
  // }

  static createChildElement(element, content) {
    element = document.createElement(element);
    if (arguments.length > 1) {
      element.innerHTML = content;
    }
    return element;
  }

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

  static getElementByUiSelector(uiSelector) {
    console.log('hi898 ', uiSelector);
    // console.log('hi: ', document.querySelector(this._uiSelector));
    // return document.querySelector(this._uiSelector);
  }

  getElement() {
    return this._uiSelector ? getElementByUiSelector(this._uiSelector) : null;
  }
  getValue() {
    return this.getElement().hasAttribute('value')
      ? this.getElement().value
      : event.target.value; // this does not work for the dropdown
  }

  addListener(typeOfEvent, callFunction) {
    const element = this.getElement();
    element.addEventListener(typeOfEvent, callFunction);
  }
}
