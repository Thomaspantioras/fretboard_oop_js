const InstrumentsCtrl = (function () {
  const instrumentTuningPreset = {
    Guitar: [4, 11, 7, 2, 9, 4],
    'Bass (4 Strings)': [7, 2, 9, 4],
    'Bass (5 Strings)': [7, 2, 9, 4, 11],
    Ukelele: [7, 4, 0, 7],
  };

  const getInstrumentsNames = () => {
    return Object.keys(instrumentTuningPreset);
  },
  return {
    getInstrumentsNames: () => {
      getInstrumentsNames();
    },
    // getInstrumentsNames: function () {
    //   getInstrumentsNames();
    // },
    getInstrumentTuning: function (instrument) {
      return instrumentTuningPreset[instrument];
    },
  };
})();

export { InstrumentsCtrl };
