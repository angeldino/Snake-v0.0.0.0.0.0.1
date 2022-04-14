var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
var speed = 10;
var rightPressed = false;
var leftPressed = false;
var touchCube = false;
var moveAxis = 1;
var score = 0;
var lives = 3;
//move Axis
/*
Derecha = 1
Izquierda = 2
Abajo = 3
Arriba = 4
*/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 68) {
        rightPressed = true;
        movement();
    }
    else if (e.keyCode == 65) {
        leftPressed = true;
        movement();
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 68) {
        rightPressed = false;
    }
    else if (e.keyCode == 65) {
        leftPressed = false;
    }
}

function Cube(posX, posY, width, height) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
}

this.posX = 200;
this.posY = 200;
this.width = 10;
this.height = 10;

var cabeza = new Cube(this.posX, this.posY, this.width, this.height);
var cuerpo = new Cube(this.posX, this.posY, this.width, this.height);

cuerpo.posX = Math.floor(Math.random() * canvas.width - 10);
cuerpo.posY = Math.floor(Math.random() * canvas.height - 10);;
console.log(cuerpo.posX);
console.log(cuerpo.posY);

function drawCubes() {
    ctx.beginPath();
    ctx.rect(cabeza.posX, cabeza.posY, cabeza.width, cabeza.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(cuerpo.posX, cuerpo.posY, cuerpo.width, cuerpo.height);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function movement(){
    if (rightPressed && moveAxis == 1) {
        moveAxis = 3;
    }
    else if (leftPressed && moveAxis == 1) {
        moveAxis = 4;
    }
    else if (leftPressed && moveAxis == 2) {
        moveAxis = 3;
    }
    else if (rightPressed && moveAxis == 2) {
        moveAxis = 4;
    }
    else if (rightPressed && moveAxis == 3) {
        moveAxis = 2;
    }
    else if (leftPressed && moveAxis == 3) {
        moveAxis = 1;
    }
    else if (rightPressed && moveAxis == 4) {
        moveAxis = 1;
    }
    else if (leftPressed && moveAxis == 4) {
        moveAxis = 2;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (moveAxis == 1) {
        cabeza.posX += speed; //Derecha
    }
    else if (moveAxis == 2) { //Izquierda
        cabeza.posX -= speed;
    }
    else if (moveAxis == 3) { //Abajo
        cabeza.posY += speed;
    }
    else if (moveAxis == 4) { //Arriba
        cabeza.posY -= speed;
    }

    drawCubes();
    scoreCount();
}

function scoreCount() {
    if(cabeza.posX >= cuerpo.posX && cabeza.posX < cuerpo.posX+10 && cabeza.posY >= cuerpo.posY && cabeza.posY < cuerpo.posY+10) {
        score += 1;
    }
    console.log(score);
}

setInterval(draw, 100);