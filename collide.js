/* global AFRAME, TORPEDO_SPEED, TORPEDO_MARGIN */

AFRAME.registerComponent('collide', {

 schema: {
   boxDistance: {type: 'number'}
 },

 init: function () {
   this.el.addEventListener('hitstart', this.collide.bind(this));
   console.log('Collide component initialized');
 },

 collide: function() {
   console.log('COLLISION DETECTED!');
   let box = document.getElementById('box');
   let position = box.getAttribute('position');
   console.log('Old box position:', position);
   position.x = Math.random() * 10 * ((Math.random() < 0.5) ? -1 : 1);
   position.y = Math.random() * 9 + 1;
   position.z = -(Math.random() * 8 + 2);
   box.setAttribute('position', position);
   console.log('New box position:', position);
   this.el.setAttribute('position', {x: 0, y: 0, z: -1});
   this.el.setAttribute('visible', false);
 },

});
