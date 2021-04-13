import { UICtrl } from './UICtrl';

const AppCtrl = (function () {
  // Load UI components
  const loadUIComponents = function () {
    console.log('loading ...');
  };

  return {
    init: function () {
      loadUIComponents();
      UICtrl.createSettingsBar();
      // UICtrl.instantiateInstrument();
    },
  };
})();

export { AppCtrl };
