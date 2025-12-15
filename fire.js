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
     
     this.el.setAttribute('visible', true);
     this.el.setAttribute('position', {x: 0, y: 0, z: -1});
   }
 },

 tick: function(time, timeDelta) {
   if (this.el.getAttribute('visible')) {
     let pos = this.el.getAttribute('position')
     let torpedoDx = this.getDx(pos)
     if (torpedoDx > this.data.boxDistance + TORPEDO_MARGIN) {
       this.el.setAttribute('visible', false)
     } else {
       pos.z += -timeDelta * TORPEDO_SPEED / 1000.0;
       this.el.setAttribute('position', pos)
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
