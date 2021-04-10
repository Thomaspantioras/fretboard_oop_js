export default class Fretboard {
  constructor(uiSelector) {
    this.uiSelector = uiSelector;
    // We use _ convention to create a backing field to store our name property. Without this every time get or set is called it would cause a stack overflow.
    this._numberOfStrings = "";
    this._numberOfFrets = "";
    this._tuningPresets = [];
    this._accidentals = "";
  }
  set numberOfStrings(number) {
    this._numberOfStrings = number; // validation could be checked here
  }
  set numberOfFrets(number) {
    this._numberOfFrets = number;
  }
  // presets is array
  set tuningPresets(presets) {
    this._tuningPresets = presets;
  }

  set accidentals(accidental) {
    this._accidentals = accidental;
  }

  get numberOfStrings() {
    if (this._numberOfStrings) return this._numberOfStrings;
    return;
  }

  get numberOfFrets() {
    if (this._numberOfFrets) return this._numberOfFrets;
    return;
  }

  get tuningPresets() {
    if (this._tuningPresets) return this._tuningPresets;
    return;
  }

  get accidentals() {
    if (this._accidentals) return this._accidentals;
    return;
  }
}
