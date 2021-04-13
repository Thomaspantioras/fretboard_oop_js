import { UICtrl } from './UICtrl';

const AppCtrl = (function () {
  // Load UI components
  const loadUIComponents = function () {
    console.log('loading ...');
  };

  return {
    init: function () {
      loadUIComponents();
      console.log('SettingBarObject: ', UICtrl.getSettingBarObject());
      // UICtrl.getSettingBarObject();
      // UICtrl.instantiateInstrument();
      console.log('InstrumentObject: ', UICtrl.getInstrument());
    },
  };
})();

export { AppCtrl };
