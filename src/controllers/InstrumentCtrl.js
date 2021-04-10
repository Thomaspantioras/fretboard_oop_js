const InstrumentCtrl = (function () {
  const instrumentsNames = [
    'Guitar',
    'Bass (4 Strings)',
    'Bass (5 Strings)',
    'Ukelele',
  ];

  const instrumentTuningPreset = {
    Guitar: [4, 11, 7, 2, 9, 4],
    'Bass (4 Strings)': [7, 2, 9, 4],
    'Bass (5 Strings)': [7, 2, 9, 4, 11],
    Ukelele: [7, 4, 0, 7],
  };

  return {
    getInstrumentsNames: () => {
      return instrumentsNames;
    },
    // getInstrumentsNames: () => {
    //   return getInstrumentsNames();
    // },

    // getInstrumentTuning: function (instrument) {
    //   return instrumentTuningPreset[instrument];
    // },
  };
})();

export { InstrumentCtrl };
