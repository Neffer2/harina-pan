import { Game } from './scenes/game.js';

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    parent: 'game-container',
    scale: {
        mode: Phaser.Scale.FIT,
        fullscreenTarget: 'game-container',
    },
    scene: [
        Game
    ],
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true
        }
    }
};
 
export const game = new Phaser.Game(config);