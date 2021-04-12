import Element from './html-element';

export default class RadioButtons extends Element {
  constructor() {
    super();
  }

  /*override*/
  getValue() {
    return document.querySelector('input[name="accidentals"]:checked').value; // this does not work for the dropdown
  }
}
