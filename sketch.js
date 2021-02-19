const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var boy;
var rain = [];
var maxDrops = 100;


function preload(){
    ThundImg1 = loadImage("thunderbolt/1.png");
    ThundImg2 = loadImage("thunderbolt/2.png");
    ThundImg3 = loadImage("thunderbolt/3.png");
    ThundImg4 = loadImage("thunderbolt/4.png");
}

function setup() {
    var canvas = createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;

    //Makes boy with unbrella
    boy = new Umbrella(397,470);

    //Makes the individual drops
    for(var i=0; i<maxDrops; i++) {
        rain.push(new Drops(random(50,750), random(0,150)))
        //console.log(rain[i]);
    }
  
}

function draw(){
    background("black");
    Engine.update(engine);

    //shows boy with unbrella
    boy.display();
    
    //Shows the individual drops
    for(var i=0; i<maxDrops; i++) {
        rain[i].display();
        rain[i].respawn();
    }

    //Makes thunder
    Thunderbolt();
} 

function Thunderbolt() {
    thunder = Math.round(random(1,4))

    if(frameCount %80 === 0) {

        switch(thunder) {

            case 1: image(ThundImg1, random(100,600),random(-10,35),300,300);
            break;
            case 2: image(ThundImg2, random(100,600),random(-10,35),300,300);
            break;
            case 3: image(ThundImg3, random(100,600),random(-10,35),300,300);
            break;
            case 4: image(ThundImg4, random(100,600),random(-10,35),300,300);
            break;
            default: break;
        }
    }
}
