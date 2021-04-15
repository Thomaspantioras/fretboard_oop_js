import Element from '../classes/html-element';

const NotesSectionCtrl = (function () {
  const setupNoteSection = (notes) => {
    const notesSection = new Element();
    notesSection.uiSelector = '.note-name-section';
    console.log(notesSection.getElementByUiSelector(notesSection.uiSelector));
    notesSection.getElementByUiSelector(notesSection.uiSelector).innerHTML = '';
    // notesSection.getElement().innerHTML = '';

    notes.forEach((note) => {
      let noteNameElement = notesSection.createChildElement('span', note);
      notesSection
        .getElementByUiSelector(notesSection.uiSelector)
        .appendChild(noteNameElement);
    });
  };

  //public methods
  return {
    setupNoteSection: (notes) => {
      return setupNoteSection(notes);
    },
  };
})();

export { NotesSectionCtrl };
