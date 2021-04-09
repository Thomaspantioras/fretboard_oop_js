import SettingsBar from '../classes/settingsBar';

const SettingsBarCtrl = (function () {
  const getElements = (selectors) => {
    const {
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector,
    } = selectors;

    const settingsBar = new SettingsBar(
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector
    );

    settingsBar.addEventListeners({
      dropdownCallback: (event) => {
        console.log(event.target.value);
        // let selectedInstrument = event.target.value;
        // let numberOfStrings =
        //   Instrument.instrumentTuningPreset[selectedInstrument].length;
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
