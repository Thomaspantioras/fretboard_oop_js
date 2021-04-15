import { InstrumentCtrl } from './InstrumentCtrl';
import { SettingsBarCtrl } from './SettingsBarCtrl';
import { NotesSectionCtrl } from './NotesSectionCtrl';

const UICtrl = (function () {
  const UISelectors = {
    settingsBar: {
      instrumentSelector: '#instrument-selector',
      accidentalSelector: '#accidental-selector',
      numberOfFretsSelector: '#number-of-frets',
      showAllNotesSelector: '#show-all-notes',
      showMultipleNotesSelector: '#show-multiple-notes',
    },
    instrument: {
      fretboardSelector: '#fretboard',
      // string: "string",
    },
    // noteNameSection: ".note-name-section",
  };

  // const addEventListenerCallbacks = {

  // }

  const getSettingBarObject = () =>
    SettingsBarCtrl.getSettingBarObject(UISelectors.settingsBar);

  const getInstrument = (instrumentSettings) => {
    // const instrumentSettings = getSettingBarObject().currentValues;
    // console.log('instrumentSettings: ', instrumentSettings);
    return InstrumentCtrl.createInstrumentObject(
      UISelectors.instrument,
      instrumentSettings
    );
  };

  const setupNoteSection = (notes) => {
    NotesSectionCtrl.setupNoteSection(notes);
  };
  // const instantiateInstrument = () => {
  //   console.log('Hi!!: ', SettingsBarCtrl);
  // };
  // const instantiateAndGetMenu = function (settings) {
  //   return SettingsBarCtrl.instantiateAndGetMenu(settings);
  // };

  // //get the settingsBar elements and add event listeners
  // const loadMenuEventListeners = function () {};

  //public methods
  return {
    // createSettingsBar: function () {
    //   createSettingsBar(
    //     UISelectors.settingsBar.instrument,
    //     UISelectors.settingsBar.accidental,
    //     UISelectors.settingsBar.numberOfFrets,
    //     UISelectors.settingsBar.showAllNotes,
    //     UISelectors.settingsBar.showMultipleNotes
    //   );
    // },
    getSettingBarObject: () => {
      return getSettingBarObject();
    },
    getInstrument: (instrumentSettings) => {
      return getInstrument(instrumentSettings);
    },
    setupNoteSection: (notes) => {
      return setupNoteSection(notes);
    },
    // instantiateInstrument: () => {
    //   instantiateInstrument();
    // },
    // getSettingsBarSelectors: function () {
    //   return UISelectors.settingsBar;
    // },
    // setupFretboard: function () {
    //   FretboardCtrl.setupFretboard(UISelectors.fretboard);
    // },
  };
})();

export { UICtrl };
