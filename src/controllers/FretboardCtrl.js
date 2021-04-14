import Fretboard from '../classes/fretboard';
import InstrumentString from '../classes/instrument-string';
import NoteFret from '../classes/note-fret';
// import { NoteFretCtrl } from './NoteFretCtrl';
// import { StringCtrl } from "../controllers/StringCtrl.js";

const FretboardCtrl = (function () {
  // const noteFretClassName = 'note-fret'; // does this member belong in NoteFret class?
  // const singleMarkClassName = 'single-fretmark'; // does this member belong in NoteFret class?
  const singleMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  // const doubleMarkClassName = 'double-fretmark'; // does this member belong in NoteFret class?
  const doubleMarkPositions = [12, 24];
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

  // const root = document.documentElement;
  const setCssRootVariable = (name, value) => {
    const root = document.documentElement;
    root.style.setProperty(name, value);
  };
  const getEmptyFretboardHtmlElement = (fretboardUiSelector) => {
    const element = document.querySelector(fretboardUiSelector);
    element.innerHTML = '';
    return element;
  };

  const createStringElement = (className) => {
    const stringInstance = new InstrumentString();
    stringInstance.stringClassName = className;

    return stringInstance.createStringElement();
  };

  const createFretObject = (className) => {
    const noteFretInstance = new NoteFret();
    noteFretInstance.className = className;
    return noteFretInstance;
  };
  // const createFretElement = (className) => {
  //   const noteFretInstance = new NoteFret();
  //   noteFretInstance.className = className;
  //   return noteFretInstance.createFretTemplate();
  // };

  const addFretMark = (fretIndex, noteFretObj, noteFretElement) => {
    if (doubleMarkPositions.indexOf(fretIndex) !== -1)
      noteFretObj.addDoubleMarkOnFret(noteFretElement, 'double-fretmark');

    if (singleMarkPositions.indexOf(fretIndex) !== -1) {
      console.log(fretIndex, noteFretObj, noteFretElement);
      return noteFretObj.addSingleMarkOnFret(
        noteFretElement,
        'single-fretmark'
      );
    }
  };

  const buildFretboard = function (
    fretboardUiSelector,
    numberOfStrings,
    numberOfFrets
  ) {
    setCssRootVariable('--number-of-strings', numberOfStrings);
    const fretboardHtmlElement = getEmptyFretboardHtmlElement(
      fretboardUiSelector
    );
    for (let i = 0; i < numberOfStrings; i++) {
      let string = createStringElement(`string${i}`);
      fretboardHtmlElement.appendChild(string);
      for (let fret = 0; fret <= numberOfFrets; fret++) {
        // let noteFret = createFretElement('note-fret');
        let fretObj = createFretObject('note-fret');
        let noteFret = fretObj.createFretTemplate();
        noteFret.style.setProperty('--note-fret-width', `${70 - fret * 2.5}px`);
        string.appendChild(noteFret);
        if (i === 0) addFretMark(fret, fretObj, noteFret);

        // let noteFret = NoteFretCtrl.createFretElement();
        //       string.appendChild(noteFret);
        //       if (i === 0) NoteFretCtrl.addFretMark(fret, noteFret);
        //       let noteName = NoteFretCtrl.getFretNoteName(
        //         fret + fretboardInstance.tuningPresets[i],
        //         fretboardInstance.accidentals
        //       );
        //       noteFret.setAttribute('data-note', noteName);
      }
    }
  };
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
    buildFretboard: function (uiSelector, numberOfStrings, numberOfFrets) {
      buildFretboard(uiSelector, numberOfStrings, numberOfFrets);
    },
  };
})();

export { FretboardCtrl };
