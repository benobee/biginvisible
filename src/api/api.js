import controller from "../core/controller";

const api = () => {
	controller.on("blog", (el) => {
		console.log("blogggggg", el);
	});
};

export default api;