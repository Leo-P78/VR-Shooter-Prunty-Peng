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
   console.log('Fire event received, torpedo visible:', this.el.getAttribute('visible'));
   if (!this.el.getAttribute('visible')) {
     this.data.boxDistance = this.getDx(event.detail.boxPosition);
     console.log('Firing torpedo! Box distance:', this.data.boxDistance);
     this.el.setAttribute('visible', true);
     this.el.setAttribute('position', {x: 0, y: 0, z: -1});
   } else {
     console.log('Torpedo already visible, not firing');
   }
 },

 tick: function(time, timeDelta) {
   if (this.el.getAttribute('visible')) {
     let pos = this.el.getAttribute('position')
     let torpedoDx = this.getDx(pos)
     if (torpedoDx > this.data.boxDistance + TORPEDO_MARGIN) {
       this.el.setAttribute('visible', false)
       console.log('Torpedo went too far, hiding');
     } else {
       pos.z += -timeDelta * TORPEDO_SPEED / 1000.0;
       this.el.setAttribute('position', pos)
     }
   }
 },

 getDx: function(vec3) {
   return Math.sqrt(vec3.x*vec3.x + vec3.y*vec3.y + vec3.z*vec3.z)
 }

});
