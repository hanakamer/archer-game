function playerPreload(){
  game.load.spritesheet('archer','../assets/archer.png',85,110);
}

function playerCreate(){
  player = game.add.sprite(32, game.world.height - 100, 'archer');

  player.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 250;
  player.body.collideWorldBounds = true;
  player.animations.add('walk',[0, 1, 2, 3, 4, 5], 8, true);
  player.animations.add('shoot', [7, 8, 9], 8, true)
}

function playerUpdate(){
  cursors = game.input.keyboard.createCursorKeys();
  shootKey = game.input.keyboard.addKey(Phaser.Keyboard.X);
  player.body.velocity.x = 0;

  if(cursors.left.isDown){
    player.scale.x = -1 ;
		player.body.velocity.x = -150;
		player.animations.play('walk');
	}else if (cursors.right.isDown){
    player.scale.x = 1;
		player.body.velocity.x = 150;
		player.animations.play('walk');
	}else if(shootKey.isDown){
    player.animations.play('shoot');
    fire();
  }else {
		player.animations.stop();
		player.frame = 5;
	}
}
