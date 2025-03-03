enum GameState {
    STOPPED,
    RUNNING,
    PAUSED
}

export abstract class GameEngine {
    private animationFrameId: number | null = null;
    private lastTime: number = 0;
    private state: GameState = GameState.STOPPED;
    private accumulator: number = 0;

    start(): void {
        if (this.state !== GameState.STOPPED) {
            return;
        }
        this.state = GameState.RUNNING;
        this.lastTime = performance.now();
        this.accumulator = 0;
        this.gameLoop();
    }

    stop(): void {
        if (this.state === GameState.STOPPED) {
            return;
        }
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.state = GameState.STOPPED;
        this.accumulator = 0;
    }

    pause(): void {
        if (this.state !== GameState.RUNNING) {
            return;
        }
        this.state = GameState.PAUSED;
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    resume(): void {
        if (this.state !== GameState.PAUSED) {
            return;
        }
        this.state = GameState.RUNNING;
        this.lastTime = performance.now();
        this.gameLoop();
    }

    private gameLoop = (): void => {
        if (this.state !== GameState.RUNNING) {
            return;
        }

        const currentTime = performance.now();
        const deltaTime = Math.min(currentTime - this.lastTime, 1000/30); // Cap at 30 FPS
        this.lastTime = currentTime;

        try {
            this.update(deltaTime);
            this.render();
        } catch (error) {
            console.error('Error in game loop:', error);
            this.stop();
            return;
        }

        this.animationFrameId = requestAnimationFrame(this.gameLoop);
    };

    protected abstract update(deltaTime: number): void;
    protected abstract render(): void;
}