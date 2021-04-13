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
    this._currentValues = {};
  }

  get instrumentDropdown() {
    if (this._instrumentDropdown) return this._instrumentDropdown;
    return;
  }
  set instrumentDropdown(value) {
    this._instrumentDropdown = value;
  }
  get accidentalRadioButtons() {
    if (this._accidentalRadioButtons) return this._accidentalRadioButtons;
    return;
  }
  set accidentalRadioButtons(value) {
    this._accidentalRadioButtons = value;
  }
  get numberOfFretsInput() {
    if (this._numberOfFretsInput) return this._numberOfFretsInput;
    return;
  }
  set numberOfFretsInput(value) {
    this._numberOfFretsInput = value;
  }
  get showAllNotesCheckbox() {
    if (this._showAllNotesCheckbox) return this._showAllNotesCheckbox;
    return;
  }
  set showAllNotesCheckbox(value) {
    this._showAllNotesCheckbox = value;
  }
  get showMultipleNotesCheckbox() {
    if (this._showMultipleNotesCheckbox) return this._showMultipleNotesCheckbox;
    return;
  }
  set showMultipleNotesCheckbox(value) {
    this._showMultipleNotesCheckbox = value;
  }
  get currentValues() {
    if (this._currentValues) return this._currentValues;
    return;
  }
  set currentValues(value) {
    this._currentValues = value;
  }

  getSettingsValues() {
    const settingsValues = {
      selectedInstrument: this._instrumentDropdown.getValue(
        this._instrumentDropdown.uiSelector
      ),
      chosenAccidental: this._accidentalRadioButtons.getValue(
        this._accidentalRadioButtons.uiSelector
      ),
      definedNumberOfFrets: this._numberOfFretsInput.getValue(
        this._numberOfFretsInput.uiSelector
      ),
      isShownAllNotes: this._showAllNotesCheckbox.getValue(
        this._showAllNotesCheckbox.uiSelector
      ),
      isShownMultipleNotesNotes: this._showMultipleNotesCheckbox.getValue(
        this._showMultipleNotesCheckbox.uiSelector
      ),
    };
    return settingsValues;
  }
}
