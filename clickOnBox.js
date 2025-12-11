/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },

  boxClicked: function() {
    console.log('I was clicked');
  }
});

