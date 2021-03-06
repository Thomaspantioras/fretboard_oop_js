import Fretboard from '../classes/fretboard';
import InstrumentString from '../classes/instrument-string';
import NoteFret from '../classes/note-fret';

const FretboardCtrl = (function () {
  const instrumentTuningPreset = {
    Guitar: [4, 11, 7, 2, 9, 4],
    'Bass (4 Strings)': [7, 2, 9, 4],
    'Bass (5 Strings)': [7, 2, 9, 4, 11],
    Ukelele: [7, 4, 0, 7],
  };
  const singleMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
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

  const getNoteName = (noteIndex, notes) => {
    noteIndex = noteIndex % 12;
    return notes[noteIndex];
  };

  const instantiateFretboardObject = (
    fretboardSelector,
    settingsCurrentValues
  ) => {
    const {
      selectedInstrument,
      chosenAccidental,
      definedNumberOfFrets,
      isShownAllNotes,
      isShownMultipleNotesNotes,
    } = settingsCurrentValues;
    const instrumentTuning = instrumentTuningPreset[selectedInstrument];
    const numberOfStrings = instrumentTuningPreset[selectedInstrument].length;

    const fretboard = new Fretboard();
    fretboard.uiSelector = fretboardSelector;
    fretboard.numberOfStrings = numberOfStrings;
    fretboard.numberOfFrets = Number(definedNumberOfFrets);
    fretboard.notes = chosenAccidental === 'flats' ? noteFlat : noteSharp;
    fretboard.tuning = instrumentTuning;
    fretboard.isShownAllNotes = isShownAllNotes;
    fretboard.isShownMultipleNotesNotes = isShownMultipleNotesNotes;

    return fretboard;
  };

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
    //TODO does it need its controller?
    const stringInstance = new InstrumentString();
    stringInstance.stringClassName = className;

    return stringInstance.createStringElement();
  };

  const createFretObject = (className) => {
    //TODO does it need its controller?
    const noteFretInstance = new NoteFret();
    noteFretInstance.className = className;
    return noteFretInstance;
  };

  const addFretMark = (fretIndex, noteFretObj, noteFretElement) => {
    if (doubleMarkPositions.indexOf(fretIndex) !== -1)
      noteFretObj.addDoubleMarkOnFret(noteFretElement, 'double-fretmark');

    if (singleMarkPositions.indexOf(fretIndex) !== -1)
      noteFretObj.addSingleMarkOnFret(noteFretElement, 'single-fretmark');
  };

  const buildFretboard = (fretboardObj) => {
    const fretWidth = calculateFretWidths(100, fretboardObj.numberOfFrets);
    setCssRootVariable('--number-of-strings', fretboardObj.numberOfStrings);
    const fretboardHtmlElement = getEmptyFretboardHtmlElement(
      fretboardObj.uiSelector
    );
    for (let i = 0; i < fretboardObj.numberOfStrings; i++) {
      let string = createStringElement(`string`);
      string.style.setProperty('--string-height', `${4 + i}`);
      fretboardHtmlElement.appendChild(string);

      for (let fret = 0; fret <= fretboardObj.numberOfFrets; fret++) {
        const fretObj = createFretObject('note-fret');
        const noteFret = fretObj.createFretTemplate();

        noteFret.style.setProperty(
          '--note-fret-width',
          `${fretWidth[fret - 1]}vw`
        );
        string.appendChild(noteFret);
        if (i === 0) addFretMark(fret, fretObj, noteFret);

        const noteIndex = fret + fretboardObj.tuning[i];
        const noteName = getNoteName(noteIndex, fretboardObj.notes);
        noteFret.setAttribute('data-note', noteName);
      }
    }
  };

  const setFretboardEventListeners = (fretboardObj, settingsBarObj) => {
    const setNoteDot = (event) => {
      const isShownAllNotes = settingsBarObj.currentValues.isShownAllNotes;
      const isShownMultipleNotesNotes =
        settingsBarObj.currentValues.isShownMultipleNotesNotes;
      if (isShownAllNotes) return;
      if (event.target.classList.contains('note-fret')) {
        let opacity = event.type === 'mouseover' ? 1 : 0;
        isShownMultipleNotesNotes
          ? fretboardObj.toggleMultipleNotes(event.target.dataset.note, opacity)
          : event.target.style.setProperty('--noteDotOpacity', opacity);
      }
    };

    fretboardObj.addEventListenerOn(
      fretboardObj.uiSelector,
      'mouseover',
      setNoteDot
    );
    fretboardObj.addEventListenerOn(
      fretboardObj.uiSelector,
      'mouseout',
      setNoteDot
    );
  };

  const calculateFretWidths = (fretboardWidth, numberOfFrets) => {
    const balancedWidth = fretboardWidth / numberOfFrets;
    const percentage = 0.25;
    const factor = percentage * balancedWidth;
    let fretWidths = [];

    for (let j = numberOfFrets; j > 0; j--) {
      if (j == numberOfFrets) fretWidths.unshift(balancedWidth - factor);

      if (j < numberOfFrets)
        fretWidths.unshift(fretWidths[numberOfFrets - j - 1] + factor / j);

      // if (j == 1) {
      //   // fretWidths.unshift(fretWidths[numberOfFrets - j - 1] + 2 * factor);
      //   fretWidths.unshift(fretWidths[numberOfFrets - j - 1] + factor);
      // }
    }
    return fretWidths;
  };

  //public methods
  return {
    getInstrumentsNames: () => {
      return Object.keys(instrumentTuningPreset);
    },
    instantiateFretboardObject: (fretboardSelector, settingsCurrentValues) => {
      return instantiateFretboardObject(
        fretboardSelector,
        settingsCurrentValues
      );
    },
    buildFretboard: (fretboardObj) => {
      buildFretboard(fretboardObj);
    },
    setFretboardEventListeners: (fretboardObj, settingsBarObj) => {
      setFretboardEventListeners(fretboardObj, settingsBarObj);
    },
  };
})();

export { FretboardCtrl };
