/* global AFRAME, TORPEDO_SPEED, TORPEDO_MARGIN */

AFRAME.registerComponent('fire', {

 schema: {
   boxDistance: {type: 'number'}
 },

 init: function () {
   this.el.addEventListener('fire', this.fire.bind(this));
   console.log('Fire component initialized');
 },

 fire: function(event) {
   console.log('Fire event received');
   console.log('Torpedo visible:', this.el.getAttribute('visible'));
   console.log('Event detail:', event.detail);
   
   if (!this.el.getAttribute('visible')) {
     let camera = document.getElementById('camera');
     let cameraPos = camera.getAttribute('position');
     let boxPos = event.detail.boxPosition;
     
     console.log('Camera:', camera);
     console.log('Camera pos:', cameraPos);
     console.log('Box pos:', boxPos);
     
     // Calculate distance from camera to box
     this.data.boxDistance = this.getDistance(cameraPos, boxPos);
     console.log('Calculated distance:', this.data.boxDistance);
     
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
       {x: cameraWorldPos.x, y: cameraWorldPos.y, z: cameraWorldPos.z},
       {x: worldPos.x, y: worldPos.y, z: worldPos.z}
     );
     
     console.log('Distance traveled:', distanceTraveled.toFixed(2), 'Max:', (this.data.boxDistance + TORPEDO_MARGIN).toFixed(2));
     
     if (distanceTraveled > this.data.boxDistance + TORPEDO_MARGIN) {
       this.el.setAttribute('visible', false);
       console.log('Torpedo went too far, hiding');
     } else {
       let pos = this.el.getAttribute('position');
       pos.z += -timeDelta * TORPEDO_SPEED / 1000.0;
       this.el.setAttribute('position', pos);
     }
   }
 },

 getDx: function(vec3) {
   return Math.sqrt(vec3.x*vec3.x + vec3.y*vec3.y + vec3.z*vec3.z)
 },
 
 getDistance: function(pos1, pos2) {
   let dx = pos2.x - pos1.x;
   let dy = pos2.y - pos1.y;
   let dz = pos2.z - pos1.z;
   return Math.sqrt(dx*dx + dy*dy + dz*dz);
 }

});
