export default class StopGame {
  constructor() {
    this.btnStop = document.getElementById("stop-btn");
  }

  openBtn() {
    this.btnStop.classList.remove("hidden");
  }

  onClick(cb) {
    this.btnStop.onclick = () => {
      this.btnStop.classList.add("hidden");
      cb();
    };
  }
}
