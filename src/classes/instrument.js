export default class Instrument {
  constructor() {
    this._name = '';
    this._tuning = [];
    this._fretboard = class {};
  }
  //setters and getters
  get name() {
    if (this._name) return this._name;
    return;
  }
  set name(value) {
    this._name = value;
  }
  get tunning() {
    if (this._tunning) return this._tunning;
    return;
  }
  set tunning(value) {
    this._tunning = value;
  }
  get fretboard() {
    if (this._fretboard) return this._fretboard;
    return;
  }
  set fretboard(value) {
    this._fretboard = value;
  }
}
