import { GameEngine } from '../engine/GameEngine';
import { Player } from './entities/Player';
import { TimeSystem } from './systems/TimeSystem';
import { World } from './world/World';
import { GAME_CONSTANTS } from './constants';

export class Game extends GameEngine {
    private ctx: CanvasRenderingContext2D;
    private player: Player;
    private keys: Set<string> = new Set();
    private timeSystem: TimeSystem = new TimeSystem();
    private world: World;

    constructor(private canvas: HTMLCanvasElement) {
        super();
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('Could not get 2D context');
        }
        this.ctx = context;
        
        // Create player at center of screen
        this.player = new Player(
            canvas.width / 2,
            canvas.height / 2
        );

        // Setup input handlers
        window.addEventListener('keydown', (e) => this.keys.add(e.code));
        window.addEventListener('keyup', (e) => this.keys.delete(e.code));

        this.world = new World(32, 32); // 32x32 tiles verden
    }

    protected update(deltaTime: number): void {
        this.timeSystem.update(deltaTime);
        this.player.update(deltaTime, this.keys);
    }

    protected render(): void {
        // Clear the canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Calculate camera position (centered on player)
        const camera = {
            x: this.player.getPosition().x,
            y: this.player.getPosition().y
        };
        
        // Render world with camera offset
        this.world.render(this.ctx, camera);
        
        // Render player at center of screen
        this.player.render(this.ctx);

        // Apply day/night overlay
        this.renderDayNightCycle();

        // Render HUD
        this.renderHUD();
    }

    private renderDayNightCycle(): void {
        const darkness = this.timeSystem.getDarknessLevel();
        this.ctx.fillStyle = `rgba(0, 0, 40, ${darkness * 0.7})`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private renderHUD(): void {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px Arial';
        this.ctx.fillText('WASD to move', 10, 30);
        this.ctx.fillText(`Time: ${Math.floor(this.timeSystem.getDarknessLevel() * 100)}%`, 10, 60);
    }
}