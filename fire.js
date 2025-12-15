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
     
     this.data.boxDistance = this.getDistance(cameraPos, boxPos);
     console.log('FIRING! Box at:', boxPos, 'Distance:', this.data.boxDistance);
     
     this.el.setAttribute('visible', true);
     this.el.setAttribute('position', {x: 0, y: 0, z: -1});
   }
 },

 tick: function(time, timeDelta) {
   if (this.el.getAttribute('visible')) {
     // Get world position of torpedo
     let worldPos = new THREE.Vector3();
     this.el.object3D.getWorldPosition(worldPos);
     
     // Get camera world position
     let camera = document.getElementById('camera');
     let cameraWorldPos = new THREE.Vector3();
     camera.object3D.getWorldPosition(cameraWorldPos);
     
     // Calculate distance traveled from camera
     let distanceTraveled = this.getDistance(
       {x: cameraWorldPos.x, y:
