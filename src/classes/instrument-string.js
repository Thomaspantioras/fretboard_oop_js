export default class InstrumentString {
  constructor() {
    this._stringClassName = '';
  }
  get stringClassName() {
    if (this._stringClassName) return this._stringClassName;
    return;
  }
  set stringClassName(value) {
    this._stringClassName = value;
  }
  createStringElement() {
    const instrumentString = document.createElement('div');
    instrumentString.classList.add(this._stringClassName);
    return instrumentString;
  }
}
