let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 12 + 1) * box,
    y: Math.floor(Math.random() * 12 + 1) * box
}

function createBackground(){
    context.fillStyle = "#AAD951";
    context.fillRect(0, 0, 13 * box, 13 * box);
}

function createSnake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "#7CA81D";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

function update(event){
    if(event.keyCode == 37 && direction != "right"){
        direction = "left";
    } else if(event.keyCode == 38 && direction != "down"){
        direction = "up";
    } else if(event.keyCode == 39 && direction != "left"){
        direction = "right";
    } else if(event.keyCode == 40 && direction != "up"){
        direction = "down";
    }
}

function startGame(){
    createBackground();
    createSnake();
    drawFood();

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

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 12 + 1) * box;
        food.y = Math.floor(Math.random() * 12 + 1) * box;
    }
    

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

    if(snake[0].x > 12 *box && direction == "right"){
        snake[0].x = 0
    } else if(snake[0].x < 0 && direction == "left"){
        snake[0].x = 13 * box;
    } else if(snake[0].y > 12 * box && direction == "down"){
        snake[0].y = 0;
    } else if(snake[0].y < 0 && direction == "up"){
        snake[0].y = 13 * box;
    }

    for(i = 1; i < snake.length; i++) {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game Over :(');
        }
    }
}

let game = setInterval(startGame, 100);

document.addEventListener('keydown', update);
