
// Where is the car
let x, y;
class Carro{
  constructor(alto,ancho,color,name){
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  }
}
function setup() {
  createCanvas(700, 500);
  // Start position
  y = height - height/4;
  x = 0;
  // crear una instancia de Carro llamada Lambo
  let lambo = new Carro (10,20,blue,"lambo")
  console.log("lambo ancho es " + lambo.ancho);
  console.log("lambo alto es " + lambo.alto);
  console.log("lambo color es " + lambo.color);
  console.log("lambo name es " + lambo.name);
}


function draw() {
  background(20,200,150);  
  display();
  move();
}  
function move(){
  // Jiggling randomly
  y = y + random(-2, 2);
  
  if (x > width) {
    // Reset 
    x = 0;
    y = height - height/4;
  } else {
    // Moving up at a constant speed
    x = x + 2;
  }
}

function display(){
  // Draw a car
  stroke(220,200,200);
  fill(220,80,200);
  rect(x, y, 50, 30);
}
