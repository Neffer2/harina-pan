let width, height, mContext, floor, player;
let goRight = false, goLeft = false, jump = false;
let leftBtn, rightBtn, jumpBtn;

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

        jumpBtn.on('pointerdown', function(){
            jump = true;
        });

        this.physics.add.collider(player, floor);
    }

    update(){
        if (goLeft){
            player.setVelocityX(-200);
            player.anims.play('player-run', true);
            player.flipX = false;
        }else if (goRight){
            player.setVelocityX(+200);
            player.anims.play('player-run', true);
            player.flipX = true;
        }else if (!jump){
            player.setVelocityX(0);
            player.anims.play('player-iddle', true);
        }

        if (jump && player.body.touching.down){
            player.setVelocityY(-600);
            player.anims.play('player-jump', true);
        }else {
            jump = false;
        }

    }

    init(){
        width = this.game.config.width;
        height = this.game.config.height;
        
        floor = this.physics.add.staticGroup();
        floor.create((width/2), (height - 150), 'floor').setScale(.5, .55).setSize(0, 50).setOffset(0, 100);
        
        this.add.image((width/2), 0, 'background').setScale(.97).setOrigin(0.5, 0);

        leftBtn = this.add.image(160, height - 90, 'left-btn').setScale(1).setInteractive();
        rightBtn = this.add.image(leftBtn.x + 200, height - 90, 'right-btn').setScale(1).setInteractive();
        jumpBtn = this.add.image(rightBtn.x + 200, height - 90, 'jump-btn').setScale(1).setInteractive();

        player = this.physics.add.sprite((width/2), height - 400, 'player-iddle', 0).setScale(.3);
        player.setSize(250, 480, false).setOffset(75, 150);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'player-iddle',
            frames: this.anims.generateFrameNumbers('player-iddle', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'player-run',
            frames: this.anims.generateFrameNumbers('player-run', { start: 0, end: 26 }),
            frameRate: 25,
            repeat: -1
        });

        this.anims.create({
            key: 'player-jump',
            frames: this.anims.generateFrameNumbers('player-jump', { start: 0, end: 0 }),
            frameRate: 25,
            repeat: -1
        });
    }
}  