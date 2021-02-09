var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e80c99de-6822-416d-9884-3eb6421ff12b"],"propsByKey":{"e80c99de-6822-416d-9884-3eb6421ff12b":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":4,"looping":false,"frameDelay":12,"version":"E4n5GId_To1CQ_Aq6pNhhy9kGexRUMhU","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/e80c99de-6822-416d-9884-3eb6421ff12b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create walls 
var wall1=createSprite(25,180,50,5);
wall1.shapeColor="silver";
var wall2=createSprite(25,220,50,5);
wall2.shapeColor="silver";
var wall3=createSprite(180,25,5,50);
wall3.shapeColor="silver";
var wall4=createSprite(220,25,5,50);
wall4.shapeColor="silver";
var wall5=createSprite(290,180,50,5);
wall5.shapeColor="silver";
var wall6=createSprite(290,220,50,5);
wall6.shapeColor="silver";
var wall7=createSprite(180,375,5,50);
wall7.shapeColor="silver";
var wall8=createSprite(220,375,5,50);
wall8.shapeColor="silver";
var wall9=createSprite(50,115,5,135);
wall9.shapeColor="silver";
var wall10=createSprite(115,50,135,5);
wall10.shapeColor="silver";
var wall11=createSprite(50,285,5,135);
wall11.shapeColor="silver";
var wall12=createSprite(115,350,135,5);
wall12.shapeColor="silver";
var wall13=createSprite(244,50,52,5);
wall13.shapeColor="silver";
var wall14=createSprite(267,115,5,130);
wall14.shapeColor="silver";
var wall15=createSprite(244,350,52,5);
wall15.shapeColor="silver";
var wall16=createSprite(267,285,5,130);
wall16.shapeColor="silver";
var wall17=createSprite(315,158,5,50);
wall17.shapeColor="silver";
var wall18=createSprite(315,243,5,50);
wall18.shapeColor="silver";
var wall19=createSprite(360,135.5,90,5);
wall19.shapeColor="silver";
var wall20=createSprite(360,265.5,90,5);
wall20.shapeColor="silver";

//make engine
var engine=createSprite(388,200,20,80);
engine.shapeColor="grey";

//make player
var player=createSprite(20,200,20,20);
player.shapeColor="white";

//make lasers
var laser1=createSprite(70,125,5,135);
laser1.shapeColor="red";
laser1.velocityX=3;
var laser2=createSprite(250,277,5,135);
laser2.shapeColor="red";
laser2.velocityX=3;



function draw() {
background("black");

//various fonts
textSize(20);
text("player",40,200);
textSize(20);
text("engine",310,200);
text("Fix The Engine",30,25);

player.velocityX=0;
player.velocityY=0;

//create control for player
if(keyDown("left")){
  player.velocityX=-5;
}
if(keyDown("right")){
  player.velocityX=5;
  }
if(keyDown("up")){
  player.velocityY=-5;
}
if(keyDown("down")){
  player.velocityY=5;
}

//make player trap
if(player.isTouching(laser1)||player.isTouching(laser2)){
  //do this
  player.x=20;
  player.y=200;
}


// create bounceoff
createEdgeSprites();
player.bounceOff(edges);
laser1.bounceOff(wall9);
laser1.bounceOff(wall14);
laser2.bounceOff(wall11);
laser2.bounceOff(wall16);
player.bounceOff(wall1);
player.bounceOff(wall2);
player.bounceOff(wall3);
player.bounceOff(wall4);
player.bounceOff(wall5);
player.bounceOff(wall6);
player.bounceOff(wall7);
player.bounceOff(wall8);
player.bounceOff(wall9);
player.bounceOff(wall10);
player.bounceOff(wall11);
player.bounceOff(wall12);
player.bounceOff(wall13);
player.bounceOff(wall14);
player.bounceOff(wall15);
player.bounceOff(wall16);
player.bounceOff(wall17);
player.bounceOff(wall18);
player.bounceOff(wall19);
player.bounceOff(wall20);

//win 
if(player.isTouching(engine)){
  stroke(0);
  fill("red");
  textSize(30);
  text("you win",120,200);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  player.setVelocity(0,0);
}
drawSprites();
    
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
