//board
let board;
let boardwidth = 360;
let boardHeight = 640;
let context;

//BIRD
let birdWidth = 34; //width/height = 488/228 = 17/12
let birdHeight = 24;
let birdX = boardwidth/8;
let birdY = boardHeight/2;
let birdImage;

let bird = {
    x: birdX,
    y: birdY,
    width : birdwidth,
    height : birdHeight
}


window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardwidth;
    context = board.getContext("2d"); //used to draw on board

    // draw flappy bird
    context.fillStyle ="green";
    context.fillReact(bird.x,bird.y,bird.width,bird.height);

    //load images
    birdImage = new Image();
    birdImage.src = "./thebird.png";
    birdImage.onload = function() {
        context.drawImage(birdImage,bird.x,bird.y,bird.width,bird.height);
    }
    
}
