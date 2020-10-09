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
            player = new player();
            player.getCount();
        }
    }
}