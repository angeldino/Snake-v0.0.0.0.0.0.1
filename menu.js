var canvas = document.getElementById("micanvas");
var contexto = canvas.getContext("2d");

function draw() {
    //contexto.clearRect(0, 0, canvas.width, canvas.height);
    contexto.fillStyle = "#FFFFFF";
    contexto.fillRect(5,5,0,0);
}

setInterval(draw, 10);