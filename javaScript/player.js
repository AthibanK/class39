class Player{
    constructor(){
        this.position = null;
        this.name = null;
        this.distance = 0;
    }
    update(){
        var playerIndex = "players/player" + this.position;
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
    static getPlayerInfo(){
        var reference = database.ref("players");
        reference.on("value",(data) => {
            allPlayers = data.val();
        })
    }
}