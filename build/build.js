function generate_sizes() {
    var sizes = [100, 300, 500, 1000, 500, 300, 300, 200, 100, 200, 300, 1000, 500, 200, 100];
    var sum = sizes.reduce(function (a, b) { return a + b; }, 0);
    console.log(sum, width);
    return sizes.map(function (a) { return a / sum * width; });
}
var lengthOfRectangles;
function setup() {
    p6_CreateCanvas();
    lengthOfRectangles = generate_sizes();
}
function lineOfRectangles(y) {
    var x = 0;
    for (var i = 0; i < lengthOfRectangles.length; ++i) {
        rect(x, y, lengthOfRectangles[i], width / lengthOfRectangles.length);
        x += lengthOfRectangles[i];
    }
}
function draw() {
    background(200);
    for (var i = 0; i < lengthOfRectangles.length; ++i) {
        lineOfRectangles(i * height / lengthOfRectangles.length);
    }
}
function windowResized() {
    p6_ResizeCanvas();
    lengthOfRectangles = generate_sizes();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map