export default class UploadText {
  constructor() {
    this.text = null;
    this.xhr = new XMLHttpRequest();
  }

  setText(text) {
    console.log(text);
  }

  apiGetText() {}
}
