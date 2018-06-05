import controller from "./core/controller";
import api from "./api/api";

const App = {
  init () {
    this.api = api();
    this.registerControllers();
  },

<<<<<<< HEAD
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
=======
    /**
     * events are bound to the controller when
     * elements are found within the DOM.
     */

    registerControllers () {
        controller.add({
            name: "blog",
            el: "#collection-5a81023c53450a498144b8d7"
        });
        controller.watch();
    }
>>>>>>> 11a22318582f8d410d600c5e3bd60cddb7277f13
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});