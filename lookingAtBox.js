/* global AFRAME */

AFRAME.registerComponent('looking-at-box', {
 dependencies: ['raycaster'],

 init: function () {
   this.el.addEventListener('raycaster-intersected', this.intersected.bind(this))
 },

 intersected: function () {
   console.log('Raycaster hit the box!');
 }

});

