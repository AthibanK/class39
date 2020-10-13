class Player{
    constructor(){
        this.position = null;
        this.name = null;
        this.distance = 0;
    }
    update(){
        var playerIndex = "players/player" + playerCount;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    updateCount(count){
        database.ref("/").update({
        playerCount: count
        })
    }
    getCount(){
        
        var reference = database.ref("playerCount");
        reference.on("value",function(data){
            playerCount = data.val();
        })
    }
    getPlayerInfo(){
        var reference = database.ref("players");
        reference.on("value",function(data){
            allPlayers = data.val();
        })
    }
}