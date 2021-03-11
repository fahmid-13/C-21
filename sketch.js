var canvas;
var music;
var surface_1, surface_2, surface_3, surface_4;
var box;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface_1 = createSprite(50, 100, 35, 10);
    surface_1.shapeColor = "blue";

    surface_2 = createSprite(250, 100, 35, 10);
    surface_2.shapeColor = "red";

    surface_3 = createSprite(370, 100, 35, 10);
    surface_3.shapeColor = "orange";

    surface_4 = createSprite(540, 100, 35, 10);
    surface_4.shapeColor = "green";
    
    //create box sprite and give velocity
    box = createSprite(random(20, 750), 300, 10, 10);
    box.shapeColor = "white";
    box.velocityY = 3;

    box.bounceOff(topEdge);
    box.bounceOff(bottomEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(rightEdge);
}

function draw() {
    background = "black";
    
    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if (surface_1.isTouching(box) && box.bounceOff(surface_1)){
        box.shapeColor = "blue";
    }

    if (surface_2.isTouching(box) && box.bounceOff(surface_2)){
        box.shapeColor = "red";
    }

    if (surface_3.isTouching(box) && box.bounceOff(surface_3)){
        box.shapeColor = "orange";
    }

    if (surface_4.isTouching(box) && box.bounceOff(surface_4)){
        box.shapeColor = "green";
    }

    surface_1.display();
    surface_2.display();
    surface_3.display();
    surface_4.display();

    box.display();
}
