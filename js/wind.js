function Wind() {
	this.position = createVector(random(width), random(height));

	this.update = function() {
		this.position.add(windDir);
		if (this.position.y > windowHeight-70) {
			this.position.y = random(height);
		}
	}

	this.show = function() {
		fill(44, 176, 55, 40);
		noStroke();
		ellipse(this.position.x, this.position.y, 12, 10);
		if (this.position.y <= 0 || this.position.x >= windowWidth || this.position.y >= windowHeight || this.position.x <= 0) {
			this.r = random(8, 12)
			this.position.x = random(width);
			this.position.y = random(height);
		}
	}
}
