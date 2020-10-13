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
  
   
    drawSprites();
  
}


