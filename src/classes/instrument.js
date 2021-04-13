export default class Instrument {
  constructor() {
    this._name = '';
    this._tuning = [];
    this._fretboard = class {};
    this._currentSettings = {};
  }
  //setters and getters
  get name() {
    if (this._name) return this._name;
    return;
  }
  set name(value) {
    this._name = value;
  }
  get tuning() {
    if (this._tuning) return this._tuning;
    return;
  }
  set tuning(value) {
    this._tuning = value;
  }
  get fretboard() {
    if (this._fretboard) return this._fretboard;
    return;
  }
  set fretboard(value) {
    this._fretboard = value;
  }
  get currentSettings() {
    if (this._currentSettings) return this._currentSettings;
    return;
  }
  set currentSettings(value) {
    this._currentSettings = value;
  }
}
