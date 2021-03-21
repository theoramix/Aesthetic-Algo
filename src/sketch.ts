// -------------------
//  Parameters and UI
// -------------------
/*
const gui = new dat.GUI()
const params = {
    Download_Image: () => save(),
}
gui.add(params, "Download_Image") 
*/
function generate_sizes() {
	const sizes = [100,300,500,1000,500,300,300,200,100,200,300,1000,500,200,100]
	const sum = sizes.reduce((a, b) => a + b, 0) // calcule la somme de tous les éléments du tableau
	console.log(sum, width)
	return sizes.map(a => a / sum * width) // normalisation : on divise chaque élément par sum et on le multiplie par width
}

let lengthOfRectangles
//const lesCouleurs...

// -------------------
//       Drawing
// -------------------
function setup() {
    p6_CreateCanvas()
	lengthOfRectangles = generate_sizes()
}

function lineOfRectangles(y) {
	//Les couleurs c ici
	let x=0
    for (let i = 0; i < lengthOfRectangles.length; ++i) {
        rect(x, y, lengthOfRectangles[i], width/lengthOfRectangles.length);
		x+=lengthOfRectangles[i];
    }
}

// -------------------
//    Initialization
// -------------------
function draw() {
	background(200)
	for (let i = 0; i < lengthOfRectangles.length; ++i) {
		lineOfRectangles(i * height / lengthOfRectangles.length)
	}
}

function windowResized() {
    p6_ResizeCanvas()
	lengthOfRectangles = generate_sizes()
}