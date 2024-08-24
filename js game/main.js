let board;
let boardWidth = 369;
let boardHeight = 576;
let context;

let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerWidth/2;
let doodlerY = boardHeight*7/8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

let doodler = {
    img : null,
    x : doodlerX,
    y : doodlerY,
    width : doodlerWidth,
    height : doodlerHeight
}

//physics
let velocityX = 0;
let velocityY = 0;
let initialVelocityY = -8;
let gravity = 0.4;;


//Ahmadshajahan Platform
let platformArray = [];
let platformWidth = 60;
let platformHeight = 18;
let platformImg;

let score = 0;
let maxScore = 0;
let gameOver = false;

window.onload = function(){
    board = document.getElementById("board");
        board.height = boardHeight;
        board.width = boardHeight;
        context = board.getContext("2d");

    doodlerRightImg = new Image();
    doodlerRightImg.src = "./doodler-right.png";
    doodler.IMG = doodlerRightImg;
    doodlerRightImg.onload = function(){
        context.drawImage(doodler.img,doodler.x,doodler.y,doodler.width,doodler.height);

    }
    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "./doodler-left.png";

    platform = new Image();
    platform.src = "./platform.png";

    velocityY = initialVelocityY;
    placePlatforms();
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodler);


    
}

function update(){
    requestAnimationFrame(update);
    if(gameOver) {
        return;
    }
    context.clearRect(0, 0, boardWidth, boardHeight);

    //doodler
    doodler.x += velocityX;
    if (doodler.x > boardWidth) {
        doodler.x = 0;
    }
    else if (doodler.x + doodler.width < 0) {
        doodler.x = boardWidth;
    }

    velocity += gravity;
    doodler.y += velocity;
    if(doodler.y > board.height) {
        gameOver = true;
    }
}
