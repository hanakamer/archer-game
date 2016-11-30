var max = 0;
var front_emitter;
var mid_emitter;
var back_emitter;
var update_interval = 4 *60;
var i = 0;

function changeWindDirection() {

    var multi = Math.floor((max + 200) / 4),
        frag = (Math.floor(Math.random() * 100) - multi);
    max = max + frag;

    if (max > 200) max = 150;
    if (max < -200) max = -150;

    setXSpeed(back_emitter, max);
    setXSpeed(mid_emitter, max);

}

function setXSpeed(emitter, max) {

  emitter.setXSpeed(max - 20, max);
  emitter.forEachAlive(setParticleXSpeed, this, max);

}

function setParticleXSpeed(particle, max) {

  particle.body.velocity.x = max - Math.floor(Math.random() * 30);

}
function snowPreload(){

  game.load.spritesheet('snowS', '../assets/snowS.png',19,19);
  game.load.spritesheet('snowM', '../assets/snowM.png',38,38);
  game.load.spritesheet('snowL', '../assets/snowL.png',76,76);

}
function snowCreate(){

  back_emitter = game.add.emitter(game.world.centerX, -32, 600);
  back_emitter.makeParticles('snowS',[0, 1, 2, 3]);
  back_emitter.maxParticles = 1;
  back_emitter.minParticles = 0.3;
  back_emitter.setYSpeed(20,100);
  back_emitter.gravity = 0;
  back_emitter.width = game.world.width * 1.5;
  back_emitter.minRotation = 0;
  back_emitter.maxRotation = 40;

  mid_emitter = game.add.emitter(game.world.centerX, -32, 250);
  mid_emitter.makeParticles('snowM', [0, 1, 2, 3, 4, 5, 6]);
  mid_emitter.maxParticleScale = 1;
  mid_emitter.minParticleScale = 0.3;
  mid_emitter.setYSpeed(50, 150);
  mid_emitter.gravity = 0;
  mid_emitter.width = game.world.width * 1.5;
  mid_emitter.minRotation = 0;
  mid_emitter.maxRotation = 40;

  front_emitter = game.add.emitter(game.world.centerX, -32, 50);
  front_emitter.makeParticles('snowL', [ 4, 5, 6]);
  front_emitter.maxParticleScale = 1;
  front_emitter.minParticleScale = 0.3;
  front_emitter.setYSpeed(100, 200);
  front_emitter.gravity = 0;
  front_emitter.width = game.world.width * 1.5;
  front_emitter.minRotation = 0;
  front_emitter.maxRotation = 40;

  changeWindDirection();

  back_emitter.start(false, 14000, 20);
  mid_emitter.start(false, 12000, 40);

}

function snowUpdate(){
  i++;

    if (i === update_interval)
    {
        changeWindDirection();
        update_interval = Math.floor(Math.random() * 20) * 60; // 0 - 20sec @ 60fps
        i = 0;
    }

}
