let width, height, mContext, floor, player;
let goRight = false, goLeft = false, jump = false;
let leftBtn, rightBtn, pauseBtn;

export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        mContext = this;
        leftBtn.on('pointerdown', function(){
            goLeft = true;
        });

        leftBtn.on('pointerup', function(){
            goLeft = false;
        });

        rightBtn.on('pointerdown', function(){
            goRight = true;
        });

        rightBtn.on('pointerup', function(){
            goRight = false;
        });

        this.physics.add.collider(player, floor);
    }

    update(){
        if (goLeft){
            player.setVelocityX(-200);
            player.flipX = false;
        }else if (goRight){
            player.setVelocityX(+200);
            player.flipX = true;
        }else {
            player.setVelocityX(0);
        }

        // if (jump && player.body.touching.down){
        //     player.setVelocityY(-600);
        //     player.anims.play('player-jump', true);
        // }else {
        //     jump = false;
        // }

    }

    init(){
        width = this.game.config.width;
        height = this.game.config.height;
        
        this.add.image(0, 0, 'background').setOrigin(0);
        floor = this.physics.add.staticGroup();
        floor.create(15, (height - 150), '').setSize(width, 20).setOffset(0, 20).setAlpha(0.001);;

        leftBtn = this.add.image(160, height - 62, 'left-btn').setScale(1.2).setInteractive();
        pauseBtn = this.add.image(leftBtn.x + 200, height - 62, 'pause-btn').setScale(1.2).setInteractive();
        rightBtn = this.add.image(pauseBtn.x + 200, height - 62, 'right-btn').setScale(1.2).setInteractive();

        player = this.physics.add.sprite((width/2), height - 400, 'player-iddle', 0).setScale(.3);
        player.setSize(250, 480, false).setOffset(75, 150);
        player.setCollideWorldBounds(true);
    }
}   