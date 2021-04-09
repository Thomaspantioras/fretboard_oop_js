export default class Element {
  constructor(elementId, className) {
    if (arguments.length > 1) {
      this.elementId = elementId;
      this.className = className;
    } else {
      this.elementId = elementId;
    }
  }

  static getElementById(id) {
    return document.querySelector(`${id}`);
  }
  static getElementByClassName(className) {
    return document.querySelector(`.${className}`);
  }

  static createChildElement(element, content) {
    element = document.createElement(element);
    if (arguments.length > 1) {
      element.innerHTML = content;
    }
    return element;
  }

  getElement() {
    console.log(this.elementId);
    return this.elementId
      ? Element.getElementById(this.elementId)
      : Element.getElementByClassName(this.className);
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
