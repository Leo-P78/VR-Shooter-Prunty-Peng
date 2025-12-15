/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },
  
  boxClicked: function() {
    // Always get the box position directly by ID
    let box = document.getElementById('box');
    let boxPosition = box.getAttribute('position');
    
    console.log('Click detected! Box position:', boxPosition);
    
    let torpedo = document.getElementById('torpedo');
    torpedo.emit('fire', {boxPosition: boxPosition});
  }
});
