// import Fretboard from "../components/fretboard.js";
// import { FretCtrl } from "../controllers/FretCtrl.js";
// import { StringCtrl } from "../controllers/StringCtrl.js";

const FretboardCtrl = (function () {
  // const root = document.documentElement;
  // const instantiateFretboard = function (uiSelector) {
  //   const fretboard = new Fretboard(uiSelector);
  //   fretboard.numberOfStrings = 6;
  //   fretboard.numberOfFrets = 15;
  //   fretboard.tuningPresets = [4, 11, 7, 2, 9, 4];
  //   fretboard.accidentals = "flats";
  //   return fretboard;
  // };
  // const setupFretboard = function (fretboard) {
  //   let fretboardElement = document.querySelector(fretboard.uiSelector);
  //   fretboardElement.innerHTML = "";
  //   root.style.setProperty("--number-of-strings", fretboard.numberOfStrings);
  //   for (let i = 0; i < fretboard.numberOfStrings; i++) {
  //     let string = StringCtrl.createStringElement();
  //     fretboardElement.appendChild(string);
  //     for (let fret = 0; fret <= fretboard.numberOfFrets; fret++) {
  //       let noteFret = FretCtrl.createFretElement();
  //       string.appendChild(noteFret);
  //       if (i === 0) FretCtrl.addFretMark(fret, noteFret);
  //       let noteName = FretCtrl.getFretNoteName(
  //         fret + fretboard.tuningPresets[i],
  //         fretboard.accidentals
  //       );
  //       noteFret.setAttribute("data-note", noteName);
  //     }
  //   }
  // };
  // //public methods
  // return {
  //   setupFretboard: function (uiSelector) {
  //     const fretboard = instantiateFretboard(uiSelector);
  //     setupFretboard(fretboard);
  //   },
  // };
})();

export { FretboardCtrl };
