import Dropdown from './dropdown';
import RadioButtons from './radio-buttons';
import NumberInput from './number-input';
import Checkbox from './checkbox';
import { InstrumentsCtrl } from '../controllers/InstrumentsCtrl';

export default class SettingsBar {
  constructor(
    instrumentSelector,
    accidentalSelector,
    numberOfFretsSelector,
    showAllNotesSelector,
    showMultipleNotesSelector
  ) {
    this.instrument = new Dropdown(
      instrumentSelector,
      InstrumentsCtrl.getInstrumentsNames()
    );
    this.accidental = new RadioButtons(accidentalSelector);
    this.numberOfFrets = new NumberInput(numberOfFretsSelector);
    this.showAllNotes = new Checkbox(showAllNotesSelector);
    this.showMultipleNotes = new Checkbox(showMultipleNotesSelector);
  }

  getSettingsBarElements() {
    return {
      instrument: this.instrument,
      accidental: this.accidental,
      numberOfFrets: this.numberOfFrets,
      showAllNotes: this.showAllNotes,
      showMultipleNotes: this.showMultipleNotes,
    };
  }
}
