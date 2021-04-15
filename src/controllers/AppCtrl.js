import { UICtrl } from './UICtrl';

const AppCtrl = (function () {
  // Load UI components
  const loadUIComponents = function () {
    console.log('loading ...');
  };

  return {
    init: function () {
      loadUIComponents();
      // console.log('SettingBarObject: ', UICtrl.getSettingBarObject());
      // console.log('InstrumentObject: ', UICtrl.getInstrument());
      const settings = UICtrl.getSettingBarObject();
      const instrument = UICtrl.getInstrument(settings.currentValues);
      // console.log(instrument.fretboard.notes);
      UICtrl.setupNoteSection(instrument.fretboard.notes);
    },
  };
})();

export { AppCtrl };
