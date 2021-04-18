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
  get _fretboard() {
    if (this.__fretboard) return this.__fretboard;
    return;
  }
  set _fretboard(value) {
    this.__fretboard = value;
  }
  get _notesSection() {
    if (this.__notesSection) return this.__notesSection;
    return;
  }
  set _notesSection(value) {
    this.__notesSection = value;
  }
}
