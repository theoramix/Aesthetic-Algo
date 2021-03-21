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

const lengthOfRectangles = [100,500,1000,200,500,400,50,750,1000,650,300,100,500,900,100];

// -------------------
//       Drawing
// -------------------
function setup() {
    p6_CreateCanvas()
}

function lineOfRectangles(y) {
    for (let i = 0; i < 14; ++i) {
        rect(i * width/14, y, lengthOfRectangles[i]/14, width/14);
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