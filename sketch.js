var database;
var form;
var player;
var game;
var playerCount;
var gameState;
var allPlayers;
var redCar,blueCar,blackCar,whiteCar;
var carArray;


function setup(){
  database = firebase.database(); 
  createCanvas(displayWidth,displayHeight);
 gameState = 0;
 game = new Game();
 game.getState();
 game.start();
 redCar = createSprite(100,25,20,20);
 blackCar = createSprite(175,40,20,20);
 blueCar = createSprite(250,25,20,20);
 whiteCar = createSprite(355,40,20,20);
 carArray = [redCar,blueCar,blackCar,whiteCar]; 
}

function draw(){
  background("white");
  if(playerCount===4)
    game.update(1);
  if(gameState===1)
    game.play();
}


