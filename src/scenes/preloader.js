export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        /* ANIMATIONS */
        
        
        /* BUTTONS */
        this.load.image('left-btn', './botones/left.png');
        this.load.image('right-btn', './botones/right.png');
        this.load.image('pause-btn', './botones/pause.png');
        this.load.image('resume-btn', './botones/resume.png');

        /* ELEMS */
        this.load.image('background', './elems/KITCHEN.png');
        this.load.image('floor', './elems/FloorTwo.png');
    }

    create ()
    {
        this.scene.start('Game');
    } 
}