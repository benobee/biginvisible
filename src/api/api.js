import controller from "../core/controller";
import scrollControl from "../modules/scrollControl";

const api = () => {
    controller.on("navbar", (el) => {
        scrollControl.init(el);
        console.log("navbar el", el);
    });
};

export default api;