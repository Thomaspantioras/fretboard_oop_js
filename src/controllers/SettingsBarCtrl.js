const SettingsBarCtrl = (function () {
  // // TODO name it setup and getMenuSettings, or generate extra method
  // const getMenuSettings = function (UISelectors) {
  //   const dropdownSelector = new Dropdown(UISelectors.instrument);
  //   const instrumentOptions = InstrumentsCtrl.getInstruments();
  //   dropdownSelector.setupOptions(instrumentOptions);
  //   const accidentalSelector = new RadioButtons(UISelectors.accidental);
  //   const numberOfFretsSelector = new NumberInput(UISelectors.numberOfFrets);
  //   const showAllNotesSelector = new Checkbox(UISelectors.showAllNotes);
  //   const showMultipleNotesSelector = new Checkbox(
  //     UISelectors.showMultipleNotes
  //   );
  //   return {
  //     dropdownSelector,
  //     accidentalSelector,
  //     numberOfFretsSelector,
  //     showAllNotesSelector,
  //     showMultipleNotesSelector,
  //   };
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
  // return {
  //   getMenuSettings: function (uiSelectors) {
  //     return getMenuSettings(uiSelectors);
  //   },
  //   instantiateAndGetMenu: function (settings) {
  //     return instantiateAndGetMenu(settings);
  //   },
  // };
})();

export { SettingsBarCtrl };
