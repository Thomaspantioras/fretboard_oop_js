import { SettingsBarCtrl } from './SettingsBarCtrl';
import { FretboardCtrl } from './FretboardCtrl';
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
    fretboardSelector: '#fretboard',
    noteNameSectionSelector: '.note-name-section',
  };

  const instantiateSettingBarObj = () => {
    return SettingsBarCtrl.instantiateSettingBarObj(UISelectors.settingsBar);
  };

  const setSettingsBarEventListeners = (settingsBarObj) => {
    return SettingsBarCtrl.setSettingsBarEventListeners(settingsBarObj);
  };

  const instantiateFretboardObject = (currentValues) => {
    return FretboardCtrl.instantiateFretboardObject(
      UISelectors.fretboardSelector,
      currentValues
    );
  };

  const buildFretboard = (fretboard) => {
    FretboardCtrl.buildFretboard(fretboard);
  };
  const setFretboardEventListeners = (fretboard, settingsBar) => {
    FretboardCtrl.setFretboardEventListeners(fretboard, settingsBar);
  };

  const setupNoteSection = (notes) => {
    return NotesSectionCtrl.setupNoteSection(
      notes,
      UISelectors.noteNameSectionSelector
    );
  };

  const setNameSectionEventListeners = (
    notesSection,
    settingsBarObj,
    fretboardObj
  ) => {
    NotesSectionCtrl.setNameSectionEventListeners(
      notesSection,
      settingsBarObj,
      fretboardObj
    );
  };

  //public methods
  return {
    init: function () {
      const settingsBar = instantiateSettingBarObj();
      const fretboard = instantiateFretboardObject(settingsBar.currentValues);
      buildFretboard(fretboard);
      const notesSection = setupNoteSection(fretboard.notes);
      setSettingsBarEventListeners(settingsBar);
      setFretboardEventListeners(fretboard, settingsBar);
      setNameSectionEventListeners(notesSection, settingsBar, fretboard);
    },
    instantiateFretboardObject: (currentValues) => {
      return instantiateFretboardObject(currentValues);
    },
    buildFretboard: (fretboard) => {
      buildFretboard(fretboard);
    },
    setFretboardEventListeners: (fretboard) => {
      setFretboardEventListeners(fretboard);
    },
    setupNoteSection: (notes) => {
      return setupNoteSection(notes);
    },
  };
})();

export { UICtrl };
