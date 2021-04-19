import SettingsBar from '../classes/settingsBar';
import Dropdown from '../classes/dropdown';
import RadioButtons from '../classes/radio-buttons';
import NumberInput from '../classes/number-input';
import Checkbox from '../classes/checkbox';
import { InstrumentCtrl } from './InstrumentCtrl';
import { FretboardCtrl } from './FretboardCtrl';
import { UICtrl } from './UICtrl3';

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
    // selectedInstrument.options = InstrumentCtrl.getInstrumentsNames();
    selectedInstrument.options = FretboardCtrl.getInstrumentsNames();
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

  const getSettingsBarObject = (settingsBarChildren) => {
    const {
      selectedInstrument,
      accidental,
      numberOfFrets,
      showAllNotes,
      showMultipleNotes,
    } = settingsBarChildren;

    const settingsBar = new SettingsBar();
    settingsBar.instrumentDropdown = selectedInstrument;
    settingsBar.accidentalRadioButtons = accidental;
    settingsBar.numberOfFretsInput = numberOfFrets;
    settingsBar.showAllNotesCheckbox = showAllNotes;
    settingsBar.showMultipleNotesCheckbox = showMultipleNotes;
    settingsBar.currentValues = settingsBar.getSettingsValues();

    return settingsBar;
  };

  const instantiateSettingBarObj = (uiSelectors) => {
    const settingsBarChildren = createSettingsBarObjects(uiSelectors);
    return getSettingsBarObject(settingsBarChildren);
  };

  const setSelectedInstrumentEventListener = (settingsBar) => {
    // console.log(settingsBar);
    const setSelectedInstrument = () => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      const fretboard = UICtrl.instantiateFretboardObject(
        settingsBar.currentValues
      );
      UICtrl.buildFretboard(fretboard);

      // UICtrl.getInstrument(settingsBar.currentValues);
      // console.log('Hi SelectedInstrument: ', settingsBar);
      // console.log('Hi currentValues: ', settingsBar.currentValues);
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
      const fretboard = UICtrl.instantiateFretboardObject(
        settingsBar.currentValues
      );
      UICtrl.buildFretboard(fretboard);
      // console.log('Hi Accidentals: ', settingsBar);
      // console.log('Hi currentValues: ', settingsBar.currentValues);
      //     if (event.target.classList.contains('acc-select')) {
      //       const instrument = UICtrl.getInstrument(settingsBar.currentValues);
      //       UICtrl.setupNoteSection(instrument);
      //     } else {
      //       return;
      // }
    };

    settingsBar.accidentalRadioButtons.addEventListenerOn(
      settingsBar.accidentalRadioButtons.uiSelector,
      'click',
      setAccidentals
    );
  };

  const setNumberOfFretsEventListener = (settingsBar) => {
    const setNumberOfFrets = () => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      const fretboard = UICtrl.instantiateFretboardObject(
        settingsBar.currentValues
      );
      UICtrl.buildFretboard(fretboard);
      // UICtrl.init();
      // console.log('Hi NumberOfFrets: ', settingsBar);
      // console.log('Hi currentValues: ', settingsBar.currentValues);
      //     UICtrl.getInstrument(settingsBar.currentValues);
    };

    settingsBar.numberOfFretsInput.addEventListenerOn(
      settingsBar.numberOfFretsInput.uiSelector,
      'change',
      setNumberOfFrets
    );
  };

  const setShowAllNotesEventListener = (settingsBar) => {
    const setShowAllNotes = () => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      const fretboard = UICtrl.instantiateFretboardObject(
        settingsBar.currentValues
      );
      UICtrl.buildFretboard(fretboard);
      // UICtrl.setFretboardEventListeners(fretboard);
      // console.log('Hi ShowAllNotes: ', settingsBar);
      // console.log('Hi currentValues: ', settingsBar.currentValues);
      console.log(
        'settingsBar.currentValues.isShownAllNotes: ',
        settingsBar.currentValues.isShownAllNotes
      );
      const isShownAllNotes = settingsBar.currentValues.isShownAllNotes;
      // console.log(
      //   'UICtrl.getInstrument: ',
      //   UICtrl.getInstrument(settingsBar.currentValues)
      // );
      // UICtrl.getInstrument(settingsBar.currentValues);
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
  const setShowMultipleNotesEventListener = (settingsBar) => {
    const setShowMultipleNotes = () => {
      settingsBar.currentValues = settingsBar.getSettingsValues();
      const fretboard = UICtrl.instantiateFretboardObject(
        settingsBar.currentValues
      );
      UICtrl.buildFretboard(fretboard);
      // console.log('Hi ShowMultipleNotes: ', settingsBar);
      // console.log('Hi currentValues: ', settingsBar.currentValues);
    };

    settingsBar.showMultipleNotesCheckbox.addEventListenerOn(
      settingsBar.showMultipleNotesCheckbox.uiSelector,
      'change',
      setShowMultipleNotes
    );
  };

  const setSettingsBarEventListeners = (settingsBar) => {
    setSelectedInstrumentEventListener(settingsBar);
    setAccidentalsEventListener(settingsBar);
    setNumberOfFretsEventListener(settingsBar);
    setShowAllNotesEventListener(settingsBar);
    setShowMultipleNotesEventListener(settingsBar);
  };

  return {
    instantiateSettingBarObj: (uiSelectors) => {
      return instantiateSettingBarObj(uiSelectors);
    },
    setSettingsBarEventListeners: (settingsBarObj) => {
      return setSettingsBarEventListeners(settingsBarObj);
    },
    // getSettingBarObject: (selectors) => {
    //   return getSettingBarObject(selectors);
    // },
  };
})();

export { SettingsBarCtrl };
