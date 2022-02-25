import Model from "./modal.js";
import View from "./views.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new Model();
  const view = new View();

  model.setView(view);
  view.setModel(model);
});
