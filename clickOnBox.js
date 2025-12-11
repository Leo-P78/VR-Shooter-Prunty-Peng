/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },
  boxClicked: function() {
    this.el.setAttribute('position', {
        x: parseInt(Math.random() * (5 - (-5)) + (-5), 10),
        y: parseInt(Math.random() * (1 - 5) + (-5), 10),
        z: parseInt(Math.random() * (-2 - (-5)) + (-5), 10)
    });
  }
});

