let lambo, ferrari;
let lamboX, ferrariX;
let lamboY, ferrariY;
let speed = 4;
let jumping = false;
let jumpCounter = 0;

class Carro {
  constructor(alto, ancho, color, name) {
    this.alto = alto;
    this.ancho = ancho;
    this.color = color;
    this.name = name;
  }

  display(x, y) {
    stroke(220, 200, 200);
    fill(this.color);
    rect(x, y, this.ancho, this.alto);
  }
}

function setup() {
  createCanvas(600, 500);
  lamboX = 0;
  ferrariX = width;
  lamboY = height - height / 4;
  ferrariY = height - height / 4;

  lambo = new Carro(30, 60, "blue", "lambo");
  ferrari = new Carro(30, 60, "green", "ferrari");

  console.log("lambo ancho es " + lambo.ancho);
  console.log("lambo alto es " + lambo.alto);
  console.log("lambo color es " + lambo.color);
  console.log("lambo name es " + lambo.name);

  console.log("ferrari ancho es " + ferrari.ancho);
  console.log("ferrari alto es " + ferrari.alto);
  console.log("ferrari color es " + ferrari.color);
  console.log("ferrari name es " + ferrari.name);
} if (ferrariX > width - ferrari.ancho) {
    ferrariX = width - ferrari.ancho;
    speed *= -1;
} else if (ferrariX < ferrari.ancho) {
    ferrariX = ferrari.ancho;
    speed *= -1;
}

function draw() {
  background(20, 200, 150);

  lamboX += speed;
  ferrariX -= speed;

  if (lamboX > width - lambo.ancho) {
    lamboX = width - lambo.ancho;
    speed * -1;
  } else if (lamboX < 0) {
    lamboX = 0;
    speed * -1;
  }

  if (ferrariX < ferrari.ancho) {
    ferrariX = ferrari.ancho;
    speed *= -1;
  } else if (ferrariX > width) {
    ferrariX = width;
    speed *= -1;
  }

  if (jumping) {
    if (jumpCounter < 10) {
      lamboY -= 5;
    } else if (jumpCounter < 20) {
      lamboY += 5;
    } else {
      jumping = false;
    }
    jumpCounter++;
  } else {
    lamboY = height - height / 4;
  }

  lambo.display(lamboX, lamboY);
  ferrari.display(ferrariX, ferrariY);
}

function salto() {
  if (!jumping) {
    jumping = true;
    jumpCounter = 0;
  }
}

function keyPressed() {
  if (keyCode === 32) {
    salto();
  }
}
