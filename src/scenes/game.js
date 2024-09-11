let width, height, mContext, floor, player, elemsFall = [], elemsKeys = ['elem1', 'elem2'];
let goRight = false, goLeft = false;
let leftBtn, rightBtn;
const AREPAVELOCITY = 450;

export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        mContext = this;
        leftBtn.on('pointerdown', function(){
            leftBtn.setScale(1.3);
            goLeft = true;
        });

        leftBtn.on('pointerup', function(){
            goLeft = false;
        });

        leftBtn.on('pointerout', () => {            
            leftBtn.setScale(1.5); 
        });

        // --------------------------------------

        rightBtn.on('pointerdown', function(){
            rightBtn.setScale(1.3);
            goRight = true;
        });

        rightBtn.on('pointerup', function(){
            goRight = false;
        });

        rightBtn.on('pointerout', () => {            
            rightBtn.setScale(1.5); 
        });

        this.physics.world.on('worldstep', () => {
            player.setAngularVelocity(
                Phaser.Math.RadToDeg(player.body.velocity.x / player.body.halfWidth)
            );
        });

        // Elems Fall
        setInterval(() => {
            let elem = this.physics.add.sprite(Phaser.Math.Between(20, (width - 20)), 0, elemsKeys[this.getRandomNumber(0, elemsKeys.length)]).setScale(.6);
            // this.physics.world.on('worldstep', () => {
            //     elem.setAngularVelocity(
            //         Phaser.Math.RadToDeg(elem.body.velocity.y / 225)   
            //     );
            // });
    
            elemsFall.push(elem);
        }, 1000);

        // Colliders
        this.physics.add.collider(player, floor);
        this.physics.add.overlap(player, elemsFall, this.hitElem, null, this);
    }

    update(){
        if (goLeft){
            player.setVelocityX(-AREPAVELOCITY);
        }else if (goRight){
            player.setVelocityX(AREPAVELOCITY);
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
        floor.create(15, (height - 170), '').setSize(width, 20).setOffset(0, 20).setAlpha(0.001);

        leftBtn = this.add.image(250, height - 72, 'left-btn').setScale(1.5).setInteractive();
        rightBtn = this.add.image(leftBtn.x + 200, height - 72, 'right-btn').setScale(1.5).setInteractive();

        player = this.physics.add.sprite((width/2), height - 400, 'player', 0).setScale(.5);
        player.setSize(270, 260, true);
        player.setCollideWorldBounds(true);
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    hitElem(player, elem){
        elem.destroy();
    }
}   