/* global AFRAME */

AFRAME.registerComponent('click-on-box', {

  init: function () {
    this.el.addEventListener('click', this.boxClicked.bind(this));
  },
  
  boxClicked: function() {
    // this.el is now the box itself
    let boxPosition = this.el.getAttribute('position');
    
    console.log('Box clicked! Position:', boxPosition);
    
    let torpedo = document.getElementById('torpedo');
    torpedo.emit('fire', {boxPosition: boxPosition});
  }
});
