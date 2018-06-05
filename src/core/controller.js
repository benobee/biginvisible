import PubSub from "./pubsub";
import DOM from "../modules/dom";

const events = new PubSub();

class Controller {
    constructor () {
        this.topics = {};
        this.on = events.on;
        this.emit = events.emit;
    }

    /**
     * Tests whether the node is active in the DOM
     * @param  {String} query query selector
     * @return {Object}       DOM Node
     */

    elementIsActive (query) {
        const el = DOM.findOne(query);

        if (!el) {
            return false;
        }
        return el;
    }

    watch (array) {
        array.forEach((event) => {
            const el = this.elementIsActive(event.el);

            if (el) {
                 this.emit(event.name, el);
             }
        });
    }
}

const instance = new Controller();

export default instance;