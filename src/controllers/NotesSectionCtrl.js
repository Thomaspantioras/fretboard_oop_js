import Element from '../classes/html-element';

const NotesSectionCtrl = (function () {
  const setupNoteSection = (notes, uiSelector) => {
    const notesSection = new Element();
    notesSection.uiSelector = uiSelector;
    notesSection.getElementByUiSelector(notesSection.uiSelector).innerHTML = '';

    notes.forEach((note) => {
      let noteNameElement = notesSection.createChildElement('span', note);
      notesSection
        .getElementByUiSelector(notesSection.uiSelector)
        .appendChild(noteNameElement);
    });

    return notesSection;
  };

  const setNameSectionEventListeners = (
    notesSection,
    settingsBarObj,
    fretboardObj
  ) => {
    const setNotesFromNameNoteSection = (event) => {
      const isShownAllNotes = settingsBarObj.currentValues.isShownAllNotes;
      if (!isShownAllNotes) {
        let note = event.target.innerText;
        let opacity = event.type === 'mouseover' ? 1 : 0;
        fretboardObj.toggleMultipleNotes(note, opacity);
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
    setNameSectionEventListeners: (
      notesSection,
      settingsBarObj,
      fretboardObj
    ) => {
      return setNameSectionEventListeners(
        notesSection,
        settingsBarObj,
        fretboardObj
      );
    },
  };
})();

export { NotesSectionCtrl };
