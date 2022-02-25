export default class UploadFile {
  constructor() {
    this.btn = document.getElementById("upload-btn");
    this.uploadFile = document.getElementById("file-input");
  }

  /**
   * * send text of file and send to model;
   * @param {*} cb this is a callback
   */
  onClick(cb) {
    this.btn.onclick = () => {
      this.uploadFile.click();
      this.uploadFile.addEventListener("change", async (event) => {
        const file = event.target.files[0];

        var data = await file.text();
        cb(data);
      });
    };
  }
}
