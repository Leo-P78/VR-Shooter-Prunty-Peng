
/* global AFRAME, TORPEDO_SPEED, TORPEDO_MARGIN */

AFRAME.registerComponent('collide', {

 schema: {
   boxDistance: {type: 'number'}
 },

 init: function () {
   this.el.addEventListener('hitstart', this.collide.bind(this));
 },

 collide: function() {
   let box = document.getElementById('box');
   let position = box.getAttribute('position');
   position.x = parseInt(Math.random() * (10 - (-10)) + (-10), 10);
   position.y = parseInt(Math.random() * (7 - 1) + 1, 10);  // Minimum y-value is 1 so it's above ground
   position.z = parseInt(Math.random() * (-2 - (-10)) + (-10), 10);
   box.setAttribute('position', position);
   this.el.setAttribute('visible', false);
 },

});

