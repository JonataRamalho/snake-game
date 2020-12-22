let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function createBackground(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 8, 16 * box, 16 * box);
}

function createSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function startGame(){
    createBackground();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right"){
        snakeX += box;
    } else if(direction == "left"){
        snakeX -= box;
    } else if(direction == "up"){
        snakeY -= box;
    } else if(direction == "down"){
        snakeY += box;
    }

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(startGame, 100);
