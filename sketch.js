var circulation = [];
var bgColor = 255;

function setup() {
  // title
  title = createA('https://github.com/livacengiz/cavity', 'cavity', '_blank');
  title.position(20, 20);

  // Hole
  holeSpan = createSpan('zero point experience');
  holeSpan.position(20, 60)
  holeSpan.style('font-family', 'monospace')
  holeSlider = createSlider(0, 250, random(125))
  holeSlider.position(20,80);

  // Complex
  complexSpan = createSpan('complex experience');
  complexSpan.position(20, 110)
  complexSpan.style('font-family', 'monospace')
  complexSlider = createSlider(-250, 250, -180)
  complexSlider.position(20,130);

  // Inside
  curveSpan = createSpan('curve experience');
  curveSpan.position(20, 160)
  curveSpan.style('font-family', 'monospace')
  curveSlider = createSlider(-250, 255, random(80))
  curveSlider.position(20,180);

  // Opaticy
  opacitySpan = createSpan('opaticy experience');
  opacitySpan.position(20, 210)
  opacitySpan.style('font-family', 'monospace')
  opacitySlider = createSlider(10, 100, 40)
  opacitySlider.position(20,230);


  // Radians
  radiansSpan = createSpan('radians experience');
  radiansSpan.position(20, 260)
  radiansSpan.style('font-family', 'monospace')
  radiansSlider = createSlider(10, 90, 60, 10)
  radiansSlider.position(20, 280);

  //Background color
  backgroundColor = createCheckbox('background color: black', false);
  backgroundColor.changed(changeBG);
  backgroundColor.position(20, 310)
  backgroundColor.id("bgLabel")
  backgroundColor.style('font-family', 'monospace')

  drawStyle = createRadio();
  drawStyle.option('bezier');
  drawStyle.option('line');
  drawStyle.position(20, 340)
  drawStyle.style('width', '60px');
  drawStyle.id('drawStyle');

  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255, 255, 255, 1)

  for (var i = 0; i < 180; i++) {
    circulation.push(circulation[i] = floor(randomGaussian(0,70)))
  }

}

function draw() {
  background(bgColor);
  hole = holeSlider.value();
  complex = complexSlider.value();
  curve = curveSlider.value();
  alpha = map(opacitySlider.value(), 0,100, 0,1)
  rad = radiansSlider.value();
  translate(width/2, height/2);
  for (var i = 0; i < circulation.length; i++) {


    stroke(curve,100, hole+80, alpha);
    noFill()
    var circ = abs(circulation[i]);
    var style = drawStyle.value();
    if (style == 'line'){
      rotate(TWO_PI/circulation.length)
      line(hole, curve, circ, complex);
    }else {
      rotate(radians(rad))
      bezier(hole, 10, circ, curve, curve, circ, 105, complex);
    }
  }
}

function changeBG() {
  var spans = document.getElementsByTagName("SPAN")
  var bg = document.getElementById("bgLabel")
  var drawStyle = document.getElementById("drawStyle")
  if (this.checked()) {
  bgColor = 0;
  bg.style.color = "white";
  drawStyle.style.color = "white";
  for (var i = 0; i < spans.length; i++) {
      spans[i].style.color = "white";
    }
} else {
  bgColor = 255;
  for (var i = 0; i < spans.length; i++) {
      spans[i].style.color = "black";
    }
  bg.style.color = "black";
  drawStyle.style.color = "black";
}}
