import { SettingsBarCtrl } from './SettingsBarCtrl';

const UICtrl = (function () {
  const UISelectors = {
    settingsBar: {
      instrumentSelector: '#instrument-selector',
      accidentalSelector: '.accidental-selector',
      numberOfFretsSelector: '#number-of-frets',
      showAllNotesSelector: '#show-all-notes',
      showMultipleNotesSelector: '#show-multiple-note',
    },
    // fretboard: ".fretboard",
    // noteNameSection: ".note-name-section",
  };

  const settingsBar = () => {
    return SettingsBarCtrl.getElements(UISelectors.settingsBar);
  };

  // const instantiateAndGetMenu = function (settings) {
  //   return SettingsBarCtrl.instantiateAndGetMenu(settings);
  // };

  // //get the settingsBar elements and add event listeners
  // const loadMenuEventListeners = function () {};

  //public methods
  return {
    settingsBar: function () {
      settingsBar(
        UISelectors.settingsBar.instrument,
        UISelectors.settingsBar.accidental,
        UISelectors.settingsBar.numberOfFrets,
        UISelectors.settingsBar.showAllNotes,
        UISelectors.settingsBar.showMultipleNotes
      );
    },
    getSettingsBarSelectors: function () {
      return UISelectors.settingsBar;
    },
    // setupFretboard: function () {
    //   FretboardCtrl.setupFretboard(UISelectors.fretboard);
    // },
  };
})();

export { UICtrl };
