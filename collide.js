/* global AFRAME, TORPEDO_SPEED, TORPEDO_MARGIN */

AFRAME.registerComponent('collide', {

 schema: {
   boxDistance: {type: 'number'}
 },

 init: function () {
   this.el.addEventListener('hitstart', this.collide.bind(this));
   this.colliding = false;
 },

 collide: function() {
   if (this.colliding) return; // Prevent multiple rapid collisions
   this.colliding = true;
   
   let box = document.getElementById('box');
   let position = box.getAttribute('position');
   position.x = Math.random() * 10 * ((Math.random() < 0.5) ? -1 : 1);
   position.y = Math.random() * 9 + 1;
   position.z = -(Math.random() * 8 + 2);
   box.setAttribute('position', position);
   
   // Reset torpedo completely
   this.el.setAttribute('position', {x: 0, y: 0, z: -1});
   this.el.setAttribute('visible', false);
   
   // Reset collision flag after a brief delay
   setTimeout(() => { this.colliding = false; }, 100);
 },

});
