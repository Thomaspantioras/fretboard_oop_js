import { SettingsBarCtrl } from './SettingsBarCtrl';
import UI from '../classes/ui';
import { FretboardCtrl } from './FretboardCtrl';

const UICtrl = (function () {
  const UISelectors = {
    settingsBar: {
      instrumentSelector: '#instrument-selector',
      accidentalSelector: '#accidental-selector',
      numberOfFretsSelector: '#number-of-frets',
      showAllNotesSelector: '#show-all-notes',
      showMultipleNotesSelector: '#show-multiple-notes',
    },
    fretboardSelector: '#fretboard',

    //   // instrument: {
    //   //   fretboardSelector: '#fretboard',
    //   // },
    //   noteNameSectionSelector: '.note-name-section',
  };

  // const addEventListenerCallbacks = {

  // }

  // Load UI components
  const loadUI = (settingsBar, fretboard, notesSection) => {
    // console.log('Hello!!');
    const ui = new UI();
    ui.settingsBar = settingsBar;
    ui.fretboard = fretboard;
    ui.notesSection = notesSection;
    console.log('UI: ', ui);
    return ui;
  };

  const instantiateSettingBarObj = () => {
    return SettingsBarCtrl.instantiateSettingBarObj(UISelectors.settingsBar);
  };

  const setSettingsBarEventListeners = (settingsBarObj) => {
    return SettingsBarCtrl.setSettingsBarEventListeners(settingsBarObj);
  };

  // const getSettingBarObject = () =>
  //   SettingsBarCtrl.getSettingBarObject(UISelectors.settingsBar);

  const instantiateFretboardObject = (currentValues) => {
    return FretboardCtrl.instantiateFretboardObject(
      UISelectors.fretboardSelector,
      currentValues
    );
  };

  const buildFretboard = (fretboard) => {
    FretboardCtrl.buildFretboard(fretboard);
  };
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
      const fretboard = instantiateFretboardObject(settingsBar.currentValues);
      buildFretboard(fretboard);
      // loadUI(settingsBar, fretboard, 'blb');
      setSettingsBarEventListeners(settingsBar);

      // const settings = getSettingBarObject();
      // const instrument = getInstrument(settings.currentValues);
      // setupNoteSection(instrument);
    },
    instantiateFretboardObject: (currentValues) => {
      return instantiateFretboardObject(currentValues);
    },
    buildFretboard: (fretboard) => {
      buildFretboard(fretboard);
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
