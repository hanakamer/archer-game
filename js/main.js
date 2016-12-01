var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update  });

function preload(){
  shootPreload()
  playerPreload();
  snowPreload();
  snowmanPreload();

}
function create(){

  snowCreate();
  playerCreate();
  shootCreate()
  snowmanCreate();

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.backgroundColor = "#bbb1ff";

}
function update(){

  snowUpdate();
  playerUpdate();
  snowmanUpdate();
  game.physics.arcade.overlap(arrows, snowman, collisionHandler, null, this);
}
