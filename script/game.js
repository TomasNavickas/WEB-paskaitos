var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

// var keys = [];
var squares = canvas.width / 30;
var score = 0;
var direction = {x: 1, y: 0};
var snake = [{x: 2, y: 3}, {x: 1, y: 3}, {x: 0, y: 3}];
var food = {x: (parseInt(Math.random() * 30)), y: (parseInt(Math.random() * 30))};


document.addEventListener('keydown', turn);

function turn(key) {
    switch (key.keyCode) {
        case 37:
            direction = {x: -1, y: 0};
            break;
        case 38:
            direction = {x: 0, y: -1};
            break;
        case 39:
            direction = {x: 1, y: 0};
            break;
        case 40:
            direction = {x: 0, y: 1};
            break;
        case 65:
            direction = {x: -1, y: 0};
            break;
        case 87:
            direction = {x: 0, y: -1};
            break;
        case 68:
            direction = {x: 1, y: 0};
            break;
        case 83:
            direction = {x: 0, y: 1};
            break;
    }
}

// document.addEventListener('keydown', function (btn) {
//     keys[btn.keyCode] = true;
// });
//
// document.addEventListener('keyup', function (btn) {
//     delete keys[btn.keyCode];
// });
//
// setInterval(move, 90);
//
// function move() {   // W:87 S:83 A:65 D:68
//     if ((keys[37]) || (keys[65]) && direction.x == 0) {
//         direction = {x: -1, y: 0};
//     } else if ((keys[38]) || (keys[87]) && direction.y == 0) {
//         direction = {x: 0, y: -1};
//     } else if ((keys[39]) || (keys[68]) && direction.x == 0) {
//         direction = {x: 1, y: 0};
//     } else if ((keys[40]) || (keys[83]) && direction.y == 0) {
//         direction = {x: 0, y: 1};
//     }
// }

function stop() {
    alert('Iki pasimatymo!');
    window.open('/index.html');
}


document.addEventListener('keypress', begin);

function begin(e) {
    switch (e.keyCode) {
        case 32:  // SPACE
            setInterval(game, 90);
    }
}

function start() {
    setInterval(game, 90)
}


function game() {

    for (var i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    snake[0].x += direction.x;
    snake[0].y += direction.y;

    if (snake[0].x == food.x && snake[0].y == food.y) {
        score++;
        food.x = parseInt(Math.random() * 30);
        food.y = parseInt(Math.random() * 30);
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
    }

    for (var i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            window.location.reload(false);
            alert('Prašome neužsimti kanibalizmu ir savęs nevalgyti');
            break;
        }

        if (snake[0].x > 29 || snake[0].y > 29 || snake[0].x < 0 || snake[0].y < 0) {
            window.location.reload();
            alert('Kiaurai sieną gyvatė eiti negali');
            break;
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'orange';
    ctx.font = '20px Arial';
    ctx.fillText('Taškai: ' + score, 10, 590);


    ctx.fillStyle = 'green';
    for (var i = 0; i < snake.length; i++) {
        ctx.fillRect((snake[i].x * squares), (snake[i].y * squares), squares, squares);

    }

    ctx.fillStyle = 'darkgreen';
    for (var i = 0; i < snake.length; i++) {
        ctx.fillRect((snake[0].x * squares), (snake[0].y * squares), squares, squares);

    }

    ctx.fillStyle = 'red';
    ctx.fillRect((food.x * squares), (food.y * squares), squares, squares);
}

