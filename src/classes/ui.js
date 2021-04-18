export default class UI {
  constructor() {
    this._settingsBar = '';
    this._fretboard = '';
    this._notesSection = '';
  }

  get settingsBar() {
    if (this._settingsBar) return this._settingsBar;
    return;
  }
  set settingsBar(value) {
    this._settingsBar = value;
  }
  get fretboard() {
    if (this._fretboard) return this._fretboard;
    return;
  }
  set fretboard(value) {
    this._fretboard = value;
  }
  get notesSection() {
    if (this._notesSection) return this._notesSection;
    return;
  }
  set notesSection(value) {
    this._notesSection = value;
  }
}
