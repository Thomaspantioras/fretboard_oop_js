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

  // getElement() {
  //   return this._uiSelector ? getElementByUiSelector(this._uiSelector) : null;
  // }
  getValue(uiSelector) {
    console.log(uiSelector);
    console.log(this.getElementByUiSelector(uiSelector));
    console.log(this.getElementByUiSelector(uiSelector).value);

    // return this.getElementByUiSelector(uiSelector).hasAttribute('value')
    //   ? this.getElementByUiSelector(uiSelector).value
    //   : event.target.value; // this does not work for the dropdown
    return this.getElementByUiSelector(uiSelector).value; // this does not work for the dropdown
  }

  // addListener(typeOfEvent, callFunction) {
  //   const element = this.getElement();
  //   element.addEventListener(typeOfEvent, callFunction);
  // }
}
