import { SettingsBarCtrl } from './SettingsBarCtrl';
import UI from '../classes/ui';

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
  const loadUI = (settingsBar, fretboard, notesSection) => {
    console.log('Hello!!');
    const ui = new UI();
    ui.settingsBar = settingsBar;
    // ui.fretboard = fretboard;
    // ui.notesSection = notesSection;
    console.log('UI: ', ui);
  };

  const instantiateSettingBarObj = () => {
    return SettingsBarCtrl.instantiateSettingBarObj(UISelectors.settingsBar);
  };

  const setSettingsBarEventListeners = (settingsBarObj) => {
    return SettingsBarCtrl.setSettingsBarEventListeners(settingsBarObj);
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
      const settingsBar = instantiateSettingBarObj();
      loadUI(settingsBar);
      setSettingsBarEventListeners(settingsBar);

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
