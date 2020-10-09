var database;
var form;
var player;
var game;
var playerCount;
var gameState;


function setup(){
  database = firebase.database(); 
  createCanvas(500,500);
 gameState = 0;
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}


