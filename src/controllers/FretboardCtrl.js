import Fretboard from '../classes/fretboard';
import InstrumentString from '../classes/instrument-string';
import { NoteFretCtrl } from './NoteFretCtrl';
// import { StringCtrl } from "../controllers/StringCtrl.js";

const FretboardCtrl = (function () {
  const noteFlat = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ];
  const noteSharp = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];
  // // const root = document.documentElement;
  // const setCssRootVariable = (name, value) => {
  //   const root = document.documentElement;
  //   root.style.setProperty(name, value);
  // };
  // const getEmptyFretboardHtmlElement = (fretboardUiSelector) => {
  //   const element = document.querySelector(fretboardUiSelector);
  //   element.innerHTML = '';
  //   return element;
  // };
  const createFretboardObject = (
    fretboardSelector,
    chosenAccidental,
    definedNumberOfFrets,
    numberOfStrings,
    isShownAllNotes,
    isShownMultipleNotesNotes,
    instrumentTuning
  ) => {
    const fretboard = new Fretboard();
    fretboard.uiSelector = fretboardSelector;
    fretboard.numberOfStrings = numberOfStrings;
    fretboard.numberOfFrets = Number(definedNumberOfFrets);
    fretboard.notes = chosenAccidental === 'flats' ? noteFlat : noteSharp;
    fretboard.tuning = instrumentTuning;
    console.log('fretboard: ', fretboard);
    return fretboard;
  };

  // const createStringElement = () => {
  //   const stringClassName = 'string';
  //   const stringInstance = new InstrumentString(stringClassName);
  //   return stringInstance.createStringElement();
  // };
  // const setupFretboard = function (fretboardUiSelector) {
  //   const fretboardInstance = createFretboardObject(fretboardUiSelector);
  //   setCssRootVariable(
  //     '--number-of-strings',
  //     fretboardInstance.numberOfStrings
  //   );
  //   const fretboardHtmlElement = getEmptyFretboardHtmlElement(
  //     fretboardUiSelector
  //   );
  //   for (let i = 0; i < fretboardInstance.numberOfStrings; i++) {
  //     let string = createStringElement();
  //     fretboardHtmlElement.appendChild(string);
  //     for (let fret = 0; fret <= fretboardInstance.numberOfFrets; fret++) {
  //       let noteFret = NoteFretCtrl.createFretElement();
  //       string.appendChild(noteFret);
  //       if (i === 0) NoteFretCtrl.addFretMark(fret, noteFret);
  //       let noteName = NoteFretCtrl.getFretNoteName(
  //         fret + fretboardInstance.tuningPresets[i],
  //         fretboardInstance.accidentals
  //       );
  //       noteFret.setAttribute('data-note', noteName);
  //     }
  //   }
  // };
  // // //public methods
  return {
    createFretboardObject: (
      fretboardSelector,
      chosenAccidental,
      definedNumberOfFrets,
      numberOfStrings,
      isShownAllNotes,
      isShownMultipleNotesNotes,
      instrumentTuning
    ) => {
      console.log('instrument.tuning : ', instrumentTuning);
      return createFretboardObject(
        fretboardSelector,
        chosenAccidental,
        definedNumberOfFrets,
        numberOfStrings,
        isShownAllNotes,
        isShownMultipleNotesNotes,
        instrumentTuning
      );
    },
    // setupFretboard: function (uiSelector) {
    //   setupFretboard(uiSelector);
    // },
  };
})();

export { FretboardCtrl };
