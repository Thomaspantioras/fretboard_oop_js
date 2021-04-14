export default class InstrumentString {
  constructor() {
    this._stringClassName = '';
    // this._noteNames = [];
  }
  get stringClassName() {
    if (this._stringClassName) return this._stringClassName;
    return;
  }
  set stringClassName(value) {
    this._stringClassName = value;
  }
  // get _noteNames() {
  //   if (this.__noteNames) return this.__noteNames;
  //   return;
  // }
  // set _noteNames(value) {
  //   this.__noteNames = value;
  // }

  createStringElement() {
    const instrumentString = document.createElement('div');
    instrumentString.classList.add(this._stringClassName);
    return instrumentString;
  }
}
