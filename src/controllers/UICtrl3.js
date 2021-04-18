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
    //   fretboardSelector: '#fretboard',

    //   // instrument: {
    //   //   fretboardSelector: '#fretboard',
    //   // },
    //   noteNameSectionSelector: '.note-name-section',
  };

  // const addEventListenerCallbacks = {

  // }

  // Load UI components
  const loadUIComponents = function () {
    console.log('Hello!!');
  };

  const instantiateSettingBarObj = () => {
    return SettingsBarCtrl.instantiateSettingBarObj(UISelectors.settingsBar);
  };

  // const getSettingBarObject = () =>
  //   SettingsBarCtrl.getSettingBarObject(UISelectors.settingsBar);

  // const getInstrument = (instrumentSettings) => {
  //   return InstrumentCtrl.createInstrumentObject(
  //     // UISelectors.instrument,
  //     UISelectors.fretboardSelector,
  //     instrumentSettings
  //   );
  // };

  // const setupNoteSection = (instrument) => {
  //   NotesSectionCtrl.setupNoteSection(
  //     instrument,
  //     UISelectors.noteNameSectionSelector
  //   );
  // };

  //public methods
  return {
    init: function () {
      loadUIComponents();
      instantiateSettingBarObj();
      // const settings = getSettingBarObject();
      // const instrument = getInstrument(settings.currentValues);
      // setupNoteSection(instrument);
    },
    // getSettingBarObject: () => {
    //   return getSettingBarObject();
    // },
    // getInstrument: (instrumentSettings) => {
    //   return getInstrument(instrumentSettings);
    // },
    // setupNoteSection: (instrument) => {
    //   return setupNoteSection(instrument);
    // },
  };
})();

export { UICtrl };
