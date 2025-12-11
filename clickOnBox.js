/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },
  boxClicked: function() {
  // Get a reference to the torpedo by looking at the id value
  // of the HTML element and emit the 'fire' event
  let torpedo = document.getElementById('torpedo');
  let boxPosition = this.el.getAttribute('position')
  torpedo.emit('fire', {boxPosition: boxPosition})
}
});

