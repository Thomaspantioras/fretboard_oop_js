export default class Element2 {
  static getElementById(id) {
    return document.querySelector(`${id}`);
  }
  static getElementByClassName(className) {
    return document.querySelector(`${className}`);
  }

  static createChildElement(element, content) {
    element = document.createElement(element);
    if (arguments.length > 1) {
      element.innerHTML = content;
    }
    return element;
  }

  constructor(elementId, className) {
    if (arguments.length > 1) {
      this._elementId = elementId;
      this._className = className;
    } else {
      this._elementId = elementId;
    }
    // if (arguments.length > 1) {
    //   this.elementId = elementId;
    //   this.className = className;
    // } else {
    //   this.elementId = elementId;
    // }
  }

  get elementId() {
    if (this._elementId) return this._elementId;
    return;
  }
  set elementId(value) {
    this._elementId = value;
  }

  getElement() {
    return this._elementId
      ? Element2.getElementById(this._elementId)
      : Element2.getElementByClassName(this._className);
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
