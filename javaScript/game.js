class Game{
    constructor(){

    }
    getState(){
        var reference = database.ref("gameState");
        reference.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        var ref2 = database.ref("/");
        ref2.update({
        gameState: state
        })
    }
    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }
    play(){
        form.hide();
        textSize(15);
        text("Who is the best racer ?",75,200);
        Player.getPlayerInfo();
        var yPosition = 200;
        if(allPlayers!== undefined){
            for(var plyr in allPlayers){
                if(plyr==="player"+player.position)
                    fill("red");
                else
                    fill("black");   
                textSize(14);
                text(allPlayers[plyr].name +","+ allPlayers[plyr].distance,250,yPosition);
                yPosition+=15;
            }
        }
        if(keyIsDown(UP_ARROW) && player.position!== null){
            player.distance+=20;
            player.update();
         }
        
    }
}