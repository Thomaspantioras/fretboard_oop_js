export default class InstrumentString {
  constructor(className) {
    this.stringClassName = className;
    this.noteNames = [];
  }
  createStringElement() {
    const instrumentString = document.createElement('div');
    instrumentString.classList.add(this.stringClassName);
    return instrumentString;
  }
}
