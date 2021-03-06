// function setup() {
//   // put setup code here
//   createCanvas(400, 400);
// }

// function draw() {
//   // put drawing code here
//   // background(120, 0, 0);
//   // ellipse(50, 50, 80, 80);
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

// function setup() {
//   createCanvas(400, 400);
//   background(0);
// }

// function draw() {
//   // noStroke();
//   // fill(255);
//   // circle(mouseX, mouseY, 10);
//   point(mouseX, mouseY);
//   stroke("white");
//   strokeWeight(10);
// }
var radius;
var c;

function setup() {
  createCanvas(window.screen.width - 100, window.screen.height - 300);
  createP();
  slider = createSlider(1, 20, 10);
  eraser = createButton("clear");
  eraser.mousePressed(changeBG);
  checkbox = createCheckbox("Erase", false);
  c = color(255, 0, 0);
  background(255);
  colorMode(RGB);
  createColorPickerHandle();
}

function draw() {
  radius = slider.value();
  /*
  if (mouseIsPressed && mouseX<400) {
    for (y = 0; y < height; y++) {
      for (x = 0; x < width-50; x++) {
        var distance = dist(x, y, mouseX, mouseY);
        if (distance < radius) {
          set(x,y, c);
        }
      }
    }
  }
      updatePixels()
  */
}

function mouseClicked() {
  if (mouseX > 400) {
    c = get(mouseX, mouseY);
    checkbox.checked(false);
  } else {
    stampRectangle(c);
  }
}

function mouseDragged() {
  if (checkbox.checked()) {
    stroke(255);
  } else {
    stroke(c);
  }
  if (mouseX < window.screen.width - 300) {
    strokeWeight(slider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function changeBG() {
  background(255);
  createColorPickerHandle();
}

function createColorPickerHandle() {
  colorPicker = createImage(100, height);
  var myWidth = colorPicker.width / 3;
  colorPicker.loadPixels();
  from = color(0, 255, 0);
  to = color(255, 0, 0);
  console.log(hue(from));
  for (var y = 0; y < height; y++) {
    for (x = 0; x < myWidth; x++) {
      color1 = lerpColor(from, to, y / height);
      colorPicker.set(x, y, color1);
    }
  }
  from = color(0, 0, 255);
  to = color(0, 255, 0);
  console.log(hue(from));
  for (var y = 0; y < height; y++) {
    for (x = myWidth; x < myWidth * 2; x++) {
      color1 = lerpColor(from, to, y / height);
      colorPicker.set(x, y, color1);
    }
  }
  from = color(255, 0, 0);
  to = color(0, 255, 255);
  console.log(hue(from));
  for (var y = 0; y < height; y++) {
    for (x = myWidth * 2; x < myWidth * 3; x++) {
      color1 = lerpColor(from, to, y / height);
      colorPicker.set(x, y, color1);
    }
  }
  colorPicker.updatePixels();
  image(colorPicker, window.screen.width - 300, 0);
}

function stampRectangle(c) {
  fill(c);
  noStroke();
  rect(mouseX, mouseY, slider.value(), slider.value());
}

function eraserSwitch() {
  //
}
