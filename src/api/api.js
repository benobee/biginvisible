import controller from "../core/controller";
import scrollControl from "../modules/scrollControl";
import navigation from "../modules/navigation";

/**
 * abstracted out for readability
 */
const api = () => {
    //navbar
    controller.on("navbar", (el) => {
        scrollControl.init(el);
        navigation.init();
    });
};

export default api;