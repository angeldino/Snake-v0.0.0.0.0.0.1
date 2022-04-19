var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
var speed = 10;
var rightPressed = false;
var leftPressed = false;
var touchCube = false;
var moveAxis = 1;
var score = 0;
var lives = 3;
var scoreValidation = false;
var cordX = [];
var cordY = [];
var count = 6;
var condicion = false;
var countCondicion = 0;

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

class Cube {
    constructor(posX, posY, width, height) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }
}

this.posX = 200;
this.posY = 200;
this.width = 10;
this.height = 10;

var cabeza = new Cube(this.posX, this.posY, this.width, this.height); //cabeza que dirige el gusano
var cuerpo = new Cube(this.posX, this.posY, this.width, this.height); // score para tocar y sumar punto
var medio = new Cube(this.posX, this.posY, this.width, this.height); //cuerpo medio del gusano

function createNewCube() {
    
}

function changePos() {
    var contador1 = cordX.push(cabeza.posX);
    var contador2 = cordY.push(cabeza.posY);
    for(i = 0; i < cordX.length; i++) {
    }
}

function changePosScoreCube() {
    cuerpo.posX = Math.floor(Math.random() * canvas.width - 10);
    cuerpo.posY = Math.floor(Math.random() * canvas.height - 10);;
}

function drawPlayer() {
    ctx.beginPath();
    ctx.rect(cabeza.posX, cabeza.posY, cabeza.width, cabeza.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function addMedio() {
    changePos();
    ctx.beginPath();
    ctx.rect(cordX[i-2], cordY[i-2], medio.width, medio.height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

changePosScoreCube();
function drawScoreCube() {
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

    drawPlayer();
    drawScoreCube();
    scoreCount();
    addMedio()
    changePos();
}

function scoreCount() {
    if(cabeza.posX >= cuerpo.posX && cabeza.posX < cuerpo.posX+10 && cabeza.posY >= cuerpo.posY && cabeza.posY < cuerpo.posY+10) {
        score += 1;
        changePosScoreCube();
    }else if(cabeza.posX+10 >= cuerpo.posX && cabeza.posX < cuerpo.posX+10 && cabeza.posY+10 >= cuerpo.posY && cabeza.posY+10 < cuerpo.posY+10){
        score += 1;
        changePosScoreCube();
    }
}

setInterval(draw, 100);

