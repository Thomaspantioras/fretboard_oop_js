export default class Instrument {
  // static defaultInstrument = new Instrument("Guitar", 6, 20, "flats");

  // static instrumentTuningPreset = {
  //   Guitar: [4, 11, 7, 2, 9, 4],
  //   "Bass (4 Strings)": [7, 2, 9, 4],
  //   "Bass (5 Strings)": [7, 2, 9, 4, 11],
  //   Ukelele: [7, 4, 0, 7],
  // };

  // static getInstrumentTuningPreset() {
  //   return {
  //     Guitar: [4, 11, 7, 2, 9, 4],
  //     "Bass (4 Strings)": [7, 2, 9, 4],
  //     "Bass (5 Strings)": [7, 2, 9, 4, 11],
  //     Ukelele: [7, 4, 0, 7],
  //   };
  // }

  // static getInstrumentByKeyName(name) {
  //   const obj = Instrument.instrumentTuningPreset;
  //   return Object.keys(obj)
  //     .filter((key) => key === name)
  //     .reduce((res, key) => ((res[key] = obj[key]), res), {});
  // }

  // constructor(name, numberOfStrings, numberOfFrets, accidentals) {
  //   this.name = name;
  //   this.fretboard = new Fretboard(
  //     numberOfStrings,
  //     numberOfFrets,
  //     [4, 11, 7, 2, 9, 4],
  //     accidentals
  //   );
  // }

  constructor(name, tuning, fretboard) {
    this.name = name;
    this.tuning = tuning;
    this.fretboard = fretboard;
  }
}
