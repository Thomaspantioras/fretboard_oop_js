import NoteFret from '../classes/note-fret';

const FretCtrl = (function () {
  const noteFretClassName = 'note-fret'; // does this member belong in NoteFret class?
  const singleMarkClassName = 'single-fretmark'; // does this member belong in NoteFret class?
  const singleMarkPositions = [3, 5, 7, 9, 15, 17, 19, 21];
  const doubleMarkClassName = 'double-fretmark'; // does this member belong in NoteFret class?
  const doubleMarkPositions = [12, 24];
  const noteFlat = [
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab',
    'A',
    'Bb',
    'B',
  ];
  const noteSharp = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];

  const noteFretInstance = new NoteFret(noteFretClassName);

  const addFretMark = function (fretIndex, noteFret) {
    if (doubleMarkPositions.indexOf(fretIndex) !== -1)
      noteFretInstance.addDoubleMarkOnFret(noteFret, doubleMarkClassName);
    if (singleMarkPositions.indexOf(fretIndex) !== -1)
      noteFretInstance.addSingleMarkOnFret(noteFret, singleMarkClassName);
  };

  const generateNoteName = function (noteIndex, accidental) {
    noteIndex = noteIndex % 12;
    let noteName;
    if (accidental === 'flats') {
      noteName = noteFlat[noteIndex];
    } else if (accidental === 'sharps') {
      noteName = noteSharp[noteIndex];
    }
    return noteName;
  };

  const setNoteName = function (noteIndex, accidental) {
    let note = generateNoteName(noteIndex, accidental);
    noteFretInstance.noteName = note;
  };

  return {
    createFretElement: function () {
      return noteFretInstance.createFretTemplate();
    },
    addFretMark: function (fretIndex, noteFret) {
      return addFretMark(fretIndex, noteFret);
    },
    getFretNoteName: function (noteIndex, accidental) {
      setNoteName(noteIndex, accidental);
      return noteFretInstance.noteName;
    },
  };
})();

export { FretCtrl };
