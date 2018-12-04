//
//
//
//
//
//
// window.onload = function () {
//     canvas = document.getElementById("game");
//     ctx = canvas.getContext("2d");
//     document.addEventListener("keydown", keyPush);
//     setInterval(game, 1200 / 15);
// }
// px = py = 10;
// gs = tc = 20;
// ax = ay = 15;
// xv = yv = 0;
// trail = [];
// tail = 5;
//
// function game() {
//     px += xv;
//     py += yv;
//     if (px < 0) {
//         px = tc - 1;
//     }
//     if (px > tc - 1) {
//         px = 0;
//     }
//     if (py < 0) {
//         py = tc - 1;
//     }
//     if (py > tc - 1) {
//         py = 0;
//     }
//     ctx.fillStyle = "grey";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//
//     ctx.fillStyle = "orange";
//     for (var i = 0; i < trail.length; i++) {
//         ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
//         if (trail[i].x == px && trail[i].y == py) {
//             tail = 5;
//         }
//     }
//     trail.push({x: px, y: py});
//     while (trail.length > tail) {
//         trail.shift();
//     }
//
//     if (ax == px && ay == py) {
//         tail++;
//         ax = Math.floor(Math.random() * tc);
//         ay = Math.floor(Math.random() * tc);
//     }
//     ctx.fillStyle = "red";
//     ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
// }
//
// function keyPush(evt) {
//     switch (evt.keyCode) {
//         case 37:
//             xv = -1;
//             yv = 0;
//             break;
//         case 38:
//             xv = 0;
//             yv = -1;
//             break;
//         case 39:
//             xv = 1;
//             yv = 0;
//             break;
//         case 40:
//             xv = 0;
//             yv = 1;
//             break;
//     }
// }

var canvas = document.getElementById('snake');
var context = canvas.getContext('2d');
var keys = [];
var size = canvas.width / 32;
var score = 0;
var direction = {x: 1, y: 0};
var snake = [{x: 2, y: 0}, {x: 1, y: 0}, {x: 0, y: 0}];
var food = {x: (parseInt(Math.random() * 32)), y: (parseInt(Math.random() * 32))};

document.addEventListener('keydown', function (e) {
    keys[e.keyCode] = true;
});

document.addEventListener('keyup', function (e) {
    delete keys[e.keyCode];
});

setInterval(control, 90);

function control() {   // W:87 S:83 A:65 D:68

    if ((keys[37] || keys[65]) && direction.x == 0) {
        direction = {x: -1, y: 0};
    } else if ((keys[38] || keys[87]) && direction.y == 0) {
        direction = {x: 0, y: -1};
    } else if ((keys[39] || keys[68]) && direction.x == 0) {
        direction = {x: 1, y: 0};
    } else if ((keys[40] || keys[83]) && direction.y == 0) {
        direction = {x: 0, y: 1};
    }
}


var interval = setInterval(game(), 100);

var stopInterval = setInterval(game(), 0);

function stop() {
    setInterval(stopInterval);
}

function start() {
    setInterval(interval);
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
        food.x = parseInt(Math.random() * 32);
        food.y = parseInt(Math.random() * 32);
        snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
    }

    for (var i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            window.location.reload(false);
            alert('Prašome neužsimti kanibalizmu ir savęs nevalgyti');
            break;
        }

        if (snake[0].x > 31 || snake[0].y > 31 || snake[0].x < 0 || snake[0].y < 0) {
            window.location.reload();
            alert('Kiaurai sieną gyvatė eiti negali');
            break;
        }
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'orange';
    context.font = '20px Arial';
    context.fillText('Taškai: ' + score, 10, 590);


    context.fillStyle = 'green';
    for (var i = 0; i < snake.length; i++) {
        context.fillRect((snake[i].x * size), (snake[i].y * size), size, size);

    }

    context.fillStyle = 'darkgreen';
    for (var i = 0; i < snake.length; i++) {
        context.fillRect((snake[0].x * size), (snake[0].y * size), size, size);

    }

    context.fillStyle = 'red';
    context.fillRect((food.x * size), (food.y * size), size, size);
}


console.log("helloooo")