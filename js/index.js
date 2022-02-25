import UploadText from "./upload-text.js";

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const file = new UploadText();

  const onClick = () => {
    file.setText("ok");
  };

  startBtn.onclick = onClick;
});
