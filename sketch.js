var m,f ;



function setup() {
  createCanvas(1200,800);
  
  f = createSprite(600, 400, 50, 80);
  f.shapeColor = "green";

  m = createSprite(400, 200, 80, 30);
  m.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  m.x = World.mouseX;
  m.y = World.mouseY;



  if(m.x-f.x < f.width/2 + m.width/2
    && f.x -m.x < f.width/2 + m.width/2
    && m.y - f.y < f.height/2 + m.height/2
    && f.y - m.y < f.height/2 + m.height/2){
      f.shapeColor = "red";
      m.shapeColor = "red";
    }
    else{
      f.shapeColor ="green";
      m.shapeColor ="green";

    }


  drawSprites();
}