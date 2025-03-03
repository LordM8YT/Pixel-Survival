export enum TileType {
    GRASS,
    WATER,
    SAND,
    STONE
}

export class Tile {
    constructor(
        public readonly type: TileType,
        public readonly x: number,
        public readonly y: number,
        public readonly height: number = 0
    ) {}

    render(ctx: CanvasRenderingContext2D, screenX: number, screenY: number): void {
        const colors = {
            [TileType.GRASS]: ['#4CAF50', '#388E3C', '#2E7D32'],
            [TileType.WATER]: ['#2196F3', '#1976D2', '#1565C0'],
            [TileType.SAND]: ['#FFF59D', '#FFF176', '#FFEE58'],
            [TileType.STONE]: ['#9E9E9E', '#757575', '#616161']
        };

        const tileColors = colors[this.type];
        const TILE_WIDTH = 64;
        const TILE_HEIGHT = 32;
        const WALL_HEIGHT = this.height;

        // Draw tile top face
        ctx.beginPath();
        ctx.moveTo(screenX, screenY - WALL_HEIGHT);
        ctx.lineTo(screenX + TILE_WIDTH/2, screenY + TILE_HEIGHT/2 - WALL_HEIGHT);
        ctx.lineTo(screenX, screenY + TILE_HEIGHT - WALL_HEIGHT);
        ctx.lineTo(screenX - TILE_WIDTH/2, screenY + TILE_HEIGHT/2 - WALL_HEIGHT);
        ctx.closePath();
        ctx.fillStyle = tileColors[0];
        ctx.fill();
        ctx.stroke();

        // Draw right face (only if height > 0)
        if (WALL_HEIGHT > 0) {
            ctx.beginPath();
            ctx.moveTo(screenX + TILE_WIDTH/2, screenY + TILE_HEIGHT/2 - WALL_HEIGHT);
            ctx.lineTo(screenX, screenY + TILE_HEIGHT - WALL_HEIGHT);
            ctx.lineTo(screenX, screenY + TILE_HEIGHT);
            ctx.lineTo(screenX + TILE_WIDTH/2, screenY + TILE_HEIGHT/2);
            ctx.closePath();
            ctx.fillStyle = tileColors[1];
            ctx.fill();
            ctx.stroke();

            // Draw left face (only if height > 0)
            ctx.beginPath();
            ctx.moveTo(screenX - TILE_WIDTH/2, screenY + TILE_HEIGHT/2 - WALL_HEIGHT);
            ctx.lineTo(screenX, screenY + TILE_HEIGHT - WALL_HEIGHT);
            ctx.lineTo(screenX, screenY + TILE_HEIGHT);
            ctx.lineTo(screenX - TILE_WIDTH/2, screenY + TILE_HEIGHT/2);
            ctx.closePath();
            ctx.fillStyle = tileColors[2];
            ctx.fill();
            ctx.stroke();
        }
    }
}