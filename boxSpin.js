AFRAME.registerComponent('box-spin', {

  tick: function (time, delta) {
    let rotation = this.el.getAttribute('rotation')
    rotation.y = (rotation.y + 1) % 360
    this.el.setAttribute('rotation', rotation)
  },
  
});
