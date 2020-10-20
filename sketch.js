var database;
var form;
var player;
var game;
var playerCount;
var gameState;
var allPlayers;


function setup(){
  database = firebase.database(); 
  createCanvas(500,500);
 gameState = 0;
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
  background("white");
  if(playerCount===4)
    game.update(1);
  if(gameState===1)
    game.play();
}


