/* global AFRAME */

AFRAME.registerComponent('fire', {

 init: function () {
   this.el.addEventListener('fire', this.fire.bind(this));
 },

 fire: function() {
   if (!this.el.getAttribute('visible')) {
  this.el.setAttribute('visible', true);
  this.el.setAttribute('position', {x:0, y:1, z:-1});
}
});

