/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
    this.raycaster = null;
  },

  boxClicked: function() {
    // Get the raycaster from the parent entity
    if (!this.raycaster) {
      this.raycaster = this.el.parentNode.components.raycaster;
    }
    
    // Get what the raycaster is currently intersecting
    let intersections = this.raycaster.intersectedEls;
    
    console.log('Click! Intersections:', intersections);
    
    if (intersections && intersections.length > 0) {
      // Get the first intersected element (the box)
      let box = intersections[0];
      let boxPosition = box.getAttribute('position');
      
      console.log('Box found at position:', boxPosition);
      
      let torpedo = document.getElementById('torpedo');
      torpedo.emit('fire', {boxPosition: boxPosition});
    }
  }
});
