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
  };

  //public methods
  return {
    setupNoteSection: (notes, uiSelector) => {
      return setupNoteSection(notes, uiSelector);
    },
  };
})();

export { NotesSectionCtrl };
