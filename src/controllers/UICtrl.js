import { InstrumentCtrl } from './InstrumentCtrl';
import { SettingsBarCtrl } from './SettingsBarCtrl';

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
    },
    // noteNameSection: ".note-name-section",
  };

  // const addEventListenerCallbacks = {

  // }

  const getSettingBarObject = () =>
    SettingsBarCtrl.getSettingBarObject(UISelectors.settingsBar);

  const getInstrument = () => {
    const instrumentSettings = getSettingBarObject().currentValues;
    // console.log('instsumentSettings: ', instrumentSettings);
    console.log('UISelectors: ', UISelectors.instrument);
    return InstrumentCtrl.createInstrumentObject(
      UISelectors.instrument,
      instrumentSettings
    );
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
    getInstrument: () => {
      return getInstrument();
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
