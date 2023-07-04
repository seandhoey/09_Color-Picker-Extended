// Example importing a module. In this case a module from lodash, which was installed using npm, in the terminal in VS code.
// Can't use { without } because of the way it is exported from the module.
import without from './node_modules/lodash-es/without.js';

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function myRandom() {
	// Range of random.
	return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

function componentToHex(c) {
	// Integer to hex.
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function randomHex() {
	// Hex instead of RGB.
	return ("#" + componentToHex(myRandom()) 
		+ componentToHex(myRandom()) + componentToHex(myRandom()));
}

function setGradient() {
	body.style.background = "linear-gradient(to right, "
		+ color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomColor() {
	color1.value = randomHex();
	color2.value = randomHex();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);

randomColor();