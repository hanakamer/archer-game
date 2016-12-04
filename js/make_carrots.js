var firingTimer = 0;
function carrotPreload(){
  game.load.spritesheet('carrot','../assets/carrot.png',150,150);
}

function carrotCreate(){
  carrots = game.add.group();
  carrots.enableBody = true;
  carrots.physicsBodyType = Phaser.Physics.ARCADE;
  carrots.createMultiple(30, 'carrot');
  carrots.setAll('anchor.x', 0.5);
  carrots.setAll('anchor.y', 1);
  carrots.setAll('outOfBoundsKill', true);
  carrots.setAll('checkWorldBounds', true);
}

function snowmanFires(){
  snowmanBullet = carrots.getFirstExists(false);
  snowmanBullet.reset(snowman.body.x+10, snowman.body.y+80);
  game.physics.arcade.moveToObject(snowmanBullet,player,150);
  firingTimer = game.time.now + 2000;

}

function carrotUpdate(){

  if (game.time.now > firingTimer)
        {

            snowmanFires()
        }
}

function carrotHitsPlayer(player, carrot){
  carrot.kill();
  particleBurst(carrot)

}
