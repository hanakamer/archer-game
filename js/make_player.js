function playerPreload(){
  game.load.spritesheet('archer','../assets/archer.png',85,110);
}

function playerCreate(){
  player = game.add.sprite(85, game.world.height - 100, 'archer');

  player.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 250;
  player.body.collideWorldBounds = true;
  player.animations.add('walk',[0, 1, 2, 3, 4, 5], 8, true);
  player.animations.add('shoot', [6, 7, 8], 8, true);
  player.animations.add('down', [9], 8, true)
}

function playerUpdate(){
  cursors = game.input.keyboard.createCursorKeys();
  shootKey = game.input.keyboard.addKey(Phaser.Keyboard.X);
  player.body.velocity.x = 0;
  player.scale.y = 1;
  if(cursors.left.isDown){
    player.scale.x = -1 ;
		player.body.velocity.x = -150;
		player.animations.play('walk');
	}else if (cursors.right.isDown){
    player.scale.x = 1;
		player.body.velocity.x = 150 ;
		player.animations.play('walk');
	}else if (cursors.down.isDown){
    player.scale.y = 0.9;
		player.body.velocity.x = 0 ;
		player.animations.play('down');
	}
  else if(shootKey.isDown){
		player.body.velocity.x = 0 ;
    player.animations.play('shoot');
    fire();
  }else {
		player.animations.stop();
		player.frame = 5;
	}
}
