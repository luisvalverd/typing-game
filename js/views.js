import UploadFile from "./components/upload-file.js";

export default class View {
  constructor() {
    this.model = null;
    this.text = null;
    this.upload = new UploadFile();

    this.upload.onClick((text) => this.sendDataFile(text));
  }

  setModel(model) {
    this.model = model;
  }

  sendDataFile(text) {
    this.model.setFile(text);
  }
}
