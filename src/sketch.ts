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
const colors = ['#B3F734','#6CE03A','#23E047','#0CF77E','#00E0AB','#0CECF7','#350CF7','#B500E0','#F70C3F','#F04601','#E03200','#F76E0C','#F09100','#F7BA0C','#CEF000']

// -------------------
//       Drawing
// -------------------
function setup() {
    p6_CreateCanvas()
	lengthOfRectangles = generate_sizes()
}

function lineOfRectangles(y) {
	
	
	let x=0
    for (let i = 0; i < lengthOfRectangles.length; ++i) {
		fill(colors[i]);
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
		fill(colors[i])
		lineOfRectangles(i * height / lengthOfRectangles.length)
	}
}

function windowResized() {
    p6_ResizeCanvas()
	lengthOfRectangles = generate_sizes()
}