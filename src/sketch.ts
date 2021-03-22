// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = { 
	Download_Image: () => save(), 
	randomSeed:0;
}
gui.add(params, "Download_Image") 
gui.add(params, "randomSeed",0,100)
function generate_sizes() { // fonction permettant de normaliser la longueur d'une ligne pour la remplir
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

function lineOfRectangles(y,offset) {
	let x=0

    for (let i = 0; i < lengthOfRectangles.length; ++i) {
		let value=colors[(i+offset+colors.length)%colors.length];
		noStroke(); //Enlever les bordures des rectangles
		fill(value);
        rect(x, y, lengthOfRectangles[i], width/lengthOfRectangles.length);
		x+=lengthOfRectangles[i];
	

	}
}

/*function mouseClicked(){
	const color=get(mouseX, mouseY);
	const index=color.indexOf(new p5.Color(color))
	console.log(color)
	if (value == colors[i]) {
		value = '0,0,0';
	}
	else {value = '0,0,0'}
}*/

// -------------------
//    Initialization
// -------------------
function draw() {
	background(200)
	randomSeed(params.randomSeed)
	for (let i = 0; i < lengthOfRectangles.length; ++i) {
		lineOfRectangles(i * height / lengthOfRectangles.length, floor(random(lengthOfRectangles.length)))
	}
}

function windowResized() {
    p6_ResizeCanvas()
	lengthOfRectangles = generate_sizes()
}