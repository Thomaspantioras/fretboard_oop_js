import SettingsBar from '../classes/settingsBar';

// const {
//   dropdownSelector,
//   accidentalSelector,
//   numberOfFretsSelector,
//   showAllNotesSelector,
//   showMultipleNotesSelector,
// } = UICtrl.getSettingsBarSelectors;

const SettingsBarCtrl = (function () {
  const init = (
    instrumentSelector,
    accidentalSelector,
    numberOfFretsSelector,
    showAllNotesSelector,
    showMultipleNotesSelector
  ) => {
    return new SettingsBar(
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector
    );
  };

  const getElements = (selectors) => {
    const {
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector,
    } = selectors;

    return init(
      instrumentSelector,
      accidentalSelector,
      numberOfFretsSelector,
      showAllNotesSelector,
      showMultipleNotesSelector
    ).getSettingsBarElements();
  };

  // const setupSettings = function (
  //   instrumentSelector,
  //   accidentalSelector,
  //   numberOfFretsSelector,
  //   showAllNotesSelector,
  //   showMultipleNotesSelector
  // ) {
  // const dropdownSelector = new Dropdown(
  //   instrumentSelector,
  //   InstrumentsCtrl.getInstrumentsNames()
  // );
  // const accidentalSelector = new RadioButtons(accidentalSelector);
  // const numberOfFretsSelector = new NumberInput(numberOfFretsSelector);
  // const showAllNotesSelector = new Checkbox(showAllNotesSelector);
  // const showMultipleNotesSelector = new Checkbox(showMultipleNotesSelector);
  // return {
  //   dropdownSelector,
  //   accidentalSelector,
  //   numberOfFretsSelector,
  //   showAllNotesSelector,
  //   showMultipleNotesSelector,
  // };
  // };
  // const instantiateAndGetMenu = function (settings) {
  //   const {
  //     dropdownSelector,
  //     accidentalSelector,
  //     numberOfFretsSelector,
  //     showAllNotesSelector,
  //     showMultipleNotesSelector,
  //   } = settings;
  //   const menu = new Menu();
  //   menu.dropdown = dropdownSelector;
  //   menu.radioButtons = accidentalSelector;
  //   menu.numberInput = numberOfFretsSelector;
  //   menu.checkboxA = showAllNotesSelector;
  //   menu.checkboxB = showMultipleNotesSelector;
  //   console.log("menu: ", menu);
  //   return menu;
  // };
  // const addEventListeners = function ({
  //   dropdownCallback,
  //   radioButtonsCallback,
  //   numberInputCallback,
  //   checkboxACallback,
  //   checkboxBCallback,
  // }) {};
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
// dropdownSelector,
// accidentalSelector,
// numberOfFretsSelector,
// showAllNotesSelector,
// showMultipleNotesSelector

export { SettingsBarCtrl };
