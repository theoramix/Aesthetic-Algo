// -------------------
//  Parameters and UI
// -------------------
/*
const gui = new dat.GUI()
const params = {
    Download_Image: () => save(),
}
gui.add(params, "Download_Image") */

function generate_sizes() {
	const sizes = [10, 50, 100]
	const sum = sizes.reduce((a, b) => a + b, 0) // calcule la somme de tous les éléments du tableau
	return sizes.map(a => a / sum * width) // normalisation : on divise chaque élément par sum et on le multiplie par width
}

const lengthOfRectangles = generate_sizes()
// -------------------
//       Drawing
// -------------------
function setup() {
    p6_CreateCanvas()
}

function lineOfRectangles(y) {
	for (let i = 0; i < 14; ++i) {
		rect(i * width/14, y, width/14, lengthOfRectangles[i]) //Gère les dimensions de chaque rectangle
	}
}

// -------------------
//    Initialization
// -------------------
function draw() {
	background(200)
	for (let i = 0; i < 14; ++i) {
		lineOfRectangles(i * height / 14)
	}
}

function windowResized() {
    p6_ResizeCanvas()
}