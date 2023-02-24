
//board
let blocksize = 25;
let rows = 20;
let colums = 20;
let board;
let context;

//snake head
let snakeX = blocksize * 5;
let snakeY = blocksize * 5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

//prey
let preyX;
let preyY;

let gameOver = false;


window.onloal = function(){
  board = document.getElementById("board");
  board.height = rows * blocksize;
  board.width = colums * blocksize;
  context = board.getContext("2d"); //used for drawing on the board
  
  placePrey();
  document.addEventListener("keyup", changeDirection);
  //update();
  setInterval(update, 1000/10); /// 100milliseconds

}

function update(){
  if(gameOver)
  context.fillstyle = "black";
  context.fillRect(0,0,board.width,board.height);
 
  context.fillstyle = "red";
  context.fillRect(preyX,preyY,blocksize,blocksize);

  if(snakeX == preyX && snakeY == preyY){
    snakeBody.push([preyX,preyY])
    placePrey();

    for(let j = snakeBody.length-1; j > 0; j--){
      snakeBody[j] = snakeBody[j-1];
    }
    if(snakeBody.length){
      snakeBody[0] = [snakeX,snakeY];
    }



  context.fillstyle = "lime";
  snakeX += velocityX * blocksize;
  snakeY += velocityY * blocksize;
  context.fillRect(snakeX,snakeY,blocksize,blocksize);
  for(let t = 0; t < snakeBody.length; t++){
    context.fillRect(snakeBody[t][0], snakeBody[t][1],blocksize,blocksize);
    }


    //game over condition
    if(snakeX < 0 || snakeX > colums * blocksize || snakeY < 0 || snakeY > rows * blocksize){
      gameOver = true;
      alert("Game Over");
    }
    for(let p = 0; p < snakeBody.length; p++){
      if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
        gameOver = true;
        alert("game over");
      }
    }

  }
}


function changeDirection(i){
  if(i.code == "ArrowUp" && velocityY != 1){
      velocityX = 0;
      velocityY = -1;
  }
  else if(i.code == "ArrowDown" && velocityY != -1){
      velocityX = 0;
      velocityY = 1;
  }
  else if(i.code == "ArrowLeft" && velocityX != 1){
      velocityX = -1;
      velocityY= 0;
  }
  else if(i.code == "ArrowRight" && velocityX != -1){
      velocityX = 1;
      velocityY = 0;
  }
}

function placePrey(){
  //0-1) * colums -> (0-19.9999) -> (0-19) * 25
  preyX = Math.floor(Math.random * colums) * blocksize;
  preyY = Math.floor(Math.random * rows) * blocksize;
}