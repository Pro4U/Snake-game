let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let boardWidth = canvas.width;
let boardHeight = canvas.height;
let cellSize = 50;
let snakeCells = [[20,40]]; //initial position of snake
let direction = "right";


function draw(){
    ctx.clearRect(0, 0, boardWidth, boardHeight);
    
    for(let cell of snakeCells){
        ctx.fillStyle = "black";
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
    }
}

function update(){
    let headX = snakeCells[snakeCells.length - 1][0];
    let headY = snakeCells[snakeCells.length - 1][1];

    let newHeadX;
    let newHeadY;
    if (direction === "up") {
    newHeadX = headX;
    newHeadY = headY - cellSize;
    } else if (direction === "down") {
    newHeadX = headX;
    newHeadY = headY + cellSize;
    } else if (direction === "left") {
    newHeadX = headX - cellSize;
    newHeadY = headY;
    } else {
    newHeadX = headX + cellSize;
    newHeadY = headY;
    }

    snakeCells.push([newHeadX,newHeadY]);
    snakeCells.shift();

}

setInterval(function(){
    draw();
    update();
},200);


document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    direction = "down";
  } else if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key === "ArrowLeft") {
    direction = "left";
  } else {
    direction = "right";
  }
});

















