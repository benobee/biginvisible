const DOM = {
  // returns only one element
  findOne (query) {
    return document.querySelector(query);
  },

  // returns an a node list of all available elements
  find (query) {
    return document.querySelectorAll(query);
  }
};

export default DOM;