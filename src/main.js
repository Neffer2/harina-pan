import { Boot } from './scenes/boot.js';
import { Preloader } from './scenes/preloader.js';
import { Menu } from './scenes/menu.js';
import { Game } from './scenes/game.js';
import { GameOver } from './scenes/gameOver.js';

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    parent: 'game-container',
    scale: { 
        mode: Phaser.Scale.FIT,
        fullscreenTarget: 'game-container',
    },
    scene: [Boot, Preloader, Menu, Game, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            // debug: true
        }
    },
    backgroundColor: '#fff'
};
 
export const game = new Phaser.Game(config);