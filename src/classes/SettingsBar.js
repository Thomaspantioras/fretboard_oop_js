export default class SettingsBar {
  // constructor(
  //   instrumentElement,
  //   accidentalElement,
  //   numberOfFretsElement,
  //   showAllNotesElement,
  //   showMultipleNotesElement
  // ) {
  //   this.instrument = instrumentElement;
  //   this.accidental = accidentalElement;
  //   this.numberOfFrets = numberOfFretsElement;
  //   this.showAllNotes = showAllNotesElement;
  //   this.showMultipleNotes = showMultipleNotesElement;
  // }

  // addEventListeners = ({
  //   dropdownCallback,
  //   radioButtonsCallback,
  //   numberInputCallback,
  //   checkboxACallback,
  //   checkboxBCallback,
  // }) => {
  //   this.instrument.addListener('change', dropdownCallback);
  //   this.accidental.addListener('click', radioButtonsCallback);
  //   this.numberOfFrets.addListener('change', numberInputCallback);
  //   this.showAllNotes.addListener('change', checkboxACallback);
  //   this.showMultipleNotes.addListener('change', checkboxBCallback);
  // };

  // getSettingsBarElements() {
  //   return {
  //     instrument: this.instrument,
  //     accidental: this.accidental,
  //     numberOfFrets: this.numberOfFrets,
  //     showAllNotes: this.showAllNotes,
  //     showMultipleNotes: this.showMultipleNotes,
  //   };
  // }

  constructor() {
    this._instrumentDropdown = class {};
    this._accidentalRadioButtons = class {};
    this._numberOfFretsInput = class {};
    this._showAllNotesCheckbox = class {};
    this._showMultipleNotesCheckbox = class {};
  }
}
