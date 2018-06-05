import Scrollmap from "scrollmap";

/**
 * [scroll description]
 * @type {Object}
 */
const scrollControl = {

  init (navbar) {
    const body = document.querySelector("body");
    const thresholdTop = -200;

    Scrollmap.trigger({
      target: "[id*=seafoam]",
      surfaceVisible: 0.5
    });

    window.addEventListener("scroll", () => {
      const top = body.getBoundingClientRect().top;

      if (top < thresholdTop) {
        navbar.classList.add("scrolling");
      } else {
        navbar.classList.remove("scrolling");
      }
    });
  },

  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  keys: { 37: 1, 38: 1, 39: 1, 40: 1 },

  preventDefault (e) {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  },

  preventDefaultForScrollKeys (e) {
    let isScrollKey = true;

    if (this.keys[ e.keyCode ]) {
      this.preventDefault(e);
      isScrollKey = false;
    }

    return isScrollKey;
  },

  disableScroll () {
    const self = this;

    if (window.addEventListener) {
      window.addEventListener("DOMMouseScroll", self.preventDefault, false);
    }
    window.onwheel = self.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = self.preventDefault; // older browsers, IE
    window.ontouchmove = self.preventDefault; // mobile
    document.onkeydown = self.preventDefaultForScrollKeys;
  },

  enableScroll () {
    const self = this;

    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", self.preventDefault, false);
    }
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }
};

export default scrollControl;