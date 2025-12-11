/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

  boxClicked: function() {
    this.el.setAttribute('position', {
        x: getRandomInt(-10,10),
        y: getRandomInt(1,10),
        z: getRandomInt(-2,-10)
    });
  }
});

