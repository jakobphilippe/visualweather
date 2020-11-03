function gotWeather(weather) {
  // TIME AND DAY/NIGHT CYCLE
  time = weather.location.localtime;
  time = time.split(' ');
  time = time[1];
  isDay = weather.current.is_day;

  // WIND DIRECTION AND SPEED
  var angle = radians(Number(weather.current.wind_degree));
  windMag = Number(weather.current.wind_mph);
  windDirPre = p5.Vector.fromAngle(angle);
  windDirX = windDirPre.x * windMag/4;
  WindDirY = windDirPre.y * windMag/4;
  windDir = createVector(windDirX, WindDirY);

  condition = weather.current.condition.text;

}
