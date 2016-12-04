function shootPreload(){

  game.load.image('arrow', '../assets/arrow.png')


}
var arrows;
var fireRate = 200;
var nextFire = 0;

function shootCreate(){

  arrows = game.add.group();
  arrows.enableBody = true;
  arrows.physicsBodyType =Phaser.Physics.ARCADE;

  arrows.createMultiple(150,'arrow');

  arrows.setAll('checkWorldBounds', true);
  arrows.setAll('outOfBoundsKill', true);

}

function fire(){
  if(game.time.now > nextFire && arrows.countDead() > 0){
    nextFire = game.time.now + fireRate;
    var arrow = arrows.getFirstDead();
    arrow.reset(player.x+16,player.y-19);
    arrow.body.velocity.x = 300 * (player.scale.x);
    arrow.scale.x = player.scale.x
  }

}

function collisionHandler (snowman, arrow) {
    arrow.kill();
    flash();

}
