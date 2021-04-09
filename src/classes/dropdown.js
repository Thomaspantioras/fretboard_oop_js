export default class Dropdown {
  constructor(uiSelector, options) {
    this.uiSelector = uiSelector;
    this.options = options;
    this.setupOptions = () => {
      let selectElement = document.querySelector(this.uiSelector);

      const createOptionElement = (content) => {
        const optionElement = document.createElement('option');
        if (content) {
          optionElement.innerHTML = content;
        }
        return optionElement;
      };

      for (let option of this.options) {
        let optionElement = createOptionElement(option);
        selectElement.appendChild(optionElement);
      }
    };

    this.setupOptions();
  }
}
