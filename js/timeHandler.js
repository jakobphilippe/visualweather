function timeHandler() {
  sun = loadImage('http://www.jakobphilippe.com/visual-weather/images/sun.png')
	moon = loadImage('http://www.jakobphilippe.com/visual-weather/images/moon.png')
  dawn = loadImage('http://www.jakobphilippe.com/visual-weather/images/terrains/dawn.png');
  midmorning = loadImage('http://www.jakobphilippe.com/visual-weather/images/terrains/midmorning.png');
  midday = loadImage('http://www.jakobphilippe.com/visual-weather/images/terrains/midday.png');
  afternoon = loadImage('http://www.jakobphilippe.com/visual-weather/images/terrains/afternoon.png');
  dusk = loadImage('http://www.jakobphilippe.com/visual-weather/images/terrains/dusk.png');
  night = loadImage('http://www.jakobphilippe.com/visual-weather/images/terrains/night.png');

  this.update = function() {

    // BACKGROUND/TERRAIN/SUN HANDLER

    if (time >= '6:00' && time <= '6:59') {
      background(101,170,191);
      image(dawn, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*0/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '7:00' && time <= '7:59') {
      background(101,170,191);
      image(dawn, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*9/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '8:00' && time <= '8:59') {
      background(101,170,191);
      image(midmorning, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*18/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '9:00' && time <= '9:59') {
      background(101,170,191);
      image(midmorning, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*27/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '10:00' && time <= '10:59') {
      background(135, 206, 250);
      image(midmorning, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*36/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '11:00' && time <= '11:59') {
      background(135, 206, 250);
      image(midday, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*45/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '12:00' && time <= '12:59') {
      background(135, 206, 250);
      image(midday, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*54/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '13:00' && time <= '13:59') {
      background(135, 206, 250);
      image(midday, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*63/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '14:00' && time <= '14:59') {
      background(135, 206, 250);
      image(afternoon, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*72/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '15:00' && time <= '15:59') {
      background(53, 121, 141);
      image(afternoon, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*81/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '16:00' && time <= '16:59') {
      background(53, 121, 141);
      image(afternoon, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*90/100-110, 0, sun.width/2.2, sun.height/2.2);
    } else if (time >= '17:00' && time <= '17:59') {
      background(53, 121, 141);
      image(dusk, 0, 0, windowWidth, windowHeight);
      image(sun, windowWidth*100/100-110, 0, sun.width/2.2, sun.height/2.2);
    }

    if (time >= '18:00' && time <= '18:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*0/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '19:00' && time <= '19:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*9/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '20:00' && time <= '20:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*18/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '21:00' && time <= '21:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*27/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '22:00' && time <= '22:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*36/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '23:00' && time <= '23:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*45/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '0:00' && time <= '00:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*54/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '1:00' && time <= '1:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*63/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '2:00' && time <= '2:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*72/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '3:00' && time <= '3:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*81/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '4:00' && time <= '4:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*90/100-110, 0, moon.width/2.2, moon.height/2.2);
    } else if (time >= '5:00' && time <= '5:59') {
      background(31, 21, 91);
      image(night, 0, 0, windowWidth, windowHeight);
      image(moon, windowWidth*100/100-110, 0, moon.width/2.2, moon.height/2.2);
    }
  }
}
