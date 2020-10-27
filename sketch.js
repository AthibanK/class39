var database;
var form;
var player;
var game;
var playerCount;
var gameState;
var allPlayers;
var redCar,redCarImg,blueCar,blueCarImg,blackCar,blackCarImg,whiteCar,whiteCarImg;
var carArray;
var trackImg;

function preload(){
  whiteCarImg = loadImage("images/car1.png");
  redCarImg = loadImage("images/car2.png");
  blueCarImg = loadImage("images/car3.png");
  blackCarImg = loadImage("images/car4.png");
  trackImg = loadImage("images/track.jpg");
  }

function setup(){
  database = firebase.database(); 
  createCanvas(displayWidth,displayHeight);
 gameState = 0;
 game = new Game();
 game.getState();
 game.start();
 redCar = createSprite(100,25,20,20);
 redCar.addImage("car2.png",redCarImg);
 blackCar = createSprite(175,40,20,20);
 blackCar.addImage("car4.png",blackCarImg);
 blueCar = createSprite(250,25,20,20);
 blueCar.addImage("car3.png",blueCarImg);
 whiteCar = createSprite(355,40,20,20);
 whiteCar.addImage("car1.png",whiteCarImg);
 carArray = [redCar,blueCar,blackCar,whiteCar]; 
}


function draw(){
  background("white");
  if(playerCount===4)
    game.update(1);
  if(gameState===1)
    game.play();
  if(gameState===2)
    game.end();
}


