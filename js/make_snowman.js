function snowmanPreload(){
  game.load.spritesheet('snowman','../assets/snowman.png',150,150);
}

function snowmanCreate(){
  snowman = game.add.sprite(550, game.world.height - 100, 'snowman');

  game.physics.arcade.enable(snowman);
  snowman.body.bounce.y = 0.1;
  snowman.body.gravity.y = 550;
  snowman.body.collideWorldBounds = true;
  snowman.animations.add('stay',[0, 1, 2, 3, 4, 5], 8, true);
  snowman.animations.add('shoot', [6, 7], 8, true);
  snowman.animations.add('flash', [8, 9, 10,8, 9, 10,8, 9, 10], 80, true)
}

function snowmanUpdate(){

  snowman.animations.play('stay');
  snowman.tint = 0xffffff;
}
function tweenTint(obj, startColor, endColor, time = 250, callback = null) {
        if (obj) {
            let colorBlend = { step: 0 };
            let colorTween = this.game.add.tween(colorBlend).to({ step: 100 }, time);
            colorTween.onUpdateCallback(() => {
                obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
            });
            obj.tint = startColor;
            if (callback) {
                colorTween.onComplete.add(() => {
                    callback();
                });
            }
            colorTween.start();
        }
    }

function flash(){
  for (var i = 0; i < 45; i++)
    {
      tweenTint(snowman, Math.random() * 0xffffff, Math.random() * 0xffffff, 100);
    }

}
