import controller from "./core/controller";
import api from "./api/api";

const App = {
  init () {
    this.api = api();
    this.registerControllers();
  },

  /**
   * events are bound to the controller when
   * elements are found within the DOM.
   */

  registerControllers () {
    controller.watch([{
        name: "blog",
        el: "#collection-5a81023c53450a498144b8d7"
      },
      {
        name: "navbar",
        el: ".Header.Header--top"
      }
    ]);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});