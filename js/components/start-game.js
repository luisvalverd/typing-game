export default class StartGame {
  constructor() {
    this.btn = document.getElementById("start-btn");
  }

  onClick(cb) {
    this.btn.onclick = () => {
      cb();
    };
  }
}
