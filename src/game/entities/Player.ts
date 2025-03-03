export class Player {
    private x: number = 0;
    private y: number = 0;
    private speed: number = 200; // pixels per second
    private size: number = 32;
    private health: number = 100;
    private hunger: number = 100;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update(deltaTime: number, keys: Set<string>): void {
        // Movement
        if (keys.has('KeyW')) this.y -= this.speed * (deltaTime / 1000);
        if (keys.has('KeyS')) this.y += this.speed * (deltaTime / 1000);
        if (keys.has('KeyA')) this.x -= this.speed * (deltaTime / 1000);
        if (keys.has('KeyD')) this.x += this.speed * (deltaTime / 1000);

        // Hunger system
        this.hunger -= 1 * (deltaTime / 1000); // Decrease hunger over time
        if (this.hunger <= 0) {
            this.health -= 5 * (deltaTime / 1000); // Take damage when starving
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    getPosition(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }
}