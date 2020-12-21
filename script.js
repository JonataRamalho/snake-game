let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

function createBackground() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 8, 16 * box, 16 * box);
}

createBackground();