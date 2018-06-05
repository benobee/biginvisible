import controller from "../core/controller";
import scrollControl from "../modules/scrollControl";

const api = () => {
	controller.on("blog", (el) => {
		scrollControl.init(el);
		console.log("blog", el);
	});
	controller.on("navbar", (el) => {
		scrollControl.init(el);
		console.log("navbar", el);
	});
};

export default api;