import { Tile, TileType } from './Tile';
import { GAME_CONSTANTS } from '../constants';

export class World {
    private tiles: Tile[][] = [];
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.generateWorld();
    }

    private generateWorld(): void {
        for (let y = 0; y < this.height; y++) {
            this.tiles[y] = [];
            for (let x = 0; x < this.width; x++) {
                // Enkel høydegenerering (kan erstattes med Perlin noise senere)
                const height = Math.sin(x/5) * Math.cos(y/5) * 20 + 10;
                const type = this.determineType(height);
                this.tiles[y][x] = new Tile(type, x, y, height);
            }
        }
    }

    private determineType(height: number): TileType {
        if (height < 5) return TileType.WATER;
        if (height < 10) return TileType.SAND;
        if (height < 20) return TileType.GRASS;
        return TileType.STONE;
    }

    render(ctx: CanvasRenderingContext2D, camera: { x: number, y: number }): void {
        // Render tiles from back to front for proper overlap
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const tile = this.tiles[y][x];
                const isoX = (x - y) * 32 + ctx.canvas.width / 2 - camera.x;
                const isoY = (x + y) * 16 + ctx.canvas.height / 2 - camera.y;
                
                tile.render(ctx, isoX, isoY);
            }
        }
    }
}