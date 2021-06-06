var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var blockHeight = 30;
var blockWidth = 30;

var player_object = "";
var block_object = "";





function playerUpdate(){
   fabric.Image.fromURL("player.png", function(Img){
       player_object = Img;
       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set({
           left: player_x,
           top: player_y
       });

       canvas.add(player_object);
   }); 
}


function blockUpdate(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block_object = Img;
        block_object.scaleToWidth(blockWidth);
        block_object.scaleToHeight(blockHeight);
        block_object.set({
           left: player_x,
           top: player_y
       });

       canvas.add(block_object);
    })
}

window.addEventListener("keydown", placeBlock);

function placeBlock(e){
    var keyPressed = e.keyCode;

    if(e.shiftKey && keyPressed == "80"){
        console.log(keyPressed);
        blockHeight += 10;
        blockWidth += 10;
        document.getElementById("width").innerHTML="Current Width = " + blockWidth;
        document.getElementById("height").innerHTML="Current Height = " + blockHeight;
    }
    if(e.shiftKey && keyPressed == "77"){
        console.log(keyPressed);
        blockHeight -= 10;
        blockWidth -= 10;
        document.getElementById("width").innerHTML="Current Width = " + blockWidth;
        document.getElementById("height").innerHTML="Current Height = " + blockHeight;
    }
    if(keyPressed == "84"){
        blockUpdate("trunk.jpg");
        console.log(keyPressed);
    }
    if(keyPressed == "68"){
        blockUpdate("dark_green.png");
        console.log(keyPressed);
    }
    if(keyPressed == "76"){
        blockUpdate("light_green.png");
        console.log(keyPressed);
    }
    if(keyPressed == "71"){
        blockUpdate("ground.png");
        console.log(keyPressed);
    }
    if(keyPressed == "87"){
        blockUpdate("wall.jpg");
        console.log(keyPressed);
    }
    if(keyPressed == "89"){
        blockUpdate("yellow_wall.png");
        console.log(keyPressed);
    }
    if(keyPressed == "82"){
        blockUpdate("roof.jpg");
        console.log(keyPressed);
    }
    if(keyPressed == "67"){
        blockUpdate("cloud.jpg");
        console.log(keyPressed);
    }
    if(keyPressed == "85"){
        blockUpdate("unique.png");
        console.log(keyPressed);
    }
    if(keyPressed == "38"){
        
        player_x = player_x;
        player_y -= blockHeight;
        canvas.remove(player_object);
        playerUpdate();
        console.log(keyPressed);
    }
    if(keyPressed == "37"){
        
        player_x -= blockWidth;
        player_y = player_y;
        canvas.remove(player_object);
        playerUpdate();
        console.log(keyPressed);
    }
    if(keyPressed == "40"){
        
        player_x = player_x;
        player_y += blockHeight;
        canvas.remove(player_object);
        playerUpdate();
        console.log(keyPressed);
    }
    if(keyPressed == "39"){
        
        player_x += blockWidth;
        player_y = player_y;
        canvas.remove(player_object);
        playerUpdate();
        console.log(keyPressed);
    }
}