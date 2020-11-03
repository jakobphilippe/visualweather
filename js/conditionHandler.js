function conditionHandler() {
  this.x = windowWidth-windowWidth-240;
  this.speed = 1.5;
  cloud = loadImage('http://www.jakobphilippe.com/visual-weather/images/cloud.png');

  this.setup = function() {
    if (condition == 'Partly cloudy') {
      image(cloud, this.x, windowHeight/11, cloud.width/4.4, cloud.height/4.4);
    }
  }

  this.update = function() {
    this.x += this.speed;
    if (this.x > windowWidth) {
      this.x = windowWidth-windowWidth-240;
    }
  }
}
