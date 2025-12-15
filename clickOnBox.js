/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
    this.raycaster = null;
    console.log('click-on-box component initialized on:', this.el);
  },

  boxClicked: function() {
    console.log('CLICK EVENT FIRED!');
    
    // Get the raycaster from the parent entity
    if (!this.raycaster) {
      console.log('Getting raycaster from parent');
      this.raycaster = this.el.parentNode.components.raycaster;
      console.log('Raycaster:', this.raycaster);
    }
    
    if (!this.raycaster) {
      console.log('ERROR: No raycaster found!');
      return;
    }
    
    // Get what the raycaster is currently intersecting
    let intersections = this.raycaster.intersectedEls;
    
    console.log('Intersections:', intersections);
    
    if (intersections && intersections.length > 0) {
      // Get the first intersected element (the box)
      let box = intersections[0];
      let boxPosition = box.getAttribute('position');
      
      console.log('Box found at position:', boxPosition);
      
      let torpedo = document.getElementById('torpedo');
      torpedo.emit('fire', {boxPosition: boxPosition});
    } else {
      console.log('No intersections found!');
    }
  }
});
