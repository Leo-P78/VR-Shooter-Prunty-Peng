/* global AFRAME */

AFRAME.registerComponent('fire', {

 init: function () {
   this.el.addEventListener('fire', this.fire.bind(this));
 },

 fire: function() {
   console.log('fired')
 }
});

