import Element from './html-element';
export default class Fretboard extends Element {
  // static singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  // static doubleFretMarkPositions = [12, 24];
  constructor() {
    super();
    this.singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
    this.doubleFretMarkPositions = [12, 24];
    // We use _ convention to create a backing field to store our name property. Without this every time get or set is called it would cause a stack overflow.
    this._numberOfStrings = '';
    this._numberOfFrets = '';
    this._tuning = [];
    this._notes = [];
    // this._accidentals = '';
  }
  get numberOfStrings() {
    if (this._numberOfStrings) return this._numberOfStrings;
    return;
  }
  set numberOfStrings(number) {
    this._numberOfStrings = number; // validation could be checked here
  }
  get numberOfFrets() {
    if (this._numberOfFrets) return this._numberOfFrets;
    return;
  }
  set numberOfFrets(number) {
    this._numberOfFrets = number;
  }
  get tuning() {
    if (this._tuning) return this._tuning;
    return;
  }
  set tuning(presets) {
    this._tuning = presets;
  }
  get notes() {
    if (this._notes) return this._notes;
    return;
  }
  set notes(notes) {
    this._notes = notes;
  }
  // get accidentals() {
  //   if (this._accidentals) return this._accidentals;
  //   return;
  // }
  // set accidentals(accidental) {
  //   this._accidentals = accidental;
  // }
}
