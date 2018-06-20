import DOM from "./dom";
import scrollControl from "./scrollControl";

const navigation = {
    init () {
        this.bindEvents();
    },

    /**
     * bind multiple event listeners to the specified element
     * @param {HTMLElementObejct} el target element
     * @param {Object} func callback
     * @returns {Boolean} if element doesen't exist return false
     */
    addInteraction (el, func) {
        if (!el) {
            return false;
        }
        el.addEventListener("click", (e) => {
            func(e);
        });
        el.addEventListener("touchstart", (e) => {
            func(e);
        });
        return true;
    },

    /**
     * bind interaction events
     */
    bindEvents () {
        this.menuIcon = DOM.findOne(".Header-nav--menu-icon");
        this.menu = DOM.findOne("#Big-navigation");
        this.header = DOM.findOne(".Header");
        this.contactButton = DOM.findOne(".sqs-block-button-element");
        this.site = DOM.findOne(".Site");
        this.addInteraction(this.menuIcon, (e) => {
            e.preventDefault();
            this.executeMenuEvents(e.currentTarget);
        });
        this.addInteraction(this.contactButton, (e) => {
            e.preventDefault();
            this.header.classList.add("menu-open");
            this.header.classList.add("transitioning");
            this.menu.classList.add("open");
            this.site.classList.add("menu-open");
            setTimeout(() => {
                this.header.classList.remove("transitioning");
            }, 180);
        });
    },

    /**
     * the set of actions to be executed
     * @param {HTMLElement} el navbar
     */
    executeMenuEvents (el) {
        const svg = el.querySelector("svg");
        const style = window.getComputedStyle(svg);

        if (style.display === "none") {
            // menu is closed
            this.menu.classList.add("transition-out");
            this.header.classList.add("transitioning");
            this.header.classList.remove("menu-open");
            this.site.classList.remove("menu-open");
            scrollControl.enableScroll();
            setTimeout(() => {
                this.menu.classList.remove("open");
                this.menu.classList.remove("transition-out");
                this.header.classList.remove("transitioning");
            }, 180);
        } else {
            // menu is open
            this.header.classList.toggle("menu-open");
            this.header.classList.toggle("transitioning");
            this.menu.classList.toggle("open");
            this.site.classList.add("menu-open");
            scrollControl.disableScroll();
            setTimeout(() => {
                this.header.classList.toggle("transitioning");
            }, 180);
        }
    }
};

export default navigation;