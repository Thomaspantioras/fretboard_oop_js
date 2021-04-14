export default class NoteFret {
  constructor() {
    this._className = '';
    this._noteName = '';
  }
  get className() {
    if (this._className) return this._className;
    return;
  }
  set className(value) {
    this._className = value;
  }
  get noteName() {
    if (this._noteName) return this._noteName;
    return;
  }
  set noteName(value) {
    this._noteName = value;
  }
  createFretTemplate() {
    const noteFret = document.createElement('div');
    noteFret.classList.add(this._className);
    return noteFret;
  }
  addSingleMarkOnFret = (noteFretEl, singleMarkClassName) =>
    noteFretEl.classList.add(singleMarkClassName);
  addDoubleMarkOnFret = (noteFretEl, doubleMarkClassName) => {
    const doubleFretMark = document.createElement('div');
    doubleFretMark.classList.add(doubleMarkClassName);
    noteFretEl.appendChild(doubleFretMark);
  };
}
