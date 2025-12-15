/* global AFRAME, TORPEDO_SPEED, TORPEDO_MARGIN */

AFRAME.registerComponent('fire', {

 schema: {
   boxDistance: {type: 'number'}
 },

 init: function () {
   this.el.addEventListener('fire', this.fire.bind(this));
 },

 fire: function(event) {
   if (!this.el.getAttribute('visible')) {
     let camera = document.getElementById('camera');
     let cameraPos = camera.getAttribute('position');
     let boxPos = event.detail.boxPosition;
     
     // Calculate distance from camera to box
     this.data.boxDistance = this.getDistance(cameraPos, boxPos);
     console.log('Firing torpedo! Camera pos:', cameraPos, 'Box pos:', boxPos, 'Distance:', this.data.boxDistance);
     
     this.el.setAttribute('visible', true);
     this.el.setAttribute('position', {x: 0, y: 0, z: -1});
   }
 },

 tick: function(time, timeDelta) {
   if (this.el.getAttribute('
