var timeHandler;
var isDay;
var time;
var wind = [];
var windAmt = 15;
var windDir;
var windMag;
var condition;

function setup() {
	var url = 'https://api.apixu.com/v1/current.json?key=19cc3d02cd894c1ea8e181058171408&q=New York';
	loadJSON(url, gotWeather);
	windDir = createVector();
	timeHandler = new timeHandler();
	conditionHandler = new conditionHandler();
	window.onresize = function(){ location.reload(); }
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < windAmt; i++) {
			wind.push(new Wind());
	}
}

function draw() {

	timeHandler.update();
	conditionHandler.setup();
	conditionHandler.update();

	if (windMag > 0) {
		for (i = 0; i < wind.length; i++) {
			wind[i].update();
			wind[i].show();
		}
	}
}
