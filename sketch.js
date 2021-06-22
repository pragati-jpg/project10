var btn_red
var btn_green

var r = 0
var g = 0
var b = 0

function setup() {
  createCanvas(400, 400)
  
  num1 = createInput()
  num1.position(5,60)

  num2= createInput()
  num2.position(200,60)

  btn_red = createButton("red")
  btn_red.position(100,50)
  btn_red.mousePressed(red_bg)

  btn_green = createButton("green")
  btn_green.position(200,50)
  btn_green.mousePressed(green_bg)

}

function draw() {
  background(r,g,b)
}


function red_bg ()
{
  r = 255;
  g = 0;
  b =0;
}
function green_bg ()
{
  r = 0;
  g = 255;
  b =0;


}
function add ()
{
  console.log(n1+n2)
}
function sub ()
{
  console.log(n1-n2)
}
function mul ()
{
  console.log(n1*n2)
}
function division ()
{
  console.log(n1%n2)
}