import { UICtrl } from './UICtrl';

const AppCtrl = (function () {
  // Load UI components
  const loadUIComponents = function () {
    console.log('loading ...');
  };

  return {
    init: function () {
      loadUIComponents();
      const settings = UICtrl.getSettingBarObject();
      console.log('settings: ', settings.currentValues);
      const instrument = UICtrl.getInstrument(settings.currentValues);
      // UICtrl.setupNoteSection(instrument.fretboard.notes);
      UICtrl.setupNoteSection(instrument);
    },
  };
})();

export { AppCtrl };
