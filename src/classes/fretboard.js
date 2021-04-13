import Element2 from './html-element2';
export default class Fretboard extends Element2 {
  // static singleFretMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  // static doubleFretMarkPositions = [12, 24];
  // constructor(uiSelector) {
  //   super(uiSelector);
  //   // this.uiSelector = uiSelector;
  //   // We use _ convention to create a backing field to store our name property. Without this every time get or set is called it would cause a stack overflow.
  //   this._numberOfStrings = 6;
  //   this._numberOfFrets = 20;
  //   this._tuningPresets = [4, 11, 7, 2, 9, 4];
  //   this._accidentals = 'flats';
  // }
  // set numberOfStrings(number) {
  //   this._numberOfStrings = number; // validation could be checked here
  // }
  // set numberOfFrets(number) {
  //   this._numberOfFrets = number;
  // }
  // // presets is array
  // set tuningPresets(presets) {
  //   this._tuningPresets = presets;
  // }
  // set accidentals(accidental) {
  //   this._accidentals = accidental;
  // }
  // get numberOfStrings() {
  //   if (this._numberOfStrings) return this._numberOfStrings;
  //   return;
  // }
  // get numberOfFrets() {
  //   if (this._numberOfFrets) return this._numberOfFrets;
  //   return;
  // }
  // get tuningPresets() {
  //   if (this._tuningPresets) return this._tuningPresets;
  //   return;
  // }
  // get accidentals() {
  //   if (this._accidentals) return this._accidentals;
  //   return;
  // }
}
