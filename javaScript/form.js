class Form{
    constructor(){

    }
 display(){
     var title = createElement("h2");
     title.html("Race Car Game");
     title.position(100,100);

     var input = createInput("Enter Name");
     input.position(50,200);

     var button = createButton("Click To Play");
     button.position(50,275);
     var greeting = createElement("h3");
        var greeting1 = createElement("h2"); 
     button.mousePressed(function(){
         input.hide();
         button.hide();

         var name = input.value();

         playerCount = playerCount + 1;
         greeting.html("Are You The Greatest Racer?");
         greeting1.html(name);
         greeting.position(200,150);
         greeting1.position(50,100);
     })
  }   
}