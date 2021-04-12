// import { SettingsBarCtrl } from './SettingsBarCtrl';
import { FretboardCtrl } from './FretboardCtrl';
import Instrument from '../classes/instrument';

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

  const setupInstrument = () => {
    // FretboardCtrl.setupFretboard
    // const instrument = new Instrument()
  };

  //=========================
  const getInstrument = (instrumentName) => {
    const fretboard = 'new Fretboard()';
    const instrument = new Instrument(
      instrumentName,
      instrumentTuningPreset[instrument],
      fretboard
    );
  };

  // temporary solution, should take the value from fretboard
  const getNumberOfStrings = (instrument) => {
    return instrumentTuningPreset[instrument].length;
  };

  return {
    getInstrumentsNames: () => {
      return instrumentsNames;
    },
    getNumberOfStrings: (instrument) => {
      return getNumberOfStrings(instrument);
    },
    // getInstrumentTuning: function (instrument) {
    //   return instrumentTuningPreset[instrument];
    // },
  };
})();

export { InstrumentCtrl };
