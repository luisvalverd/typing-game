import StartGame from "./components/start-game.js";
import UploadFile from "./components/upload-file.js";

export default class View {
  constructor() {
    this.model = null;
    this.text = document.getElementById("text-game");
    this.input = document.getElementById("input-text--game");
    this.upload = new UploadFile();
    this.start = new StartGame();

    this.upload.onClick((text) => this.sendDataFile(text));
    this.start.onClick(() => this.renderText(true));
    this.input.value = "";
  }

  setModel(model) {
    this.model = model;
  }

  sendDataFile(text) {
    this.model.setFile(text);
  }

  renderText(isClick) {
    if (isClick) console.log("ok");
    const paraph = this.model.getText();
    this.text.setAttribute(
      "class",
      "px-32 text-gray-500 h-3/4 text-lg overflow-auto overflow-auto"
    );
    this.text.innerHTML = `
      <p>${paraph}</p>
    `;
    this.text.childNodes[1].setAttribute("class", "border-x-2 px-4");
    this.text.childNodes[1].setAttribute("id", "game--text");
    this.input.onfocus = () => this.getKeyPress();
    this.input.focus();
  }

  getKeyPress() {
    this.input.onkeyup = () => {
      this.model.isValidText(this.input.value);
    };
  }

  /**
   * * change to color of words pressed if these are corrects
   * @param text: this get a words of change;
   * @param errors: thsi get a list of index of error typing
   */
  changeColorText(text, errors) {
    let paraph = this.model.getText();

    let result = "";
    let errorWords = "";
    for (let i = text.length; i < paraph.length; i++) {
      result += paraph[i];
    }
    for (let i = 0; i < errors.length; i++) {
      if (text[errors[i]] !== undefined) {
        errorWords += text[errors[i]];
      }
    }
    let writeText = ``;
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (!errors.includes(i)) {
        writeText += text[i];
      } else {
        writeText += `<span>${text[errors[j]]}</span>`;
        j++;
      }
    }
    this.text.innerHTML = `
      <p>
        <b>${writeText}</b>${result}
      </p>
    `;

    let markErrors = document.getElementsByTagName("span");
    console.log(errors);
    if (errors.length > 0) {
      for (let i = 0; i < markErrors.length; i++) {
        markErrors[i].setAttribute("class", "text-red-500");
      }
    }

    this.text.childNodes[1].childNodes[1].setAttribute("class", "text-white");
  }
}
