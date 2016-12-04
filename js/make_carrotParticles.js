var carrotEmitter;
function preloadParticle() {

    game.load.spritesheet('carrotP', '../assets/carrotParticle.png',10,5);


}

function createParticle() {
    carrotEmitter = game.add.emitter(0, 0, 100);
    carrotEmitter.makeParticles('carrotP',[0,1,2,3,4,5]);
    carrotEmitter.gravity = 400;
    carrotEmitter.minParticleScale = 0.5;
    carrotEmitter.maxParticleScale = 1;


}

function particleBurst(carrot) {
    carrotEmitter.x = carrot.x;
    carrotEmitter.y = carrot.y;
    carrotEmitter.start(true, 1000, null, 10);


}

function destroyEmitter() {

    carrotEmitter.destroy();

}
