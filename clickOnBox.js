/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },
  
  boxClicked: function(event) {
    // Get the box that was actually clicked using the raycaster intersection
    let intersectedEl = event.detail.intersection ? event.detail.intersection.object.el : null;
    
    // If we have an intersected element, use its position, otherwise fall back to getting box by ID
    let box = intersectedEl || document.getElementById('box');
    let boxPosition = box.getAttribute('position');
    
    console.log('Click detected! Box position:', boxPosition);
    
    let torpedo = document.getElementById('torpedo');
    torpedo.emit('fire', {boxPosition: boxPosition});
  }
});
