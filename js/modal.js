export default class Model {
  constructor() {
    this.view = null;
    this.file = null;
  }

  setView(view) {
    this.view = view;
  }

  setFile(file) {
    console.log(file);
  }

  getFile() {
    return this.file;
  }
}
