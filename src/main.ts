import { Game } from './game/Game';

window.addEventListener('load', () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const game = new Game(canvas);
    game.start();
});