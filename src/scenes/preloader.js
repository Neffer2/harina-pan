export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        /* ANIMATIONS */
        this.load.spritesheet('player-iddle', './animaciones/Player-Idle-SpriteSheet.png', { frameWidth: 450, frameHeight: 651.6 });
        this.load.spritesheet('player-run', './animaciones/Player-Run-SpriteSheet.png', { frameWidth: 400, frameHeight: 800 });
        this.load.spritesheet('player-jump', './animaciones/Player-JUMP.png', { frameWidth: 650, frameHeight: 650 });
        this.load.spritesheet('player-frustated', './animaciones/Player-Frustrared-SpriteSheet.png', { frameWidth: 650, frameHeight: 650 });
        this.load.spritesheet('player-fall', './animaciones/Player-Fall-SpriteSheet.png', { frameWidth: 650, frameHeight: 650 });
        
        /* BUTTONS */
        this.load.image('left-btn', './botones/left.png');
        this.load.image('right-btn', './botones/right.png');
        this.load.image('jump-btn', './botones/jump.png');

        /* ELEMS */
        this.load.image('background', './elems/KITCHEN.png');
        this.load.image('floor', './elems/FloorTwo.png');
    }

    create ()
    {
        this.scene.start('Game');
    } 
}