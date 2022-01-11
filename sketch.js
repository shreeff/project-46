var player,playerImage
var coinGroup,coinImage;  
var bg, backgroundImage;
var train, trainImage
var score = 0;

function preload(){
playerImage = loadAnimation("images/player_2.png","images/player_3.png","images/player_4.png");
coinImage = loadImage("images/coins.png");
backgroundImage = loadImage("images/background.png");
trainImage = loadImage("images/train2.png");
}



function setup() 
{
  createCanvas(600,600);
 
  bg = createSprite(300,300);
  bg.addImage("background",backgroundImage);
  bg.scale = 1.5
  bg.velocityY = 1;
  train = createSprite(130,200);
  train.addImage("train", trainImage);
  train.scale = 1.5

  coinGroup = new Group();
   player = createSprite(300,300)
  player.addAnimation("player_running",playerImage)
   

}

function draw() 
{
background(1);

if(bg.y > 400){
bg.y = 300
}


// if(coinGroup.isTouching(player)){
//   collectCoins();
// }
player.isTouching(coinGroup, collectCoins);
drawSprites();
handleCoins();
text("collected coin: "+score,380,10);
}

function handleCoins()
{
  if (frameCount % 120 === 0) {
    for(var i = 0; i<5; i++){

   
var coin = createSprite(250,i*50);
coin.addImage(coinImage)
coin.velocityY = 2
coin.lifetime = 300;
coinGroup.add(coin)
  }
  }

}

function collectCoins(player,coin){
  coin.remove();
  score += 1;
  
} 