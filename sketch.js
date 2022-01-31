var data = [];

var m = 0;
var b = 0;

function setup() {
    createCanvas(1900, 955);
    background(51);
}

  function linearRegression() {
    var xMean = 0;
    var yMean = 0;
    for (var i = 0; i < data.length; i++){
        var x = data[i].x
        xMean += x;
        var y = data[i].y
        yMean += y;
    }

    xMean /= data.length;
    yMean /= data.length;

    var num = 0;
    var den = 0;

    for (var i = 0; i < data.length; i++){
        var x = data[i].x
        var y = data[i].y;
        num += (x - xMean) * (y - yMean);
        den += (x - xMean) * (x - xMean);
    }

    m = num/den;
    b = yMean - m * xMean;

  }



function drawLine() {
    var x1 = 0;
    var y1 = m * x1 + b;
    var x2 = 1;
    var y2 = m * x2 + b;
  
    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);
    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 0, 1, height, 0);
  
    stroke(0, 255, 0);
    strokeWeight(2);
    line(x1, y1, x2, y2);
  }

function mousePressed() {
    var x = map(mouseX, 0, width, 0, 1);
    var y = map(mouseY, 0, height, 1, 0);
    var point = createVector(x, y);
    data.push(point);
}


function draw() {
    background(51);
    for (var i = 0; i < data.length; i++) {
      var x = map(data[i].x, 0, 1, 0, width);
      var y = map(data[i].y, 0, 1, height, 0);
      fill(255);
      stroke(255);
      ellipse(x, y, 8, 8);
    }
  
    if (data.length > 1) {
        linearRegression();
        drawLine();
    }
  }