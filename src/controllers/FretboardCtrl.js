import Fretboard from '../classes/fretboard';
import InstrumentString from '../classes/instrument-string';
import { NoteFretCtrl } from './NoteFretCtrl';
// import { StringCtrl } from "../controllers/StringCtrl.js";

const FretboardCtrl = (function () {
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
  const instantiateFretboard = (fretboardUiSelector) => {
    return new Fretboard(fretboardUiSelector);
  };

  const createStringElement = () => {
    const stringClassName = 'string';
    const stringInstance = new InstrumentString(stringClassName);
    return stringInstance.createStringElement();
  };

  const setupFretboard = function (fretboardUiSelector) {
    const fretboardInstance = instantiateFretboard(fretboardUiSelector);
    setCssRootVariable(
      '--number-of-strings',
      fretboardInstance.numberOfStrings
    );
    const fretboardHtmlElement = getEmptyFretboardHtmlElement(
      fretboardUiSelector
    );
    for (let i = 0; i < fretboardInstance.numberOfStrings; i++) {
      let string = createStringElement();
      fretboardHtmlElement.appendChild(string);
      for (let fret = 0; fret <= fretboardInstance.numberOfFrets; fret++) {
        let noteFret = NoteFretCtrl.createFretElement();
        string.appendChild(noteFret);
        if (i === 0) NoteFretCtrl.addFretMark(fret, noteFret);
        let noteName = NoteFretCtrl.getFretNoteName(
          fret + fretboardInstance.tuningPresets[i],
          fretboardInstance.accidentals
        );
        noteFret.setAttribute('data-note', noteName);
      }
    }
  };
  // //public methods
  return {
    //   setupFretboard: function (uiSelector) {
    //     const fretboard = instantiateFretboard(uiSelector);
    //     setupFretboard(fretboard);
    //   },
    setupFretboard: function (uiSelector) {
      setupFretboard(uiSelector);
    },
  };
})();

export { FretboardCtrl };
