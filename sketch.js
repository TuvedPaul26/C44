var Thund3r, tree, tree2, tree3, bush, bush2, bush3, item1, item2, item3, ground, obstacle, obstacle2, fakeItem, timer = 0;
var flag = 0, level;

function setup() {
  createCanvas(1200,500);
  Thund3r = createSprite(60,250,50,50);
  Thund3r.shapeColor = "black";
  tree = createSprite(350,100,100,100);
  tree.shapeColor = "green";
  tree2 = createSprite(950,100,100,100);
  tree2.shapeColor = "green";
  tree3 = createSprite(650,425,100,100);
  tree3.shapeColor = "green";
  bush = createSprite(650,100,470,50);
  bush.shapeColor = "green";
  bush2 = createSprite(350,425,470,50);
  bush2.shapeColor = "green";
  bush3 = createSprite(950,425,470,50);
  bush3.shapeColor = "green";
  item1 = createSprite(0,0,20,20);
  item1.shapeColor = "purple";
  item2 = createSprite(30,425,20,20);
  item2.shapeColor = "red";
  item3 = createSprite(40,420,20,20);
  item3.shapeColor = "gold";
  fakeItem = createSprite(1205,250,20,20);
  fakeItem.shapeColor = "purple";
}

function draw() {
  timer = timer + Math.round(getFrameRate()/60)
  console.log(timer);
  background("red");
  fill("black");
  textSize(30);
  text("Timer : " + timer, 1000, 50);
  if(keyDown ("w")){
Thund3r.y = Thund3r.y - 7
}  
  if(keyDown ("s")){
Thund3r.y = Thund3r.y + 7
} 
  if(keyDown ("a")){
Thund3r.x = Thund3r.x - 7
}  
  if(keyDown ("d")){
Thund3r.x = Thund3r.x + 7
} 
if (timer >= 1800){
  text("Game Over", 570, 240);
}
if (Thund3r.isTouching(fakeItem)){
  text("You Found The FAKE Item. Find The Real One..", 300, 240);
  flag = 1;
}
if (flag === 1){
  timer = timer + 2;
}
if (Thund3r.isTouching(item1)){

}
  drawSprites();
}