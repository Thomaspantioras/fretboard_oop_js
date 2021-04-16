import Element from '../classes/html-element';

const NotesSectionCtrl = (function () {
  const setupNoteSection = (instrument, uiSelector) => {
    const notesSection = new Element();
    notesSection.uiSelector = uiSelector;
    notesSection.getElementByUiSelector(notesSection.uiSelector).innerHTML = '';

    instrument.fretboard.notes.forEach((note) => {
      let noteNameElement = notesSection.createChildElement('span', note);
      notesSection
        .getElementByUiSelector(notesSection.uiSelector)
        .appendChild(noteNameElement);
    });

    setNameSectionEventListeners(notesSection, instrument);
  };

  const setNameSectionEventListeners = (notesSection, instrument) => {
    const setNotesFromNameNoteSection = (event) => {
      // let showAllNotes = UI.showAllNotesSelector.isChecked();
      let isShownAllNotes = instrument.currentSettings.isShownAllNotes;
      if (!isShownAllNotes) {
        let note = event.target.innerText;
        let opacity = event.type === 'mouseover' ? 1 : 0;
        instrument.fretboard.toggleMultipleNotes(note, opacity);
      } else {
        return;
      }
    };

    notesSection.addEventListenerOn(
      notesSection.uiSelector,
      'mouseover',
      setNotesFromNameNoteSection
    );
    notesSection.addEventListenerOn(
      notesSection.uiSelector,
      'mouseout',
      setNotesFromNameNoteSection
    );
  };

  //public methods
  return {
    setupNoteSection: (notes, uiSelector) => {
      return setupNoteSection(notes, uiSelector);
    },
  };
})();

export { NotesSectionCtrl };
