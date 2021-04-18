import SettingsBar from '../classes/settingsBar';
import Dropdown from '../classes/dropdown';
import RadioButtons from '../classes/radio-buttons';
import NumberInput from '../classes/number-input';
import Checkbox from '../classes/checkbox';
import { InstrumentCtrl } from './InstrumentCtrl';
import { UICtrl } from './UICtrl';

const SettingsBarCtrl = (function () {
  const createSettingsBarObjects = (uiSelectors) => {
    const {
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector,
    } = uiSelectors;

    const selectedInstrument = new Dropdown();
    selectedInstrument.uiSelector = instrumentSelector;
    selectedInstrument.options = InstrumentCtrl.getInstrumentsNames();
    selectedInstrument.setupOptions();
    const accidental = new RadioButtons();
    accidental.uiSelector = accidentalSelector;
    const numberOfFrets = new NumberInput();
    numberOfFrets.uiSelector = numberOfFretsSelector;
    const showAllNotes = new Checkbox();
    showAllNotes.uiSelector = showAllNotesSelector;
    const showMultipleNotes = new Checkbox();
    showMultipleNotes.uiSelector = showMultipleNotesSelector;

    return {
      selectedInstrument,
      accidental,
      numberOfFrets,
      showAllNotes,
      showMultipleNotes,
    };
  };

  const setNumberOfFretsEventListener = (settingsBar) => {
    const setNumberOfFrets = () => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      UICtrl.getInstrument(settingsBar.currentValues);
    };
    settingsBar.numberOfFretsInput.addEventListenerOn(
      settingsBar.numberOfFretsInput.uiSelector,
      'change',
      setNumberOfFrets
    );
  };
  const setSelectedInstrumentEventListener = (settingsBar) => {
    const setSelectedInstrument = () => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      UICtrl.getInstrument(settingsBar.currentValues);
    };
    settingsBar.instrumentDropdown.addEventListenerOn(
      settingsBar.instrumentDropdown.uiSelector,
      'change',
      setSelectedInstrument
    );
  };

  const setAccidentalsEventListener = (settingsBar) => {
    const setAccidentals = (event) => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      if (event.target.classList.contains('acc-select')) {
        const instrument = UICtrl.getInstrument(settingsBar.currentValues);
        UICtrl.setupNoteSection(instrument);
      } else {
        return;
      }
    };
    settingsBar.accidentalRadioButtons.addEventListenerOn(
      settingsBar.accidentalRadioButtons.uiSelector,
      'click',
      setAccidentals
    );
  };

  const setShowAllNotesEventListener = (settingsBar) => {
    const setShowAllNotes = () => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      console.log('settingsBar.currentValues: ', settingsBar.currentValues);

      const isShownAllNotes = settingsBar.currentValues.isShownAllNotes;
      console.log(
        'UICtrl.getInstrument: ',
        UICtrl.getInstrument(settingsBar.currentValues)
      );
      UICtrl.getInstrument(settingsBar.currentValues);
      const root = document.documentElement;
      // console.log(showAllNotes);
      if (isShownAllNotes) {
        root.style.setProperty('--noteDotOpacity', 1);
        // UICtrl.getInstrument(settingsBar.currentValues);
        // this.instrument.fretboard.setupFretboard();
      } else {
        root.style.setProperty('--noteDotOpacity', 0);
        // UICtrl.getInstrument(settingsBar.currentValues);
        // this.instrument.fretboard.setupFretboard();
      }
    };

    settingsBar.showAllNotesCheckbox.addEventListenerOn(
      settingsBar.showAllNotesCheckbox.uiSelector,
      'change',
      setShowAllNotes
    );
  };

  const setSettingBarEventListeners = (settingsBar) => {
    setAccidentalsEventListener(settingsBar);
    setSelectedInstrumentEventListener(settingsBar);
    setNumberOfFretsEventListener(settingsBar);
    setShowAllNotesEventListener(settingsBar);
  };

  const getSettingBarObject = (uiSelectors) => {
    const {
      selectedInstrument,
      accidental,
      numberOfFrets,
      showAllNotes,
      showMultipleNotes,
    } = createSettingsBarObjects(uiSelectors);

    const settingsBar = new SettingsBar();
    settingsBar.instrumentDropdown = selectedInstrument;
    settingsBar.accidentalRadioButtons = accidental;
    settingsBar.numberOfFretsInput = numberOfFrets;
    settingsBar.showAllNotesCheckbox = showAllNotes;
    settingsBar.showMultipleNotesCheckbox = showMultipleNotes;
    settingsBar.currentValues = settingsBar.getSettingsValues();

    setSettingBarEventListeners(settingsBar);
    return settingsBar;
  };

  //=========================
  // const getElements = (selectors) => {
  //   const {
  //     instrumentSelector,
  //     accidentalSelector,
  //     numberOfFretsSelector,
  //     showAllNotesSelector,
  //     showMultipleNotesSelector,
  //   } = selectors;

  //   const instrumentElement = new Dropdown2(
  //     instrumentSelector,
  //     InstrumentCtrl.getInstrumentsNames()
  //   );
  //   const accidentalElement = new RadioButtons(accidentalSelector);
  //   const numberOfFretsElement = new NumberInput(numberOfFretsSelector);
  //   const showAllNotesElement = new Checkbox(showAllNotesSelector);
  //   const showMultipleNotesElement = new Checkbox(showMultipleNotesSelector);

  //   const settingsBar = new SettingsBar(
  //     instrumentElement,
  //     accidentalElement,
  //     numberOfFretsElement,
  //     showAllNotesElement,
  //     showMultipleNotesElement
  //   );

  //   settingsBar.addEventListeners({
  //     dropdownCallback: (event) => {
  //       let selectedInstrument = event.target.value;
  //       let numberOfStrings = InstrumentCtrl.getNumberOfStrings(
  //         selectedInstrument
  //       );
  //       console.log(numberOfStrings);
  //       // this.instrument.fretboard.setNumberOfStrings(numberOfStrings);
  //       // this.instrument.fretboard.setupFretboard();
  //     },
  //     radioButtonsCallback: (event) => {
  //       console.log(event.target.value);
  //       // let accidentals;
  //       // if (event.target.classList.contains("acc-select")) {
  //       //   accidentals = UI.accidentalSelector.getValue();
  //       //   this.instrument.fretboard.setAccidentals(accidentals);
  //       //   this.instrument.fretboard.setupFretboard();
  //       //   this.instrument.fretboard.setupNoteNameSection();
  //       // } else {
  //       //   return;
  //       // }
  //     },
  //     numberInputCallback: (event) => {
  //       console.log(event.target.value);
  //       // this.instrument.fretboard.setNumberOfFrets(event.target.value);
  //       // this.instrument.fretboard.setupFretboard();
  //     },
  //     checkboxACallback: (event) => {
  //       console.log(event.target.value);
  //       // let showAllNotes = UI.showAllNotesSelector.isChecked();
  //       // console.log(showAllNotes);
  //       // if (showAllNotes) {
  //       //   root.style.setProperty("--noteDotOpacity", 1);
  //       //   this.instrument.fretboard.setupFretboard();
  //       // } else {
  //       //   root.style.setProperty("--noteDotOpacity", 0);
  //       //   this.instrument.fretboard.setupFretboard();
  //       // }
  //     },
  //     checkboxBCallback: (event) => {
  //       console.log(event.target.value);
  //       // let showMultipleNotes = UI.showMultipleNotesSelector.isChecked();
  //     },
  //   });
  //   return settingsBar.getSettingsBarElements();
  // };

  return {
    // getUiSelectors: (selectors) => {
    //   getUiSelectors(selectors);
    // },
    // createSettingsBarObjects: (selectors) => {
    //   createSettingsBarObjects(selectors);
    // },
    getSettingBarObject: (selectors) => {
      return getSettingBarObject(selectors);
    },
    // getElements: function (selectors) {
    //   return getElements(selectors);
    // },
    // //   setupAndGetSettingsValues: function (uiSelectors) {
    // //     return setupAndGetSettingsValues(uiSelectors);
    // //   },
    // //   instantiateAndGetMenu: function (settings) {
    // //     return instantiateAndGetMenu(settings);
    // //   },
  };
})();

export { SettingsBarCtrl };
