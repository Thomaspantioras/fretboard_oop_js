import SettingsBar from '../classes/settingsBar';
import Dropdown from '../classes/dropdown';
import RadioButtons from '../classes/radio-buttons';
import NumberInput from '../classes/number-input';
import Checkbox from '../classes/checkbox';
import { InstrumentCtrl } from './InstrumentCtrl';

const SettingsBarCtrl = (function () {
  const getUiSelectors = ({
    instrumentSelector,
    accidentalSelector,
    numberOfFretsSelector,
    showAllNotesSelector,
    showMultipleNotesSelector,
  }) => {
    console.log({
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector,
    });
    return {
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector,
    };
  };

  const getCurrentDropdownValue = (dropdownUiSelector) => {
    return document.getElementById(dropdownUiSelector).value;
  };

  const init = () => {
    const instrumentName = getCurrentDropdownValue();

    const instrumentNumberOfStrings = getNumberOfStrings();
    const accidental = getCurrentAccidentalValue();
    const instrumentNumberOfFrets = getCurrentNumberOfFrets();
    const isShownAllNotes = getCurrentShowAllNotesValue();
    const isShownMultipleNotes = getCurrentShowMultipleNotesValue();

    const instrument = new Instrument(instrumentName);
  };

  //=========================
  const getElements = (selectors) => {
    const {
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector,
    } = selectors;

    const instrumentElement = new Dropdown(
      instrumentSelector,
      InstrumentCtrl.getInstrumentsNames()
    );
    const accidentalElement = new RadioButtons(accidentalSelector);
    const numberOfFretsElement = new NumberInput(numberOfFretsSelector);
    const showAllNotesElement = new Checkbox(showAllNotesSelector);
    const showMultipleNotesElement = new Checkbox(showMultipleNotesSelector);

    const settingsBar = new SettingsBar(
      instrumentElement,
      accidentalElement,
      numberOfFretsElement,
      showAllNotesElement,
      showMultipleNotesElement
    );

    settingsBar.addEventListeners({
      dropdownCallback: (event) => {
        let selectedInstrument = event.target.value;
        let numberOfStrings = InstrumentCtrl.getNumberOfStrings(
          selectedInstrument
        );
        console.log(numberOfStrings);
        // this.instrument.fretboard.setNumberOfStrings(numberOfStrings);
        // this.instrument.fretboard.setupFretboard();
      },
      radioButtonsCallback: (event) => {
        console.log(event.target.value);
        // let accidentals;
        // if (event.target.classList.contains("acc-select")) {
        //   accidentals = UI.accidentalSelector.getValue();
        //   this.instrument.fretboard.setAccidentals(accidentals);
        //   this.instrument.fretboard.setupFretboard();
        //   this.instrument.fretboard.setupNoteNameSection();
        // } else {
        //   return;
        // }
      },
      numberInputCallback: (event) => {
        console.log(event.target.value);
        // this.instrument.fretboard.setNumberOfFrets(event.target.value);
        // this.instrument.fretboard.setupFretboard();
      },
      checkboxACallback: (event) => {
        console.log(event.target.value);
        // let showAllNotes = UI.showAllNotesSelector.isChecked();
        // console.log(showAllNotes);
        // if (showAllNotes) {
        //   root.style.setProperty("--noteDotOpacity", 1);
        //   this.instrument.fretboard.setupFretboard();
        // } else {
        //   root.style.setProperty("--noteDotOpacity", 0);
        //   this.instrument.fretboard.setupFretboard();
        // }
      },
      checkboxBCallback: (event) => {
        console.log(event.target.value);
        // let showMultipleNotes = UI.showMultipleNotesSelector.isChecked();
      },
    });
    return settingsBar.getSettingsBarElements();
  };

  return {
    getUiSelectors: (selectors) => {
      getUiSelectors(selectors);
    },
    getElements: function (selectors) {
      return getElements(selectors);
    },
    //   setupAndGetSettingsValues: function (uiSelectors) {
    //     return setupAndGetSettingsValues(uiSelectors);
    //   },
    //   instantiateAndGetMenu: function (settings) {
    //     return instantiateAndGetMenu(settings);
    //   },
  };
})();

export { SettingsBarCtrl };
